"use server"

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(formData: FormData) {
  const data: ContactFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  }

  // Validate the data
  if (!data.name || !data.email || !data.message) {
    return {
      success: false,
      error: "All fields are required",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      error: "Please enter a valid email address",
    }
  }

  try {
    // In a real application, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // For now, we'll simulate the email sending
    console.log("Sending email to info@aibuystocks.com:", {
      from: data.email,
      name: data.name,
      message: data.message,
      to: "info@aibuystocks.com",
    })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would actually send the email
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'info@aibuystocks.com',
      from: 'noreply@aibuystocks.com',
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    })
    */

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Error sending contact email:", error)
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    }
  }
}
