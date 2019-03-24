//using FitnessAPI.Models;
//using Microsoft.AspNetCore.Cors;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//namespace Fitness.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class ExerciseController : ControllerBase
//    {
//        private readonly FitnessContext _context;

//        public ExerciseController(FitnessContext context)
//        {
//            _context = context;
//        }

//        // POST: api/Exercise
//        [HttpPost]
//        public async Task<ActionResult<Exercise>> PostExercise(Exercise exercise)
//        {
//            System.Console.WriteLine("=======POST NEW EXERCISE");
//            _context.Exercises.Add(exercise);
//            await _context.SaveChangesAsync();

//            return Created("", exercise);
//        }

 
//        //[HttpDelete("{id}")]
//        //public async Task<ActionResult<Movement>> DeleteMovement(int id)
//        //{
//        //    var movement = await _context.Movements.FindAsync(id);
//        //    if (movement == null)
//        //    {
//        //        return NotFound();
//        //    }

//        //    _context.Movements.Remove(movement);
//        //    await _context.SaveChangesAsync();

//        //    return movement;
//        //}
//    }
//}
