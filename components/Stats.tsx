"use client";
import { motion } from "framer-motion";

const stats = [
  { num: "72", suf: "h",  label: "Prazo de entrega" },
  { num: "100", suf: "%", label: "Responsivo mobile" },
  { num: "SEO", suf: "",  label: "Incluso no pacote" },
  { num: "BR", suf: "+",  label: "Todo o Brasil" },
];

export default function Stats() {
  return (
    <section style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-2 text-center"
              style={{ padding: "clamp(1.5rem,4vw,3rem)", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontFamily: '"Inter Tight", system-ui', fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1, color: "var(--fg)" }}>
                {s.num}<span style={{ color: "var(--accent)" }}>{s.suf}</span>
              </span>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted-fg)" }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
