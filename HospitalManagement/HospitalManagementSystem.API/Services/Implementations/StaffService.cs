using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Models.Entities;
using HospitalManagementSystem.API.Models.Enums;
using HospitalManagementSystem.API.Repositories.Interfaces;
using HospitalManagementSystem.API.Services.Interfaces;

namespace HospitalManagementSystem.API.Services.Implementations
{
    public class StaffService : IStaffService
    {
        private readonly IStaffRepository _staffRepository;
        private readonly IUserRepository _userRepository;
        private readonly IAppointmentRepository _appointmentRepository;
        private readonly IBillRepository _billRepository;
        private readonly IDoctorRepository _doctorRepository;

        public StaffService(
            IStaffRepository staffRepository,
            IUserRepository userRepository,
            IAppointmentRepository appointmentRepository,
            IBillRepository billRepository,
            IDoctorRepository doctorRepository)
        {
            _staffRepository = staffRepository;
            _userRepository = userRepository;
            _appointmentRepository = appointmentRepository;
            _billRepository = billRepository;
            _doctorRepository = doctorRepository;
        }

        public async Task<IEnumerable<StaffResponseDto>> GetAllStaffAsync()
        {
            var staffList = await _staffRepository.GetAllAsync();
            return staffList.Select(s => new StaffResponseDto
            {
                StaffId = s.StaffId,
                UserId = s.User.UserId,
                FullName = s.User.FullName ?? "",
                Email = s.User.Email ?? "",
                PhoneNumber = s.User.PhoneNumber,
                Department = s.Department ?? "",
                Position = s.Position ?? "",
                ShiftTiming = s.ShiftTiming,
                Status = s.User.Status.ToString()
            });
        }

        public async Task<StaffResponseDto?> GetStaffByIdAsync(int id)
        {
            var staff = await _staffRepository.GetByIdAsync(id);
            if (staff == null) return null;

            return new StaffResponseDto
            {
                StaffId = staff.StaffId,
                UserId = staff.User.UserId,
                FullName = staff.User.FullName ?? "",
                Email = staff.User.Email ?? "",
                PhoneNumber = staff.User.PhoneNumber,
                Department = staff.Department ?? "",
                Position = staff.Position ?? "",
                ShiftTiming = staff.ShiftTiming,
                Status = staff.User.Status.ToString()
            };
        }

        public async Task<StaffResponseDto?> CreateStaffAsync(CreateStaffDto dto)
        {
            var user = await _userRepository.GetByIdAsync(dto.UserId);
            if (user == null)
                throw new Exception("User not found. Staff must be linked to a valid user.");

            var staff = new Staff
            {
                StaffId = dto.UserId,
                Department = dto.Department,
                Position = dto.Position,
                ShiftTiming = dto.ShiftTiming,
                CreatedAt = DateTime.UtcNow
            };

            await _staffRepository.AddAsync(staff);
            await _staffRepository.SaveAsync();

            return new StaffResponseDto
            {
                StaffId = staff.StaffId,
                UserId = user.UserId,
                FullName = user.FullName ?? "",
                Email = user.Email ?? "",
                PhoneNumber = user.PhoneNumber,
                Department = staff.Department ?? "",
                Position = staff.Position ?? "",
                ShiftTiming = staff.ShiftTiming,
                Status = user.Status.ToString()
            };
        }

        public async Task<StaffResponseDto?> UpdateStaffAsync(int id, UpdateStaffDto dto)
        {
            var staff = await _staffRepository.GetByIdAsync(id);
            if (staff == null) return null;

            var user = staff.User;
            user.FullName = dto.FullName ?? user.FullName;
            user.Email = dto.Email ?? user.Email;
            user.PhoneNumber = dto.PhoneNumber ?? user.PhoneNumber;
            user.UpdatedAt = DateTime.UtcNow;

            await _userRepository.UpdateAsync(user);
            await _userRepository.SaveAsync();

            return new StaffResponseDto
            {
                StaffId = staff.StaffId,
                UserId = user.UserId,
                FullName = user.FullName ?? "",
                Email = user.Email ?? "",
                PhoneNumber = user.PhoneNumber,
                Department = staff.Department ?? "",
                Position = staff.Position ?? "",
                ShiftTiming = staff.ShiftTiming,
                Status = user.Status.ToString()
            };
        }

        public async Task<bool> DeleteStaffAsync(int id)
        {
            var staff = await _staffRepository.GetByIdAsync(id);
            if (staff == null) return false;

            await _staffRepository.DeleteAsync(staff);
            await _staffRepository.SaveAsync();
            return true;
        }

        // Approve Appointment
        public async Task<AppointmentResponseDto?> ApproveAppointmentAsync(int staffUserId, int appointmentId)
        {
            var appointment = await _appointmentRepository.GetByIdAsync(appointmentId);
            if (appointment == null)
                throw new Exception("Appointment not found.");

            // Get Staff record using staffId
            var staff = await _staffRepository.GetByIdAsync(staffUserId);
            if (staff == null)
                throw new Exception("Staff not found. The logged-in user is not registered as staff.");

            // Approve appointment
            appointment.Status = AppointmentStatus.Approved;
            appointment.StaffId = staff.StaffId;

            await _appointmentRepository.UpdateAsync(appointment);
            await _appointmentRepository.SaveAsync();

            return AppointmentResponseDto.FromEntity(appointment);
        }


        //  Reject Appointment
        public async Task<AppointmentResponseDto?> RejectAppointmentAsync(int staffId, int appointmentId, string? remarks)
        {
            var appointment = await _appointmentRepository.GetByIdAsync(appointmentId);
            if (appointment == null)
                throw new Exception("Appointment not found.");

            appointment.Status = AppointmentStatus.Rejected;
            appointment.StaffId = staffId;

            await _appointmentRepository.UpdateAsync(appointment);
            await _appointmentRepository.SaveAsync();

            return AppointmentResponseDto.FromEntity(appointment);
        }

        // Complete Appointment
        public async Task<AppointmentResponseDto?> MarkAppointmentCompletedAsync(int staffId, int appointmentId, string? remarks)
        {
            var appointment = await _appointmentRepository.GetByIdAsync(appointmentId);
            if (appointment == null)
                throw new Exception("Appointment not found.");

            appointment.Status = AppointmentStatus.Completed;
            appointment.StaffId = staffId;

            await _appointmentRepository.UpdateAsync(appointment);
            await _appointmentRepository.SaveAsync();

            // Check if bill already exists before creating
            var existingBill = await _billRepository.GetByAppointmentIdAsync(appointmentId);
            if (existingBill == null)
            {
                var doctor = await _doctorRepository.GetByIdAsync(appointment.DoctorId);
                if (doctor != null)
                {
                    var bill = new Bill
                    {
                        AppointmentId = appointment.AppointmentId,
                        PatientId = appointment.PatientId,
                        DoctorFee = doctor.ConsultationFee,
                        AdditionalCharges = 0,
                        TotalAmount = doctor.ConsultationFee,
                        PaymentStatus = PaymentStatus.Unpaid,
                        GeneratedAt = DateTime.UtcNow
                    };
                    await _billRepository.AddAsync(bill);
                    await _billRepository.SaveAsync();
                }
            }

            return AppointmentResponseDto.FromEntity(appointment);
        }

        public async Task<bool> DeleteAppointmentAsync(int appointmentId)
        {
            var appointment = await _appointmentRepository.GetByIdAsync(appointmentId);
            if (appointment == null) return false;

            await _appointmentRepository.DeleteAsync(appointment);
            await _appointmentRepository.SaveAsync();
            return true;
        }
    }
}
