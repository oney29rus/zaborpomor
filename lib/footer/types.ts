export type FooterNavItem = {
  label: string;
  /** Целевой URL раздела */
  href: string;
  /** false — страница ещё не опубликована, ссылка не выводится */
  published: boolean;
};

export type FooterNavGroup = {
  title: string;
  items: FooterNavItem[];
};

export type FooterSocialLink = {
  label: string;
  /** null — реальный URL ещё не задан, ссылку не показываем */
  href: string | null;
};

export type FooterCompanyInfo = {
  name: string;
  description: string;
  phone: string;
  phoneHref: string;
  social: FooterSocialLink;
};

export type FooterLegalLink = {
  label: string;
  href: string;
  published: boolean;
};

export type FooterConfig = {
  company: FooterCompanyInfo;
  fenceLinks: FooterNavGroup;
  cityLinks: FooterNavGroup;
  serviceLinks: FooterNavGroup;
  companyLinks: FooterNavGroup;
  legal: {
    copyright: string;
    privacy: FooterLegalLink;
  };
};
