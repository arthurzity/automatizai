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

  const baseInput: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "1px solid rgba(10,10,10,0.2)",
    color: "#0A0A0A",
    fontFamily: '"Inter Tight", system-ui, sans-serif',
    fontSize: "1rem",
    padding: "0.875rem 1rem",
    outline: "none",
    borderRadius: 0,
    WebkitAppearance: "none",
    transition: "border-color 150ms",
    display: "block",
  };

  return (
    <section id="orcamento" className="py-20 md:py-28 lg:py-32"
      style={{ background: "var(--fg)", color: "var(--bg)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20 items-start">

          <Reveal>
            <SectionLabel>Orçamento gratuito</SectionLabel>
            <h2 className="font-black leading-none tracking-[-0.05em]"
              style={{ fontSize: "clamp(2rem,5vw,4.5rem)", color: "var(--bg)" }}>
              Pronto pra colocar seu negócio{" "}
              <em style={{
                color: "var(--accent)",
                fontFamily: '"Playfair Display", Georgia, serif',
                fontStyle: "italic",
                fontWeight: 400,
              }}>online?</em>
            </h2>
            <p className="mt-5 leading-relaxed text-sm md:text-base" style={{ color: "#555" }}>
              Preenche o formulário e a gente entra em contato em até 24h.
              Sem compromisso, sem enrolação.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[0.7rem] font-semibold tracking-[0.08em] uppercase mb-2"
                    style={{ color: "#555" }}>Nome</label>
                  <input type="text" name="nome" required placeholder="Seu nome completo"
                    value={form.nome} onChange={handleChange} style={baseInput}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.2)")} />
                </div>
                <div>
                  <label className="block text-[0.7rem] font-semibold tracking-[0.08em] uppercase mb-2"
                    style={{ color: "#555" }}>E-mail</label>
                  <input type="email" name="email" required placeholder="seu@email.com"
                    value={form.email} onChange={handleChange} style={baseInput}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.2)")} />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[0.7rem] font-semibold tracking-[0.08em] uppercase mb-2"
                  style={{ color: "#555" }}>Telefone / WhatsApp</label>
                <input type="tel" name="telefone" required placeholder="(11) 99999-9999"
                  value={form.telefone} onChange={handleChange} style={baseInput}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.2)")} />
              </div>

              <div className="mb-6">
                <label className="block text-[0.7rem] font-semibold tracking-[0.08em] uppercase mb-2"
                  style={{ color: "#555" }}>Fale sobre seu negócio</label>
                <textarea name="mensagem" required rows={4}
                  placeholder="Qual é o seu negócio? O que você precisa no site?"
                  value={form.mensagem} onChange={handleChange}
                  style={{ ...baseInput, resize: "vertical" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.2)")} />
              </div>

              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 font-semibold tracking-[0.1em] uppercase px-8 py-4 border transition-all duration-150 active:translate-y-px text-sm"
                style={{ color: "var(--fg)", background: "var(--bg)", borderColor: "var(--bg)", borderRadius: 0 }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--bg)"; e.currentTarget.style.borderColor = "var(--bg)"; }}>
                Enviar pelo WhatsApp
                <ArrowRight size={15} strokeWidth={1.5} />
              </button>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
