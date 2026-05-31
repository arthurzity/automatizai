"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const WPP = "5511912435135";

export default function CTA() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const t = `Olá! Vim pelo site da Automatizai.\n\n*Nome:* ${form.nome}\n*E-mail:* ${form.email}\n*Telefone:* ${form.telefone}\n\n*Sobre meu negócio:*\n${form.mensagem}`;
    window.open(`https://wa.me/${WPP}?text=${encodeURIComponent(t)}`, "_blank");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "var(--muted)", border: "1px solid var(--border)",
    color: "var(--fg)", fontFamily: '"Inter Tight", system-ui', fontSize: "0.95rem",
    padding: "0.85rem 1rem", outline: "none", transition: "border-color 150ms", display: "block",
  };

  return (
    <section id="orcamento" style={{ padding: "clamp(5rem,10vw,9rem) 0", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid gap-14 lg:grid-cols-[2fr_3fr] lg:gap-24 items-start">
          <Reveal>
            <SectionLabel>Orçamento gratuito</SectionLabel>
            <h2 style={{ fontFamily: '"Inter Tight", system-ui', fontWeight: 900, fontSize: "clamp(2rem,5vw,4rem)", lineHeight: 1, letterSpacing: "-0.05em", marginBottom: "1rem" }}>
              Pronto pra colocar seu negócio{" "}
              <em style={{ fontStyle: "italic", fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400, color: "var(--accent)" }}>online?</em>
            </h2>
            <div style={{ width: "40px", height: "2px", background: "var(--accent)", marginBottom: "1rem" }} />
            <p style={{ color: "var(--muted-fg)", lineHeight: 1.8, fontSize: "0.95rem" }}>
              Preenche o formulário e a gente entra em contato em até 24h. Sem compromisso, sem enrolação.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[["nome","Nome","Seu nome completo","text"],["email","E-mail","seu@email.com","email"]].map(([n,l,p,t]) => (
                  <div key={n}>
                    <label style={{ display: "block", fontFamily: '"JetBrains Mono", monospace', fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-fg)", marginBottom: "0.4rem" }}>{l}</label>
                    <input type={t} name={n} required placeholder={p} value={form[n as keyof typeof form]} onChange={onChange} style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                      onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")} />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ display: "block", fontFamily: '"JetBrains Mono", monospace', fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-fg)", marginBottom: "0.4rem" }}>Telefone / WhatsApp</label>
                <input type="tel" name="telefone" required placeholder="(11) 99999-9999" value={form.telefone} onChange={onChange} style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")} />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: '"JetBrains Mono", monospace', fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-fg)", marginBottom: "0.4rem" }}>Fale sobre seu negócio</label>
                <textarea name="mensagem" required rows={4} placeholder="Qual é o seu negócio? O que você precisa no site?" value={form.mensagem} onChange={onChange}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")} />
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                className="inline-flex items-center justify-center gap-2"
                style={{ fontFamily: '"Inter Tight", system-ui', fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg)", background: "none", border: "1px solid var(--fg)", padding: "1rem 2rem", cursor: "pointer", marginTop: "0.5rem", transition: "all 150ms" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--fg)"; e.currentTarget.style.color = "var(--bg)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--fg)"; }}>
                Enviar pelo WhatsApp <ArrowRight size={15} strokeWidth={1.5} />
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
