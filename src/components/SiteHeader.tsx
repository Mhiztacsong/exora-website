"use client";

import { useEffect, useId, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <a
          href="/#top"
          className="font-serif text-xl tracking-[0.18em] text-foreground sm:text-[1.35rem]"
        >
          {site.name}
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm text-muted md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/#enquire"
          className="hidden rounded-full bg-pine px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-pine-dark md:inline-flex"
        >
          Request a place
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-surface text-foreground md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-foreground transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-foreground transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`h-px w-full bg-foreground transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id={panelId}
        hidden={!open}
        className="border-t border-border bg-background md:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-border/70 py-4 text-base text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#enquire"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-pine px-4 py-3 text-sm font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Request a place
          </a>
        </nav>
      </div>
    </header>
  );
}
