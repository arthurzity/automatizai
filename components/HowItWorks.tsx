"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const steps = [
  { num: "01", title: "Você pede o orçamento", desc: "Preenche o formulário com as informações do seu negócio. A gente responde em até 24h." },
  { num: "02", title: "A gente alinha tudo", desc: "Uma conversa rápida pelo WhatsApp pra entender seu negócio e o que precisa no site." },
  { num: "03", title: "Desenvolvemos em 72h", desc: "Em até 72h úteis você recebe o site para revisar e aprovar. Sem enrolação." },
  { num: "04", title: "Site no ar + suporte", desc: "Aprovado, colocamos no ar com seu domínio. E ficamos disponíveis pra ajustes." },
];

function Step({ s, i }: { s: typeof steps[0]; i: number }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={i * 80}>
      <div className="h-full" style={{ padding: "clamp(1.5rem,3.5vw,2.5rem)" }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
        <div className="transition-colors duration-150" style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem,6vw,4.5rem)", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "1.5rem", color: hov ? "var(--accent)" : "var(--border)" }}>
          {s.num}
        </div>
        <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(0.95rem,1.3vw,1.05rem)", fontWeight: 500, marginBottom: "0.6rem", letterSpacing: "-0.01em" }}>
          {s.title}
        </h3>
        <p style={{ fontSize: "0.85rem", color: "var(--muted-fg)", lineHeight: 1.7 }}>{s.desc}</p>
      </div>
    </Reveal>
  );
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" style={{ padding: "clamp(5rem,10vw,9rem) 0", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16">
        <Reveal><SectionLabel>Processo</SectionLabel></Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "clamp(3rem,6vw,5rem)" }}>
            Como funciona
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border" style={{ borderColor: "var(--border)" }}>
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
