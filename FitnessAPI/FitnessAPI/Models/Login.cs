﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace FitnessAPI.Models
{
    public class RegisterUser
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}

