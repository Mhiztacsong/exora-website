import { Resend } from "resend";
import { NextResponse } from "next/server";

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

const emailText = `A new EXORA Visibility & Content application has been submitted.

CONTACT DETAILS
Name: ${applicantName}
Email: ${applicantEmail}
WhatsApp: ${formData.whatsapp || "Not provided"}

BRAND DETAILS
Brand or business name: ${brandName}
Website or profile: ${formData.brandProfile || "Not provided"}

PLATFORM
Selected platform: ${formData.platform}
Other platform: ${formData.otherPlatform || "Not applicable"}

CONTENT NEEDS
Target audience: ${formData.targetAudience}
Content goals: ${formData.contentGoals}
Current challenges: ${formData.currentChallenges || "Not provided"}

PACKAGE ACKNOWLEDGEMENT
Applicant acknowledged the package details: ${
  formData.packageAcknowledged === true ? "Yes" : "No"
}

ADDITIONAL NOTES
${formData.additionalNotes || "None provided"}

PAYMENT
Transfer reference: ${formData.paymentReference}
Applicant says payment was made: Yes — verify independently.

CONSENT
Applicant confirmed their information and consented to its use for processing the application.

IMPORTANT: This application does not prove payment. Check the receiving bank account before confirming the client.`;

    const emailResult = await resend.emails.send({
    from: "EXORA Visibility & Content <onboarding@resend.dev>",
    to: [recipientEmail],
    subject: `New EXORA Visibility application — ${applicantName}`,
    text: emailText,
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