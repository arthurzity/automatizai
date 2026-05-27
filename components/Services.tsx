"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const services = [
  { num: "01", name: "Landing Page", desc: "Uma página focada em converter visitantes em clientes. Ideal pra negócios que precisam de presença rápida e eficiente." },
  { num: "02", name: "Site Multi-página", desc: "Home, sobre, serviços e contato. Uma estrutura completa pra quem precisa contar toda a história do negócio." },
  { num: "03", name: "Integração WhatsApp", desc: "Botão de contato direto pelo WhatsApp integrado ao site. Seu cliente chega a você com um clique." },
  { num: "04", name: "Google Maps", desc: "Localização integrada ao site para que seus clientes encontrem seu negócio facilmente." },
  { num: "05", name: "SEO Básico", desc: "Configurações essenciais para que seu site apareça nas buscas do Google. Meta tags, velocidade e estrutura otimizadas." },
  { num: "06", name: "Suporte Pós-entrega", desc: "Ajustes e suporte garantidos após a entrega. Você não fica sozinho depois que o site entra no ar." },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 60}>
      <div
        className="relative p-6 md:p-8 overflow-hidden transition-colors duration-200 h-full"
        style={{ background: hovered ? "var(--muted)" : "transparent" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <span className="absolute top-0 left-0 h-0.5 transition-all duration-300"
          style={{ background: "var(--accent)", width: hovered ? "100%" : "0%" }} />
        <p className="text-[0.65rem] tracking-[0.15em] mb-5 uppercase"
          style={{ color: "var(--accent)", fontFamily: '"JetBrains Mono", monospace' }}>
          {service.num}
        </p>
        <h3 className="font-bold tracking-[-0.02em] mb-3" style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)" }}>
          {service.name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted-fg)" }}>
          {service.desc}
        </p>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 lg:py-32 border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">

        <div className="flex flex-wrap justify-between items-end gap-6 mb-12 md:mb-16">
          <div>
            <Reveal><SectionLabel>O que entregamos</SectionLabel></Reveal>
            <Reveal delay={80}>
              <h2 className="font-black leading-none tracking-[-0.05em]"
                style={{ fontSize: "clamp(2rem,5vw,4.5rem)" }}>
                Serviços
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Link href="#orcamento"
              className="relative inline-flex items-center gap-2 font-semibold tracking-[0.1em] uppercase py-2 group text-xs"
              style={{ color: "var(--accent)" }}>
              Ver planos <ArrowRight size={15} strokeWidth={1.5} />
              <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-100 group-hover:scale-x-110 transition-transform duration-150 origin-left"
                style={{ background: "var(--accent)" }} />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border"
          style={{ borderColor: "var(--border)" }}>
          {services.map((s, i) => (
            <div key={s.num} className="border-r border-b" style={{ borderColor: "var(--border)" }}>
              <ServiceCard service={s} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
