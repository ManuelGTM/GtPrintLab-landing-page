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

    // Real email implementation using fetch to a service like Resend
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@gtprintlab.com",
        to: ["manuelgabrielt@gmail.com"],
        subject: "New Quote Request - Gt Print Lab",
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #dc2626;">New Quote Request from Gt Print Lab Website</h2>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Project Description:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 4px;">${description}</p>
              ${file ? `<p><strong>File Attached:</strong> ${file.name}</p>` : "<p><em>No file attached</em></p>"}
            </div>
            <p style="color: #6b7280; font-size: 14px;">Please respond to this quote request within 24 hours.</p>
          </div>
        `,
        // Add file attachment if present
        ...(file && {
          attachments: [
            {
              filename: file.name,
              content: Buffer.from(await file.arrayBuffer()).toString("base64"),
            },
          ],
        }),
      }),
    })

    if (!emailResponse.ok) {
      throw new Error("Failed to send email")
    }

    console.log("[v0] Email sent successfully to: manuelgabrielt@gmail.com")

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully!",
    })
  } catch (error) {
    console.error("[v0] Error processing quote request:", error)
    return NextResponse.json({ success: false, message: "Failed to send quote request" }, { status: 500 })
  }
}
