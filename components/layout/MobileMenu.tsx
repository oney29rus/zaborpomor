"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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

  const closeMenu = () => setOpen(false);

  const menuPanel = open ? (
      <>
        <button
          type="button"
          aria-label="Закрыть меню"
          className="fixed inset-0 top-[57px] z-[60] lg:hidden"
          onClick={closeMenu}
        />
        <div
          id="mobile-menu"
          className="fixed left-0 right-0 top-[57px] z-[61] max-h-[calc(100dvh-57px)] overflow-y-auto border-b border-border bg-white shadow-md lg:hidden"
        >
          <nav className="flex flex-col px-3 py-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-[0.9375rem] font-medium text-foreground transition-colors hover:bg-background"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="border-t border-border px-3 py-2">
            <a
              href={PHONE_HREF}
              className="block px-3 py-1 text-[0.9375rem] font-semibold text-foreground"
              onClick={closeMenu}
            >
              {PHONE}
            </a>
            <div className="mt-1.5 px-3">
              <HeaderCalculatorCta
                className="min-h-10 w-full py-2 text-sm"
                onClick={closeMenu}
              />
            </div>
          </div>
        </div>
      </>
    ) : null;

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

      {menuPanel && createPortal(menuPanel, document.body)}
    </div>
  );
}
