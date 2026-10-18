import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-2xl tracking-[0.18em]">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
            A small offering with two services: a 30-day execution programme,
            and monthly content support. Contact details will be shared at
            enquiry.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            On this page
          </p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-foreground transition-colors hover:text-pine"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
