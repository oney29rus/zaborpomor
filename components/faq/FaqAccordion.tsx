"use client";

import Link from "next/link";
import { useState } from "react";
import type { FaqItem } from "@/lib/faq/types";

type FaqAccordionProps = {
  items: FaqItem[];
  defaultOpenId?: string;
};

export function FaqAccordion({ items, defaultOpenId }: FaqAccordionProps) {
  const initialOpen = defaultOpenId ?? items[0]?.id ?? null;
  const [openId, setOpenId] = useState<string | null>(initialOpen);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <div key={item.id}>
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              className="flex w-full items-start justify-between gap-4 py-4 text-left transition-colors hover:text-accent sm:py-4"
            >
              <span className="text-base font-semibold leading-snug text-foreground sm:text-[1.0625rem]">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-lg leading-none text-muted transition-colors"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-4 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                  {item.answer}
                  {item.answerLink ? (
                    <>
                      <Link
                        href={item.answerLink.href}
                        className="font-medium text-accent transition-colors hover:text-accent-hover"
                      >
                        {item.answerLink.label}
                      </Link>
                      {item.answerLink.after ?? ""}
                    </>
                  ) : null}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
