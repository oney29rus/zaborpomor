"use client";

import Link from "next/link";
import { useState } from "react";
import type { FooterNavItem } from "@/lib/footer/types";

const linkClassName =
  "text-sm text-white/70 transition-colors hover:text-accent";

function FooterNavLink({ item }: { item: FooterNavItem }) {
  if (!item.published) {
    return <span className="text-sm text-white/50">{item.label}</span>;
  }

  return (
    <Link href={item.href} className={linkClassName}>
      {item.label}
    </Link>
  );
}

function FooterAccordionGroup({
  title,
  items,
  defaultOpen = false,
}: {
  title: string;
  items: FooterNavItem[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between py-2.5 text-left text-sm font-semibold text-white"
      >
        {title}
        <span
          aria-hidden="true"
          className={`ml-3 text-xs text-white/50 transition-transform ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      {open ? (
        <ul className="space-y-2 pb-3">
          {items.map((item) => (
            <li key={`${title}-${item.href}`}>
              <FooterNavLink item={item} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

type FooterMobileNavProps = {
  groups: Array<{ title: string; items: FooterNavItem[] }>;
};

export function FooterMobileNav({ groups }: FooterMobileNavProps) {
  return (
    <nav aria-label="Навигация по сайту" className="lg:hidden">
      {groups.map((group, index) => (
        <FooterAccordionGroup
          key={group.title}
          title={group.title}
          items={group.items}
          defaultOpen={index === 0}
        />
      ))}
    </nav>
  );
}
