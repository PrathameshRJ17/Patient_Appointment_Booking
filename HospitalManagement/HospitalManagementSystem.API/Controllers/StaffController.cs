// HospitalManagementSystem.API/Controllers/StaffController.cs
using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace HospitalManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize] // authenticated users by default
    public class StaffController : ControllerBase
    {
        private readonly IStaffService _staffService;

        public StaffController(IStaffService staffService)
        {
            _staffService = staffService;
        }

        [Authorize(Roles = "Admin,Staff")]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var staff = await _staffService.GetStaffByIdAsync(id);
            if (staff == null) return NotFound();
            return Ok(staff);
        }

        // Admin or Staff can update profile
        [Authorize(Roles = "Admin,Staff")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, UpdateStaffDto dto)
        {
            var updated = await _staffService.UpdateStaffAsync(id, dto);
            if (updated == null) return NotFound();
            return Ok(updated);
        }

        
        [Authorize(Roles = "Admin,Staff")]
        [HttpPut("{staffId}/appointments/{appointmentId}/approve")]
        public async Task<IActionResult> Approve(int staffId, int appointmentId)
        {
            var result = await _staffService.ApproveAppointmentAsync(staffId, appointmentId);
            return Ok(result);
        }

        [Authorize(Roles = "Admin,Staff")]
        [HttpDelete("{staffId}/appointments/{appointmentId}/reject")]
        public async Task<IActionResult> Reject(int staffId, int appointmentId)
        {
            var result = await _staffService.DeleteAppointmentAsync(appointmentId);
            return Ok(new { message = "Appointment rejected and deleted successfully" });
        }

        [Authorize(Roles = "Staff")]
        [HttpPut("{staffId}/appointments/{appointmentId}/complete")]
        public async Task<IActionResult> CompleteAppointment(int staffId, int appointmentId, [FromBody] string? remarks = null)
        {
            var appointment = await _staffService.MarkAppointmentCompletedAsync(staffId, appointmentId, remarks);
            if (appointment == null)
                return NotFound("Appointment not found or cannot be completed.");

            return Ok(new
            {
                message = "Appointment completed successfully and bill generated.",
                appointment
            });
        }

    }
}