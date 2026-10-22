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
        { error: "Please confirm your payment and application consent." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const applicantEmail = String(formData.email).trim();
    const applicantName = String(formData.fullName).trim();

    const emailResult = await resend.emails.send({
      from: "EXORA Execute <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `New EXORA Execute application — ${applicantName}`,
      text: `
            A new EXORA Execute application has been submitted.

            APPLICANT DETAILS
            Name: ${applicantName}
            Email: ${applicantEmail}
            WhatsApp: ${formData.whatsapp || "Not provided"}

            GOAL AND MOTIVATION
            Goal: ${formData.goal}
            Why now: ${formData.whyNow}
            Obstacles: ${formData.obstacles}
            Definition of success: ${formData.success}

            COMMITMENT
            Accountability expectations: ${formData.accountability}
            Readiness: ${formData.commitment}
            Additional information: ${formData.additionalInfo || "None provided"}

            PAYMENT
            Transfer reference: ${formData.paymentReference}
            Applicant says payment was made: Yes — verify independently.

            CONSENT
            Applicant confirmed their information and consented to its use for processing the application.

            IMPORTANT: This application does not prove payment. Check the receiving bank account before confirming the applicant's place.
      `,
      replyTo: applicantEmail,
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);

      return NextResponse.json(
        { error: "We could not send your application. Please try again." },
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
