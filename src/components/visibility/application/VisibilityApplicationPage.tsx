
"use client";

import { useState } from "react";
import { ContactDetails } from "@/components/visibility/application/ContactDetails";
import { BrandDetails } from "@/components/visibility/application/BrandDetails";
import { PlatformDetails } from "@/components/visibility/application/PlatformDetails";
import { ContentGoals } from "@/components/visibility/application/ContentGoals";
import { PackageUnderstanding } from "@/components/visibility/application/PackageUnderstanding";
import { AdditionalNotes } from "@/components/visibility/application/AdditionalNotes";
import { BankTransferDetails } from "@/components/visibility/application/BankTransferDetails";
import { PaymentConfirmation } from "@/components/visibility/application/PaymentConfirmation";
import { ApplicationConsent } from "@/components/visibility/application/ApplicationConsent";

export function VisibilityApplicationPage() {
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
      confirmInformation: formData.get("confirmInformation") === "yes",
      packageAcknowledged: formData.get("packageAcknowledged") === "yes",
    };

    try {
      const response = await fetch("/api/visibility-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(application),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "We could not submit your application. Please try again."
        );
      }

      setStatus(
        result.message ||
          "Your application has been submitted. EXORA will verify your payment before confirming your service."
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
        <div
          aria-hidden="true"
          className="paper-grid pointer-events-none absolute inset-0 opacity-10"
        />

         {/* Botanical decoration on the right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 opacity-50 sm:right-0 sm:h-96 sm:w-96"
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
              EXORA Visibility & Content
            </p>

            <h1
              id="application-heading"
              className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Your value deserves to be seen.
            </h1>

            <p className="mt-5 text-sm font-medium leading-7 text-white/90 sm:text-base">
              Monthly content support · Founding-client offer
            </p>

            <div className="mt-5 h-px max-w-2xl bg-white/20" />

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              A focused application for professionals, creators, and businesses
              ready to communicate their value more consistently.
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
            <h2 className="font-serif text-3xl text-foreground">
              Apply for EXORA Visibility & Content
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              Tell us about your brand, your audience, and the content support you need.
            </p>

            <div className="mt-8 space-y-10">
              <ContactDetails />
              <BrandDetails />
              <PlatformDetails />
              <ContentGoals />
              <PackageUnderstanding />
              <AdditionalNotes />
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
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
