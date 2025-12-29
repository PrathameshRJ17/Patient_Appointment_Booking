# Hospital Management System - Unit Tests

## Overview
This project contains unit tests for the Hospital Management System API controllers using xUnit and Moq.

## Test Project Setup
- **Framework**: xUnit
- **Mocking Library**: Moq
- **Testing Framework**: Microsoft.AspNetCore.Mvc.Testing

## Test Coverage

### AdminControllerTests
- `GetSystemCounts_ReturnsOkResult`: Tests system counts endpoint
- `GetPendingUserApprovals_ReturnsOkResult`: Tests pending user approvals endpoint

### DoctorControllerTests
- `GetAllDoctors_ReturnsOkResult`: Tests get all doctors endpoint
- `GetDoctorById_ReturnsOkResult_WhenDoctorExists`: Tests get doctor by ID when exists
- `GetDoctorById_ReturnsNotFound_WhenDoctorDoesNotExist`: Tests 404 response when doctor not found

### AppointmentControllerTests
- `GetAllAppointments_ReturnsOkResult`: Tests get all appointments endpoint
- `GetPatientAppointments_ReturnsOkResult`: Tests get patient appointments endpoint
- `BookNewAppointment_ReturnsOkResult`: Tests book new appointment endpoint

### UsersControllerTests
- `RegisterPatient_ReturnsOkResult`: Tests patient registration endpoint
- `GetAllUsers_ReturnsOkResult`: Tests get all users endpoint
- `GetUserById_ReturnsOkResult_WhenUserExists`: Tests get user by ID when exists
- `GetUserById_ReturnsNotFound_WhenUserDoesNotExist`: Tests 404 response when user not found

## Running Tests

To run all tests:
```bash
cd HospitalManagementSystem.Tests
dotnet test
```

To run specific test class:
```bash
dotnet test --filter FullyQualifiedName~AdminControllerTests
```

To run with detailed output:
```bash
dotnet test --logger "console;verbosity=detailed"
```

## Test Structure
Each test follows the AAA pattern:
- **Arrange**: Setup mock objects and test data
- **Act**: Execute the method being tested
- **Assert**: Verify the expected outcome

## Dependencies
- xUnit (test framework)
- Moq (mocking framework)
- Microsoft.AspNetCore.Mvc.Testing (ASP.NET Core testing utilities)

## Notes
- Stop the running API before running tests to avoid file locking issues
- Tests use mocked services to isolate controller logic
- All tests verify HTTP status codes and return types
