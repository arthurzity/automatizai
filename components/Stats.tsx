import Reveal from "./Reveal";

const stats = [
  { num: "72", suf: "h",  label: "Prazo de entrega" },
  { num: "100", suf: "%", label: "Responsivo mobile" },
  { num: "SEO", suf: "",  label: "Incluso no pacote" },
  { num: "BR", suf: "+",  label: "Todo o Brasil" },
];

export default function Stats() {
  return (
    <section style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="flex flex-col gap-2 text-center" style={{ padding: "clamp(2rem,4vw,3rem) clamp(1rem,2vw,2rem)", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,4.5vw,3.5rem)", fontWeight: 400, lineHeight: 1, color: "var(--accent)" }}>
                  {s.num}<span>{s.suf}</span>
                </span>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted-fg)" }}>
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
