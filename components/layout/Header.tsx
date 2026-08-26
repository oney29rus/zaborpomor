import Image from "next/image";
import Link from "next/link";
import { HeaderCalculatorCta } from "@/components/layout/HeaderCalculatorCta";
import { MobileMenu } from "@/components/layout/MobileMenu";
import {
  NAV_LINKS,
  PHONE,
  PHONE_HREF,
  SITE_LOGO_ALT,
  SITE_LOGO_SRC,
} from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:grid lg:h-[72px] lg:grid-cols-[1fr_auto_1fr] lg:justify-normal">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="inline-flex h-12 items-center overflow-visible lg:h-[56px]">
            <Image
              src={SITE_LOGO_SRC}
              alt={SITE_LOGO_ALT}
              width={512}
              height={512}
              priority
              className="h-[118%] w-auto max-w-none object-contain object-left"
              sizes="(max-width: 1024px) 54px, 66px"
            />
          </span>
        </Link>

        <nav
          aria-label="Основная навигация"
          className="hidden items-center justify-center gap-8 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.9375rem] font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3 lg:gap-5">
          <a
            href={PHONE_HREF}
            className="hidden whitespace-nowrap text-[0.9375rem] font-semibold text-foreground transition-colors hover:text-accent lg:block"
          >
            {PHONE}
          </a>
          <HeaderCalculatorCta className="hidden min-h-11 px-5 py-2.5 text-sm lg:inline-flex" />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
