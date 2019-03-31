using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace FitnessAPI.Dto
{
    public class UserNoteDto
    {
        public string Contents { get; set; }
    }
}


