/** Curated portfolio slugs for the homepage — first 4 visible on mobile, all 8 on desktop. */

export const HOMEPAGE_FEATURED_WORK_SLUGS = [
  "profnastil-shirsha",
  "metalloshtaketnik-snt-avtomobilist",
  "3d-katuninec",
  "derevyannyy-shtaketnik-zaostrovye",
  "profnastil-snt-sever",
  "setka-ocinc",
  "setka-pvh-25",
  "metalloshtaketnik-derevnya-buty",
] as const;

/** How many work cards to show on mobile homepage (first N slugs from the list above). */
export const HOMEPAGE_MOBILE_WORKS_VISIBLE = 4;
