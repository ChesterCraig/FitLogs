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
//    public class MovementController : ControllerBase
//    {
//        private readonly FitnessContext _context;

//        public MovementController(FitnessContext context)
//        {
//            _context = context;
//        }

//        // POST: api/Movement
//        [HttpPost]
//        public async Task<ActionResult<Movement>> PostMovement(Movement movement)
//        {
//            System.Console.WriteLine("=======POST NEW MOVEMENT");
//            _context.Movements.Add(movement);
//            await _context.SaveChangesAsync();

//            return Created("", movement);
//        }

//        // DELETE: api/Movement/5
//        [HttpDelete("{id}")]
//        public async Task<ActionResult<Movement>> DeleteMovement(int id)
//        {
//            var movement = await _context.Movements.FindAsync(id);
//            if (movement == null)
//            {
//                return NotFound();
//            }

//            _context.Movements.Remove(movement);
//            await _context.SaveChangesAsync();

//            return movement;
//        }
//    }
//}
