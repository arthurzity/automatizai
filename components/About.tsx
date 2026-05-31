"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="sobre" style={{ padding: "clamp(5rem,10vw,9rem) 0", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-[2fr_3fr] lg:gap-24 items-start">
          <Reveal>
            <SectionLabel>Sobre a Automatizai</SectionLabel>
            <h2 style={{ fontFamily: '"Inter Tight", system-ui', fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,3rem)", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
              Tecnologia que trabalha por você.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5">
              <p style={{ color: "var(--muted-fg)", lineHeight: 1.8, fontSize: "clamp(0.95rem,1.4vw,1.05rem)" }}>
                A <strong style={{ color: "var(--fg)", fontWeight: 700 }}>Automatizai</strong> nasceu pra resolver um problema real: a maioria dos negócios locais ainda não tem presença digital de qualidade — e quando têm, pagaram caro demais por algo básico.
              </p>
              <p style={{ color: "var(--muted-fg)", lineHeight: 1.8, fontSize: "clamp(0.95rem,1.4vw,1.05rem)" }}>
                Somos uma equipe que usa as ferramentas mais modernas para criar sites <strong style={{ color: "var(--fg)", fontWeight: 700 }}>profissionais, rápidos e otimizados</strong> — sem burocracia e sem o preço de agência.
              </p>
              <motion.blockquote
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1.25rem", fontFamily: '"Playfair Display", Georgia, serif', fontStyle: "italic", fontSize: "clamp(1.1rem,1.8vw,1.35rem)", lineHeight: 1.5, color: "var(--fg)", marginTop: "0.5rem" }}>
                "Seu cliente está procurando você agora. A pergunta é: ele vai te encontrar?"
              </motion.blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
