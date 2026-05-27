"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const WPP = "5511912435135";

export default function CTA() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const t = `Olá! Vim pelo site da Automatizai e gostaria de solicitar um orçamento.\n\n*Nome:* ${form.nome}\n*E-mail:* ${form.email}\n*Telefone:* ${form.telefone}\n\n*Sobre meu negócio:*\n${form.mensagem}`;
    window.open(`https://wa.me/${WPP}?text=${encodeURIComponent(t)}`, "_blank");
  };

  const field: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "1px solid rgba(10,10,10,0.18)",
    color: "#111",
    fontFamily: '"Inter Tight", system-ui, sans-serif',
    fontSize: "0.95rem",
    padding: "0.9rem 1rem",
    outline: "none",
    borderRadius: 0,
    transition: "border-color 150ms",
    display: "block",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.68rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#666",
    marginBottom: "0.45rem",
  };

  return (
    <section
      id="orcamento"
      style={{
        background: "var(--fg)",
        color: "var(--bg)",
        padding: "clamp(5rem, 10vw, 10rem) 0",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid gap-14 lg:grid-cols-[2fr_3fr] lg:gap-20 items-start">

          {/* Left */}
          <Reveal>
            <SectionLabel>Orçamento gratuito</SectionLabel>
            <h2
              className="font-black leading-[1] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.2rem,5vw,4.5rem)", color: "var(--bg)" }}
            >
              Pronto pra colocar seu negócio{" "}
              <em
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--accent)",
                }}
              >
                online?
              </em>
            </h2>
            <p className="mt-5 leading-relaxed" style={{ color: "#666", fontSize: "0.95rem" }}>
              Preenche o formulário e a gente entra em contato em até 24h.
              Sem compromisso, sem enrolação.
            </p>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Nome</label>
                  <input type="text" name="nome" required placeholder="Seu nome completo"
                    value={form.nome} onChange={onChange} style={field}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.18)")} />
                </div>
                <div>
                  <label style={labelStyle}>E-mail</label>
                  <input type="email" name="email" required placeholder="seu@email.com"
                    value={form.email} onChange={onChange} style={field}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.18)")} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Telefone / WhatsApp</label>
                <input type="tel" name="telefone" required placeholder="(11) 99999-9999"
                  value={form.telefone} onChange={onChange} style={field}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.18)")} />
              </div>

              <div>
                <label style={labelStyle}>Fale sobre seu negócio</label>
                <textarea name="mensagem" required rows={4}
                  placeholder="Qual é o seu negócio? O que você precisa no site?"
                  value={form.mensagem} onChange={onChange}
                  style={{ ...field, resize: "vertical" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(10,10,10,0.18)")} />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 font-semibold tracking-[0.1em] uppercase transition-all duration-150 active:translate-y-px"
                style={{
                  fontSize: "0.78rem",
                  padding: "1rem 2rem",
                  color: "var(--fg)",
                  background: "var(--bg)",
                  border: "1px solid var(--bg)",
                  borderRadius: 0,
                  marginTop: "0.5rem",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--bg)"; e.currentTarget.style.borderColor = "var(--bg)"; }}
              >
                Enviar pelo WhatsApp <ArrowRight size={15} strokeWidth={1.5} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
