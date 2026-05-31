"use client";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const items = [
  { text: "Design responsivo",   sub: "Perfeito no celular, tablet e computador" },
  { text: "SEO básico incluso",  sub: "Configurado pra aparecer no Google" },
  { text: "Botão WhatsApp",      sub: "Contato direto com 1 clique" },
  { text: "Google Maps",         sub: "Localização do seu negócio no site" },
  { text: "Galeria de fotos",    sub: "Mostre seu trabalho ou produto" },
  { text: "Suporte pós-entrega", sub: "Ajustes garantidos após aprovação" },
  { text: "Domínio no seu nome", sub: "O site é 100% seu, sem dependência" },
  { text: "Entrega em até 72h",  sub: "Rápido, sem enrolação" },
];

export default function Includes() {
  return (
    <section style={{ padding: "clamp(5rem,10vw,9rem) 0", borderBottom: "1px solid var(--border)", background: "var(--muted)" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20 items-start">
          <Reveal>
            <SectionLabel>O que vem incluso</SectionLabel>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
              Tudo que você <em style={{ fontStyle: "italic", color: "var(--accent)" }}>precisa.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 border" style={{ borderColor: "var(--border)" }}>
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-4 transition-colors duration-150"
                  style={{ padding: "1.25rem 1.5rem", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--card)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--muted)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--card)")}>
                  <div className="shrink-0 flex items-center justify-center mt-0.5"
                    style={{ width: 18, height: 18, border: "1px solid var(--accent)", borderRadius: "2px" }}>
                    <svg viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ color: "var(--accent)" }}>
                      <polyline points="1 5 3.8 8 9 2" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.88rem", lineHeight: 1.3 }}>{item.text}</p>
                    <p style={{ fontSize: "0.75rem", color: "var(--muted-fg)", marginTop: "0.2rem" }}>{item.sub}</p>
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
