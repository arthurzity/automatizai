"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HeroGeometric } from "./ui/shape-landing-hero";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <div ref={sectionRef} className="relative border-b" style={{ borderColor: "var(--border)" }}>
      {/* HeroGeometric background */}
      <div className="absolute inset-0 z-0">
        <HeroGeometric badge="automatizai.online" title1="Seu negócio" title2="online agora." />
      </div>

      {/* Scroll-driven video — very subtle */}
      <video ref={videoRef} className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.06, zIndex: 1 }} src="/hero.mp4" muted playsInline preload="auto" />

      {/* Content on top */}
      <div className="relative z-10 min-h-screen flex items-center" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="grid lg:grid-cols-[3fr_2fr] lg:gap-16 items-center">

            {/* LEFT */}
            <div>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
                style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "2rem" }}>
                — Sites profissionais para qualquer negócio
              </motion.p>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: '"Inter Tight", system-ui', fontWeight: 900, fontSize: "clamp(3.2rem,7vw,7.5rem)", lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>
                Seu negócio<br />
                na internet<br />
                do jeito{" "}
                <em style={{ fontStyle: "italic", fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400, color: "var(--accent)" }}>
                  certo.
                </em>
              </motion.h1>

              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: "60px", height: "2px", background: "var(--accent)", marginBottom: "1.75rem", transformOrigin: "left" }} />

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}
                style={{ color: "var(--muted-fg)", fontSize: "clamp(1rem,1.3vw,1.05rem)", maxWidth: "42ch", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                A gente cria o site que seu negócio precisa — bonito, rápido, no celular e no Google. Entrega em até 72h, suporte incluso.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.1 }}
                className="flex flex-wrap gap-4 items-center mb-14">
                <Link href="#orcamento" className="group relative inline-flex items-center gap-2"
                  style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", textDecoration: "none", paddingBottom: "4px" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-1px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                  Solicitar orçamento <ArrowRight size={15} strokeWidth={1.5} />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-150" style={{ background: "var(--accent)" }} />
                </Link>
                <Link href="#como-funciona" className="inline-flex items-center transition-all duration-150"
                  style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg)", border: "1px solid var(--border)", padding: "0.75rem 1.5rem", textDecoration: "none" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--fg)"; e.currentTarget.style.color = "var(--bg)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--fg)"; }}>
                  Como funciona
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
                className="hidden lg:flex items-center gap-3" style={{ color: "var(--muted-fg)" }}>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Role para explorar</span>
                <span className="inline-block w-8 h-px" style={{ background: "var(--border)" }} />
                <motion.svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                  <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
                </motion.svg>
              </motion.div>
            </div>

            {/* RIGHT — animated stats cards */}
            <div className="hidden lg:flex flex-col gap-3">
              {[
                { num: "72h", label: "Prazo de entrega", desc: "Do briefing ao site no ar", delay: 1.2 },
                { num: "SEO", label: "Incluso em todos os planos", desc: "Configurado pra aparecer no Google", delay: 1.3 },
                { num: "100%", label: "Responsivo mobile", desc: "Perfeito em qualquer tela", delay: 1.4 },
              ].map((s) => (
                <motion.div key={s.num}
                  initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: s.delay, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-5 transition-all duration-200 group"
                  style={{ border: "1px solid var(--border)", padding: "1.25rem 1.75rem", background: "rgba(15,15,15,0.8)", backdropFilter: "blur(12px)" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}>
                  <span style={{ fontFamily: '"Inter Tight", system-ui', fontSize: "clamp(1.8rem,2.8vw,2.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--accent)", flexShrink: 0, minWidth: "80px", textAlign: "right" }}>
                    {s.num}
                  </span>
                  <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: "1.25rem" }}>
                    <p style={{ fontWeight: 600, fontSize: "0.88rem", marginBottom: "0.2rem" }}>{s.label}</p>
                    <p style={{ fontSize: "0.75rem", color: "var(--muted-fg)" }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
