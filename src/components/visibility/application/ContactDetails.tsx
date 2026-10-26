
export function ContactDetails() {
  return (
    <fieldset className="space-y-6">
      <legend className="font-serif text-2xl text-foreground">
        How can we reach you?
      </legend>

      <p className="text-sm leading-6 text-muted">
        Share your details so EXORA can respond to your application.
      </p>

      <div className="space-y-2">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-foreground"
        >
          Full name *
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          required
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="Enter your full name"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          Email address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="whatsapp"
          className="block text-sm font-medium text-foreground"
        >
          WhatsApp number
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-pine"
          placeholder="e.g. +234 801 234 5678"
        />
        <p className="text-xs leading-5 text-muted">
          Optional, if you prefer to be contacted on WhatsApp.
        </p>
      </div>
    </fieldset>
  );
}
