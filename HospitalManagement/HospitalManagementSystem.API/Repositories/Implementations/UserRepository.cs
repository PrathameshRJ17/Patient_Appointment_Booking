using HospitalManagementSystem.API.Data;
using HospitalManagementSystem.API.Models.Entities;
using HospitalManagementSystem.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HospitalManagementSystem.API.Repositories.Implementations
{
    public class UserRepository : IUserRepository
    {
        private readonly HospitalDbContext _context;

        public UserRepository(HospitalDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User?> GetByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task AddAsync(User user)
        {
            await _context.Users.AddAsync(user);
        }

        public async Task UpdateAsync(User user)
        {
            Console.WriteLine($"[UserRepository.UpdateAsync] Updating User ID: {user.UserId}, FullName: {user.FullName}");
            _context.Entry(user).State = EntityState.Modified;
            Console.WriteLine($"[UserRepository.UpdateAsync] Entity state set to Modified");
            await Task.CompletedTask;
        }

        public async Task DeleteAsync(User user)
        {
            _context.Users.Remove(user);
            await Task.CompletedTask;
        }

        public async Task SaveAsync()
        {
            Console.WriteLine($"[UserRepository.SaveAsync] Saving changes to database");
            var result = await _context.SaveChangesAsync();
            Console.WriteLine($"[UserRepository.SaveAsync] {result} entities saved");
        }
    }
}
