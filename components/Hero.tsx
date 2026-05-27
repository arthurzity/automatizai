"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden border-b"
      style={{ borderColor: "var(--border)", minHeight: "100svh", display: "flex", alignItems: "center" }}>

      {/* BG decorative text — desktop only, absolutely positioned so it never affects layout */}
      <span aria-hidden className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2
        font-black tracking-[-0.06em] leading-none pointer-events-none select-none z-0"
        style={{ color: "var(--border)", fontSize: "clamp(10rem,18vw,20rem)", right: "-1vw" }}>
        WEB
      </span>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">

        <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase mb-6 md:mb-8 animate-fade-up"
          style={{ color: "var(--accent)", animationDelay: "0.1s", fontFamily: '"JetBrains Mono", monospace' }}>
          — Sites profissionais para qualquer negócio
        </p>

        <h1
          className="font-black leading-[0.95] tracking-[-0.04em] mb-6 md:mb-8 animate-fade-up"
          style={{ fontSize: "clamp(2.8rem,7vw,7rem)", maxWidth: "12ch", animationDelay: "0.2s" }}>
          Seu negócio<br />
          na internet<br />
          do jeito{" "}
          <em style={{
            color: "var(--accent)",
            fontFamily: '"Playfair Display", Georgia, serif',
            fontStyle: "italic",
            fontWeight: 400,
          }}>certo.</em>
        </h1>

        <p className="leading-relaxed mb-10 md:mb-12 animate-fade-up"
          style={{
            color: "var(--muted-fg)",
            animationDelay: "0.3s",
            maxWidth: "38ch",
            fontSize: "clamp(1rem,1.5vw,1.125rem)",
          }}>
          A gente cria o site que seu negócio precisa — bonito, rápido, no celular e no Google.
          Entrega em até 72h, suporte incluso.
        </p>

        <div className="flex flex-wrap gap-4 md:gap-6 items-center animate-fade-up"
          style={{ animationDelay: "0.4s" }}>

          <Link href="#orcamento"
            className="relative inline-flex items-center gap-2 font-semibold tracking-[0.1em] uppercase py-3 group"
            style={{ color: "var(--accent)", fontSize: "0.75rem" }}>
            Solicitar orçamento
            <ArrowRight size={15} strokeWidth={1.5} />
            <span className="absolute bottom-1 left-0 w-full h-0.5 transition-transform duration-150 origin-left scale-x-100 group-hover:scale-x-110"
              style={{ background: "var(--accent)" }} />
          </Link>

          <Link href="#como-funciona"
            className="inline-flex items-center gap-2 font-semibold tracking-[0.1em] uppercase px-5 py-3 border transition-all duration-150"
            style={{ color: "var(--fg)", borderColor: "var(--fg)", fontSize: "0.75rem" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--fg)"; e.currentTarget.style.color = "var(--bg)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--fg)"; }}>
            Como funciona
          </Link>

        </div>
      </div>
    </section>
  );
}
