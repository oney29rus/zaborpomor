import { FENCE_CATALOG } from "@/lib/catalog/fence-types";
import { GEO_CITIES } from "@/lib/geo/cities";
import { PHONE, PHONE_HREF, SITE_NAME } from "@/lib/constants";
import type { FooterConfig, FooterNavItem } from "./types";

const FOOTER_FENCE_ORDER = [
  "profnastil",
  "metalloshtaketnik",
  "3d-setka",
  "svarnaya-setka",
  "svarnaya-setka-pvh",
  "derevyannyy-shtaketnik",
] as const;

const FOOTER_FENCE_LABELS: Partial<
  Record<(typeof FOOTER_FENCE_ORDER)[number], string>
> = {
  "svarnaya-setka-pvh": "Сварная сетка ПВХ",
};

function buildFenceLinks(): FooterNavItem[] {
  return FOOTER_FENCE_ORDER.map((slug) => {
    const item = FENCE_CATALOG.find((entry) => entry.slug === slug);

    if (!item) {
      throw new Error(`Footer fence link missing catalog entry: ${slug}`);
    }

    return {
      label: FOOTER_FENCE_LABELS[slug] ?? item.title,
      href: item.href,
      published:
        slug === "profnastil" ||
        slug === "metalloshtaketnik" ||
        slug === "3d-setka" ||
        slug === "svarnaya-setka" ||
        slug === "svarnaya-setka-pvh" ||
        slug === "derevyannyy-shtaketnik",
    };
  });
}

export const FOOTER_CONFIG: FooterConfig = {
  company: {
    name: SITE_NAME,
    description: "Производство и установка заборов\nв Архангельске и области.",
    phone: PHONE,
    phoneHref: PHONE_HREF,
    social: {
      label: "ВКонтакте →",
      // TODO: добавить реальный URL группы ВКонтакте
      href: null,
    },
  },
  fenceLinks: {
    title: "Заборы",
    items: buildFenceLinks(),
  },
  cityLinks: {
    title: "Города и районы",
    items: GEO_CITIES.map((city) => ({
      label: city.name,
      href: city.href,
      published: true,
    })),
  },
  serviceLinks: {
    title: "Услуги",
    items: [
      {
        label: "Монтаж из материала заказчика",
        href: "/uslugi/montazh-zabora-iz-materiala-zakazchika",
        published: true,
      },
      {
        label: "Каркас забора",
        href: "/uslugi/karkas-zabora",
        published: true,
      },
      {
        label: "Винтовые сваи",
        href: "/uslugi/vintovye-svai",
        published: true,
      },
      {
        label: "Распашные ворота",
        href: "/vorota/raspashnye",
        published: true,
      },
      {
        label: "Откатные ворота",
        href: "/vorota/otkatnye",
        published: true,
      },
    ],
  },
  companyLinks: {
    title: "Компания",
    items: [
      {
        label: "Наши работы",
        href: "/raboty",
        published: true,
      },
      {
        label: "Цены",
        href: "/ceny/",
        published: false,
      },
      {
        label: "О компании",
        href: "/o-kompanii/",
        published: false,
      },
      {
        label: "Контакты",
        href: "/kontakty/",
        published: false,
      },
    ],
  },
  legal: {
    copyright: `© 2026 ${SITE_NAME}`,
    privacy: {
      label: "Политика конфиденциальности",
      href: "/privacy",
      published: true,
    },
  },
};
