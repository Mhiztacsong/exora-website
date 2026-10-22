"use client";

import { useState } from "react";
import { ApplicantDetails } from "@/components/execute/application/ApplicantDetails";
import { GoalQuestions } from "@/components/execute/application/GoalQuestions";
import { CommitmentQuestions } from "@/components/execute/application/CommitmentQuestions";
import { ProgrammeDetails } from "@/components/execute/application/ProgrammeDetails";
import { ApplicationConsent } from "@/components/execute/application/ApplicationConsent";
import { BankTransferDetails } from "@/components/execute/application/BankTransferDetails";
import { PaymentConfirmation } from "@/components/execute/application/PaymentConfirmation";

export function ApplicationPage() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setStatus("");
    setIsSubmitting(true);

    const formData = new FormData(form);

    const application = {
      ...Object.fromEntries(formData.entries()),
      paymentMade: formData.get("paymentMade") === "yes",
      confirmInformation:
        formData.get("confirmInformation") === "on",
    };

    try {
      const response = await fetch("/api/execute-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(application),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "We could not submit your application."
        );
      }

      setStatus(
        "Your application has been submitted. EXORA will verify your payment before confirming your place."
      );

      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex-1">
      <section
        className="relative overflow-hidden border-b border-border"
        aria-labelledby="application-heading"
      >
        <div className="pointer-events-none absolute inset-0 paper-grid opacity-70" />

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-pine">
              EXORA Execute
            </p>

            <h1
              id="application-heading"
              className="mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-6xl"
            >
              Your next 30 days start here.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              A focused application for people who are ready to stop
              postponing what matters and start making measurable progress.
            </p>

            <p className="mt-5 text-sm text-muted">
              The Founding Five · 30-Day One-on-One Execution Programme
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm text-muted">
              <span aria-hidden="true">◷</span>
              <span>Approximately 5–8 minutes to complete</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <form onSubmit={handleSubmit}>
          <ApplicantDetails />
          <GoalQuestions />
          <CommitmentQuestions />
          <ProgrammeDetails />
          <BankTransferDetails />
          <PaymentConfirmation />
          <ApplicationConsent />

          {status && (
            <p
              role="status"
              aria-live="polite"
              className="mt-6 rounded-lg border border-border p-4 text-sm text-foreground"
            >
              {status}
            </p>
          )}

          {isSubmitting && (
            <p className="mt-3 text-sm text-muted">
              Sending your application. Please wait...
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
