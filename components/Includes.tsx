"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const items = [
  { text: "Design responsivo",   sub: "Perfeito no celular, tablet e computador" },
  { text: "SEO básico incluso",  sub: "Configurado pra aparecer no Google" },
  { text: "Botão WhatsApp",      sub: "Contato direto com 1 clique" },
  { text: "Google Maps",         sub: "Localização do seu negócio no site" },
  { text: "Galeria de fotos",    sub: "Mostre seu trabalho ou produto" },
  { text: "Suporte pós-entrega", sub: "Ajustes garantidos após aprovação" },
  { text: "Domínio no seu nome", sub: "O site é 100% seu, sem dependência" },
  { text: "Entrega em até 72h",  sub: "Rápido, sem enrolação" },
];

export default function Includes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section style={{ padding: "clamp(5rem,10vw,10rem) 0", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20 items-start">
          <Reveal>
            <SectionLabel>O que vem incluso</SectionLabel>
            <h2 style={{ fontFamily: "var(--sans)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em" }}>
              Tudo que você precisa.
            </h2>
          </Reveal>
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 border" style={{ borderColor: "var(--border)" }}>
            {items.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
                className="flex items-start gap-4 transition-colors duration-150"
                style={{ padding: "1.25rem 1.5rem", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--muted)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                <div className="shrink-0 flex items-center justify-center mt-0.5"
                  style={{ width: 18, height: 18, border: "1px solid var(--accent)" }}>
                  <svg viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ color: "var(--accent)" }}>
                    <polyline points="1 5 3.8 8 9 2" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.88rem", lineHeight: 1.3 }}>{item.text}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--muted-fg)", marginTop: "0.2rem" }}>{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
