using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace FitnessAPI.Models
{
    public class FitnessContext : DbContext
    {

        public FitnessContext(DbContextOptions<FitnessContext> options) : base(options) 
        { 
        }


        // DbSets
        //public DbSet<Workout> Workouts { get; set; }
        //public DbSet<Movement> Movements { get; set; }
        //public DbSet<Exercise> Exercises { get; set; }

        public DbSet<Entry> Entries { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
