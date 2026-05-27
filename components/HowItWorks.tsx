"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const steps = [
  { num: "01", title: "Você pede o orçamento", desc: "Preenche o formulário com as informações do seu negócio. A gente responde em até 24h com a proposta completa." },
  { num: "02", title: "A gente alinha tudo", desc: "Uma conversa rápida pelo WhatsApp pra entender o seu negócio, as cores que você gosta e o que precisa no site." },
  { num: "03", title: "Desenvolvemos em 72h", desc: "Em até 72h úteis você recebe o site para revisar e aprovar. Sem enrolação, sem surpresas." },
  { num: "04", title: "Site no ar + suporte", desc: "Aprovado, colocamos no ar com seu domínio. E ficamos disponíveis para ajustes no pós-entrega." },
];

function Step({ s, i }: { s: typeof steps[0]; i: number }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={i * 80}>
      <div
        className="h-full transition-none"
        style={{ padding: "clamp(1.5rem,3.5vw,2.5rem)" }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <div
          className="font-black leading-none tracking-[-0.06em] mb-6 transition-colors duration-150"
          style={{ fontSize: "clamp(3rem,7vw,5rem)", color: hov ? "var(--accent)" : "var(--border)" }}
        >
          {s.num}
        </div>
        <h3 className="font-bold tracking-[-0.02em] mb-3" style={{ fontSize: "clamp(0.95rem,1.3vw,1.05rem)" }}>
          {s.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted-fg)" }}>
          {s.desc}
        </p>
      </div>
    </Reveal>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      style={{
        background: "var(--muted)",
        borderBottom: "1px solid var(--border)",
        padding: "clamp(5rem, 10vw, 10rem) 0",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <Reveal><SectionLabel>Processo</SectionLabel></Reveal>
        <Reveal delay={80}>
          <h2
            className="font-black leading-none tracking-[-0.05em] mb-12 md:mb-16"
            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
          >
            Como funciona
          </h2>
        </Reveal>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ border: "1px solid var(--border)" }}
        >
          {steps.map((s, i) => (
            <div key={s.num} style={{ borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
              <Step s={s} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
