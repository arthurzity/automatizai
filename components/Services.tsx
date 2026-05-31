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
      <div className="relative h-full transition-all duration-200"
        style={{ padding: "clamp(1.5rem,3vw,2.5rem)", background: hov ? "var(--muted)" : "var(--card)", cursor: "default" }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
        {/* Top accent line */}
        <span className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300"
          style={{ background: "var(--accent)", opacity: hov ? 1 : 0 }} />
        <p style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.25rem" }}>
          {s.num}
        </p>
        <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1rem,1.4vw,1.2rem)", fontWeight: 500, letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
          {s.name}
        </h3>
        <p style={{ fontSize: "0.88rem", color: "var(--muted-fg)", lineHeight: 1.7 }}>{s.desc}</p>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="servicos" style={{ padding: "clamp(5rem,10vw,9rem) 0", borderBottom: "1px solid var(--border)", background: "var(--muted)" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12 md:mb-16">
          <div>
            <Reveal><SectionLabel>O que entregamos</SectionLabel></Reveal>
            <Reveal delay={80}>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.02em" }}>
                Serviços
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <Link href="#orcamento" className="inline-flex items-center gap-2 transition-colors duration-200"
              style={{ fontFamily: "var(--sans)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent2)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--accent)")}>
              Ver planos <ArrowRight size={14} strokeWidth={1.5} />
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
