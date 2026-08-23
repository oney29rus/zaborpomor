"use client";

import { useEffect, useState } from "react";
import { HeaderCalculatorCta } from "@/components/layout/HeaderCalculatorCta";
import { NAV_LINKS, PHONE, PHONE_HREF } from "@/lib/constants";
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-background"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 4L14 14M14 4L4 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 5H16M2 9H16M2 13H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[57px] z-40 bg-surface"
        >
          <nav className="flex flex-col gap-1 px-4 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-background"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="border-t border-border px-4 py-6">
            <a
              href={PHONE_HREF}
              className="block text-lg font-semibold text-foreground"
            >
              {PHONE}
            </a>
            <div className="mt-4">
              <HeaderCalculatorCta
                className="w-full"
                onClick={() => setOpen(false)}
              />
            </div>          </div>
        </div>
      )}
    </div>
  );
}
