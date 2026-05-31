"use client";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="sobre" style={{ padding: "clamp(5rem,10vw,9rem) 0", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20 items-center">

          <Reveal>
            <SectionLabel>Sobre a Automatizai</SectionLabel>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: "1.25rem" }}>
              Tecnologia que trabalha <em style={{ fontStyle: "italic", color: "var(--accent)" }}>por você.</em>
            </h2>
            <div style={{ width: "40px", height: "1px", background: "var(--accent)", marginBottom: "1.5rem" }} />
            <p style={{ color: "var(--muted-fg)", lineHeight: 1.85, marginBottom: "1.25rem", fontSize: "1.02rem" }}>
              A <strong style={{ color: "var(--fg)", fontWeight: 600 }}>Automatizai</strong> nasceu pra resolver um problema real: a maioria dos negócios locais ainda não tem presença digital de qualidade — e quando têm, pagaram caro demais por algo básico.
            </p>
            <p style={{ color: "var(--muted-fg)", lineHeight: 1.85, marginBottom: "1.25rem", fontSize: "1.02rem" }}>
              Somos uma equipe que usa as ferramentas mais modernas para criar sites <strong style={{ color: "var(--fg)", fontWeight: 600 }}>profissionais, rápidos e otimizados</strong> — sem burocracia e sem o preço de agência.
            </p>
            <blockquote style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1.25rem", marginTop: "1.75rem", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,1.8vw,1.35rem)", lineHeight: 1.5, color: "var(--fg)" }}>
              "Seu cliente está procurando você agora. A pergunta é: ele vai te encontrar?"
            </blockquote>
          </Reveal>

          {/* Right — decorative serif number */}
          <Reveal delay={120}>
            <div className="hidden lg:flex flex-col gap-4">
              {[["01","Briefing rápido","Você preenche e a gente entende"],["02","Site em 72h","Desenvolvemos e entregamos"],["03","No ar + suporte","Deploy e você fica amparado"]].map(([n, t, d]) => (
                <div key={n} className="flex items-start gap-4 transition-all duration-200 group"
                  style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "6px", padding: "1.25rem 1.5rem", boxShadow: "0 1px 4px rgba(26,26,26,0.04)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}>
                  <span style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 400, lineHeight: 1, color: "var(--accent)", opacity: 0.5, flexShrink: 0 }}>{n}</span>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{t}</p>
                    <p style={{ fontSize: "0.78rem", color: "var(--muted-fg)" }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
