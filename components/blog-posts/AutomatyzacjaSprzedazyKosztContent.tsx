import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

/**
 * Wpis pod zapytanie „ile kosztuje automatyzacja procesu sprzedażowego”.
 * Krótka odpowiedź na górze (pod fragment wyróżniony w Google), potem widełki, wyliczenie i pułapki.
 */
export default function AutomatyzacjaSprzedazyKosztContent({ lang }: Props) {
  const isPl = lang === "pl";

  const tiers = isPl
    ? [
        {
          name: "Zapytania prosto do CRM",
          price: "2 500–4 000 zł netto",
          time: "3–7 dni roboczych",
          scope: "Formularz, e-mail i telefon trafiają do CRM jako jeden lead, handlowiec dostaje zadanie, klient automatyczne potwierdzenie.",
        },
        {
          name: "Kwalifikacja z AI i follow-upy",
          price: "6 000–12 000 zł netto",
          time: "2–4 tygodnie",
          scope: "Agent AI dopytuje o budżet, termin i zakres, ocenia lead, przygotowuje szkic odpowiedzi i pilnuje przypomnień, gdy klient milknie.",
        },
        {
          name: "Pełny lejek: oferta, faktura, raport",
          price: "od ok. 12 000 zł netto",
          time: "4–8 tygodni",
          scope: "Do tego generowanie ofert z cennika, akceptacja online, faktura po podpisaniu i raport sprzedaży dla właściciela.",
        },
      ]
    : [
        {
          name: "Enquiries straight to the CRM",
          price: "PLN 2,500–4,000 net",
          time: "3–7 business days",
          scope: "Form, email, and phone enquiries reach the CRM as one lead, sales gets a task, and the customer gets an automatic confirmation.",
        },
        {
          name: "AI qualification and follow-ups",
          price: "PLN 6,000–12,000 net",
          time: "2–4 weeks",
          scope: "An AI agent asks about budget, timing, and scope, scores the lead, drafts a reply, and chases the customer when they go quiet.",
        },
        {
          name: "Full funnel: quote, invoice, report",
          price: "from about PLN 12,000 net",
          time: "4–8 weeks",
          scope: "Plus quotes generated from your price list, online acceptance, an invoice after signing, and a sales report for the owner.",
        },
      ];

  return (
    <div className="space-y-12 leading-relaxed text-gray-300">
      <div className="rounded-2xl border border-primary/30 bg-primary/[0.06] p-6 md:p-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">{isPl ? "Krótka odpowiedź" : "Short answer"}</p>
        <p className="text-lg text-gray-100">
          {isPl
            ? "Automatyzacja procesu sprzedażowego w małej lub średniej firmie kosztuje zwykle od 2 500 zł netto (zapytania prosto do CRM) przez 6 000–12 000 zł netto (kwalifikacja leadów z AI i automatyczne follow-upy) do ok. 12 000 zł netto i więcej za pełny lejek z ofertami, fakturami i raportami. Do tego dochodzi koszt CRM i modeli AI — najczęściej kilkadziesiąt do kilkuset złotych miesięcznie."
            : "Sales process automation in a small or mid-sized company usually costs from PLN 2,500 net (enquiries straight to the CRM), through PLN 6,000–12,000 net (AI lead qualification and automatic follow-ups), to about PLN 12,000 net and more for a full funnel with quotes, invoices, and reports. Add the cost of the CRM and AI models — usually tens to a few hundred PLN per month."}
        </p>
      </div>

      <section>
        <h2 className="mb-5 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Cennik: trzy typowe zakresy" : "Pricing: three typical scopes"}</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full min-w-[620px] text-left text-[0.95rem]">
            <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.1em] text-gray-400">
              <tr>
                <th className="px-5 py-3 font-semibold">{isPl ? "Zakres" : "Scope"}</th>
                <th className="px-5 py-3 font-semibold">{isPl ? "Cena" : "Price"}</th>
                <th className="px-5 py-3 font-semibold">{isPl ? "Czas" : "Time"}</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier) => (
                <tr key={tier.name} className="border-t border-white/[0.06] align-top">
                  <td className="px-5 py-4">
                    <p className="font-semibold text-white">{tier.name}</p>
                    <p className="mt-1 text-sm text-gray-400">{tier.scope}</p>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 font-semibold text-primary">{tier.price}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-gray-300">{tier.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          {isPl
            ? "Ceny orientacyjne dla projektów, które realizuję. Dokładną kwotę podaję po bezpłatnym prototypie, przed startem prac."
            : "Indicative prices for projects I deliver. I give the exact amount after the free prototype, before work starts."}
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Od czego zależy cena" : "What drives the price"}</h2>
        <ul className="ml-2 list-inside list-disc space-y-2">
          {(isPl
            ? [
                "Ile jest źródeł zapytań: formularz, e-mail, telefon, Messenger, portale branżowe.",
                "Jaki CRM już masz (albo czy trzeba go dopiero wybrać) i czy ma API.",
                "Czy wystarczy prosty workflow, czy potrzebny jest agent AI, który rozumie treść zapytania.",
                "Czy oferta powstaje z cennika automatycznie, czy wymaga indywidualnej wyceny.",
                "Integracje dalej w procesie: podpis umowy, faktura, płatność, raporty.",
              ]
            : [
                "How many enquiry sources there are: form, email, phone, Messenger, industry portals.",
                "Which CRM you already use (or whether one needs choosing) and whether it has an API.",
                "Whether a simple workflow is enough or you need an AI agent that understands the enquiry.",
                "Whether quotes are generated from a price list or require individual pricing.",
                "Integrations later in the process: contract signing, invoice, payment, reports.",
              ]
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Przykładowe wyliczenie zwrotu" : "Example payback calculation"}</h2>
        <p>
          {isPl
            ? "Firma usługowa dostaje 120 zapytań miesięcznie. Przepisanie zapytania do CRM, dopytanie o szczegóły i przygotowanie wstępnej odpowiedzi zajmuje handlowcowi średnio 10 minut — to 20 godzin miesięcznie. Przy koszcie godziny pracy 60 zł daje to 1 200 zł miesięcznie samej pracy ręcznej, nie licząc zapytań, na które odpowiedź przyszła za późno."
            : "A service company receives 120 enquiries a month. Copying an enquiry into the CRM, asking follow-up questions, and preparing a first reply takes a salesperson about 10 minutes — 20 hours a month. At PLN 60 per hour that's PLN 1,200 a month of manual work alone, not counting enquiries answered too late."}
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {(isPl
            ? [
                ["Koszt wdrożenia", "6 000 zł netto", "kwalifikacja z AI + follow-upy"],
                ["Oszczędność", "ok. 1 200 zł / mies.", "20 godzin pracy handlowca"],
                ["Zwrot", "ok. 5 miesięcy", "bez liczenia odzyskanych klientów"],
              ]
            : [
                ["Implementation", "PLN 6,000 net", "AI qualification + follow-ups"],
                ["Savings", "about PLN 1,200 / month", "20 hours of sales time"],
                ["Payback", "about 5 months", "not counting recovered customers"],
              ]
          ).map(([label, value, note]) => (
            <div key={label} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">{label}</p>
              <p className="mt-2 text-xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-sm text-gray-400">{note}</p>
            </div>
          ))}
        </div>
        <p className="mt-5">
          {isPl
            ? "W praktyce największy zysk to nie same godziny, tylko szybkość: klient, który dostaje konkretną odpowiedź w kilka minut, rzadziej pyta konkurencję. Więcej o liczeniu zwrotu piszę w artykule "
            : "In practice the biggest gain isn't the hours but the speed: a customer who gets a concrete reply within minutes is less likely to ask a competitor. I explain the calculation in more detail in "}
          <Link href={isPl ? "/blog/ile-kosztuje-automatyzacja-procesow-w-firmie-i-jak-liczyc-roi" : "/en/blog/how-much-does-business-process-automation-cost-and-how-to-calculate-roi"}>
            {isPl ? "ile kosztuje automatyzacja procesów i jak liczyć ROI" : "business process automation cost and ROI"}
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Co zautomatyzować najpierw" : "What to automate first"}</h2>
        <ol className="ml-2 list-inside list-decimal space-y-2">
          {(isPl
            ? [
                "Zbieranie zapytań z wszystkich kanałów w jednym miejscu — bez tego reszta nie ma sensu.",
                "Natychmiastowa odpowiedź do klienta z konkretnym następnym krokiem.",
                "Przypomnienia o follow-upie, gdy klient nie odpisał po 2–3 dniach.",
                "Dopiero potem: oferty z cennika, podpis, faktura i raporty.",
              ]
            : [
                "Collecting enquiries from all channels in one place — without it nothing else makes sense.",
                "An immediate reply to the customer with a concrete next step.",
                "Follow-up reminders when the customer hasn't replied after 2–3 days.",
                "Only then: quotes from the price list, signing, invoicing, and reports.",
              ]
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Kiedy to się nie opłaca" : "When it doesn't pay off"}</h2>
        <p>
          {isPl
            ? "Jeśli dostajesz kilka zapytań miesięcznie i każde wymaga długiej, indywidualnej rozmowy, automatyzacja sprzedaży zwróci się wolno. Wtedy lepiej zacząć od jednej rzeczy: automatycznego potwierdzenia i zapisu zapytań w CRM, a resztę zostawić człowiekowi."
            : "If you get a few enquiries a month and each needs a long, individual conversation, sales automation pays back slowly. Then start with one thing: automatic confirmation and logging of enquiries in the CRM, and leave the rest to a person."}
        </p>
      </section>

      <section className="card-accent">
        <h2 className="mb-3 text-2xl font-semibold text-white">{isPl ? "Sprawdź na swoim procesie" : "Check it on your own process"}</h2>
        <p className="mb-5 text-gray-300">
          {isPl
            ? "Opisz, skąd przychodzą zapytania i co dzieje się z nimi dalej. W 2–5 dni pokażę działający prototyp i podam dokładną cenę — za darmo i bez zobowiązań."
            : "Describe where enquiries come from and what happens to them next. Within 2–5 days I'll show a working prototype and give an exact price — free and with no commitment."}
        </p>
        <Link href={isPl ? "/kontakt" : "/en/contact"} className="btn-primary !text-[#03140b] !no-underline">
          {isPl ? "Opisz swój proces sprzedaży" : "Describe your sales process"}
        </Link>
      </section>
    </div>
  );
}
