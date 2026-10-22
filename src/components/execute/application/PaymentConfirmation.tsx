export function PaymentConfirmation() {
  return (
    <section
      className="mt-12 border-t border-border pt-10"
      aria-labelledby="payment-confirmation-heading"
    >
      <h2
        id="payment-confirmation-heading"
        className="font-serif text-2xl text-foreground"
      >
        Confirm your transfer
      </h2>

      <p className="mt-4 text-sm leading-7 text-muted">
        After transferring ₦10,000 to the account above, provide
        your payment reference below. Exora will check her bank
        account to confirm that your payment has been received.
      </p>

      <div className="mt-6 space-y-2">
        <label
          htmlFor="paymentReference"
          className="block text-sm font-medium text-foreground"
        >
          Bank transfer reference
          <span aria-hidden="true"> *</span>
        </label>

        <input
          id="paymentReference"
          name="paymentReference"
          type="text"
          required
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="Enter your transfer reference"
        />

        <p className="text-xs leading-5 text-muted">
          Enter the transaction reference shown by your banking app
          after completing the transfer.
        </p>
      </div>

      <label className="mt-6 flex items-start gap-3">
        <input
          type="checkbox"
          name="paymentMade"
          value="yes"
          required
          className="mt-1 accent-pine"
        />

        <span className="text-sm leading-6 text-muted">
          I confirm that I have transferred ₦10,000 to the EXORA
          Execute account. I understand that my payment must be
          verified by EXORA before my place is confirmed.
        </span>
      </label>
    </section>
  );
}
