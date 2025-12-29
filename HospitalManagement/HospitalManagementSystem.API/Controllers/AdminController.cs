// HospitalManagementSystem.API/Controllers/dminController.cs
using HospitalManagementSystem.API.DTOs;
using HospitalManagementSystem.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace HospitalManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _adminService;
        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        [HttpGet("counts")]
        public async Task<IActionResult> Counts() =>
            Ok(await _adminService.GetCountsAsync());

        [HttpGet("pending-users")]
        public async Task<IActionResult> PendingUsers() =>
            Ok(await _adminService.GetPendingUsersAsync());
    }
}