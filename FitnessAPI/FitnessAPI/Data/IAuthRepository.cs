using System;
using System.Threading.Tasks;
using FitnessAPI.Models;

namespace FitnessAPI.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);

        Task<User> Login(string username, string password);

        Task<bool> UserExists(string username);

        Task<User> GetUser(string username);
        Task<User> GetUser(int id);
    }
}
