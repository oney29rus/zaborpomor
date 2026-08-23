export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
  highlighted?: boolean;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "request",
    step: "01",
    title: "Заявка",
    description: "Оставляете заявку или звоните нам.",
  },
  {
    id: "estimate",
    step: "02",
    title: "Расчёт",
    description: "Уточняем размеры и считаем предварительную стоимость.",
  },
  {
    id: "measure",
    step: "03",
    title: "Замер",
    description: "Уточняем параметры участка на месте.",
  },
  {
    id: "supply",
    step: "04",
    title: "Комплектация",
    description: "Готовим материал и всё необходимое для монтажа.",
  },
  {
    id: "install",
    step: "05",
    title: "Монтаж",
    description: "Бригада устанавливает забор.",
  },
  {
    id: "done",
    step: "06",
    title: "Готово",
    description: "Принимаете готовую работу.",
    highlighted: true,
  },
];
