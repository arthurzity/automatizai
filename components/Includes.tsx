"use client";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const items = [
  { text: "Design responsivo", sub: "Perfeito no celular, tablet e computador" },
  { text: "SEO básico incluso", sub: "Configurado pra aparecer no Google" },
  { text: "Botão WhatsApp", sub: "Contato direto com 1 clique" },
  { text: "Google Maps", sub: "Localização do seu negócio no site" },
  { text: "Galeria de fotos", sub: "Mostre seu trabalho ou produto" },
  { text: "Suporte pós-entrega", sub: "Ajustes garantidos após aprovação" },
  { text: "Domínio no seu nome", sub: "O site é 100% seu, sem dependência" },
  { text: "Entrega em até 72h", sub: "Rápido, sem enrolação" },
];

function CheckIcon() {
  return (
    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center border mt-0.5"
      style={{ borderColor: "var(--accent)" }}>
      <svg viewBox="0 0 12 12" width="12" height="12" fill="none"
        stroke="currentColor" strokeWidth="2" style={{ color: "var(--accent)" }}>
        <polyline points="1.5 6 4.5 9.5 10.5 2.5" />
      </svg>
    </div>
  );
}

export default function Includes() {
  return (
    <section className="py-28 md:py-32 border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[4fr_8fr] lg:gap-24 items-start">

          <Reveal>
            <SectionLabel>O que vem incluso</SectionLabel>
            <h2 className="font-black leading-[1.05] tracking-[-0.05em]"
              style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
              Tudo que você precisa.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid sm:grid-cols-2 border list-none" style={{ borderColor: "var(--border)" }}>
              {items.map((item, i) => (
                <li key={i}
                  className="flex items-start gap-4 p-6 border-r border-b transition-colors duration-200 group"
                  style={{ borderColor: "var(--border)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--muted)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                  <CheckIcon />
                  <div>
                    <p className="text-sm font-medium leading-snug">{item.text}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--muted-fg)" }}>{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
