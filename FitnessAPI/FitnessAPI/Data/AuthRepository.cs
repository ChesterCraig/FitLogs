using System;
using System.Threading.Tasks;
using FitnessAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FitnessAPI.Data
{
    public class AuthRepository : IAuthRepository
    {
        readonly FitnessContext _context;

        public AuthRepository(FitnessContext context)
        {
            _context = context;
        }

        public async Task<User> Login(string username, string password)
        {
            // look for user in db
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == username);

            if (user == null)
            {
                return null;
            }

            // compute hash and compare against one in db
            if (!VerifyPassword(password, user.PasswordHash, user.PasswordSalt)) 
            {
                return null;
            }
            return user;
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePassword(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }


        public async Task<bool> UserExists(string username)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == username);
            return user != null;
        }


        // HELPER METHODS

        // Create a password hash
        private void CreatePassword(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            // Can do this as hmac class implements IDisposable and has a dispose method
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        // Verify password
        private bool VerifyPassword(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }

    }
}
