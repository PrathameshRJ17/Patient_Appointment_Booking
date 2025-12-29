using HospitalManagementSystem.API.Data;
using HospitalManagementSystem.API.Models.Entities;
using HospitalManagementSystem.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace HospitalManagementSystem.API.Repositories.Implementations
{
    public class BillRepository : IBillRepository
    {
        private readonly HospitalDbContext _context;

        public BillRepository(HospitalDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Bill>> GetAllAsync()
        {
            return await _context.Bills
                .Include(b => b.Patient)
                .Include(b => b.Appointment)
                .ThenInclude(a => a.Doctor)
                .ToListAsync();
        }

        public async Task<IEnumerable<Bill>> GetByPatientIdAsync(int patientId)
        {
            return await _context.Bills
                .Include(b => b.Patient)
                .Include(b => b.Appointment)
                    .ThenInclude(a => a.Doctor)
                .Where(b => b.PatientId == patientId)
                .ToListAsync();
        }

        public async Task<Bill?> GetByIdAsync(int id)
        {
            return await _context.Bills
                .Include(b => b.Patient)
                .Include(b => b.Appointment)
                .ThenInclude(a => a.Doctor)
                .FirstOrDefaultAsync(b => b.BillId == id);
        }

        public async Task<Bill?> GetByAppointmentIdAsync(int appointmentId)
        {
            return await _context.Bills
                .Include(b => b.Appointment)
                    .ThenInclude(a => a.Patient)
                .Include(b => b.Appointment)
                    .ThenInclude(a => a.Doctor)
                        .ThenInclude(d => d.User)
                .FirstOrDefaultAsync(b => b.AppointmentId == appointmentId);
        }

        public async Task AddAsync(Bill bill)
        {
            await _context.Bills.AddAsync(bill);
        }

        public async Task UpdateAsync(Bill bill)
        {
            _context.Bills.Update(bill);
            await Task.CompletedTask;
        }

        public async Task DeleteAsync(Bill bill)
        {
            _context.Bills.Remove(bill);
            await Task.CompletedTask;
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

    }
}
