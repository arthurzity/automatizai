"use client";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="sobre" className="py-28 md:py-32 border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[5fr_7fr] lg:gap-24 items-start">

          <Reveal>
            <SectionLabel>Sobre a Automatizai</SectionLabel>
            <h2 className="font-black leading-[1.05] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
              Tecnologia que trabalha por você.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-lg leading-[1.75] mb-6" style={{ color: "var(--muted-fg)" }}>
              A <strong className="font-semibold" style={{ color: "var(--fg)" }}>Automatizai</strong> nasceu
              pra resolver um problema real: a maioria dos negócios locais ainda não tem presença
              digital de qualidade — e quando têm, pagaram caro demais por algo básico.
            </p>
            <p className="text-lg leading-[1.75] mb-6" style={{ color: "var(--muted-fg)" }}>
              Somos uma equipe que usa as ferramentas mais modernas de desenvolvimento para criar
              sites <strong className="font-semibold" style={{ color: "var(--fg)" }}>profissionais,
              rápidos e otimizados</strong> — sem a burocracia e o preço das grandes agências.
            </p>
            <p className="text-lg leading-[1.75]" style={{ color: "var(--muted-fg)" }}>
              Do salão de beleza à clínica odontológica, do consultor ao restaurante: a gente
              entende o seu negócio e coloca ele na internet do jeito certo.
            </p>
            <blockquote className="mt-8 pl-6 text-2xl leading-snug border-l-2 italic"
              style={{
                borderColor: "var(--accent)",
                fontFamily: '"Playfair Display", Georgia, serif',
              }}>
              "Seu cliente está procurando você agora. A pergunta é: ele vai te encontrar?"
            </blockquote>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
