import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const description = formData.get("description") as string
    const file = formData.get("file") as File | null

    const emailContent = `
New Quote Request from Gt Print Lab Website

Name: ${firstName} ${lastName}
Email: ${email}
Project Description: ${description}
${file ? `File Attached: ${file.name}` : "No file attached"}

Please respond to this quote request within 24 hours.
    `

    // In a real implementation, you would use a service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Resend
    // - AWS SES

    // For now, we'll simulate the email sending
    console.log("[v0] Email would be sent to: manuelgabrielt@gmail.com")
    console.log("[v0] Email content:", emailContent)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully!",
    })
  } catch (error) {
    console.error("[v0] Error processing quote request:", error)
    return NextResponse.json({ success: false, message: "Failed to send quote request" }, { status: 500 })
  }
}
