export function BankTransferDetails() {
  return (
    <section
      className="mt-12 border-t border-border pt-10"
      aria-labelledby="bank-transfer-heading"
    >
      <h2
        id="bank-transfer-heading"
        className="font-serif text-2xl text-foreground"
      >
        Complete your payment
      </h2>

      <p className="mt-4 text-sm leading-7 text-muted">
        EXORA Visibility & Content costs ₦10,000 per platform
        per month. Please transfer the amount for your selected
        platform using the account details below before submitting
        your application.
      </p>

      <div className="mt-6 space-y-4 rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Bank name
          </p>
          <p className="mb-1 font-medium text-foreground">
            Opay
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Account name
          </p>
          <p className="mb-1 font-medium text-foreground">
            Deborah Edet Ukpa
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Account number
          </p>
          <p className="mb-1 font-medium text-foreground">
            8166424734
          </p>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Amount to transfer
          </p>
          <p className="mt-1 font-serif text-3xl text-foreground">
            ₦10,000
          </p>
          <p className="mt-1 text-sm text-muted">
            Per platform, for one month
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted">
        After making the transfer, enter your payment reference
        in the section below. EXORA will verify your payment
        before confirming your application.
      </p>
    </section>
  );
}