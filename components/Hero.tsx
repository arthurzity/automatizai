"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.addEventListener("loadedmetadata", () => {
      video.pause();
      video.currentTime = 0;
    });

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = section.offsetHeight + window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      if (video.duration) video.currentTime = progress * video.duration;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-b overflow-hidden"
      style={{
        borderColor: "var(--border)",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.35, zIndex: 0 }}
        src="/hero.mp4"
        muted
        playsInline
        preload="auto"
      />

      {/* Gradient overlay */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to right, rgba(10,10,10,0.97) 30%, rgba(10,10,10,0.6) 70%, rgba(10,10,10,0.3) 100%)",
        }}
      />

      {/* Content — full width, two-col on desktop */}
      <div
        className="relative w-full mx-auto"
        style={{
          zIndex: 2,
          maxWidth: "1400px",
          padding: "0 clamp(2rem, 6vw, 8rem)",
        }}
      >
        <div className="grid lg:grid-cols-[3fr_2fr] lg:gap-16 items-center">

          {/* LEFT — text */}
          <div>
            <p
              className="fade-up text-[0.7rem] font-medium tracking-[0.22em] uppercase mb-8"
              style={{
                color: "var(--accent)",
                fontFamily: '"JetBrains Mono", monospace',
                animationDelay: "0.05s",
              }}
            >
              — Sites profissionais para qualquer negócio
            </p>

            <h1
              className="fade-up font-black leading-[0.93] tracking-[-0.04em] mb-10"
              style={{
                fontSize: "clamp(4rem, 8.5vw, 10rem)",
                animationDelay: "0.15s",
              }}
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

            <p
              className="fade-up leading-relaxed mb-12"
              style={{
                color: "var(--muted-fg)",
                fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
                maxWidth: "44ch",
                animationDelay: "0.25s",
              }}
            >
              A gente cria o site que seu negócio precisa — bonito, rápido,
              no celular e no Google. Entrega em até 72h, suporte incluso.
            </p>

            <div
              className="fade-up flex flex-wrap gap-4 items-center mb-16"
              style={{ animationDelay: "0.35s" }}
            >
              <Link
                href="#orcamento"
                className="group relative inline-flex items-center gap-2 font-semibold tracking-[0.1em] uppercase"
                style={{ color: "var(--accent)", fontSize: "0.78rem", paddingBottom: "4px" }}
              >
                Solicitar orçamento
                <ArrowRight size={15} strokeWidth={1.5} />
                <span
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-150"
                  style={{ background: "var(--accent)" }}
                />
              </Link>

              <Link
                href="#como-funciona"
                className="inline-flex items-center font-semibold tracking-[0.1em] uppercase border transition-all duration-150 hover:bg-white hover:text-black"
                style={{
                  color: "var(--fg)",
                  borderColor: "rgba(255,255,255,0.2)",
                  fontSize: "0.78rem",
                  padding: "0.75rem 1.5rem",
                }}
              >
                Como funciona
              </Link>
            </div>

            {/* Scroll hint */}
            <div
              className="hidden lg:flex items-center gap-3 fade-up"
              style={{ animationDelay: "0.5s", color: "var(--muted-fg)" }}
            >
              <span
                className="text-[0.62rem] tracking-[0.18em] uppercase"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                Role para explorar
              </span>
              <span className="inline-block w-8 h-px" style={{ background: "var(--border)" }} />
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </div>
          </div>

          {/* RIGHT — stats cards (desktop only) */}
          <div className="hidden lg:flex flex-col gap-4 fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { num: "72h", label: "Prazo de entrega", desc: "Do briefing ao site no ar" },
              { num: "SEO", label: "Incluso em todos os planos", desc: "Configurado pra aparecer no Google" },
              { num: "100%", label: "Responsivo mobile", desc: "Perfeito em qualquer tela" },
            ].map((s) => (
              <div
                key={s.num}
                className="flex items-center gap-5 transition-colors duration-200 group"
                style={{
                  border: "1px solid var(--border)",
                  padding: "1.25rem 1.5rem",
                  background: "rgba(10,10,10,0.6)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <span
                  className="font-black leading-none tracking-[-0.04em] shrink-0"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "var(--accent)" }}
                >
                  {s.num}
                </span>
                <div>
                  <p className="font-semibold text-sm leading-snug mb-0.5">{s.label}</p>
                  <p className="text-xs leading-snug" style={{ color: "var(--muted-fg)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
