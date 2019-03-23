using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FitnessAPI.Models
{
    public class Movement
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public int WorkoutId { get; set; }

        //[ForeignKey("WorkoutForeignKey")]
        //public Workout Workout { get; set; }

        public string Name { get; set; }

        public ICollection<Exercise> Exercises { get; set; }
    }
}