import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get client IP for logging
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIP = forwardedFor ? forwardedFor.split(',')[0] : 'Unknown';

    // Create transporter (using Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Form Submission (SeekaHost.co.uk): ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A488A; border-bottom: 2px solid #0066CC; padding-bottom: 10px;">
            New Contact Form Submission (SeekaHost.co.uk)
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #0A488A; width: 100px;">Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #0A488A;">Email:</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${email}" style="color: #0066CC;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #0A488A;">Phone:</td>
                <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #0A488A;">Subject:</td>
                <td style="padding: 8px 0;">${subject || 'Not provided'}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #0A488A; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: white; padding: 20px; border: 1px solid #e9ecef; border-left: 4px solid #0A488A; border-radius: 4px; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="border-top: 1px solid #e9ecef; padding-top: 15px; margin-top: 30px;">
            <p style="color: #6c757d; font-size: 12px; margin: 5px 0;">
              <strong>Submission Details:</strong><br>
              IP Address: ${clientIP}<br>
              Timestamp: ${new Date().toLocaleString()}<br>
              User Agent: ${request.headers.get('user-agent') || 'Unknown'}
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'Not provided'}

Message:
${message}

---
Submission Details:
IP Address: ${clientIP}
Timestamp: ${new Date().toLocaleString()}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Error sending email. Please try again later.' },
      { status: 500 }
    );
  }
}