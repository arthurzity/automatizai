"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative border-b"
      style={{
        borderColor: "var(--border)",
        paddingTop: "clamp(120px, 18vw, 200px)",
        paddingBottom: "clamp(80px, 12vw, 140px)",
      }}
    >
      {/* BG word — desktop only, z-0 so it never occludes content */}
      <span
        aria-hidden
        className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 font-black leading-none tracking-[-0.06em] select-none pointer-events-none z-0"
        style={{ fontSize: "clamp(12rem, 20vw, 22rem)", color: "var(--border)", right: "-1rem" }}
      >
        WEB
      </span>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Eyebrow */}
        <p
          className="fade-up text-[0.7rem] font-medium tracking-[0.22em] uppercase mb-7"
          style={{ color: "var(--accent)", fontFamily: '"JetBrains Mono", monospace', animationDelay: "0.05s" }}
        >
          — Sites profissionais para qualquer negócio
        </p>

        {/* Headline */}
        <h1
          className="fade-up font-black leading-[1] tracking-[-0.04em] mb-8"
          style={{ fontSize: "clamp(3.2rem, 8.5vw, 8rem)", animationDelay: "0.15s", maxWidth: "12ch" }}
        >
          Seu negócio<br />
          na internet<br />
          do jeito{" "}
          <em
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--accent)",
            }}
          >
            certo.
          </em>
        </h1>

        {/* Sub */}
        <p
          className="fade-up leading-relaxed mb-10 md:mb-14"
          style={{
            color: "var(--muted-fg)",
            fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
            maxWidth: "40ch",
            animationDelay: "0.25s",
          }}
        >
          A gente cria o site que seu negócio precisa —{" "}
          bonito, rápido, no celular e no Google.{" "}
          Entrega em até 72h, suporte incluso.
        </p>

        {/* CTAs */}
        <div className="fade-up flex flex-wrap gap-4 items-center" style={{ animationDelay: "0.35s" }}>
          <Link
            href="#orcamento"
            className="group relative inline-flex items-center gap-2 font-semibold tracking-[0.1em] uppercase"
            style={{ color: "var(--accent)", fontSize: "0.78rem", paddingBottom: "4px" }}
          >
            Solicitar orçamento
            <ArrowRight size={15} strokeWidth={1.5} />
            <span
              className="absolute bottom-0 left-0 h-px w-full origin-left transition-transform duration-150 scale-x-100 group-hover:scale-x-110"
              style={{ background: "var(--accent)" }}
            />
          </Link>

          <Link
            href="#como-funciona"
            className="inline-flex items-center font-semibold tracking-[0.1em] uppercase border transition-all duration-150 hover:bg-white hover:text-black"
            style={{
              color: "var(--fg)",
              borderColor: "var(--border)",
              fontSize: "0.78rem",
              padding: "0.75rem 1.5rem",
            }}
          >
            Como funciona
          </Link>
        </div>
      </div>
    </section>
  );
}
