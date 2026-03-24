import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  fullname?: string;
  email?: string;
  message?: string;
};

function getEnv(name: string) {
  const value = process.env[name];
  return value && value.trim() ? value : null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const fullname = body.fullname?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!fullname || !email || !message) {
      return NextResponse.json(
        { message: "Full name, email, and message are required." },
        { status: 400 }
      );
    }

    const host = getEnv("SMTP_HOST");
    const port = Number(getEnv("SMTP_PORT") || "587");
    const user = getEnv("SMTP_USER");
    const pass = getEnv("SMTP_PASS");
    const from = getEnv("CONTACT_FROM_EMAIL") || user;
    const to = getEnv("CONTACT_TO_EMAIL") || user;

    if (!host || !user || !pass || !from || !to) {
      return NextResponse.json(
        { message: "Mail server is not configured. Add SMTP env vars first." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass
      }
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Portfolio contact from ${fullname}`,
      text: [
        `Name: ${fullname}`,
        `Email: ${email}`,
        "",
        "Message:",
        message
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin-bottom: 16px;">Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullname)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json(
      { message: "Unable to send the message right now." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
