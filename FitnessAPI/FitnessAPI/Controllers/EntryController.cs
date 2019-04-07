using System;
using FitnessAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
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

        // Get all entries for current user
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Entry>>> GetEntries()
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            //return await _context.Entries.Where((arg) => arg.UserId == userId).OrderByDescending(x => x.Date).ToListAsync();
            return await (from entry in _context.Entries
                          where entry.UserId == userId
                          orderby entry.Date descending
                          select entry).ToListAsync();
        }

        // Get specific entry for user
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

        // Delete an entry
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

        // Create a new entry for a user
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

        // Update an entry
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEntry(int id, EntryUpdateDto entry)
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));

            // Get entry
            var entryToUpdate = await _context.Entries
                 .SingleOrDefaultAsync(e => e.Id == id && e.UserId == userId);

            // Validate userId in entry mathes that of the jwt token claim
            if (entryToUpdate == null)
            {
                return NotFound();
            }

            entryToUpdate.Date = entry.Date;
            entryToUpdate.Summary = entry.Summary;
            entryToUpdate.Activity = entry.Activity;

            _context.Entries.Update(entryToUpdate);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
