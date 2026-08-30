import { InternalLink } from "@/components/ui/InternalLink";
import { FOOTER_CONFIG } from "@/lib/footer/navigation";
import { FooterMobileNav } from "@/components/layout/FooterMobileNav";
import { SECTION_CONTAINER } from "@/lib/section-styles";
import type { FooterNavItem } from "@/lib/footer/types";

const linkClassName =
  "text-sm text-white/70 transition-colors hover:text-accent";

const mutedTextClassName = "text-sm text-white/50";

function FooterNavLink({ item }: { item: FooterNavItem }) {
  if (!item.published) {
    return <span className={mutedTextClassName}>{item.label}</span>;
  }

  return (
    <InternalLink href={item.href} className={linkClassName}>
      {item.label}
    </InternalLink>
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
      <ul className="mt-3 space-y-2 lg:mt-4 lg:space-y-2.5">
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
      <div className={`${SECTION_CONTAINER} py-6 sm:py-12 lg:py-14`}>
        <div className="lg:grid lg:grid-cols-5 lg:gap-8 xl:gap-10">
          <div className="max-w-sm lg:col-span-1">
            <p className="text-sm font-bold tracking-[0.12em] text-white">
              {company.name}
            </p>
            <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-white/65 lg:mt-3">
              {company.description}
            </p>
            <a
              href={company.phoneHref}
              className="mt-2 inline-flex text-base font-semibold text-white transition-colors hover:text-accent lg:mt-5"
            >
              {company.phone}
            </a>
            {company.social.href ? (
              <a
                href={company.social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-3 inline-flex ${linkClassName} lg:mt-4`}
              >
                {company.social.label}
              </a>
            ) : null}
          </div>

          <FooterMobileNav
            groups={[
              fenceLinks,
              cityLinks,
              serviceLinks,
              companyLinks,
            ]}
          />

          <div className="mt-0 hidden grid-cols-4 gap-8 lg:col-span-4 lg:mt-0 lg:grid">
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

        <div className="mt-4 border-t border-white/10 pt-3 sm:mt-12 sm:pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="text-sm text-white/50">{legal.copyright}</p>
            {legal.privacy.published ? (
              <InternalLink
                href={legal.privacy.href}
                className={`inline-flex ${linkClassName}`}
              >
                {legal.privacy.label}
              </InternalLink>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
