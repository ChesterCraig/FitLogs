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
using FitnessAPI.Data;

namespace Fitness.Controllers
{
    //[Authorize]
    [Route("api/Users/{Id}/Note")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private readonly FitnessContext _context;
        private readonly IAuthRepository _authRepository;

        public NoteController(FitnessContext context, IAuthRepository authRepository)
        {
            _context = context;
            _authRepository = authRepository;
        }

        // User can fetch thier note
        [HttpGet(Name = "getNote")]
        public async Task<ActionResult<UserNoteDto>> GetNote(int id)
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var user = await _authRepository.GetUser(userId);

            if (user == null)
            {
                return NotFound();
            }

            UserNoteDto noteDto = new UserNoteDto
            {
                Contents = user.Note
            };

            return noteDto;
        }

        // User can update thier note
        [HttpPut]
        public async Task<IActionResult> UpdateEntry(int id, UserNoteDto noteDto)
        {
            int userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            if (userId != id)
            {
                return Unauthorized();
            }

            var user = await _authRepository.GetUser(userId);

            if (user == null)
            {
                return NotFound();
            }

            user.Note = noteDto.Contents;
    
            _context.Users.Update(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
