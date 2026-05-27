"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const steps = [
  { num: "01", title: "Você pede o orçamento", desc: "Preenche o formulário com as informações do seu negócio. A gente responde em até 24h com a proposta completa." },
  { num: "02", title: "A gente alinha tudo", desc: "Uma conversa rápida pelo WhatsApp pra entender o seu negócio, as cores que você gosta e o que precisa estar no site." },
  { num: "03", title: "Desenvolvemos em 72h", desc: "Mãos à obra. Em até 72h úteis você recebe o site para revisar e aprovar. Sem enrolação." },
  { num: "04", title: "Site no ar + suporte", desc: "Aprovado, a gente coloca no ar com seu domínio. E fica disponível pra pequenos ajustes no pós-entrega." },
];

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 80}>
      <div className="p-6 md:p-8 lg:p-10 h-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <div className="font-black leading-none tracking-[-0.06em] mb-6 transition-colors duration-150"
          style={{ fontSize: "clamp(3rem,6vw,5rem)", color: hovered ? "var(--accent)" : "var(--border)" }}>
          {step.num}
        </div>
        <h3 className="font-bold tracking-[-0.02em] mb-3" style={{ fontSize: "clamp(0.95rem,1.3vw,1.1rem)" }}>
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted-fg)" }}>
          {step.desc}
        </p>
      </div>
    </Reveal>
  );
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 lg:py-32 border-b"
      style={{ background: "var(--muted)", borderColor: "var(--border)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">

        <Reveal><SectionLabel>Processo</SectionLabel></Reveal>
        <Reveal delay={80}>
          <h2 className="font-black leading-none tracking-[-0.05em] mb-12 md:mb-16"
            style={{ fontSize: "clamp(2rem,5vw,4.5rem)" }}>
            Como funciona
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border"
          style={{ borderColor: "var(--border)" }}>
          {steps.map((s, i) => (
            <div key={s.num} className="border-r border-b" style={{ borderColor: "var(--border)" }}>
              <Step step={s} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
