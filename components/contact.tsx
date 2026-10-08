"use client";

import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { contactInfo, pool, programs } from "@/lib/club-data";
import { SectionLabel } from "@/components/lane-number";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const fieldLabel = "font-mono text-[11px] uppercase tracking-[0.14em] text-body";
const fieldInput =
  "w-full border-0 border-b-[1.5px] border-ink bg-transparent py-3.5 text-base text-ink placeholder:text-subtle/70 focus:border-maroon focus:outline-none focus-visible:ring-0 transition-colors";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitError("Forma još nije aktivirana. Potrebno je dodati Web3Forms access key.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "PK Sarajevo kontakt forma");
    const program = formData.get("program");
    formData.set(
      "subject",
      typeof program === "string" && program ? `Upit: ${program}` : "Nova poruka sa PK Sarajevo sajta",
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Došlo je do greške pri slanju.");
      }
      form.reset();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Došlo je do greške pri slanju poruke.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const details = [
    { label: "Telefon", value: contactInfo.phone, href: contactInfo.phoneHref },
    { label: "E-mail", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { label: "Bazen", value: `${pool.name}, ${pool.address} ↗`, href: pool.mapUrl, external: true },
  ];

  return (
    <section ref={ref} id="kontakt" className="flex scroll-mt-24 flex-wrap bg-tile">
      {/* Left: call to action */}
      <div className="bleed-l flex min-w-0 flex-[1_1_480px] flex-col justify-between gap-12 bg-maroon py-[clamp(56px,7vw,104px)] pr-[clamp(20px,4vw,56px)] text-white">
        <div data-reveal>
          <SectionLabel lane="07" title="Upis" tone="blush" />
          <h2 className="display mt-4 text-[clamp(80px,10vw,168px)] leading-[0.82]">
            Na
            <br />
            start.
          </h2>
          <p className="mt-6 max-w-[440px] text-lg leading-[1.6] text-blush">
            Pošaljite upit za upis u školu plivanja, prelazak u naprednu grupu ili termin individualnog
            treninga.
          </p>
        </div>
        <dl className="grid gap-[18px] text-[17px]" data-reveal>
          {details.map((d) => (
            <div key={d.label} className="flex flex-wrap items-baseline gap-3.5">
              <dt className="w-[90px] font-mono text-[11px] uppercase tracking-[0.14em] text-blush">{d.label}</dt>
              <dd>
                <a
                  href={d.href}
                  {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="font-bold text-white underline-offset-4 hover:underline"
                >
                  {d.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Right: form */}
      <div className="bleed-r min-w-0 flex-[1_1_480px] py-[clamp(56px,7vw,104px)] pl-[clamp(20px,4vw,56px)]">
        {submitted ? (
          <div className="max-w-[620px]" data-reveal>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-maroon text-white">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="display text-[64px]">Hvala!</h3>
            <p className="mt-4 text-lg leading-[1.6] text-body">
              Poruka je poslana. Javit ćemo vam se u najkraćem roku.
            </p>
            <button type="button" onClick={() => setSubmitted(false)} className="link-underline mt-6 border-maroon text-ink">
              Pošalji novi upit
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            data-reveal
            className="grid max-w-[620px] grid-cols-1 gap-x-5 gap-y-[22px] sm:grid-cols-2"
          >
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="flex flex-col gap-2">
              <label htmlFor="f-name" className={fieldLabel}>Ime i prezime</label>
              <input id="f-name" name="name" type="text" required autoComplete="name" placeholder="Vaše ime" className={fieldInput} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="f-phone" className={fieldLabel}>Telefon</label>
              <input id="f-phone" name="phone" type="tel" autoComplete="tel" placeholder="+387 6x xxx xxx" className={fieldInput} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="f-email" className={fieldLabel}>E-mail</label>
              <input id="f-email" name="email" type="email" required autoComplete="email" placeholder="vas@email.com" className={fieldInput} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="f-program" className={fieldLabel}>Program</label>
              <select id="f-program" name="program" className={fieldInput} defaultValue={programs[0].name}>
                {programs.map((p) => (
                  <option key={p.lane} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="f-message" className={fieldLabel}>Poruka</label>
              <textarea
                id="f-message"
                name="message"
                rows={4}
                required
                placeholder="Uzrast djeteta, iskustvo u vodi, pitanja…"
                className={`${fieldInput} resize-y`}
              />
            </div>

            <div className="mt-2 sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-[30px] py-[18px] text-base font-bold text-white transition-colors hover:bg-maroon disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Šaljem…" : "Pošalji upit"}
                <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
              </button>
              {submitError && (
                <p role="alert" className="mt-4 text-sm font-semibold text-maroon">
                  {submitError}
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
