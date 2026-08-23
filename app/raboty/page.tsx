import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import { WorksIndexView } from "@/components/work-pages/WorksIndexView";

export const metadata: Metadata = createPageMetadata({
  title: "Наши работы — фото установленных заборов",
  description:
    "Фото установленных заборов в Архангельске, Северодвинске, Новодвинске и области. Реальные объекты, цены, размеры и сроки монтажа.",
  path: "/raboty/",
});

export default function RabotyPage() {
  return <WorksIndexView />;
}
