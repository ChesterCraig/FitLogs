using System;
using System.ComponentModel.DataAnnotations;
using FitnessAPI.Models;

namespace FitnessAPI.Models
{
    public class Entry
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public String Summary { get; set; }
        public String Activity { get; set; }

        //Parent relation
        public User User { get; set; }
        public int UserId { get; set; }
    }
}
