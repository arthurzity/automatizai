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
      {/* VIDEO — desktop only, covers full section */}
      <video
        ref={videoRef}
        className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.35, zIndex: 0 }}
        src="/hero.mp4"
        muted
        playsInline
        preload="auto"
      />

      {/* Gradient overlay — strong on left so text is always readable */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to right, rgba(10,10,10,1) 35%, rgba(10,10,10,0.75) 65%, rgba(10,10,10,0.4) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative w-full max-w-5xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20"
        style={{ zIndex: 2 }}
      >
        {/* Eyebrow */}
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

        {/* Headline — big and bold */}
        <h1
          className="fade-up font-black leading-[0.95] tracking-[-0.04em] mb-10"
          style={{
            fontSize: "clamp(4rem, 10vw, 10rem)",
            animationDelay: "0.15s",
            maxWidth: "14ch",
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

        {/* Sub */}
        <p
          className="fade-up leading-relaxed mb-12"
          style={{
            color: "var(--muted-fg)",
            fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
            maxWidth: "38ch",
            animationDelay: "0.25s",
          }}
        >
          A gente cria o site que seu negócio precisa — bonito, rápido,
          no celular e no Google. Entrega em até 72h, suporte incluso.
        </p>

        {/* CTAs */}
        <div
          className="fade-up flex flex-wrap gap-4 items-center"
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
          className="hidden lg:flex items-center gap-3 mt-20 fade-up"
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
    </section>
  );
}
