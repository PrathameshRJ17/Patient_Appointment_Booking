using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Models.Entities;
using HospitalManagementSystem.API.Repositories.Interfaces;
using HospitalManagementSystem.API.Services.Interfaces;

namespace HospitalManagementSystem.API.Services.Implementations
{
    public class DoctorService : IDoctorService
    {
        private readonly IDoctorRepository _doctorRepository;
        private readonly IUserRepository _userRepository;
        private readonly IAppointmentRepository _appointmentRepository;
        private readonly IBillRepository _billRepository;

        public DoctorService(
            IDoctorRepository doctorRepository,
            IUserRepository userRepository,
            IAppointmentRepository appointmentRepository,
            IBillRepository billRepository)
        {
            _doctorRepository = doctorRepository;
            _userRepository = userRepository;
            _appointmentRepository = appointmentRepository;
            _billRepository = billRepository;
        }

        public async Task<IEnumerable<DoctorResponseDto>> GetAllDoctorsAsync()
        {
            var doctors = await _doctorRepository.GetAllAsync();

            return doctors.Select(d => new DoctorResponseDto
            {
                DoctorId = d.DoctorId,
                FullName = d.User.FullName ?? "",
                Email = d.User.Email ?? "",
                Phone = d.User.PhoneNumber,
                Specialization = d.Specialization ?? "",
                ExperienceYears = d.ExperienceYears,
                Qualification = d.Qualification ?? "",
                ConsultationFee = d.ConsultationFee,
                Availability = d.AvailabilityStatus ?? "Available"
            });
        }

        public async Task<DoctorResponseDto?> GetDoctorByIdAsync(int id)
        {
            var doctor = await _doctorRepository.GetByIdAsync(id);
            if (doctor == null) return null;

            return new DoctorResponseDto
            {
                DoctorId = doctor.DoctorId,
                FullName = doctor.User.FullName ?? "",
                Email = doctor.User.Email ?? "",
                Phone = doctor.User.PhoneNumber,
                Specialization = doctor.Specialization ?? "",
                ExperienceYears = doctor.ExperienceYears,
                Qualification = doctor.Qualification ?? "",
                ConsultationFee = doctor.ConsultationFee,
                Availability = doctor.AvailabilityStatus ?? "Available"
            };
        }

        public async Task<DoctorResponseDto?> CreateDoctorAsync(CreateDoctorDto dto)
        {
            var user = await _userRepository.GetByIdAsync(dto.UserId);
            if (user == null)
                throw new Exception("User not found. Doctor must be linked to a valid user.");

            var doctor = new Doctor
            {
                DoctorId = dto.UserId,
                Specialization = dto.Specialization,
                ExperienceYears = dto.ExperienceYears,
                Qualification = dto.Qualification,
                ConsultationFee = dto.ConsultationFee,
                CreatedAt = DateTime.UtcNow
            };

            await _doctorRepository.AddAsync(doctor);
            await _doctorRepository.SaveAsync();

            return new DoctorResponseDto
            {
                DoctorId = doctor.DoctorId,
                FullName = user.FullName ?? "",
                Email = user.Email ?? "",
                Phone = user.PhoneNumber,
                Specialization = doctor.Specialization ?? "",
                ExperienceYears = doctor.ExperienceYears,
                Qualification = doctor.Qualification ?? "",
                ConsultationFee = doctor.ConsultationFee,
                Availability = doctor.AvailabilityStatus ?? "Available"
            };
        }

        public async Task<DoctorResponseDto?> UpdateDoctorAsync(int id, UpdateDoctorDto dto)
        {
            Console.WriteLine($"[UpdateDoctorAsync] START - ID: {id}, FullName: {dto.FullName}, ConsultationFee: {dto.ConsultationFee}");
            var doctor = await _doctorRepository.GetByIdAsync(id);
            if (doctor == null) return null;

            Console.WriteLine($"[UpdateDoctorAsync] Current User FullName: {doctor.User.FullName}, UserId: {doctor.User.UserId}");
            if (dto.FullName != null)
            {
                Console.WriteLine($"[UpdateDoctorAsync] Updating FullName from '{doctor.User.FullName}' to '{dto.FullName}'");
                var user = await _userRepository.GetByIdAsync(doctor.User.UserId);
                if (user != null)
                {
                    user.FullName = dto.FullName;
                    await _userRepository.UpdateAsync(user);
                    await _userRepository.SaveAsync();
                    Console.WriteLine($"[UpdateDoctorAsync] User saved. New FullName: {user.FullName}");
                }
            }

            if (dto.ConsultationFee.HasValue)
                doctor.ConsultationFee = dto.ConsultationFee.Value;
            if (dto.Specialization != null)
                doctor.Specialization = dto.Specialization;
            if (dto.ExperienceYears.HasValue)
                doctor.ExperienceYears = dto.ExperienceYears.Value;
            if (dto.Qualification != null)
                doctor.Qualification = dto.Qualification;
            if (dto.AvailabilityStatus != null)
                doctor.AvailabilityStatus = dto.AvailabilityStatus;

            await _doctorRepository.UpdateAsync(doctor);
            await _doctorRepository.SaveAsync();

            var updatedDoctor = await _doctorRepository.GetByIdAsync(id);
            return new DoctorResponseDto
            {
                DoctorId = updatedDoctor.DoctorId,
                FullName = updatedDoctor.User.FullName ?? "",
                Email = updatedDoctor.User.Email ?? "",
                Phone = updatedDoctor.User.PhoneNumber,
                Specialization = updatedDoctor.Specialization ?? "",
                ExperienceYears = updatedDoctor.ExperienceYears,
                Qualification = updatedDoctor.Qualification ?? "",
                ConsultationFee = updatedDoctor.ConsultationFee,
                Availability = updatedDoctor.AvailabilityStatus ?? "Available"
            };
        }

