
import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function emailSection(title: string, content: string) {
  return `
    <tr>
      <td style="padding: 24px 28px; border-bottom: 1px solid #e9e3d8;">
        <h2 style="margin: 0 0 18px; color: #203d32; font-size: 16px; font-weight: 700;">
          ${title}
        </h2>
        ${content}
      </td>
    </tr>
  `;
}

function emailField(label: string, value: unknown) {
  return `
    <tr>
      <td style="padding: 0 0 15px;">
        <p style="margin: 0 0 5px; color: #77766f; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">
          ${label}
        </p>
        <p style="margin: 0; color: #292b26; font-size: 14px; line-height: 1.7; white-space: pre-wrap; overflow-wrap: anywhere;">
          ${escapeHtml(value)}
        </p>
      </td>
    </tr>
  `;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.EXORA_APPLICATION_EMAIL;

    if (!apiKey || !recipientEmail) {
      return NextResponse.json(
        { error: "Email service is not configured correctly." },
        { status: 500 }
      );
    }

    const formData = await request.json();

    const requiredFields = [
      "fullName",
      "email",
      "goal",
      "whyNow",
      "obstacles",
      "success",
      "accountability",
      "commitment",
      "paymentReference",
    ];

    for (const field of requiredFields) {
      if (
        typeof formData[field] !== "string" ||
        !formData[field].trim()
      ) {
        return NextResponse.json(
          { error: `Please complete the ${field} field.` },
          { status: 400 }
        );
      }
    }

    if (
      formData.paymentMade !== true ||
      formData.confirmInformation !== true
    ) {
      return NextResponse.json(
        {
          error:
            "Please confirm your payment and application consent.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const applicantEmail = String(formData.email).trim();
    const applicantName = String(formData.fullName).trim();

    const whatsapp =
      typeof formData.whatsapp === "string" &&
      formData.whatsapp.trim()
        ? formData.whatsapp.trim()
        : "Not provided";

    const additionalInfo =
      typeof formData.additionalInfo === "string" &&
      formData.additionalInfo.trim()
        ? formData.additionalInfo.trim()
        : "None provided";

    const emailText = `A new EXORA Execute application has been submitted.

APPLICANT DETAILS
Name: ${applicantName}
Email: ${applicantEmail}
WhatsApp: ${whatsapp}

GOAL AND MOTIVATION
Goal: ${formData.goal}
Why now: ${formData.whyNow}
Obstacles: ${formData.obstacles}
Definition of success: ${formData.success}

COMMITMENT
Accountability expectations: ${formData.accountability}
Readiness: ${formData.commitment}
Additional information: ${additionalInfo}

PAYMENT
Transfer reference: ${formData.paymentReference}
Applicant says payment was made: Yes — verify independently.

CONSENT
Applicant confirmed their information and consented to its use for processing the application.

IMPORTANT: This application does not prove payment. Check the receiving bank account before confirming the applicant's place.`;

    const applicantDetails = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${emailField("Full name", applicantName)}
        ${emailField("Email address", applicantEmail)}
        ${emailField("WhatsApp", whatsapp)}
      </table>
    `;

    const goalDetails = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${emailField("Their goal", formData.goal)}
        ${emailField("Why now", formData.whyNow)}
        ${emailField("Obstacles", formData.obstacles)}
        ${emailField("Definition of success", formData.success)}
      </table>
    `;

    const commitmentDetails = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${emailField("Accountability expectations", formData.accountability)}
        ${emailField("Readiness to commit", formData.commitment)}
        ${emailField("Additional information", additionalInfo)}
      </table>
    `;

    const paymentDetails = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${emailField("Transfer reference", formData.paymentReference)}
        ${emailField("Applicant's confirmation", "The applicant says payment was made.")}
      </table>

      <div style="margin-top: 4px; padding: 16px; background-color: #fff4df; border-left: 4px solid #b77926;">
        <p style="margin: 0; color: #754c16; font-size: 13px; line-height: 1.7;">
          <strong>Payment verification required.</strong><br />
          This application does not prove that payment was received. Check the receiving bank account before confirming the applicant's place.
        </p>
      </div>
    `;

    const consentDetails = `
      <p style="margin: 0; color: #55574f; font-size: 13px; line-height: 1.8;">
        The applicant confirmed their information and consented to its use for processing the application.
      </p>
    `;

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New EXORA Execute application</title>
        </head>

        <body style="margin: 0; padding: 0; background-color: #f4f0e8; font-family: Arial, Helvetica, sans-serif; color: #292b26;">
          <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
            A new applicant has applied for the EXORA Execute programme. Review their details and verify payment.
          </div>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f0e8;">
            <tr>
              <td align="center" style="padding: 32px 12px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e9e3d8;">

                  <tr>
                    <td style="padding: 30px 28px; background-color: #203d32;">
                      <p style="margin: 0 0 8px; color: #ffffff; font-family: Georgia, 'Times New Roman', serif; font-size: 30px; letter-spacing: 2px;">
                        EXORA
                      </p>
                      <p style="margin: 0; color: #e8dcc6; font-size: 11px; font-weight: 700; letter-spacing: 2px;">
                        EXECUTE · APPLICATION NOTIFICATION
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 30px 28px 24px;">
                      <p style="margin: 0 0 10px; color: #77766f; font-size: 11px; font-weight: 700; letter-spacing: 1.5px;">
                        A NEW APPLICATION HAS ARRIVED
                      </p>

                      <h1 style="margin: 0 0 12px; color: #203d32; font-family: Georgia, 'Times New Roman', serif; font-size: 27px; font-weight: 400; line-height: 1.3;">
                        Someone is ready to execute.
                      </h1>

                      <p style="margin: 0; color: #66675f; font-size: 14px; line-height: 1.8;">
                        A new applicant has taken the first step toward their 30-day goal. Their application details are below.
                      </p>
                    </td>
                  </tr>

                  ${emailSection("01 · Applicant details", applicantDetails)}
                  ${emailSection("02 · Goal and motivation", goalDetails)}
                  ${emailSection("03 · Commitment", commitmentDetails)}
                  ${emailSection("04 · Payment", paymentDetails)}
                  ${emailSection("05 · Consent", consentDetails)}

                  <tr>
                    <td style="padding: 24px 28px; background-color: #f8f5ef;">
                      <p style="margin: 0 0 8px; color: #203d32; font-size: 14px; font-weight: 700;">
                        Your next step
                      </p>

                      <p style="margin: 0; color: #55574f; font-size: 13px; line-height: 1.8;">
                        Review the application, verify the payment independently, and contact the applicant if you need clarification.
                      </p>

                      <p style="margin: 18px 0 0;">
                        <a href="mailto:${escapeHtml(applicantEmail)}?subject=${encodeURIComponent("EXORA Execute application")}"
                           style="display: inline-block; padding: 13px 20px; background-color: #203d32; color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none;">
                          Reply to applicant
                        </a>
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td align="center" style="padding: 22px 28px; background-color: #203d32;">
                      <p style="margin: 0 0 6px; color: #ffffff; font-family: Georgia, 'Times New Roman', serif; font-size: 18px; letter-spacing: 1px;">
                        EXORA
                      </p>
                      <p style="margin: 0; color: #d7dfd8; font-size: 11px; line-height: 1.7;">
                        Support. Confront. Strategise. Execute.
                      </p>
                      <p style="margin: 12px 0 0; color: #d7dfd8; font-size: 10px;">
                        Internal application notification
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const emailResult = await resend.emails.send({
      from: "EXORA Execute <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `New EXORA Execute application — ${applicantName}`,
      text: emailText,
      html: emailHtml,
      replyTo: applicantEmail,
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);

      return NextResponse.json(
        {
          error:
            "We could not send your application. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your application has been submitted successfully.",
    });
  } catch (error) {
    console.error("Application submission error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
