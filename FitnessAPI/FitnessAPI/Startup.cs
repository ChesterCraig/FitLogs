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
            services.AddDbContext<FitnessContext>(opt => opt.UseInMemoryDatabase("FitnessDb"));
            services.AddCors(); // Enable Cross origin for local testing.. requsts coming from same addres
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);


            // Add Auth repository as a scoped service. Scoped for session of each request.
            services.AddScoped<IAuthRepository, AuthRepository>();


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

            //services.AddIdentity<User, IdentityRole>()
            //.AddEntityFrameworkStores<FitnessContext>()
            //.AddDefaultTokenProviders();




            //services.AddDefaultIdentity<User>()
            //       .AddEntityFrameworkStores<FitnessContext>();


            //services.Configure<IdentityOptions>(options =>
            //{
            //    // Security settings.. e.g. password length/complexity

            //    options.User.RequireUniqueEmail = true;

            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder =>
                builder
                    .AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod());
                
            app.UseHttpsRedirection();

          

            // this will serve wwwroot/index.html when path is '/'
            app.UseDefaultFiles();

            // this will serve js, css, images etc.
            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseMvc();
        }
    }
}
