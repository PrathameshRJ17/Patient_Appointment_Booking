using HospitalManagementSystem.API.Data;
using HospitalManagementSystem.API.Models.Entities;
using HospitalManagementSystem.API.Models.Enums;
using HospitalManagementSystem.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HospitalManagementSystem.API.Repositories.Implementations
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private readonly HospitalDbContext _context;

        public AppointmentRepository(HospitalDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Appointment>> GetAllAsync()
        {
            return await _context.Appointments
                .Include(a => a.Patient) // ✅ because patient is a User
                .Include(a => a.Doctor).ThenInclude(d => d.User) // ✅ load doctor → user
                .Include(a => a.Staff).ThenInclude(s => s.User)  // ✅ load staff → user (optional)
                .ToListAsync();
        }

        public async Task<Appointment?> GetByIdAsync(int id)
        {
            return await _context.Appointments
                .Include(a => a.Patient)
                .Include(a => a.Doctor).ThenInclude(d => d.User)   // ✅ Required
                .Include(a => a.Staff).ThenInclude(s => s.User)    // (Optional but recommended)
                .FirstOrDefaultAsync(a => a.AppointmentId == id);
        }

        public async Task<IEnumerable<Appointment>> GetByPatientIdAsync(int patientId)
        {
            var appointments = await _context.Appointments
                .Include(a => a.Patient)
                .Include(a => a.Doctor).ThenInclude(d => d.User)
                .Where(a => a.PatientId == patientId)
                .ToListAsync();
            
            // Debug log
            foreach (var apt in appointments)
            {
                Console.WriteLine($"[REPO GetByPatientIdAsync] Appointment {apt.AppointmentId}: Status={apt.Status}, Remarks='{apt.Remarks}'");
            }
            
            return appointments;
        }

        public async Task<IEnumerable<Appointment>> GetByDoctorIdAsync(int doctorId)
        {
            return await _context.Appointments
                .Include(a => a.Patient)
                .Include(a => a.Doctor).ThenInclude(d => d.User) // ✅ needed
                .Where(a => a.DoctorId == doctorId)
                .ToListAsync();
        }

        public async Task<Appointment?> AddAsync(Appointment appointment)
        {
            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();
            return appointment;
        }

        public async Task UpdateAsync(Appointment appointment)
        {
            var entry = _context.Entry(appointment);
            if (entry.State == EntityState.Detached)
            {
                _context.Appointments.Attach(appointment);
            }
            entry.State = EntityState.Modified;
            Console.WriteLine($"[UpdateAsync] Appointment {appointment.AppointmentId} - Status: {appointment.Status}, Remarks: {appointment.Remarks}, State: {entry.State}");
            await Task.CompletedTask;
        }

        public async Task DeleteAsync(Appointment appointment)
        {
            _context.Appointments.Remove(appointment);
            await Task.CompletedTask;
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<List<Appointment>> GetAppointmentsForDoctorAndDate(int doctorId, DateTime date)
        {
            return await _context.Appointments
                .Where(x => x.DoctorId == doctorId && x.AppointmentDate.Date == date.Date)
                .ToListAsync();
        }

        public async Task<List<Appointment>> GetByDoctorAsync(int doctorId, DateTime? onDate = null)
        {
            // Adjust Includes to match your exact navs
            var q = _context.Appointments
                .AsNoTracking()
                .Include(a => a.Patient)                 // if Patient is User
                .Include(a => a.Doctor)                  // if Doctor has FullName
                .ThenInclude(d => d.User)               // if Doctor.FullName lives on User
                .Where(a => a.DoctorId == doctorId);

            if (onDate.HasValue)
            {
                var d = onDate.Value.Date;
                q = q.Where(a => a.AppointmentDate.Date == d);
            }

            return await q.OrderBy(a => a.AppointmentDate).ToListAsync();
        }


    }
}
