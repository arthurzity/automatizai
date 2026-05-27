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
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderLeft: "1px solid var(--border)" }}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div
                className="flex flex-col gap-2"
                style={{
                  padding: "clamp(1.5rem,4vw,3rem) clamp(1rem,3vw,2.5rem)",
                  borderRight: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  className="font-black leading-none tracking-[-0.05em]"
                  style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
                >
                  {s.num}
                  <span style={{ color: "var(--accent)" }}>{s.suf}</span>
                </span>
                <span
                  className="text-[0.65rem] tracking-[0.14em] uppercase"
                  style={{ color: "var(--muted-fg)", fontFamily: '"JetBrains Mono", monospace' }}
                >
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
