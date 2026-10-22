
export function ApplicationConsent() {
  return (
    <section className="mt-10 border-t border-border pt-8">
      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          name="confirmInformation"
          required
          className="mt-1 accent-pine"
        />

        <span className="text-sm leading-6 text-muted">
          I confirm that the information I have provided is
          accurate and complete to the best of my knowledge. 
          I agree that EXORA may use my information to process my application and contact me about the programme.
          <span aria-hidden="true"> *</span>
        </span>
      </label>

      <p className="mt-4 text-xs leading-5 text-muted">
        Your application contains personal information. EXORA should
        explain how that information will be used and protected before
        the form is launched.
      </p>

      <button
        type="submit"
        className="mt-8 w-full cursor-pointer rounded-full bg-pine px-6 py-4 text-sm font-medium text-white hover:bg-pine-dark sm:w-auto"
      >
        Submit Application
      </button>
    </section>
  );
}
