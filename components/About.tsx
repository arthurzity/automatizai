"use client";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section
      id="sobre"
      style={{
        borderBottom: "1px solid var(--border)",
        padding: "clamp(5rem, 10vw, 10rem) 0",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20 items-start">
          <Reveal>
            <SectionLabel>Sobre a Automatizai</SectionLabel>
            <h2
              className="font-black leading-[1.05] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Tecnologia que trabalha por você.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-5">
              <p style={{ color: "var(--muted-fg)", lineHeight: 1.8, fontSize: "clamp(0.95rem,1.4vw,1.05rem)" }}>
                A{" "}
                <strong className="font-semibold" style={{ color: "var(--fg)" }}>Automatizai</strong>{" "}
                nasceu pra resolver um problema real: a maioria dos negócios locais ainda não tem
                presença digital de qualidade — e quando têm, pagaram caro demais por algo básico.
              </p>
              <p style={{ color: "var(--muted-fg)", lineHeight: 1.8, fontSize: "clamp(0.95rem,1.4vw,1.05rem)" }}>
                Somos uma equipe que usa as ferramentas mais modernas para criar sites{" "}
                <strong className="font-semibold" style={{ color: "var(--fg)" }}>profissionais, rápidos e otimizados</strong>{" "}
                — sem burocracia e sem o preço de agência.
              </p>
              <p style={{ color: "var(--muted-fg)", lineHeight: 1.8, fontSize: "clamp(0.95rem,1.4vw,1.05rem)" }}>
                Do salão de beleza à clínica odontológica: a gente entende o seu negócio e coloca
                ele na internet do jeito certo.
              </p>
              <blockquote
                className="mt-3 pl-5 italic leading-snug"
                style={{
                  borderLeft: "2px solid var(--accent)",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                }}
              >
                "Seu cliente está procurando você agora. A pergunta é: ele vai te encontrar?"
              </blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
