import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function PanelZapisowSzkolaJezykowaContent({ lang }: Props) {
  const isPl = lang === "pl";

  const before = isPl
    ? [
        "Zgłoszenia z formularza trafiały na skrzynkę mailową i trzeba było je ręcznie przepisywać.",
        "Nikt nie widział w jednym miejscu, kto czeka na lekcję próbną, a kto już po niej.",
        "Po lekcji próbnej o decyzję trzeba było dopytywać telefonicznie, często za późno.",
        "Odwołane zajęcia oznaczały kilkanaście telefonów, żeby znaleźć uczniom inny termin.",
      ]
    : [
        "Form submissions landed in an inbox and had to be retyped by hand.",
        "Nobody could see in one place who was waiting for a trial lesson and who had already had one.",
        "After a trial lesson the decision had to be chased by phone, often too late.",
        "A cancelled class meant a dozen phone calls to find students another slot.",
      ];

  const modules = isPl
    ? [
        ["Zapisy", "Każde zgłoszenie z formularza na stronie trafia automatycznie na listę z etapem: nowe, lekcja próbna, czeka na decyzję, zapisany, rezygnacja."],
        ["Dopasowanie grupy", "Przy umawianiu lekcji próbnej panel pokazuje tylko grupy pasujące poziomem i wiekiem dziecka, z liczbą wolnych miejsc."],
        ["Po lekcji", "Po lekcji próbnej rodzic dostaje wiadomość z trzema przyciskami: zapisujemy, mam pytanie, jeszcze nie. Kliknięcie od razu zmienia status w panelu."],
        ["Odrabianie zajęć", "Po odwołaniu zajęć system proponuje każdemu uczniowi dwa terminy w grupach na tym samym poziomie, z wolnym miejscem."],
        ["Na dziś", "Rano sekretariat widzi krótką listę: do kogo zadzwonić, kto czeka za długo, co wymaga uwagi."],
        ["Statystyki i historia", "Ile zgłoszeń w miesiącu, ilu zapisanych, dlaczego rodzice rezygnują oraz pełna historia wysłanych wiadomości."],
      ]
    : [
        ["Enrollments", "Every website form submission lands automatically on a list with a stage: new, trial lesson, awaiting decision, enrolled, dropped out."],
        ["Group matching", "When booking a trial lesson, the panel shows only groups matching the child's level and age, with free seats."],
        ["After the lesson", "After a trial lesson the parent receives a message with three buttons: enroll, I have a question, not yet. The click updates the panel right away."],
        ["Make-up classes", "When a class is cancelled, the system offers each student two slots in same-level groups with free seats."],
        ["Today", "Every morning the office sees a short list: whom to call, who has been waiting too long, what needs attention."],
        ["Stats and history", "Submissions per month, enrollments, why parents drop out, and a full history of sent messages."],
      ];

  const lessons = isPl
    ? [
        ["Nie zastępować tego, co działa", "Szkoła miała już formularz na stronie i system do umów i płatności. Panel podpina się pod istniejący formularz i zajmuje się tylko tym, czego brakowało: etapem przed zapisem."],
        ["Prosty język zamiast branżowego", "W panelu nie ma słów typu lejek czy pipeline. Są zakładki: Zapisy, Po lekcji, Zajęcia, Na dziś. Sekretariat rozumie je bez szkolenia."],
        ["Rodzic bez logowania", "Rodzic nie zakłada konta. Dostaje jednorazowy, podpisany link, który działa z telefonu jednym kliknięciem."],
        ["Najpierw działający prototyp", "Zamiast specyfikacji szkoła dostała działający panel na przykładowych danych, żeby ocenić go na swoich przypadkach przed decyzją o wdrożeniu."],
      ]
    : [
        ["Don't replace what works", "The school already had a website form and a system for contracts and payments. The panel plugs into the existing form and only handles what was missing: the stage before enrollment."],
        ["Plain language instead of jargon", "The panel has no words like funnel or pipeline. The tabs are Enrollments, After lesson, Classes, Today. The office understands them without training."],
        ["No login for parents", "Parents don't create accounts. They get a one-time signed link that works on a phone with a single tap."],
        ["A working prototype first", "Instead of a specification, the school received a working panel on sample data to test it against its own cases before deciding on implementation."],
      ];

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "Szkoła językowa prowadzi kilkanaście grup dla dzieci i młodzieży. Zapisy szły przez formularz na stronie, a dalej wszystko działo się w mailach, telefonach i pamięci sekretariatu. Poniżej opisuję, jak zaprojektowałem panel zapisów, który porządkuje drogę od zgłoszenia do zapisu, i czego ten projekt uczy przy automatyzacji w małej firmie."
          : "A language school runs over a dozen groups for children and teenagers. Enrollment started with a website form, and everything after that lived in emails, phone calls and the office's memory. Below I describe how I designed an enrollment panel that organizes the path from inquiry to enrollment, and what the project teaches about automation in a small business."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Punkt wyjścia: gdzie uciekały zapisy" : "Starting point: where enrollments were slipping"}
        </h2>
        <ul className="space-y-3">
          {before.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 flex-none rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          {isPl
            ? "Szkoła miała już system do umów, płatności i dziennika. Problem nie dotyczył uczniów, tylko rodziców, którzy jeszcze nie podjęli decyzji. To na tym etapie szkoła traciła najwięcej."
            : "The school already had a system for contracts, payments and attendance. The problem wasn't current students but parents who hadn't decided yet. That stage is where the school lost the most."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Co robi panel zapisów" : "What the enrollment panel does"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map(([title, text]) => (
            <article key={title} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Jak wygląda droga rodzica" : "The parent's journey"}
        </h2>
        <ol className="space-y-4">
          {(isPl
            ? [
                "Rodzic wypełnia formularz na stronie szkoły, tak jak wcześniej.",
                "Zgłoszenie pojawia się w panelu, a rodzic dostaje potwierdzenie.",
                "Sekretariat umawia lekcję próbną w pasującej grupie. Dzień wcześniej wychodzi przypomnienie.",
                "Po lekcji rodzic dostaje wiadomość z przyciskami decyzji. Jeśli nie odpowie, przypomnienie wychodzi po 2 i 5 dniach.",
                "Decyzja rodzica zmienia status i zatrzymuje kolejne przypomnienia. Pytanie trafia do sekretariatu.",
              ]
            : [
                "The parent fills in the form on the school's website, just like before.",
                "The submission appears in the panel and the parent receives a confirmation.",
                "The office books a trial lesson in a matching group. A reminder goes out the day before.",
                "After the lesson the parent gets a message with decision buttons. If there's no answer, reminders follow after 2 and 5 days.",
                "The parent's decision updates the status and stops further reminders. Questions go to the office.",
              ]
          ).map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-primary/40 text-sm font-bold text-primary">
                {index + 1}
              </span>
              <span className="pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Decyzje projektowe, które warto skopiować" : "Design decisions worth copying"}
        </h2>
        <div className="space-y-4">
          {lessons.map(([title, text]) => (
            <div key={title} className="border-l-2 border-primary/50 pl-4">
              <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Technologia i koszty" : "Technology and cost"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Panel działa w przeglądarce na komputerze i telefonie, z jasnym i ciemnym motywem oraz logo szkoły. Dane są na serwerach w Unii Europejskiej, a każdy pracownik ma własne konto z odpowiednią rolą. Wiadomości wychodzą mailem, a SMS można dołączyć w kolejnym kroku."
            : "The panel runs in the browser on desktop and phone, with light and dark themes and the school's logo. Data is stored on servers in the European Union, and every staff member has their own account with the right role. Messages go out by email, and SMS can be added in the next step."}
        </p>
        <p>
          {isPl
            ? "Wdrożenie takiego panelu zaczyna się od 2 500 zł netto, do tego stała miesięczna opłata za utrzymanie. Kolejne funkcje, np. integracja z systemem do umów, wyceniam osobno."
            : "Implementing a panel like this starts from PLN 2,500 net, plus a fixed monthly maintenance fee. Further features, such as integration with the contracts system, are quoted separately."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Dla kogo sprawdzi się podobne rozwiązanie" : "Who a similar solution works for"}
        </h2>
        <p>
          {isPl
            ? "Ten sam schemat pasuje do każdej firmy, w której klient najpierw się zgłasza, potem próbuje, a na końcu decyduje: szkoły językowe i muzyczne, akademie sportowe, szkoły tańca, kursy przedszkolne i zajęcia dodatkowe."
            : "The same pattern fits any business where a client first inquires, then tries, and finally decides: language and music schools, sports academies, dance schools, preschool courses and extracurricular classes."}
        </p>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Prowadzisz szkołę lub akademię?" : "Running a school or academy?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Pokażę działający prototyp panelu zapisów na przykładowych danych Twojej szkoły, zanim zdecydujesz o wdrożeniu."
            : "I'll show you a working enrollment panel prototype on sample data from your school before you decide on implementation."}
        </p>
        <Link
          href={isPl ? "/uslugi/system-zapisow-na-zajecia" : "/en/services/class-enrollment-system"}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black"
        >
          {isPl ? "Zobacz system zapisów na zajęcia" : "See the class enrollment system"}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
