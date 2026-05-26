"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden border-b"
      style={{ borderColor: "var(--border)" }}>

      {/* BG decorative text */}
      <span aria-hidden className="hidden md:block absolute right-[-2vw] top-1/2 -translate-y-1/2
        text-[clamp(8rem,22vw,22rem)] font-black tracking-[-0.06em] leading-none
        pointer-events-none select-none"
        style={{ color: "var(--border)" }}>
        WEB
      </span>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 relative">

        <p className="font-mono text-xs tracking-[0.2em] uppercase mb-8 animate-fade-up"
          style={{ color: "var(--accent)", animationDelay: "0.1s", fontFamily: "var(--font-mono)" }}>
          — Sites profissionais para qualquer negócio
        </p>

        <h1 className="font-black leading-none tracking-[-0.05em] mb-8 max-w-[14ch] animate-fade-up"
          style={{
            fontSize: "clamp(3rem,9vw,8rem)",
            animationDelay: "0.2s",
          }}>
          Seu negócio na internet do jeito{" "}
          <em className="font-serif font-normal not-italic"
            style={{ color: "var(--accent)", fontFamily: '"Playfair Display", Georgia, serif', fontStyle: "italic" }}>
            certo.
          </em>
        </h1>

        <p className="text-lg max-w-[42ch] leading-relaxed mb-12 animate-fade-up"
          style={{ color: "var(--muted-fg)", animationDelay: "0.3s" }}>
          A gente cria o site que seu negócio precisa — bonito, rápido, no celular e no Google.
          Entrega em até 72h, suporte incluso.
        </p>

        <div className="flex flex-wrap gap-6 items-center animate-fade-up"
          style={{ animationDelay: "0.4s" }}>

          <Link href="#orcamento"
            className="relative inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase py-3 group"
            style={{ color: "var(--accent)" }}>
            Solicitar orçamento
            <ArrowRight size={16} strokeWidth={1.5} />
            <span className="absolute bottom-1 left-0 w-full h-0.5 transition-transform duration-150 origin-left scale-x-100 group-hover:scale-x-110"
              style={{ background: "var(--accent)" }} />
          </Link>

          <Link href="#como-funciona"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase px-6 py-3.5 border transition-all duration-150"
            style={{ color: "var(--fg)", borderColor: "var(--fg)" }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--fg)";
              e.currentTarget.style.color = "var(--bg)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--fg)";
            }}>
            Como funciona
          </Link>

        </div>
      </div>
    </section>
  );
}
