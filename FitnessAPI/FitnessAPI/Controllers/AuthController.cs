using FitnessAPI.Data;
using FitnessAPI.Dto;
using FitnessAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Fitness.Controllers
{
    [Route("api/[controller]")]
    [ApiController] // <--- DOES MODEL STATE CHECK FOR US
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepository;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository authRepository, IConfiguration config) 
        {
            _config = config; ;
            _authRepository = authRepository;
        }


        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegistrationDto userRegDto)
        {
            userRegDto.Username = userRegDto.Username.ToLower();


            if (await _authRepository.UserExists(userRegDto.Username))
            {
                return BadRequest("Username alredy exists");
            }


            var userToCreate = new User
            {
                Username = userRegDto.Username
            };

            var createdUser = await _authRepository.Register(userToCreate, userRegDto.Password);

            return StatusCode(201);
            //return CreatedAtRoute()

        }


        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginDto userLoginDto)
        {

            // check/validate user
            var userFromRepo = await _authRepository.Login(userLoginDto.Username.ToLower(), userLoginDto.Password);

            if (userFromRepo == null)
            {
                return Unauthorized();
            }


            // Start building token
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = credentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });
        }
    }
}
