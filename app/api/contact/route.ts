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

    const host = getEnv("SMTP_HOST") || "smtp.gmail.com";
    const port = Number(getEnv("SMTP_PORT") || "587");
    const user = getEnv("SMTP_USER");
    const pass = getEnv("SMTP_PASS");
    const from = user;
    const phoneNumber = "+91 9499207262";
    const sanitizedPhone = phoneNumber.replace(/\D/g, "");
    const whatsappLink = `https://wa.me/${sanitizedPhone}`;
    const callLink = `tel:${phoneNumber.replace(/\s+/g, "")}`;

    if (!user || !pass || !from) {
      return NextResponse.json(
        { message: "Mail server is not configured. Add SMTP env vars first." },
        { status: 500 }
      );
    }

    const internalTo = user;

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
      to: internalTo,
      replyTo: email,
      subject: `Portfolio contact from ${fullname}`,
      text: [
        `Name: ${fullname}`,
        `Email: ${email}`,
        "",
        "Message:",
        message
      ].join("\n"),
      html: createContactEmailTemplate({
        fullname,
        email,
        message
      })
    });

    await transporter.sendMail({
      from,
      to: email,
      subject: "Thanks for reaching out",
      text: [
        `Hi ${fullname},`,
        "",
        "Thank you for the query.",
        "We've received your message and will contact you shortly.",
        "",
        "For a faster reply, you can contact directly using:",
        `Call: ${phoneNumber}`,
        `WhatsApp: ${whatsappLink}`
      ].join("\n"),
      html: createThankYouEmailTemplate({
        fullname,
        callLink,
        whatsappLink,
        phoneNumber
      })
    });

    return NextResponse.json({
      message: "Thanks. We’ll contact you shortly. For a faster reply, use call or WhatsApp."
    });
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

function createContactEmailTemplate({
  fullname,
  email,
  message
}: {
  fullname: string;
  email: string;
  message: string;
}) {
  return `
    <div style="margin:0; padding:32px 16px; background:#0f0f10;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:720px; margin:0 auto; border-collapse:collapse;">
        <tr>
          <td style="padding:0;">
            <div style="border:1px solid rgba(255,255,255,0.08); border-radius:28px; overflow:hidden; background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)), #1d1d20; box-shadow:0 24px 80px rgba(0,0,0,0.28);">
              <div style="padding:32px; border-bottom:1px solid rgba(255,255,255,0.08); background:radial-gradient(circle at top left, rgba(246,196,83,0.16), transparent 35%);">
                <div style="font-family:Arial,sans-serif; font-size:12px; letter-spacing:0.32em; text-transform:uppercase; color:#f6c453; margin-bottom:14px;">
                  Parikshit Bhardwaj
                </div>
                <h1 style="font-family:Arial,sans-serif; font-size:32px; line-height:1.15; color:#ffffff; margin:0 0 12px;">
                  New portfolio enquiry received
                </h1>
                <p style="font-family:Arial,sans-serif; font-size:16px; line-height:1.7; color:#c7c7cc; margin:0;">
                  A new contact form submission was sent from the portfolio website. Details are below.
                </p>
              </div>

              <div style="padding:32px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate; border-spacing:0 14px;">
                  <tr>
                    <td style="width:140px; font-family:Arial,sans-serif; font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:#8d8d96;">
                      Name
                    </td>
                    <td style="font-family:Arial,sans-serif; font-size:16px; color:#ffffff;">
                      ${escapeHtml(fullname)}
                    </td>
                  </tr>
                  <tr>
                    <td style="width:140px; font-family:Arial,sans-serif; font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:#8d8d96;">
                      Email
                    </td>
                    <td style="font-family:Arial,sans-serif; font-size:16px; color:#ffffff;">
                      <a href="mailto:${escapeHtml(email)}" style="color:#f6c453; text-decoration:none;">
                        ${escapeHtml(email)}
                      </a>
                    </td>
                  </tr>
                </table>

                <div style="margin-top:24px; padding:24px; border:1px solid rgba(255,255,255,0.08); border-radius:22px; background:rgba(255,255,255,0.03);">
                  <div style="font-family:Arial,sans-serif; font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:#8d8d96; margin-bottom:12px;">
                    Message
                  </div>
                  <p style="margin:0; white-space:pre-wrap; font-family:Arial,sans-serif; font-size:16px; line-height:1.8; color:#e8e8ea;">
                    ${escapeHtml(message)}
                  </p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function createThankYouEmailTemplate({
  fullname,
  callLink,
  whatsappLink,
  phoneNumber
}: {
  fullname: string;
  callLink: string;
  whatsappLink: string;
  phoneNumber: string;
}) {
  return `
    <div style="margin:0; padding:32px 16px; background:#0f0f10;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:720px; margin:0 auto; border-collapse:collapse;">
        <tr>
          <td style="padding:0;">
            <div style="border:1px solid rgba(255,255,255,0.08); border-radius:28px; overflow:hidden; background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)), #1d1d20; box-shadow:0 24px 80px rgba(0,0,0,0.28);">
              <div style="padding:32px; border-bottom:1px solid rgba(255,255,255,0.08); background:radial-gradient(circle at top left, rgba(246,196,83,0.16), transparent 35%);">
                <div style="font-family:Arial,sans-serif; font-size:12px; letter-spacing:0.32em; text-transform:uppercase; color:#f6c453; margin-bottom:14px;">
                  Parikshit Bhardwaj
                </div>
                <h1 style="font-family:Arial,sans-serif; font-size:32px; line-height:1.15; color:#ffffff; margin:0 0 12px;">
                  Thanks for reaching out
                </h1>
                <p style="font-family:Arial,sans-serif; font-size:16px; line-height:1.7; color:#c7c7cc; margin:0;">
                  Hi ${escapeHtml(fullname)}, thank you for the query. Your message has been received.
                </p>
              </div>

              <div style="padding:32px;">
                <p style="margin:0 0 16px; font-family:Arial,sans-serif; font-size:16px; line-height:1.8; color:#e8e8ea;">
                  We’ll contact you shortly.
                </p>
                <p style="margin:0 0 24px; font-family:Arial,sans-serif; font-size:16px; line-height:1.8; color:#c7c7cc;">
                  For a faster response, you can connect directly using call or WhatsApp.
                </p>

                <table role="presentation" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:0 12px 0 0;">
                      <a href="${callLink}" style="display:inline-block; padding:14px 22px; border-radius:999px; background:#f6c453; color:#111111; font-family:Arial,sans-serif; font-size:14px; font-weight:700; text-decoration:none;">
                        Call ${escapeHtml(phoneNumber)}
                      </a>
                    </td>
                    <td style="padding:0;">
                      <a href="${whatsappLink}" style="display:inline-block; padding:14px 22px; border-radius:999px; border:1px solid rgba(255,255,255,0.14); color:#ffffff; font-family:Arial,sans-serif; font-size:14px; font-weight:700; text-decoration:none;">
                        WhatsApp
                      </a>
                    </td>
                  </tr>
                </table>

                <div style="margin-top:28px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.08); font-family:Arial,sans-serif; font-size:13px; line-height:1.7; color:#8d8d96;">
                  This is an automated acknowledgement from the portfolio contact form.
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  `;
}
