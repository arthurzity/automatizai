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
    video.addEventListener("loadedmetadata", () => { video.pause(); video.currentTime = 0; });
    const onScroll = () => {
      const progress = Math.max(0, Math.min(1, -section.getBoundingClientRect().top / (section.offsetHeight + window.innerHeight)));
      if (video.duration) video.currentTime = progress * video.duration;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative border-b overflow-hidden"
      style={{ borderColor: "var(--border)", minHeight: "100svh", display: "flex", alignItems: "center", paddingTop: "120px", paddingBottom: "80px" }}>

      {/* VIDEO bg — desktop only, very subtle on light theme */}
      <video ref={videoRef} className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.06, zIndex: 0 }} src="/hero.mp4" muted playsInline preload="auto" />

      {/* Warm gradient overlay */}
      <div className="hidden lg:block absolute inset-0" style={{ zIndex: 1, background: "linear-gradient(105deg, rgba(250,250,248,0.97) 45%, rgba(250,250,248,0.8) 75%, rgba(250,250,248,0.5) 100%)" }} />

      <div className="relative w-full max-w-5xl mx-auto px-6 sm:px-10 md:px-16" style={{ zIndex: 2 }}>
        <div className="grid lg:grid-cols-[3fr_2fr] lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            <p className="fade-up" style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.75rem", animationDelay: "0.05s" }}>
              — Sites profissionais para qualquer negócio
            </p>

            <h1 className="fade-up" style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem,7.5vw,6.5rem)", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "1rem", animationDelay: "0.15s" }}>
              Seu negócio<br />
              na internet<br />
              do jeito{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>certo.</em>
            </h1>

            {/* Rule under headline */}
            <div className="fade-up" style={{ width: "60px", height: "1px", background: "var(--accent)", margin: "1.75rem 0", animationDelay: "0.2s" }} />

            <p className="fade-up" style={{ color: "var(--muted-fg)", fontSize: "clamp(1rem,1.4vw,1.1rem)", maxWidth: "42ch", lineHeight: 1.8, marginBottom: "2.5rem", animationDelay: "0.25s" }}>
              A gente cria o site que seu negócio precisa — bonito, rápido, no celular e no Google. Entrega em até 72h, suporte incluso.
            </p>

            <div className="fade-up flex flex-wrap gap-4 items-center mb-14" style={{ animationDelay: "0.35s" }}>
              <Link href="#orcamento" className="inline-flex items-center gap-2 transition-all duration-200"
                style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", background: "var(--accent)", padding: "0.85rem 2rem", borderRadius: "4px", textDecoration: "none", boxShadow: "0 2px 8px rgba(184,134,11,0.25)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--accent2)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                Solicitar orçamento <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
              <Link href="#como-funciona" className="inline-flex items-center transition-all duration-200"
                style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg)", border: "1px solid var(--border)", padding: "0.85rem 1.75rem", borderRadius: "4px", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "rgba(184,134,11,0.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--fg)"; e.currentTarget.style.background = "transparent"; }}>
                Como funciona
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-3 fade-up" style={{ animationDelay: "0.5s", color: "var(--muted-fg)" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Role para explorar</span>
              <span className="inline-block w-8 h-px" style={{ background: "var(--border)" }} />
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
              </svg>
            </div>
          </div>

          {/* RIGHT — stats cards desktop */}
          <div className="hidden lg:flex flex-col gap-3 fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { num: "72h", label: "Prazo de entrega", desc: "Do briefing ao site no ar" },
              { num: "SEO", label: "Incluso em todos os planos", desc: "Configurado pra aparecer no Google" },
              { num: "100%", label: "Responsivo mobile", desc: "Perfeito em qualquer tela" },
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-5 transition-all duration-200"
                style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "6px", padding: "1.25rem 1.5rem", boxShadow: "0 1px 4px rgba(26,26,26,0.05)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(184,134,11,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(26,26,26,0.05)"; }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 400, lineHeight: 1, color: "var(--accent)", flexShrink: 0, minWidth: "80px", textAlign: "right" }}>
                  {s.num}
                </span>
                <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: "1.25rem" }}>
                  <p style={{ fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.3, marginBottom: "0.25rem" }}>{s.label}</p>
                  <p style={{ fontSize: "0.78rem", color: "var(--muted-fg)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