        public async Task<bool> DeleteDoctorAsync(int id)
        {
            var doctor = await _doctorRepository.GetByIdAsync(id);
            if (doctor == null) return false;

            await _doctorRepository.DeleteAsync(doctor);
            await _doctorRepository.SaveAsync();
            return true;
        }

        // Add Remarks to Appointment and Mark as Done
        public async Task<AppointmentResponseDto?> AddRemarksAsync(int appointmentId, int doctorUserId, string remarks)
        {
            Console.WriteLine($"[AddRemarksAsync] START - AppointmentId: {appointmentId}, DoctorId: {doctorUserId}, Remarks: {remarks}");
            var appointment = await _appointmentRepository.GetByIdAsync(appointmentId);
            if (appointment == null)
                throw new Exception("Appointment not found.");

            if (appointment.DoctorId != doctorUserId)
                throw new Exception("Doctor can only add remarks to their own appointments.");

            Console.WriteLine($"[AddRemarksAsync] Before update - Status: {appointment.Status}");
            appointment.Remarks = remarks;
            appointment.Status = Models.Enums.AppointmentStatus.Done;
            Console.WriteLine($"[AddRemarksAsync] After setting - Status: {appointment.Status}, Remarks: {appointment.Remarks}");

            await _appointmentRepository.UpdateAsync(appointment);
            await _appointmentRepository.SaveAsync();
            Console.WriteLine($"[AddRemarksAsync] After save - Status: {appointment.Status}");

            var result = AppointmentResponseDto.FromEntity(appointment);
            Console.WriteLine($"[AddRemarksAsync] Result DTO - Status: {result.Status}, StatusText: {result.StatusText}");
            return result;
        }

        //  Mark Appointment as Done
        public async Task<AppointmentResponseDto?> MarkAppointmentAsDoneAsync(int appointmentId, int doctorUserId, string remarks)
        {
            var appointment = await _appointmentRepository.GetByIdAsync(appointmentId);
            if (appointment == null)
                throw new Exception("Appointment not found.");

            if (appointment.DoctorId != doctorUserId)
                throw new Exception("Doctor can only mark their own appointments as done.");

            appointment.Remarks = remarks;
            appointment.Status = Models.Enums.AppointmentStatus.Done;

            await _appointmentRepository.UpdateAsync(appointment);
            await _appointmentRepository.SaveAsync();

            return AppointmentResponseDto.FromEntity(appointment);
        }

        //  View All Bills for This Doctor
        public async Task<IEnumerable<BillResponseDto>> GetBillsByDoctorAsync(int doctorUserId)
        {
            var bills = (await _billRepository.GetAllAsync())
                .Where(b => b.Appointment != null && b.Appointment.DoctorId == doctorUserId)
                .Select(b => new BillResponseDto
                {
                    BillId = b.BillId,
                    AppointmentId = b.AppointmentId,
                    PatientName = b.Patient.FullName ?? "",
                    DoctorFee = b.DoctorFee,
                    AdditionalCharges = b.AdditionalCharges,
                    TotalAmount = b.TotalAmount,
                    PaymentStatus = b.PaymentStatus,
                    GeneratedAt = b.GeneratedAt
                });

            return bills;
        }

        public async Task<IEnumerable<AppointmentResponseDto>> GetAppointmentsByDoctorAsync(int doctorId, DateTime? onDate = null)
        {
            var list = await _appointmentRepository.GetByDoctorAsync(doctorId, onDate);

            return list.Select(AppointmentResponseDto.FromEntity);
        }




    }
}
