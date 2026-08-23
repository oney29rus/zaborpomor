import Link from "next/link";
import type { Review } from "@/lib/reviews/types";

type ReviewCardProps = {
  review: Review;
};

function ReviewStars({ rating, isDemo }: { rating: number | null; isDemo: boolean }) {
  const count = rating ?? 5;
  const label = isDemo
    ? "Рейтинг будет добавлен с реальным отзывом"
    : `Оценка: ${count} из 5`;

  return (
    <div
      className="flex gap-0.5 text-sm tracking-widest text-foreground/35"
      aria-label={label}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewCard({ review }: ReviewCardProps) {
  const projectHref = review.projectSlug
    ? `/raboty/${review.projectSlug}/`
    : null;

  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-surface px-5 py-5 sm:px-6 sm:py-6">
      <ReviewStars rating={review.rating} isDemo={review.isDemo} />

      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
        {review.text}
      </blockquote>

      <div className="mt-5 space-y-1 text-sm">
        <p className="text-foreground">
          <span className="text-muted">Имя: </span>
          {review.name ?? "—"}
        </p>
        <p className="text-foreground">
          <span className="text-muted">Город: </span>
          {review.city ?? "—"}
        </p>
        <p className="text-foreground">
          <span className="text-muted">Тип забора: </span>
          {review.fenceType ?? "—"}
        </p>
      </div>

      {projectHref && (
        <Link
          href={projectHref}
          className="mt-4 inline-flex text-sm font-semibold text-foreground transition-colors hover:text-accent"
        >
          Посмотреть объект →
        </Link>
      )}
    </article>
  );
}
