"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { num: "72", suf: "h",  label: "Prazo de entrega" },
  { num: "100", suf: "%", label: "Responsivo mobile" },
  { num: "SEO", suf: "",  label: "Incluso no pacote" },
  { num: "BR", suf: "+",  label: "Todo o Brasil" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col gap-2 text-center"
              style={{ padding: "clamp(2rem,4vw,3rem) clamp(1rem,2vw,2rem)", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontFamily: "var(--sans)", fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.05em", color: "var(--fg)" }}>
                {s.num}<span style={{ color: "var(--accent)" }}>{s.suf}</span>
              </span>
              <span style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted-fg)" }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
