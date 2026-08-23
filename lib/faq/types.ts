export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  /** Опциональная внутренняя ссылка в конце ответа */
  answerLink?: {
    href: string;
    label: string;
    after?: string;
  };
};

export type FaqSet = {
  id: string;
  items: FaqItem[];
};
