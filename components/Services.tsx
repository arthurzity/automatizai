"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const services = [
  { num: "01", name: "Landing Page", desc: "Uma página focada em converter visitantes em clientes. Ideal pra negócios que precisam de presença rápida e eficiente." },
  { num: "02", name: "Site Multi-página", desc: "Home, sobre, serviços e contato. Estrutura completa pra quem precisa contar toda a história do negócio." },
  { num: "03", name: "Integração WhatsApp", desc: "Botão de contato direto integrado ao site. Seu cliente chega até você com um único clique." },
  { num: "04", name: "Google Maps", desc: "Localização integrada ao site para que seus clientes encontrem seu negócio com facilidade." },
  { num: "05", name: "SEO Básico", desc: "Configurações essenciais para aparecer no Google. Meta tags, velocidade e estrutura otimizadas." },
  { num: "06", name: "Suporte Pós-entrega", desc: "Ajustes e suporte garantidos após a entrega. Você não fica sozinho quando o site entra no ar." },
];

function Card({ s, i }: { s: typeof services[0]; i: number }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-full transition-colors duration-200"
      style={{ padding: "clamp(1.5rem,3vw,2.5rem)", background: hov ? "var(--muted)" : "transparent" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <motion.span className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "var(--accent)", scaleX: hov ? 1 : 0, transformOrigin: "left" }}
        animate={{ scaleX: hov ? 1 : 0 }} transition={{ duration: 0.3 }} />
      <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.25rem" }}>{s.num}</p>
      <h3 style={{ fontFamily: '"Inter Tight", system-ui', fontWeight: 700, fontSize: "clamp(1rem,1.4vw,1.15rem)", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>{s.name}</h3>
      <p style={{ fontSize: "0.88rem", color: "var(--muted-fg)", lineHeight: 1.7 }}>{s.desc}</p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicos" style={{ padding: "clamp(5rem,10vw,9rem) 0", borderBottom: "1px solid var(--border)", background: "var(--muted)" }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12 md:mb-16">
          <div>
            <Reveal><SectionLabel>O que entregamos</SectionLabel></Reveal>
            <Reveal delay={0.08}>
              <h2 style={{ fontFamily: '"Inter Tight", system-ui', fontWeight: 900, fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 1, letterSpacing: "-0.05em" }}>Serviços</h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link href="#orcamento" className="inline-flex items-center gap-2 group relative"
              style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", textDecoration: "none", paddingBottom: "3px" }}>
              Ver planos <ArrowRight size={14} strokeWidth={1.5} />
              <span className="absolute bottom-0 left-0 w-full h-px origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-150" style={{ background: "var(--accent)" }} />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border" style={{ borderColor: "var(--border)" }}>
          {services.map((s, i) => (
            <div key={s.num} style={{ borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
              <Card s={s} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
