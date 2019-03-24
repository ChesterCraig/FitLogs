using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitnessAPI.Data;
using FitnessAPI.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace FitnessAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Setup databse service
            //services.AddDbContext<FitnessContext>(opt => opt.UseInMemoryDatabase("FitnessDb"));

            // Use SQL Database if in Azure, otherwise, use SQLite
            if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Production")
            {
                services.AddDbContext<FitnessContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

                // Perform any pending migrations to keep out db up to date
                services.BuildServiceProvider().GetService<FitnessContext>().Database.Migrate();
            }
            else
                services.AddDbContext<FitnessContext>(opt => opt.UseMySql(Configuration.GetConnectionString("LocalDevConnection")));

            // include cors service for enabling cross origin requests
            services.AddCors(); 

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // Add Auth repository as a scoped service. Scoped for session of each request.
            services.AddScoped<IAuthRepository, AuthRepository>();

            // Define authentication mechanism
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
                        ValidateIssuer = false,
                        ValidateAudience = false
                   };
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Enable cross origin requests - required when developing and serving static files on seperate port to api
            app.UseCors(builder =>
                builder
                    .AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod());

            // Use Https  
            app.UseHttpsRedirection();

            // Serve wwwroot/index.html when path is '/'
            app.UseDefaultFiles();

            // Serve sttic js, css, images etc.
            app.UseStaticFiles();

            // Use JWT token authentication
            app.UseAuthentication();

            // For any unknown routes, return the index page as angular will be parsing url for internal routes.
            app.UseMvc(routes => {
                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Fallback", action = "index" }
                    );
            });
        }
    }
}
