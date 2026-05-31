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

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "var(--card)", border: "1px solid var(--border)",
    borderRadius: "4px", color: "var(--fg)", fontFamily: "var(--sans)",
    fontSize: "0.95rem", padding: "0.8rem 1rem", outline: "none",
    transition: "border-color 150ms, box-shadow 150ms", display: "block",
  };

  return (
    <section id="orcamento" style={{ padding: "clamp(5rem,10vw,9rem) 0", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid gap-14 lg:grid-cols-[2fr_3fr] lg:gap-20 items-start">

          <Reveal>
            <SectionLabel>Orçamento gratuito</SectionLabel>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,4.5vw,3.8rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
              Pronto pra colocar seu negócio{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>online?</em>
            </h2>
            <div style={{ width: "40px", height: "1px", background: "var(--accent)", marginBottom: "1.25rem" }} />
            <p style={{ color: "var(--muted-fg)", lineHeight: 1.8, fontSize: "0.95rem" }}>
              Preenche o formulário e a gente entra em contato em até 24h. Sem compromisso, sem enrolação.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[["nome","Nome","Seu nome completo","text"],["email","E-mail","seu@email.com","email"]].map(([n,l,p,t]) => (
                  <div key={n}>
                    <label style={{ display: "block", fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-fg)", marginBottom: "0.4rem" }}>{l}</label>
                    <input type={t} name={n} required placeholder={p} value={form[n as keyof typeof form]} onChange={onChange} style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(184,134,11,0.1)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }} />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-fg)", marginBottom: "0.4rem" }}>Telefone / WhatsApp</label>
                <input type="tel" name="telefone" required placeholder="(11) 99999-9999" value={form.telefone} onChange={onChange} style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(184,134,11,0.1)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }} />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-fg)", marginBottom: "0.4rem" }}>Fale sobre seu negócio</label>
                <textarea name="mensagem" required rows={4} placeholder="Qual é o seu negócio? O que você precisa no site?" value={form.mensagem} onChange={onChange}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(184,134,11,0.1)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }} />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 transition-all duration-200"
                style={{ fontFamily: "var(--sans)", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", background: "var(--accent)", border: "none", borderRadius: "4px", padding: "0.95rem 2rem", cursor: "pointer", marginTop: "0.5rem", boxShadow: "0 2px 8px rgba(184,134,11,0.25)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--accent2)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                Enviar pelo WhatsApp <ArrowRight size={15} strokeWidth={1.5} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
