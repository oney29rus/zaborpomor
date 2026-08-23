import { Header } from "@/components/layout/Header";
import { CalculatorSection } from "@/components/calculator/CalculatorSection";
import { FenceTypesSection } from "@/components/catalog/FenceTypesSection";
import { AdditionalServicesSection } from "@/components/services/AdditionalServicesSection";
import { WorksSection } from "@/components/works/WorksSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { WhyUsSection } from "@/components/why/WhyUsSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { FinalCtaSection } from "@/components/cta/FinalCtaSection";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CitiesHubSection } from "@/components/home/CitiesHubSection";
import { CityMountOnlyPromo } from "@/components/geo-pages/CityMountOnlyPromo";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOMEPAGE_FAQ } from "@/lib/faq/items";
import { HOMEPAGE_FEATURED_WORK_SLUGS } from "@/lib/homepage/featured-works";
import {
  MONTAZH_IZ_MATERIALA_HREF,
  MONTAZH_IZ_MATERIALA_RANGE_LABEL,
} from "@/lib/services/mount-only";
import { buildFaqPageJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Заборы Поморья — заборы под ключ в Архангельской области",
  description:
    "Заборы под ключ с материалом и монтажом в Архангельске, Северодвинске и Новодвинске. 6 видов заборов, ворота, бесплатный замер и гарантия 24 месяца.",
  path: "/",
  image: "/images/hero-fence.jpg",
});

export default function HomePage() {
  const faqJsonLd = buildFaqPageJsonLd(HOMEPAGE_FAQ.items);

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <CalculatorSection />
        <CitiesHubSection />
        <FenceTypesSection />
        <CityMountOnlyPromo
          label="Монтаж из вашего материала"
          title="Материал для забора уже куплен?"
          description="Выполним только монтаж — установим забор из вашего материала."
          priceLabel={MONTAZH_IZ_MATERIALA_RANGE_LABEL}
          priceCaption="Стоимость зависит от типа забора и условий на участке"
          ctaLabel="Подробнее об установке →"
          ctaHref={MONTAZH_IZ_MATERIALA_HREF}
          className="bg-background"
        />
        <AdditionalServicesSection />
        <WorksSection
          projectSlugs={[...HOMEPAGE_FEATURED_WORK_SLUGS]}
          showFilters={false}
          mobileLayout="stack"
        />
        <PricingSection />
        <WhyUsSection />
        <ProcessSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
