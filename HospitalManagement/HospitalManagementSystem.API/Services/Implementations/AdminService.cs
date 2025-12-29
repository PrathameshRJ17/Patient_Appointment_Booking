using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Repositories.Interfaces;
using HospitalManagementSystem.API.Services.Interfaces;

namespace HospitalManagementSystem.API.Services.Implementations
{
    public class AdminService : IAdminService
    {
        private readonly IUserRepository _userRepository;
        private readonly IAppointmentRepository _appointmentRepository;
        private readonly IBillRepository _billRepository;

        public AdminService(
            IUserRepository userRepository,
            IAppointmentRepository appointmentRepository,
            IBillRepository billRepository)
        {
            _userRepository = userRepository;
            _appointmentRepository = appointmentRepository;
            _billRepository = billRepository;
        }

        public async Task<DashboardCountsDto> GetCountsAsync()
        {
            var users = (await _userRepository.GetAllAsync()).ToList();
            var appointments = (await _appointmentRepository.GetAllAsync()).ToList();

            return new DashboardCountsDto
            {
                TotalUsers = users.Count,
                TotalPatients = users.Count(u => u.Role.ToString() == "Patient"),
                TotalDoctors = users.Count(u => u.Role.ToString() == "Doctor"),
                TotalStaff = users.Count(u => u.Role.ToString() == "Staff"),
                TotalAppointments = appointments.Count,
                PendingApprovals = users.Count(u => u.Status.ToString() == "Pending" &&
                    (u.Role.ToString() == "Doctor" || u.Role.ToString() == "Staff"))
            };
        }

        public async Task<IEnumerable<RevenueDto>> GetRevenueByDateRangeAsync(DateTime from, DateTime to)
        {
            var bills = (await _billRepository.GetAllAsync())
                .Where(b => b.GeneratedAt.Date >= from.Date && b.GeneratedAt.Date <= to.Date)
                .ToList();

            var grouped = bills
                .GroupBy(b => b.GeneratedAt.Date)
                .Select(g => new RevenueDto
                {
                    Date = g.Key,
                    TotalRevenue = g.Sum(x => x.TotalAmount)
                })
                .OrderBy(r => r.Date);

            return grouped;
        }

        public async Task<IEnumerable<PendingUserDto>> GetPendingUsersAsync()
        {
            var users = (await _userRepository.GetAllAsync())
                .Where(u => u.Status.ToString() == "Pending" &&
                            (u.Role.ToString() == "Doctor" || u.Role.ToString() == "Staff"))
                .Select(u => new PendingUserDto
                {
                    UserId = u.UserId,
                    FullName = u.FullName ?? "",
                    Email = u.Email ?? "",
                    Role = u.Role.ToString(),
                    CreatedAt = u.CreatedAt
                });

            return users;
        }

        public async Task<IEnumerable<UpcomingAppointmentDto>> GetUpcomingAppointmentsAsync(DateTime from, DateTime to)
        {
            var appointments = (await _appointmentRepository.GetAllAsync())
                .Where(a => a.AppointmentDate >= from && a.AppointmentDate <= to)
                .Select(a => new UpcomingAppointmentDto
                {
                    AppointmentId = a.AppointmentId,
                    PatientName = a.Patient.FullName ?? "",
                    DoctorName = a.Doctor.User.FullName ?? "",
                    AppointmentDate = a.AppointmentDate,
                    Status = a.Status.ToString()
                })
                .OrderBy(a => a.AppointmentDate);

            return appointments;
        }
    }
}
