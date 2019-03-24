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
//    public class WorkoutController : ControllerBase
//    {
//        private readonly FitnessContext _context;

//        public WorkoutController(FitnessContext context)
//        {
//            _context = context;
           
//            // Init some data in workouts
//            if (_context.Workouts.Count() == 0)
//            {
            
//                _context.Workouts.Add(new Workout { 
//                    //Id = 1,
//                    Comment = "Boy this is fun" });

//                _context.Movements.Add(new Movement
//                {
//                    //Id = 1,
//                    WorkoutId = 1,
//                    Name = "Bench"
//                });

//                _context.Movements.Add(new Movement
//                {
//                    //Id = 2,
//                    WorkoutId = 1,
//                    Name = "Bulgarian Split Squat"
//                });

//                _context.Exercises.Add(new Exercise
//                {
//                    //Id = 1,
//                    MovementId = 1,
//                    Weight = 60,
//                    Repetitions = 5
//                });

//                _context.Exercises.Add(new Exercise
//                {
//                    //Id = 2,
//                    MovementId = 1,
//                    Weight = 60,
//                    Repetitions = 5
//                });

//                _context.Exercises.Add(new Exercise
//                {
//                    //Id = 3,
//                    MovementId = 2,
//                    Weight = 8,
//                    Repetitions = 6
//                });

//                _context.SaveChanges();
//            }
//        }


//        // GET: api/Workout
//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<Workout>>> GetWorkouts()
//        {
//            return await _context.Workouts
//                .Include(w => w.Movements)
//                    .ThenInclude(m => m.Exercises)
//                .ToListAsync();
//        }

        
//        // GET: api/Workout/1
//        [HttpGet("{id}", Name = "GetWorkout")]
//        public async Task<ActionResult<Workout>> GetWorkout(int id)
//        {
//            var workout = await _context.Workouts
//              .Include(w => w.Movements)
//                .ThenInclude(m => m.Exercises)
//              .SingleOrDefaultAsync(w => w.Id == id);

//            if (workout == null)
//            {
//                return NotFound();
//            }

//            return workout;
//        }


//        // POST: api/Workout
//        [HttpPost]
//        public async Task<ActionResult<Workout>> PostWorkout(Workout workout)
//        {
//            //System.Console.WriteLine("=======POST IT " + workout.StartDate);
//            _context.Workouts.Add(workout);
//            await _context.SaveChangesAsync();

//            return CreatedAtAction("GetWorkout", new { id = workout.Id }, workout);
//        }


//        // PUT: api/Workout/x
//        [HttpPut("{id}")]
//        public async Task<IActionResult> PutWorkout(long id, Workout workout)
//        {
//            if (id != workout.Id)
//            {
//                return BadRequest();
//            }

//            _context.Entry(workout).State = EntityState.Modified;
//            await _context.SaveChangesAsync();

//            return NoContent();
//        }


//        // DELETE: api/Workout/5
//        [HttpDelete("{id}")]
//        public async Task<ActionResult<Workout>> DeleteWorkout(int id)
//        {
//            var workout = await _context.Workouts.FindAsync(id);
//            if (workout == null)
//            {
//                return NotFound();
//            }

//            _context.Workouts.Remove(workout);
//            await _context.SaveChangesAsync();

//            return workout;
//        }
//    }
//}
