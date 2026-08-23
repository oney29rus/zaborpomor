import Link from "next/link";
import { getPublishedReviews, REVIEWS_ALL_HREF } from "@/lib/reviews/reviews";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
  SECTION_LABEL,
  SECTION_LINK,
  SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";
import { ReviewCard } from "./ReviewCard";

export function ReviewsSection() {
  const reviews = getPublishedReviews();

  return (
    <section className={`bg-surface ${SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className={SECTION_LABEL}>Отзывы клиентов</p>
            <h2 className={SECTION_TITLE}>Что говорят после установки</h2>
            <p className={SECTION_DESC}>
              Отзывы клиентов о наших заборах и монтаже.
            </p>
          </div>

          <Link href={REVIEWS_ALL_HREF} className={`shrink-0 lg:pb-1 ${SECTION_LINK}`}>
            Все отзывы →
          </Link>
        </div>

        <div className={`${SECTION_CONTENT_MT} hidden gap-4 lg:grid lg:grid-cols-3`}>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className={`-mx-4 ${SECTION_CONTENT_MT} flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden`}>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-[85vw] max-w-[22rem] shrink-0 snap-start"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
