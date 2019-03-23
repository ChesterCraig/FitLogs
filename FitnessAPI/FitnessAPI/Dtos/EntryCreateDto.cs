using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace FitnessAPI.Dto
{

    // Simplified info for minimal info that can be provided for initial creation of an user 
    public class EntryCreateDto
    {
        public DateTime Date { get; set; }

        public String Summary { get; set; }

        public String Activity { get; set; }
    }
}


