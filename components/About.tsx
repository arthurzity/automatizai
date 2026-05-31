"use client";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="sobre" style={{ padding: "clamp(5rem,10vw,10rem) 0", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-[5fr_7fr] lg:gap-24 items-start">
          <Reveal>
            <SectionLabel>Sobre a Automatizai</SectionLabel>
            <h2 style={{ fontFamily: "var(--sans)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em" }}>
              Tecnologia que<br />trabalha por você.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ color: "var(--muted-fg)", lineHeight: 1.8, fontSize: "clamp(0.95rem,1.4vw,1.05rem)" }}>
                A <strong style={{ color: "var(--fg)", fontWeight: 600 }}>Automatizai</strong> nasceu pra resolver um problema real: a maioria dos negócios locais ainda não tem presença digital de qualidade — e quando têm, pagaram caro demais por algo básico.
              </p>
              <p style={{ color: "var(--muted-fg)", lineHeight: 1.8, fontSize: "clamp(0.95rem,1.4vw,1.05rem)" }}>
                Somos uma equipe que usa as ferramentas mais modernas para criar sites <strong style={{ color: "var(--fg)", fontWeight: 600 }}>profissionais, rápidos e otimizados</strong> — sem burocracia e sem o preço de agência.
              </p>
              <blockquote style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1.25rem", marginTop: "0.5rem", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.8vw,1.4rem)", lineHeight: 1.5, color: "var(--fg)" }}>
                "Seu cliente está procurando você agora. A pergunta é: ele vai te encontrar?"
              </blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
