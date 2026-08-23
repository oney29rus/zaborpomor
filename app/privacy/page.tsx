import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";
import { SECTION_CONTAINER } from "@/lib/section-styles";

const SITE_HOST = new URL(SITE_URL).hostname;

const PRIVACY_REVISION_DATE = "23 августа 2026 г.";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  robots: { index: false, follow: false },
};

const breadcrumbs = [
  { label: "Главная", href: "/" },
  { label: "Политика конфиденциальности", href: "/privacy/" },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <section className="border-b border-border bg-surface py-8 sm:py-10">
          <div className={`${SECTION_CONTAINER} max-w-3xl`}>
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Политика конфиденциальности
            </h1>
            <p className="mt-3 text-sm text-muted">
              Редакция от {PRIVACY_REVISION_DATE}
            </p>
          </div>
        </section>

        <section className="bg-background py-10 sm:py-12">
          <div className={`${SECTION_CONTAINER} max-w-3xl`}>
            <p className="text-base leading-relaxed text-muted">
              Настоящая политика описывает порядок обработки персональных данных
              пользователей сайта{" "}
              <Link
                href="/"
                className="font-medium text-foreground underline-offset-2 hover:underline"
              >
                {SITE_HOST}
              </Link>{" "}
              (далее — «Сайт»), принадлежащего оператору сайта
              {SITE_HOST} (далее — «Оператор»).
            </p>

            <Section title="1. Какие данные мы можем получать">
              <p>При использовании Сайта и отправке форм Оператор может обрабатывать:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>имя (если вы указали его в форме);</li>
                <li>номер телефона;</li>
                <li>
                  параметры, введённые в калькуляторе (тип забора, длина,
                  высота, ворота и другие выбранные опции);
                </li>
                <li>
                  технические данные: IP-адрес, тип браузера и устройства, дата и
                  время обращения, адрес страницы, с которой отправлена заявка;
                </li>
                <li>
                  данные cookies и localStorage, необходимые для работы Сайта и
                  сохранения маркетинговой атрибуции;
                </li>
                <li>
                  UTM-метки (utm_source, utm_medium, utm_campaign, utm_content,
                  utm_term), yclid и referrer — если вы перешли на Сайт по
                  рекламной или внешней ссылке.
                </li>
              </ul>
            </Section>

            <Section title="2. Цели обработки данных">
              <p>Персональные и технические данные обрабатываются для:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>приёма и обработки заявок с форм Сайта;</li>
                <li>обратной связи по вашему запросу;</li>
                <li>предварительного расчёта стоимости работ;</li>
                <li>
                  анализа работы Сайта и улучшения его содержания и удобства;
                </li>
                <li>
                  учёта эффективности рекламных кампаний (при наличии
                  UTM-меток и yclid).
                </li>
              </ul>
            </Section>

            <Section title="3. Правовые основания и способы обработки">
              <p>
                Обработка данных осуществляется на основании вашего согласия,
                выраженного при отправке формы, а также в случаях, когда
                обработка необходима для ответа на ваш запрос.
              </p>
              <p>
                Данные обрабатываются с использованием автоматизированных и
                неавтоматизированных средств: формы на Сайте, серверная часть
                Сайта, электронная почта для доставки заявок менеджеру.
              </p>
            </Section>

            <Section title="4. Срок хранения">
              <p>
                Данные заявок хранятся не дольше, чем это необходимо для
                обработки обращения, подготовки коммерческого предложения и
                ведения переписки по вашему запросу, либо до отзыва согласия —
                если иное не требуется действующим законодательством Российской
                Федерации.
              </p>
              <p>
                Технические данные и маркетинговая атрибуция в браузере могут
                храниться в localStorage до 30 дней с момента первого визита или
                до их удаления вами.
              </p>
            </Section>

            <Section title="5. Передача третьим лицам">
              <p>
                Оператор не продаёт персональные данные. Передача возможна
                только когда это необходимо для работы Сайта и обработки
                заявок — например, хостинг-провайдеру, почтовому сервису — либо
                когда этого требует закон.
              </p>
              <p>
                Сайт может использовать системы веб-аналитики для понимания
                поведения посетителей и улучшения сервиса. При подключении таких
                систем им могут передаваться обезличенные или технические данные
                в соответствии с их политиками конфиденциальности.
              </p>
            </Section>

            <Section title="6. Cookies и localStorage">
              <p>
                Сайт использует cookies и localStorage для корректной работы
                форм, сохранения маркетинговых меток (UTM, yclid, referrer) и,
                при включении, для работы систем веб-аналитики.
              </p>
              <p>
                Вы можете ограничить использование cookies в настройках браузера.
                Отключение cookies может повлиять на работу отдельных функций
                Сайта.
              </p>
            </Section>

            <Section title="7. Меры защиты">
              <p>
                Оператор принимает разумные организационные и технические меры
                для защиты данных от неправомерного доступа, изменения,
                раскрытия или уничтожения, включая ограничение доступа к
                заявкам и хранение конфигурации почтового сервиса на стороне
                сервера.
              </p>
            </Section>

            <Section title="8. Ваши права">
              <p>Вы вправе:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>запросить информацию об обработке ваших данных;</li>
                <li>потребовать уточнения, блокирования или удаления данных;</li>
                <li>отозвать согласие на обработку персональных данных.</li>
              </ul>
              <p>
                Для обращений по вопросам персональных данных напишите на{" "}
                <a
                  href="mailto:pomorzabor@yandex.ru"
                  className="font-medium text-foreground underline-offset-2 hover:underline"
                >
                  pomorzabor@yandex.ru
                </a>
                .
              </p>
            </Section>

            <Section title="9. Изменения политики">
              <p>
                Оператор может обновлять настоящую политику. Актуальная версия
                всегда доступна на этой странице. Дата редакции указана в начале
                документа.
              </p>
            </Section>

            <Link
              href="/"
              className="mt-10 inline-flex text-base font-semibold text-foreground transition-colors hover:text-accent"
            >
              На главную →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
