"use client";
import { useState } from "react";
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

function Card({ s, i }: { s: typeof services[0]; i: number }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={i * 55}>
      <div
        className="relative h-full transition-colors duration-200"
        style={{
          padding: "clamp(1.5rem,3vw,2.5rem)",
          background: hov ? "var(--muted)" : "transparent",
          cursor: "default",
        }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <span
          className="absolute top-0 left-0 h-0.5 transition-all duration-300"
          style={{ background: "var(--accent)", width: hov ? "100%" : "0%" }}
        />
        <p
          className="mb-5 tracking-[0.14em] uppercase"
          style={{ color: "var(--accent)", fontSize: "0.65rem", fontFamily: '"JetBrains Mono", monospace' }}
        >
          {s.num}
        </p>
        <h3
          className="font-bold tracking-[-0.02em] mb-3"
          style={{ fontSize: "clamp(1rem,1.4vw,1.15rem)" }}
        >
          {s.name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted-fg)" }}>
          {s.desc}
        </p>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section
      id="servicos"
      style={{
        borderBottom: "1px solid var(--border)",
        padding: "clamp(5rem, 10vw, 10rem) 0",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12 md:mb-16">
          <div>
            <Reveal><SectionLabel>O que entregamos</SectionLabel></Reveal>
            <Reveal delay={80}>
              <h2 className="font-black leading-none tracking-[-0.05em]"
                style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
                Serviços
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <Link
              href="#orcamento"
              className="group relative inline-flex items-center gap-2 font-semibold tracking-[0.1em] uppercase"
              style={{ color: "var(--accent)", fontSize: "0.75rem", paddingBottom: "3px" }}
            >
              Ver planos <ArrowRight size={14} strokeWidth={1.5} />
              <span className="absolute bottom-0 left-0 h-px w-full origin-left transition-transform duration-150 scale-x-100 group-hover:scale-x-110"
                style={{ background: "var(--accent)" }} />
            </Link>
          </Reveal>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ border: "1px solid var(--border)" }}
        >
          {services.map((s, i) => (
            <div
              key={s.num}
              style={{ borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
            >
              <Card s={s} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
