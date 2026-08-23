import { FinalCtaSection } from "@/components/cta/FinalCtaSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FenceFaqSection } from "@/components/fence-pages/FenceFaqSection";
import { FenceGeoSection } from "@/components/fence-pages/FenceGeoSection";
import { FenceIncludesSection } from "@/components/fence-pages/FenceIncludesSection";
import { FencePricingSection } from "@/components/fence-pages/FencePricingSection";
import { FenceProcessSection } from "@/components/fence-pages/FenceProcessSection";
import { FenceRelatedLinks } from "@/components/fence-pages/FenceRelatedLinks";
import { FenceVariantsSection } from "@/components/fence-pages/FenceVariantsSection";
import { ServiceHero } from "@/components/fence-pages/ServiceHero";
import type { MontazhPageContent } from "@/lib/service-pages/montazh/content";
import {
  buildBreadcrumbJsonLd,
  buildFaqPageJsonLd,
} from "@/lib/seo/json-ld";
import { publicImageExists } from "@/lib/services/images";
import { MountComparisonSection } from "./MountComparisonSection";
import { MountRequirementsSection } from "./MountRequirementsSection";
import { ServiceWorksSection } from "./ServiceWorksSection";

type MontazhServicePageViewProps = {
  content: MontazhPageContent;
};

export function MontazhServicePageView({ content }: MontazhServicePageViewProps) {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(
    content.breadcrumbs.map((item) => ({
      name: item.label,
      path: item.href,
    })),
  );
  const faqJsonLd = buildFaqPageJsonLd(content.faq.items);

  const hero = {
    ...content.hero,
    image:
      content.hero.image && publicImageExists(content.hero.image)
        ? content.hero.image
        : null,
    imageSourcePath: content.hero.image ?? content.hero.imageSourcePath,
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      <Header />
      <main className="flex flex-1 flex-col">
        <ServiceHero
          breadcrumbs={<Breadcrumbs items={content.breadcrumbs} />}
          hero={hero}
        />
        <FencePricingSection pricing={content.pricing} />
        {content.variants ? (
          <FenceVariantsSection
            title={content.variants.title}
            items={content.variants.items}
            intro={content.variantsIntro}
          />
        ) : null}
        <FenceProcessSection
          title={content.process.title}
          steps={content.process.steps}
        />
        <MountRequirementsSection
          title={content.requirements.title}
          items={content.requirements.items}
          note={content.requirements.note}
        />
        <MountComparisonSection
          title={content.mountComparison.title}
          options={content.mountComparison.options}
        />
        <FenceIncludesSection includes={content.includes} />
        <ServiceWorksSection
          title={content.works.title}
          sectionId={`${content.slug}-works`}
        />
        <FenceFaqSection faq={content.faq} />
        {content.relatedLinks ? (
          <FenceRelatedLinks
            relatedFences={{
              title: content.relatedLinks.title,
              links: content.relatedLinks.links,
            }}
          />
        ) : null}
        <FenceGeoSection geo={content.geo} />
        <div id="request">
          <FinalCtaSection
            label={content.cta.label}
            title={content.cta.title}
            description={content.cta.description}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
