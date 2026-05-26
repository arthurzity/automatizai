"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const WPP = "5511912435135";

export default function CTA() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Olá! Vim pelo site da Automatizai e gostaria de solicitar um orçamento.\n\n*Nome:* ${form.nome}\n*E-mail:* ${form.email}\n*Telefone:* ${form.telefone}\n\n*Sobre meu negócio:*\n${form.mensagem}`;
    window.open(`https://wa.me/${WPP}?text=${encodeURIComponent(text)}`, "_blank");
  }

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "1px solid rgba(10,10,10,0.25)",
    color: "var(--bg)",
    fontFamily: '"Inter Tight", system-ui, sans-serif',
    fontSize: "1rem",
    padding: "0.875rem 1rem",
    outline: "none",
    borderRadius: 0,
    WebkitAppearance: "none" as const,
    transition: "border-color 150ms",
  };

  return (
    <section id="orcamento" className="py-28 md:py-32" style={{ background: "var(--fg)", color: "var(--bg)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[5fr_7fr] lg:gap-24 items-start">

          <Reveal>
            <SectionLabel>Orçamento gratuito</SectionLabel>
            <h2 className="font-black leading-none tracking-[-0.05em]"
              style={{ fontSize: "clamp(2.5rem,5vw,5rem)", color: "var(--bg)" }}>
              Pronto pra colocar seu negócio{" "}
              <em style={{ color: "var(--accent)", fontFamily: '"Playfair Display", Georgia, serif', fontStyle: "italic", fontWeight: 400 }}>
                online?
              </em>
            </h2>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "#404040" }}>
              Preenche o formulário e a gente entra em contato em até 24h. Sem compromisso, sem enrolação.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold tracking-[0.08em] uppercase mb-2"
                    style={{ color: "#404040" }}>
                    Nome
                  </label>
                  <input
                    type="text" name="nome" required
                    placeholder="Seu nome completo"
                    value={form.nome} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.25)")}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-[0.08em] uppercase mb-2"
                    style={{ color: "#404040" }}>
                    E-mail
                  </label>
                  <input
                    type="email" name="email" required
                    placeholder="seu@email.com"
                    value={form.email} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.25)")}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold tracking-[0.08em] uppercase mb-2"
                  style={{ color: "#404040" }}>
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel" name="telefone" required
                  placeholder="(11) 99999-9999"
                  value={form.telefone} onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.25)")}
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold tracking-[0.08em] uppercase mb-2"
                  style={{ color: "#404040" }}>
                  Fale sobre seu negócio
                </label>
                <textarea
                  name="mensagem" required
                  placeholder="Qual é o seu negócio? O que você precisa no site?"
                  value={form.mensagem} onChange={handleChange}
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.25)")}
                />
              </div>

              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase px-8 py-4 border transition-all duration-150 active:translate-y-px"
                style={{ color: "var(--fg)", background: "var(--bg)", borderColor: "var(--bg)", borderRadius: 0 }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "var(--bg)";
                  e.currentTarget.style.borderColor = "var(--bg)";
                }}>
                Enviar pelo WhatsApp
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
