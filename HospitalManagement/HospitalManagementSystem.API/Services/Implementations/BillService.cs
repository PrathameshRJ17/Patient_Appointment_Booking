using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Models.Entities;
using HospitalManagementSystem.API.Models.Enums;
using HospitalManagementSystem.API.Repositories.Interfaces;
using HospitalManagementSystem.API.Services.Interfaces;
using System.Linq;

namespace HospitalManagementSystem.API.Services.Implementations
{
    public class BillService : IBillService
    {
        private readonly IBillRepository _billRepository;
        private readonly IAppointmentRepository _appointmentRepository;
        private readonly IUserRepository _userRepository;
        private readonly IDoctorRepository _doctorRepository;

        public BillService(
            IBillRepository billRepository,
            IAppointmentRepository appointmentRepository,
            IUserRepository userRepository,
            IDoctorRepository doctorRepository)
        {
            _billRepository = billRepository;
            _appointmentRepository = appointmentRepository;
            _userRepository = userRepository;
            _doctorRepository = doctorRepository;
        }

        public async Task<IEnumerable<BillResponseDto>> GetAllBillsAsync()
        {
            var bills = await _billRepository.GetAllAsync();
            return bills.Select(MapToDto);
        }

        public async Task<IEnumerable<BillResponseDto>> GetBillsForPatientAsync(int patientId)
        {
            var bills = await _billRepository.GetByPatientIdAsync(patientId);
            return bills.Select(MapToDto);
        }

        public async Task<BillResponseDto?> GetBillByIdAsync(int id)
        {
            var bill = await _billRepository.GetByIdAsync(id);
            return bill == null ? null : MapToDto(bill);
        }

        public async Task<BillResponseDto?> GetBillByAppointmentIdAsync(int appointmentId)
        {
            var bill = await _billRepository.GetByAppointmentIdAsync(appointmentId);
            return bill == null ? null : MapToDto(bill);
        }

        public async Task<BillResponseDto?> GenerateBillAsync(int appointmentId, decimal? additionalCharges = 0)
        {
            var appointment = await _appointmentRepository.GetByIdAsync(appointmentId);
            if (appointment == null)
                throw new Exception("Appointment not found.");

            if (appointment.Status != AppointmentStatus.Completed)
                throw new Exception("Bill can only be generated for completed appointments.");

            var doctor = await _doctorRepository.GetByIdAsync(appointment.DoctorId);
            if (doctor == null)
                throw new Exception("Doctor not found.");

            var patient = await _userRepository.GetByIdAsync(appointment.PatientId);
            if (patient == null)
                throw new Exception("Patient not found.");

            var doctorFee = doctor.ConsultationFee;
            var total = doctorFee + (additionalCharges ?? 0);

            var bill = new Bill
            {
                AppointmentId = appointment.AppointmentId,
                PatientId = appointment.PatientId,
                DoctorFee = doctorFee,
                AdditionalCharges = additionalCharges ?? 0,
                TotalAmount = total,
                PaymentStatus = PaymentStatus.Unpaid,
                GeneratedAt = DateTime.UtcNow
            };

            await _billRepository.AddAsync(bill);
            await _billRepository.SaveAsync();

            bill.Patient = patient;

            return MapToDto(bill);
        }

        public async Task<BillResponseDto?> UpdateBillPaymentAsync(UpdateBillPaymentDto dto)
        {
            var bill = await _billRepository.GetByIdAsync(dto.BillId);
            if (bill == null) return null;

            bill.PaymentStatus = dto.PaymentStatus;
            await _billRepository.UpdateAsync(bill);
            await _billRepository.SaveAsync();

            return MapToDto(bill);
        }

        public async Task<bool> DeleteBillAsync(int id)
        {
            var bill = await _billRepository.GetByIdAsync(id);
            if (bill == null) return false;

            await _billRepository.DeleteAsync(bill);
            await _billRepository.SaveAsync();
            return true;
        }


        public async Task<Bill?> GetBillEntityByAppointmentIdAsync(int appointmentId)
        {
            return await _billRepository.GetByAppointmentIdAsync(appointmentId);
        }

        public byte[] GenerateBillPdf(Bill bill)
        {
            return BillPdfGenerator.CreatePdf(bill);
        }

        private static BillResponseDto MapToDto(Bill bill)
        {
            return new BillResponseDto
            {
                BillId = bill.BillId,
                AppointmentId = bill.AppointmentId,
                PatientId = bill.PatientId,
                PatientName = bill.Patient?.FullName ?? string.Empty,
                DoctorFee = bill.DoctorFee,
                AdditionalCharges = bill.AdditionalCharges,
                TotalAmount = bill.TotalAmount,
                PaymentStatus = bill.PaymentStatus,
                GeneratedAt = bill.GeneratedAt
            };
        }

    }
}
