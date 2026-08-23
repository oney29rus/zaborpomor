import Link from "next/link";
import { FOOTER_CONFIG } from "@/lib/footer/navigation";
import { SECTION_CONTAINER, SECTION_PY_COMPACT } from "@/lib/section-styles";
import type { FooterNavItem } from "@/lib/footer/types";

const linkClassName =
  "text-sm text-white/70 transition-colors hover:text-accent";

const mutedTextClassName = "text-sm text-white/50";

function FooterNavLink({ item }: { item: FooterNavItem }) {
  if (!item.published) {
    return <span className={mutedTextClassName}>{item.label}</span>;
  }

  return (
    <Link href={item.href} className={linkClassName}>
      {item.label}
    </Link>
  );
}

function FooterNavGroup({
  title,
  items,
  className = "",
}: {
  title: string;
  items: FooterNavItem[];
  className?: string;
}) {
  return (
    <nav aria-label={title} className={className}>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={`${title}-${item.href}`}>
            <FooterNavLink item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const { company, fenceLinks, cityLinks, serviceLinks, companyLinks, legal } =
    FOOTER_CONFIG;

  return (
    <footer className="bg-[#141414] text-white">
      <div className={`${SECTION_CONTAINER} ${SECTION_PY_COMPACT}`}>
        <div className="lg:grid lg:grid-cols-5 lg:gap-8 xl:gap-10">
          <div className="max-w-sm lg:col-span-1">
            <p className="text-sm font-bold tracking-[0.12em] text-white">
              {company.name}
            </p>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/65">
              {company.description}
            </p>
            <a
              href={company.phoneHref}
              className="mt-5 inline-flex text-base font-semibold text-white transition-colors hover:text-accent"
            >
              {company.phone}
            </a>
            {company.social.href ? (
              <a
                href={company.social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex ${linkClassName}`}
              >
                {company.social.label}
              </a>
            ) : null}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 lg:col-span-4 lg:mt-0 lg:grid-cols-4 lg:gap-8">
            <FooterNavGroup title={fenceLinks.title} items={fenceLinks.items} />
            <FooterNavGroup title={cityLinks.title} items={cityLinks.items} />
            <FooterNavGroup
              title={serviceLinks.title}
              items={serviceLinks.items}
            />
            <FooterNavGroup
              title={companyLinks.title}
              items={companyLinks.items}
            />
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="text-sm text-white/50">{legal.copyright}</p>
            {legal.privacy.published ? (
              <Link
                href={legal.privacy.href}
                className={`inline-flex ${linkClassName}`}
              >
                {legal.privacy.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
