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

    // Wait for metadata to load
    const onLoaded = () => {
      video.pause();
      video.currentTime = 0;
    };
    video.addEventListener("loadedmetadata", onLoaded);

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      // progress: 0 when top of section hits top of viewport, 1 when bottom leaves
      const scrolled = -rect.top;
      const total = sectionHeight + window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      if (video.duration) {
        video.currentTime = progress * video.duration;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      video.removeEventListener("loadedmetadata", onLoaded);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-b overflow-hidden"
      style={{
        borderColor: "var(--border)",
        paddingTop: "clamp(120px, 18vw, 200px)",
        paddingBottom: "clamp(80px, 12vw, 140px)",
        minHeight: "100svh",
      }}
    >
      {/* ── VIDEO BACKGROUND (desktop only) ── */}
      <video
        ref={videoRef}
        className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.18, zIndex: 0 }}
        src="/hero.mp4"
        muted
        playsInline
        preload="auto"
      />

      {/* Dark overlay so text stays readable */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          zIndex: 1,
          background: "linear-gradient(to right, rgba(10,10,10,0.96) 40%, rgba(10,10,10,0.6) 100%)",
        }}
      />

      {/* BG word — xl+ only */}
      <span
        aria-hidden
        className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 font-black leading-none tracking-[-0.06em] select-none pointer-events-none"
        style={{ fontSize: "clamp(12rem,20vw,22rem)", color: "rgba(255,255,255,0.04)", right: "-1rem", zIndex: 2 }}
      >
        WEB
      </span>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20" style={{ zIndex: 3 }}>
        <p
          className="fade-up text-[0.7rem] font-medium tracking-[0.22em] uppercase mb-7"
          style={{ color: "var(--accent)", fontFamily: '"JetBrains Mono", monospace', animationDelay: "0.05s" }}
        >
          — Sites profissionais para qualquer negócio
        </p>

        <h1
          className="fade-up font-black leading-[1] tracking-[-0.04em] mb-8"
          style={{ fontSize: "clamp(3.2rem, 8.5vw, 8rem)", animationDelay: "0.15s", maxWidth: "12ch" }}
        >
          Seu negócio<br />
          na internet<br />
          do jeito{" "}
          <em style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontStyle: "italic",
            fontWeight: 400,
            color: "var(--accent)",
          }}>
            certo.
          </em>
        </h1>

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

        {/* Scroll hint */}
        <div
          className="hidden lg:flex items-center gap-3 mt-16 fade-up"
          style={{ animationDelay: "0.5s", color: "var(--muted-fg)" }}
        >
          <span className="text-[0.65rem] tracking-[0.18em] uppercase" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
            Role para explorar
          </span>
          <span
            className="inline-block w-8 h-px"
            style={{ background: "var(--border)" }}
          />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <polyline points="19 12 12 19 5 12"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
