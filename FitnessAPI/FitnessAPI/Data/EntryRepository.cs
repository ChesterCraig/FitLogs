//using System;
//using System.Threading.Tasks;
//using FitnessAPI.Models;
//using Microsoft.EntityFrameworkCore;

//namespace FitnessAPI.Data
//{
//    public class EntryRepository
//    {
//        readonly FitnessContext _context;

//        public EntryRepository(FitnessContext context)
//        {
//            _context = context;
//        }

//        // Add
//        // Remove
//        // Find
//        // Where
//        public Task<int> getNumUserEntries(int userID)
//        {
//            return _context.Entries.CountAsync(e => e.UserId == userID);
//        }




//        public async Task<User> Login(string username, string password)
//        {
//            // look for user in db
//            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == username);

//            if (user == null)
//            {
//                return null;
//            }

//            // compute hash and compare against one in db
//            if (!VerifyPassword(password, user.PasswordHash, user.PasswordSalt)) 
//            {
//                return null;
//            }
//            return user;
//        }

//        public async Task<User> Register(User user, string password)
//        {
//            byte[] passwordHash, passwordSalt;
//            CreatePassword(password, out passwordHash, out passwordSalt);

//            user.PasswordHash = passwordHash;
//            user.PasswordSalt = passwordSalt;

//            await _context.Users.AddAsync(user);
//            await _context.SaveChangesAsync();

//            return user;
//        }


//        public async Task<bool> UserExists(string username)
//        {
//            return await GetUser(username) != null;
//        }

//        public async Task<User> GetUser(string username)
//        {
//            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == username);
//            return user;
//        }

//        public async Task<User> GetUser(int id)
//        {
//            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
//            return user;
//        }
//    }
//}
