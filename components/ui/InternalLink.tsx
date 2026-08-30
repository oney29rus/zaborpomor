import Link from "next/link";
import type { ComponentProps } from "react";
import { normalizeInternalPath } from "@/lib/urls";

type InternalLinkProps = ComponentProps<typeof Link>;

function normalizeHref(href: InternalLinkProps["href"]): InternalLinkProps["href"] {
  if (typeof href === "string") {
    return normalizeInternalPath(href);
  }

  if (
    href &&
    typeof href === "object" &&
    "pathname" in href &&
    typeof href.pathname === "string"
  ) {
    return {
      ...href,
      pathname: normalizeInternalPath(href.pathname),
    };
  }

  return href;
}

export function InternalLink({ href, ...props }: InternalLinkProps) {
  return <Link href={normalizeHref(href)} {...props} />;
}
