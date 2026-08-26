"use client";

import { useState } from "react";

type MobileExpandableTextProps = {
  children: React.ReactNode;
  collapsedLines?: 2 | 3 | 4;
  className?: string;
};

const LINE_CLAMP_CLASS = {
  2: "max-lg:line-clamp-2",
  3: "max-lg:line-clamp-3",
  4: "max-lg:line-clamp-4",
} as const;

export function MobileExpandableText({
  children,
  collapsedLines = 3,
  className = "",
}: MobileExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className={`${className} ${
          expanded ? "max-lg:line-clamp-none" : LINE_CLAMP_CLASS[collapsedLines]
        } lg:line-clamp-none`}
      >
        {children}
      </div>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="mt-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover lg:hidden"
      >
        {expanded ? "Свернуть" : "Показать полностью"}
      </button>
    </div>
  );
}
