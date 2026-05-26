import Reveal from "./Reveal";

const stats = [
  { number: "72", suffix: "h", label: "Prazo de entrega" },
  { number: "100", suffix: "%", label: "Responsivo mobile" },
  { number: "SEO", suffix: "", label: "Incluso no pacote" },
  { number: "BR", suffix: "+", label: "Atendemos todo Brasil" },
];

export default function Stats() {
  return (
    <section className="border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="p-8 border-r border-b md:border-b-0"
                style={{ borderColor: "var(--border)" }}>
                <div className="font-black leading-none tracking-[-0.05em] mb-2"
                  style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
                  {s.number}
                  <span style={{ color: "var(--accent)" }}>{s.suffix}</span>
                </div>
                <div className="font-mono text-[0.7rem] tracking-[0.15em] uppercase"
                  style={{ color: "var(--muted-fg)", fontFamily: "var(--font-mono)" }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
