using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Models.Entities;

namespace HospitalManagementSystem.API.Services.Interfaces
{
    public interface IBillService
    {
        Task<IEnumerable<BillResponseDto>> GetAllBillsAsync();
        Task<IEnumerable<BillResponseDto>> GetBillsForPatientAsync(int patientId);
        Task<BillResponseDto?> GetBillByIdAsync(int id);
        Task<BillResponseDto?> GetBillByAppointmentIdAsync(int appointmentId);
        Task<BillResponseDto?> GenerateBillAsync(int appointmentId, decimal? additionalCharges = 0);
        Task<BillResponseDto?> UpdateBillPaymentAsync(UpdateBillPaymentDto dto);
        Task<bool> DeleteBillAsync(int id);
        Task<Bill?> GetBillEntityByAppointmentIdAsync(int appointmentId);

        byte[] GenerateBillPdf(Bill bill);

    }
}
