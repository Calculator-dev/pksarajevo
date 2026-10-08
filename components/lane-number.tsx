type SectionLabelProps = {
  lane: string;
  title: string;
  tone?: "maroon" | "signal" | "blush";
};

const toneClass = {
  maroon: "text-maroon",
  signal: "text-signal",
  blush: "text-blush",
};

/** "Staza 03 — Rezultati" style eyebrow used above every section heading. */
export function SectionLabel({ lane, title, tone = "maroon" }: SectionLabelProps) {
  return (
    <div className={`label-mono ${toneClass[tone]}`}>
      Staza {lane} — {title}
    </div>
  );
}
