import { CalculatorSection } from "@/components/calculator/CalculatorSection";
import { getFencePageCalculatorConfig } from "@/lib/calculator/config";
import { FinalCtaSection } from "@/components/cta/FinalCtaSection";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { FencePageContent } from "@/lib/fence-pages/types";
import {
  buildBreadcrumbJsonLd,
  buildFaqPageJsonLd,
} from "@/lib/seo/json-ld";
import { FenceComparisonSection } from "./FenceComparisonSection";
import { FenceFaqSection } from "./FenceFaqSection";
import { FenceGatesSection } from "./FenceGatesSection";
import { FenceGeoSection } from "./FenceGeoSection";
import { FenceRelatedLinks } from "./FenceRelatedLinks";
import { FenceIncludesSection } from "./FenceIncludesSection";
import { FenceMountOnlyCta } from "./FenceMountOnlyCta";
import { FencePricingSection } from "./FencePricingSection";
import { FenceProcessSection } from "./FenceProcessSection";
import { FenceVariantsSection } from "./FenceVariantsSection";
import { FenceWhyUsSection } from "./FenceWhyUsSection";
import { FenceWorksSection } from "./FenceWorksSection";
import { ServiceHero } from "./ServiceHero";
import { SpecsStrip } from "./SpecsStrip";

type FencePageViewProps = {
  content: FencePageContent;
};

export function FencePageView({ content }: FencePageViewProps) {
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
        <SpecsStrip specs={content.specs} />
        <FencePricingSection pricing={content.pricing} />
        <FenceIncludesSection includes={content.includes} />
        <FenceMountOnlyCta />
        <CalculatorSection
          config={getFencePageCalculatorConfig(content.fenceTypeId)}
          label={content.calculator.label}
          title={content.calculator.title}
          description={content.calculator.description}
          initialParams={content.calculator.initialParams}
        />
        <FenceVariantsSection
          title={content.variants.title}
          items={content.variants.items}
        />
        {content.comparison ? (
          <FenceComparisonSection comparison={content.comparison} />
        ) : null}
        <FenceWorksSection
          works={content.works}
          sectionId={`${content.slug}-works`}
        />
        {content.features ? (
          <FenceWhyUsSection
            title={content.features.title}
            points={content.features.points}
            className="bg-background"
          />
        ) : null}
        <FenceGatesSection
          title={content.gates.title}
          intro={content.gates.intro}
          items={content.gates.items}
        />
        <FenceProcessSection
          title={content.process.title}
          steps={content.process.steps}
        />
        <FenceWhyUsSection
          title={content.whyUs.title}
          points={content.whyUs.points}
        />
        <FenceFaqSection faq={content.faq} />
        {content.relatedFences ? (
          <FenceRelatedLinks relatedFences={content.relatedFences} />
        ) : null}
        <FenceGeoSection geo={content.geo} />
        <FinalCtaSection
          label={content.cta.label}
          title={content.cta.title}
          description={content.cta.description}
        />
      </main>
      <Footer />
    </>
  );
}
