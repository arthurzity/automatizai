"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const WPP = "5511912435135";

export default function CTA() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const t = `Olá! Vim pelo site da Automatizai e gostaria de solicitar um orçamento.\n\n*Nome:* ${form.nome}\n*E-mail:* ${form.email}\n*Telefone:* ${form.telefone}\n\n*Sobre meu negócio:*\n${form.mensagem}`;
    window.open(`https://wa.me/${WPP}?text=${encodeURIComponent(t)}`, "_blank");
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%", background: "var(--muted)", border: `1px solid ${focused === name ? "var(--accent)" : "var(--border)"}`,
    color: "var(--fg)", fontFamily: "var(--sans)", fontSize: "1rem",
    padding: "0.875rem 1rem", outline: "none", borderRadius: 0,
    transition: "border-color 150ms", display: "block",
  });

  const labelStyle: React.CSSProperties = {
    display: "block", fontFamily: "var(--mono)", fontSize: "0.62rem",
    letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-fg)", marginBottom: "0.4rem",
  };

  return (
    <section id="orcamento" style={{ padding: "clamp(5rem,10vw,10rem) 0", borderBottom: "1px solid var(--border)", background: "var(--muted)" }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid gap-14 lg:grid-cols-[2fr_3fr] lg:gap-20 items-start">
          <Reveal>
            <SectionLabel>Orçamento gratuito</SectionLabel>
            <h2 style={{ fontFamily: "var(--sans)", fontSize: "clamp(2.2rem,5vw,4.5rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "1.25rem" }}>
              Pronto pra colocar seu negócio{" "}
              <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>online?</em>
            </h2>
            <p style={{ color: "var(--muted-fg)", lineHeight: 1.8, fontSize: "0.95rem" }}>
              Preenche o formulário e a gente entra em contato em até 24h. Sem compromisso, sem enrolação.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Nome</label>
                  <input type="text" name="nome" required placeholder="Seu nome completo" value={form.nome} onChange={onChange} style={inputStyle("nome")}
                    onFocus={() => setFocused("nome")} onBlur={() => setFocused(null)} />
                </div>
                <div>
                  <label style={labelStyle}>E-mail</label>
                  <input type="email" name="email" required placeholder="seu@email.com" value={form.email} onChange={onChange} style={inputStyle("email")}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Telefone / WhatsApp</label>
                <input type="tel" name="telefone" required placeholder="(11) 99999-9999" value={form.telefone} onChange={onChange} style={inputStyle("telefone")}
                  onFocus={() => setFocused("telefone")} onBlur={() => setFocused(null)} />
              </div>
              <div>
                <label style={labelStyle}>Fale sobre seu negócio</label>
                <textarea name="mensagem" required rows={4} placeholder="Qual é o seu negócio? O que você precisa no site?" value={form.mensagem} onChange={onChange}
                  style={{ ...inputStyle("mensagem"), resize: "vertical" }}
                  onFocus={() => setFocused("mensagem")} onBlur={() => setFocused(null)} />
              </div>
              <motion.button type="submit" whileHover={{ y: -1 }} whileTap={{ y: 1 }}
                className="inline-flex items-center justify-center gap-2"
                style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg)", background: "transparent", border: "1px solid var(--fg)", padding: "1rem 2rem", cursor: "pointer", borderRadius: 0, marginTop: "0.5rem", transition: "background 150ms, color 150ms" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--fg)"; e.currentTarget.style.color = "var(--bg)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--fg)"; }}>
                Enviar pelo WhatsApp <ArrowRight size={15} strokeWidth={1.5} />
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
