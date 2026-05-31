"use client";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const steps = [
  { num: "01", title: "Você pede o orçamento", desc: "Preenche o formulário com as informações do seu negócio. A gente responde em até 24h." },
  { num: "02", title: "A gente alinha tudo", desc: "Uma conversa rápida pelo WhatsApp pra entender seu negócio e o que precisa no site." },
  { num: "03", title: "Desenvolvemos em 72h", desc: "Em até 72h úteis você recebe o site para revisar e aprovar. Sem enrolação." },
  { num: "04", title: "Site no ar + suporte", desc: "Aprovado, colocamos no ar com seu domínio. E ficamos disponíveis pra ajustes." },
];

function Step({ s, i, inView }: { s: typeof steps[0]; i: number; inView: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
      className="h-full" style={{ padding: "clamp(1.5rem,3.5vw,2.5rem)" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <motion.div
        animate={{ color: hov ? "var(--accent)" : "var(--border)" }}
        transition={{ duration: 0.15 }}
        style={{ fontFamily: "var(--sans)", fontSize: "clamp(3rem,7vw,5rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.06em", marginBottom: "1.5rem" }}>
        {s.num}
      </motion.div>
      <h3 style={{ fontFamily: "var(--sans)", fontSize: "clamp(0.95rem,1.3vw,1.05rem)", fontWeight: 700, marginBottom: "0.6rem", letterSpacing: "-0.01em" }}>{s.title}</h3>
      <p style={{ fontSize: "0.85rem", color: "var(--muted-fg)", lineHeight: 1.7 }}>{s.desc}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section id="como-funciona" ref={ref} style={{ padding: "clamp(5rem,10vw,10rem) 0", borderBottom: "1px solid var(--border)", background: "var(--muted)" }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <Reveal><SectionLabel>Processo</SectionLabel></Reveal>
        <Reveal delay={0.08}>
          <h2 style={{ fontFamily: "var(--sans)", fontSize: "clamp(2.5rem,6vw,5.5rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.05em", marginBottom: "clamp(3rem,6vw,5rem)" }}>
            Como funciona
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border" style={{ borderColor: "var(--border)" }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{ borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
              <Step s={s} i={i} inView={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
