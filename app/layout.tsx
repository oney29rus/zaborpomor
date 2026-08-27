import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Suspense } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { AttributionCapture } from "@/components/analytics/AttributionCapture";
import { AnalyticsClickBridge } from "@/components/analytics/AnalyticsClickBridge";
import { YandexMetrika } from "@/components/analytics/YandexMetrika";
import { YandexMetrikaRouteTracker } from "@/components/analytics/YandexMetrikaRouteTracker";
import { defaultMetadata } from "@/lib/metadata";
import { buildOrganizationJsonLd } from "@/lib/seo/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationJsonLd = buildOrganizationJsonLd();

  return (
    <html lang="ru" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Suspense fallback={null}>
          <AttributionCapture />
          <YandexMetrikaRouteTracker />
        </Suspense>
        <AnalyticsClickBridge />
        <YandexMetrika />
        <JsonLd data={organizationJsonLd} />
        {children}
      </body>
    </html>
  );
}
