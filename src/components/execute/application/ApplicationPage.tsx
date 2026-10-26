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
    <main className="flex-1 bg-background">
      <section
        className="relative isolate overflow-hidden bg-pine text-white"
        aria-labelledby="application-heading"
      >
        {/* Subtle grid texture */}
        <div
          aria-hidden="true"
          className="paper-grid pointer-events-none absolute inset-0 opacity-10"
        />

       
        {/* Botanical decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] sm:left-auto sm:right-0 sm:h-96 sm:w-96 sm:translate-x-0 sm:opacity-[0.10]"
        >
          <img
            src="/images/exora-botanical.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>


        <div className="relative mx-auto w-full max-w-5xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/80">
              EXORA Execute
            </p>

            <h1
              id="application-heading"
              className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Your next 30 days start here.
            </h1>

            <p className="mt-5 text-sm font-medium leading-7 text-white/90 sm:text-base">
              The Founding Five · 30-Day One-on-One Execution Programme
            </p>

            <div className="mt-5 h-px max-w-2xl bg-white/20" />

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              A focused application for people who are ready to stop
              postponing what matters and start making measurable progress.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
              <span aria-hidden="true">◷</span>
              <span>Approximately 5–8 minutes to complete</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="rounded-xl border border-border bg-surface p-5 shadow-sm sm:p-8 lg:p-10">
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
        </div>
      </section>
    </main>
  );
}
