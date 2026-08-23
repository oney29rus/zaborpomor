import { CalculatorSection } from "@/components/calculator/CalculatorSection";
import { FinalCtaSection } from "@/components/cta/FinalCtaSection";
import { FenceFaqSection } from "@/components/fence-pages/FenceFaqSection";
import { FenceWhyUsSection } from "@/components/fence-pages/FenceWhyUsSection";
import { ServiceHero } from "@/components/fence-pages/ServiceHero";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AdditionalServicesSection } from "@/components/services/AdditionalServicesSection";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import type { CityPageContent } from "@/lib/geo-pages/types";
import {
  buildBreadcrumbJsonLd,
  buildFaqPageJsonLd,
} from "@/lib/seo/json-ld";
import { FenceGatesSection } from "@/components/fence-pages/FenceGatesSection";
import { CityClimateSection } from "./CityClimateSection";
import { CityFenceTypesSection } from "./CityFenceTypesSection";
import { CityGeoSection } from "./CityGeoSection";
import { CityMountOnlyPromo } from "./CityMountOnlyPromo";
import { CityTurnkeyIncludesSection } from "./CityTurnkeyIncludesSection";
import { CityOtherCitiesSection } from "./CityOtherCitiesSection";
import { CityPricingSection } from "./CityPricingSection";
import { CityProcessSection } from "./CityProcessSection";
import { CityWorksSection } from "./CityWorksSection";

type CityLandingViewProps = {
  content: CityPageContent;
  mountOnlyPromo: {
    label: string;
    title: string;
    description: string;
    priceLabel: string;
    priceCaption: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

export function CityLandingView({ content, mountOnlyPromo }: CityLandingViewProps) {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(
    content.breadcrumbs.map((item) => ({
      name: item.label,
      path: item.href,
    })),
  );
  const faqJsonLd = buildFaqPageJsonLd(content.faq.items);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      <Header />
      <main className="flex flex-1 flex-col">
        <ServiceHero
          breadcrumbs={<Breadcrumbs items={content.breadcrumbs} />}
          hero={content.hero}
        />

        <CityFenceTypesSection
          title={content.sections.fenceTypes}
          slugs={content.fenceTypeSlugs}
          imageOverrides={content.fenceImages}
        />

        <CityPricingSection
          title={content.sections.pricing}
          disclaimer={content.pricingDisclaimer}
        />

        <CalculatorSection
          id="calculator"
          title={content.sections.calculator}
          initialParams={content.calculatorInitialParams}
          className="scroll-mt-24 bg-background py-10 sm:py-10 lg:py-12"
        />

        <CityWorksSection
          title={content.sections.works}
          projectSlugs={content.workProjectSlugs}
          layout={content.worksLayout}
          allWorksHref={content.worksAllWorksHref}
        />

        <CityGeoSection
          title={content.geography.title}
          paragraphs={content.geography.paragraphs}
          className="bg-background"
        />

        {content.turnkeyIncludes ? (
          <CityTurnkeyIncludesSection
            title={content.turnkeyIncludes.title}
            items={content.turnkeyIncludes.items}
            note={content.turnkeyIncludes.note}
          />
        ) : null}

        <AdditionalServicesSection
          className="bg-surface"
          title={content.sections.additionalServices}
        />

        <CityMountOnlyPromo {...mountOnlyPromo} className="bg-background" />

        {content.gates ? (
          <FenceGatesSection
            title={content.gates.title}
            intro={content.gates.intro}
            items={content.gates.items}
          />
        ) : null}

        <CityProcessSection
          title={content.process.title}
          steps={content.process.steps}
          className="bg-surface"
        />

        {content.climate ? (
          <CityClimateSection
            title={content.climate.title}
            points={content.climate.points}
            footer={content.climate.footer}
            link={content.climate.link}
          />
        ) : null}

        <FenceWhyUsSection
          title={content.whyUs.title}
          points={content.whyUs.points}
        />

        <FenceFaqSection faq={content.faq} className="bg-background" />

        <CityOtherCitiesSection
          title={content.otherCities.title}
          links={content.otherCities.links}
          className="bg-surface"
        />

        <FinalCtaSection title={content.finalCta.title} />
      </main>
      <Footer />
    </>
  );
}
