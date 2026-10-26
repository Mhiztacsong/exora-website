
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

function emailField(label: string, value: unknown): string {
  return `
    <tr>
      <td style="padding: 0 0 16px;">
        <p style="margin: 0 0 5px; color: #77766f; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">
          ${label}
        </p>
        <p style="margin: 0; color: #292b26; font-size: 14px; line-height: 1.8; white-space: pre-wrap; overflow-wrap: anywhere;">
          ${escapeHtml(value)}
        </p>
      </td>
    </tr>
  `;
}

function emailSection(title: string, content: string): string {
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

function optionalText(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim()
    ? value.trim()
    : fallback;
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
      "brandName",
      "platform",
      "targetAudience",
      "contentGoals",
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
      formData.confirmInformation !== true ||
      formData.packageAcknowledged !== true
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
    const brandName = String(formData.brandName).trim();

    const whatsapp = optionalText(
      formData.whatsapp,
      "Not provided"
    );

    const brandProfile = optionalText(
      formData.brandProfile,
      "Not provided"
    );

    const otherPlatform = optionalText(
      formData.otherPlatform,
      "Not applicable"
    );

    const currentChallenges = optionalText(
      formData.currentChallenges,
      "Not provided"
    );

    const additionalNotes = optionalText(
      formData.additionalNotes,
      "None provided"
    );

    const emailText = `A new EXORA Visibility & Content application has been submitted.

CONTACT DETAILS
Name: ${applicantName}
Email: ${applicantEmail}
WhatsApp: ${whatsapp}

BRAND DETAILS
Brand or business name: ${brandName}
Website or profile: ${brandProfile}

PLATFORM
Selected platform: ${formData.platform}
Other platform: ${otherPlatform}

CONTENT NEEDS
Target audience: ${formData.targetAudience}
Content goals: ${formData.contentGoals}
Current challenges: ${currentChallenges}

PACKAGE ACKNOWLEDGEMENT
Applicant acknowledged the package details: Yes

ADDITIONAL NOTES
${additionalNotes}

PAYMENT
Transfer reference: ${formData.paymentReference}
Applicant says payment was made: Yes — verify independently.

CONSENT
Applicant confirmed their information and consented to its use for processing the application.

IMPORTANT: This application does not prove payment. Check the receiving bank account before confirming the client.`;

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New EXORA Visibility application</title>
        </head>

        <body style="margin: 0; padding: 0; background-color: #f4f0e8; font-family: Arial, Helvetica, sans-serif; color: #292b26;">
          <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
            A new EXORA Visibility & Content applicant wants help with their brand's content.
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
                        VISIBILITY &amp; CONTENT · APPLICATION
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 30px 28px 24px;">
                      <p style="margin: 0 0 10px; color: #77766f; font-size: 11px; font-weight: 700; letter-spacing: 1.5px;">
                        A NEW APPLICATION HAS ARRIVED
                      </p>
                      <h1 style="margin: 0 0 12px; color: #203d32; font-family: Georgia, 'Times New Roman', serif; font-size: 27px; font-weight: 400; line-height: 1.3;">
                        A brand is ready to be seen.
                      </h1>
                      <p style="margin: 0; color: #66675f; font-size: 14px; line-height: 1.8;">
                        A new applicant is interested in EXORA Visibility &amp; Content. Here are the details to help you understand their brand and content needs.
                      </p>
                    </td>
                  </tr>

                  ${emailSection(
                    "01 · Contact details",
                    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${emailField("Applicant name", applicantName)}
                      ${emailField("Email address", applicantEmail)}
                      ${emailField("WhatsApp", whatsapp)}
                    </table>`
                  )}

                  ${emailSection(
                    "02 · Brand details",
                    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${emailField("Brand or business", brandName)}
                      ${emailField("Website or profile", brandProfile)}
                    </table>`
                  )}

                  ${emailSection(
                    "03 · Platform",
                    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${emailField("Selected platform", formData.platform)}
                      ${emailField("Other platform", otherPlatform)}
                    </table>`
                  )}

                  ${emailSection(
                    "04 · Content needs",
                    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${emailField("Target audience", formData.targetAudience)}
                      ${emailField("Content goals", formData.contentGoals)}
                      ${emailField("Current challenges", currentChallenges)}
                    </table>`
                  )}

                  ${emailSection(
                    "05 · Package and notes",
                    `<p style="margin: 0 0 16px; color: #292b26; font-size: 14px; line-height: 1.8;">
                      <strong>Package acknowledgement:</strong> The applicant confirmed that they have reviewed and acknowledged the package details.
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${emailField("Additional notes", additionalNotes)}
                    </table>`
                  )}

                  ${emailSection(
                    "06 · Payment",
                    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${emailField("Transfer reference", formData.paymentReference)}
                    </table>
                    <div style="padding: 16px; background-color: #fff4df; border-left: 4px solid #b77926;">
                      <p style="margin: 0; color: #754c16; font-size: 13px; line-height: 1.8;">
                        <strong>Payment verification required.</strong><br />
                        The applicant says payment was made, but this application does not prove receipt. Check the receiving bank account before confirming the client.
                      </p>
                    </div>`
                  )}

                  ${emailSection(
                    "07 · Consent",
                    `<p style="margin: 0; color: #55574f; font-size: 13px; line-height: 1.8;">
                      The applicant confirmed their information and consented to its use for processing the application.
                    </p>`
                  )}

                  <tr>
                    <td style="padding: 24px 28px; background-color: #f8f5ef;">
                      <p style="margin: 0 0 8px; color: #203d32; font-size: 14px; font-weight: 700;">
                        Your next step
                      </p>
                      <p style="margin: 0; color: #55574f; font-size: 13px; line-height: 1.8;">
                        Review the applicant's needs, verify payment independently, and follow up if you need more information.
                      </p>
                      <p style="margin: 18px 0 0;">
                        <a
                          href="mailto:${escapeHtml(applicantEmail)}?subject=${encodeURIComponent("EXORA Visibility & Content application")}"
                          style="display: inline-block; padding: 13px 20px; background-color: #203d32; color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none;"
                        >
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
                        Your value deserves to be seen.
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
      from: "EXORA Visibility & Content <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `New EXORA Visibility application — ${applicantName}`,
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
    console.error("Visibility application submission error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
