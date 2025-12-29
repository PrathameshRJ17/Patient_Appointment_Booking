// HospitalManagementSystem.API/Controllers/BillController.cs
using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace HospitalManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize] // authenticated users by default
    public class BillController : ControllerBase
    {
        private readonly IBillService _billService;

        public BillController(IBillService billService)
        {
            _billService = billService;
        }

        [Authorize(Roles = "Patient")]
        [HttpGet("my")]
        public async Task<IActionResult> GetMyBills()
        {
            var userIdClaim = User.FindFirst("userId") ?? User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
                return Unauthorized("User identifier not found.");

            if (!int.TryParse(userIdClaim.Value, out var patientId))
                return Unauthorized("Invalid user identifier.");

            var bills = await _billService.GetBillsForPatientAsync(patientId);
            return Ok(bills);
        }

        [Authorize(Roles = "Admin,Staff")]
        [HttpGet("appointment/{appointmentId}")]
        public async Task<IActionResult> GetByAppointmentId(int appointmentId)
        {
            var bill = await _billService.GetBillByAppointmentIdAsync(appointmentId);
            if (bill == null)
                return NotFound();
            return Ok(bill);
        }

        // Generate bill - Admin or Staff
        [Authorize(Roles = "Admin,Staff")]
        [HttpPost("generate/{appointmentId}")]
        public async Task<IActionResult> Generate(int appointmentId, [FromQuery] decimal? additionalCharges = 0)
        {
            var bill = await _billService.GenerateBillAsync(appointmentId, additionalCharges);
            return Ok(bill);
        }

        [Authorize(Roles = "Patient")] // Only patients can access
        [HttpGet("download/{appointmentId}")]
        public async Task<IActionResult> DownloadBill(int appointmentId)
        {
            
            var bill = await _billService.GetBillEntityByAppointmentIdAsync(appointmentId);
            if (bill == null)
                return NotFound("Bill not found.");
            
            var userId = int.Parse(User.FindFirst("userId")?.Value ?? "0");
 
            if (bill.PatientId != userId)
                return Forbid("You are not authorized to download this bill.");

            var pdfBytes = BillPdfGenerator.CreatePdf(bill);

            return File(pdfBytes, "application/pdf", $"Bill_{bill.BillId}.pdf");
        }



    }
}