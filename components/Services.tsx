"use client";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

function Card({ s, i, inView }: { s: typeof services[0]; i: number; inView: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
      className="relative h-full transition-colors duration-200"
      style={{ padding: "clamp(1.5rem,3vw,2.5rem)", background: hov ? "var(--muted)" : "transparent", cursor: "default" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <motion.span className="absolute top-0 left-0 right-0 h-0.5"
        animate={{ scaleX: hov ? 1 : 0 }} initial={{ scaleX: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ background: "var(--accent)", transformOrigin: "left" }} />
      <p style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.25rem" }}>{s.num}</p>
      <h3 style={{ fontFamily: "var(--sans)", fontSize: "clamp(1rem,1.4vw,1.2rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>{s.name}</h3>
      <p style={{ fontSize: "0.88rem", color: "var(--muted-fg)", lineHeight: 1.7 }}>{s.desc}</p>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section id="servicos" ref={ref} style={{ padding: "clamp(5rem,10vw,10rem) 0", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12 md:mb-16">
          <div>
            <Reveal><SectionLabel>O que entregamos</SectionLabel></Reveal>
            <Reveal delay={0.08}>
              <h2 style={{ fontFamily: "var(--sans)", fontSize: "clamp(2.5rem,6vw,5.5rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.05em" }}>
                Serviços
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link href="#orcamento" className="group relative inline-flex items-center gap-2"
              style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", textDecoration: "none", paddingBottom: "3px" }}>
              Ver planos <ArrowRight size={14} strokeWidth={1.5} />
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-150" style={{ background: "var(--accent)" }} />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border" style={{ borderColor: "var(--border)" }}>
          {services.map((s, i) => (
            <div key={s.num} style={{ borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
              <Card s={s} i={i} inView={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
