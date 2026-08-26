"use client";

import { useSyncExternalStore } from "react";
import type { FaqItem } from "@/lib/faq/types";
import { FaqAccordion } from "./FaqAccordion";

type HomeFaqAccordionProps = {
  items: FaqItem[];
  desktopDefaultOpenId?: string;
};

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(min-width: 1024px)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getDesktopSnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function getServerSnapshot() {
  return true;
}

export function HomeFaqAccordion({
  items,
  desktopDefaultOpenId,
}: HomeFaqAccordionProps) {
  const isDesktop = useSyncExternalStore(
    subscribe,
    getDesktopSnapshot,
    getServerSnapshot,
  );

  const defaultOpenId = isDesktop ? (desktopDefaultOpenId ?? null) : null;

  return (
    <FaqAccordion
      key={defaultOpenId ?? "mobile-closed"}
      items={items}
      defaultOpenId={defaultOpenId}
    />
  );
}
