using System;
using FitnessAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using FitnessAPI.Dto;

namespace Fitness.Controllers
{
    [Authorize]
    [Route("api/Users/Entry")]
    [ApiController]
    public class EntryController : ControllerBase
    {
        private readonly FitnessContext _context;

        public EntryController(FitnessContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Entry>>> GetEntries()
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            return await _context.Entries.Where((arg) => arg.UserId == userId).OrderByDescending(x => x.Date).ToListAsync();
        }


        [HttpGet("{id}", Name = "GetEntry")]
        public async Task<ActionResult<Entry>> GetEntry(int id)
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));

            var entry = await _context.Entries
                    .SingleOrDefaultAsync(e => e.Id == id && e.UserId == userId);
            if (entry == null)
            {
                return NotFound();
            }
            return entry;
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<Entry>> DeleteEntry(int id)
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));

            var entry = await _context.Entries
                .SingleOrDefaultAsync(e => e.Id == id && e.UserId == userId);
            if (entry == null)
            {
                return NotFound();
            }

            _context.Entries.Remove(entry);
            await _context.SaveChangesAsync();
            return entry;
        }

        [HttpPost]
        public async Task<ActionResult<Entry>> CreateEntry(EntryCreateDto entry)
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));

            Entry newEntry = new Entry
            {
                UserId = userId,
                Date = entry.Date,
                Summary = entry.Summary,
                Activity = entry.Activity
            };

            _context.Entries.Add(newEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEntry", new { id = newEntry.Id }, newEntry);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEntry(int id, Entry entry)
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));

            // Validate userId in entry mathes that of the jwt token claim
            if (userId != entry.UserId)
            {
                return Unauthorized();
            }

            // Validate ID in url matches id of resource passed
            if (id != entry.Id)
            {
                return BadRequest();
            }

            _context.Entry(entry).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
