using HospitalManagementSystem.API.Models.Entities;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;

public static class BillPdfGenerator
{
    public static byte[] CreatePdf(Bill bill)
    {
        var patientName = bill.Patient?.FullName ?? "Unknown Patient";

        var document = Document.Create(container =>
        {
            container.Page(page =>
            {
                page.Size(PageSizes.A4);
                page.Margin(40);
                page.PageColor(Colors.White);
                page.DefaultTextStyle(x => x.FontSize(12));

                // Header
                page.Header().Column(col =>
                {
                    col.Item().Text("KARMA HOSPITAL")
                        .FontSize(24)
                        .Bold()
                        .FontColor(Colors.Blue.Darken2)
                        .AlignCenter();
                    col.Item().Text("Helpline: +91 7775061342")
                        .FontSize(10)
                        .FontColor(Colors.Grey.Darken1)
                        .AlignCenter();
                    col.Item().Text("HOSPITAL Invoice")
                        .FontSize(18)
                        .Bold()
                        .FontColor(Colors.Red.Darken1)
                        .AlignCenter();
                });

                // Content: Combine patient info + table
                page.Content().Column(col =>
                {
                    // Patient info
                    col.Item().PaddingVertical(10).Text($"Bill ID: {bill.BillId}");
                    col.Item().Text($"Appointment ID: {bill.AppointmentId}");
                    col.Item().Text($"Patient: {patientName}");
                    col.Item().Text($"Generated At: {bill.GeneratedAt:dd/MM/yyyy HH:mm}");

                    // Amount Table
                    col.Item().PaddingTop(20).Table(table =>
                    {
                        table.ColumnsDefinition(columns =>
                        {
                            columns.ConstantColumn(200); // Description
                            columns.RelativeColumn();    // Amount
                        });

                        // Table Header
                        table.Header(header =>
                        {
                            header.Cell().Background(Colors.Grey.Lighten2).Padding(5).Text("Description").Bold();
                            header.Cell().Background(Colors.Grey.Lighten2).Padding(5).Text("Amount (₹)").Bold().AlignRight();
                        });

                        // Doctor Fee
                        table.Cell().Padding(5).Text("Doctor Fee");
                        table.Cell().Padding(5).Text($"{bill.DoctorFee:0.00}").AlignRight();

                        // Additional Charges
                        table.Cell().Padding(5).Text("Additional Charges");
                        table.Cell().Padding(5).Text($"{bill.AdditionalCharges ?? 0:0.00}").AlignRight();

                        // Total Amount
                        table.Cell().Background(Colors.Grey.Lighten3).Padding(5).Text("Total Amount").Bold();
                        table.Cell().Background(Colors.Grey.Lighten3).Padding(5).Text($"{bill.TotalAmount:0.00}").Bold().AlignRight();
                    });
                });

                // Footer
                page.Footer().Column(col =>
                {
                    col.Item().Text("Thank you for choosing Sunrise Hospital")
                        .FontSize(10)
                        .FontColor(Colors.Grey.Darken1)
                        .Italic()
                        .AlignCenter();
                    col.Item().Text("We wish you a speedy recovery!")
                        .FontSize(10)
                        .FontColor(Colors.Grey.Darken1)
                        .Italic()
                        .AlignCenter();
                });
            });
        });

        return document.GeneratePdf();
    }
}
