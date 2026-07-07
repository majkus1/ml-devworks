import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function AgenciAIObslugaKlientaContent({ lang }: Props) {
  const isPl = lang === "pl";

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "Agent AI w obsłudze klienta ma sens wtedy, gdy firma regularnie odpowiada na podobne pytania, kwalifikuje zapytania albo traci sprzedaż przez zbyt wolny czas reakcji. Nie każdy przypadek wymaga jednak agenta - czasem wystarczy lepszy formularz, baza wiedzy albo prosty chatbot."
          : "An AI agent in customer service makes sense when a company repeatedly answers similar questions, qualifies enquiries, or loses sales due to slow response times. Not every case needs an agent - sometimes a better form, knowledge base, or simple chatbot is enough."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Agent AI, chatbot i automatyzacja - różnice" : "AI agent, chatbot, and automation - the differences"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Chatbot odpowiada według prostych reguł lub bazy wiedzy." : "A chatbot answers using simple rules or a knowledge base."}</li>
          <li>{isPl ? "Agent AI może zebrać dane, dopytać, sklasyfikować sprawę i uruchomić akcję w systemie." : "An AI agent can collect data, ask follow-up questions, classify the case, and trigger an action in a system."}</li>
          <li>{isPl ? "Automatyzacja workflow przenosi dane i zadania między narzędziami." : "Workflow automation moves data and tasks between tools."}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Kiedy agent AI się opłaca?" : "When is an AI agent worth it?"}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {(isPl
            ? [
                "Masz dużo pytań poza godzinami pracy.",
                "Zespół ręcznie kwalifikuje leady i zgłoszenia.",
                "Klienci pytają o status, ceny, dostępność lub terminy.",
                "Potrzebujesz szybkiej odpowiedzi, ale też eskalacji do człowieka.",
              ]
            : [
                "You receive many questions outside business hours.",
                "The team manually qualifies leads and tickets.",
                "Customers ask about status, pricing, availability, or dates.",
                "You need fast responses, but also escalation to humans.",
              ]
          ).map((item) => (
            <article key={item} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Co powinien robić agent AI w firmie?" : "What should a business AI agent do?"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Odpowiadać na powtarzalne pytania na podstawie aktualnej bazy wiedzy." : "Answer repetitive questions using an up-to-date knowledge base."}</li>
          <li>{isPl ? "Zbierać dane potrzebne do wyceny lub obsługi zgłoszenia." : "Collect data needed for quotes or support cases."}</li>
          <li>{isPl ? "Tworzyć zadania w CRM, helpdesku lub panelu wewnętrznym." : "Create tasks in CRM, helpdesk, or internal panels."}</li>
          <li>{isPl ? "Przekazywać trudne sprawy do człowieka z kontekstem rozmowy." : "Escalate complex issues to humans with conversation context."}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Ryzyka, które trzeba kontrolować" : "Risks that need control"}
        </h2>
        <p>
          {isPl
            ? "Agent AI powinien mieć ograniczony zakres, logi rozmów, jasny moment przekazania sprawy do człowieka i aktualną bazę wiedzy. Bez tego może udzielać niespójnych odpowiedzi albo obiecywać rzeczy, których firma nie realizuje."
            : "An AI agent should have a limited scope, conversation logs, clear human handoff rules, and an up-to-date knowledge base. Without this, it may give inconsistent answers or promise things the company does not deliver."}
        </p>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Chcesz sprawdzić, czy agent AI ma sens u Ciebie?" : "Want to check if an AI agent makes sense for your company?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Zaczynam od mapy pytań, źródeł wiedzy i punktów eskalacji. Dopiero potem projektuję agenta lub prostszą automatyzację."
            : "I start with a map of questions, knowledge sources, and escalation points. Only then do I design an agent or a simpler automation."}
        </p>
        <Link
          href={isPl ? "/uslugi/automatyzacja-i-ai" : "/en/services/automation-and-ai"}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black"
        >
          {isPl ? "Zobacz automatyzację i AI" : "View automation and AI"}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
