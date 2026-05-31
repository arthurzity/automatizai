"use client";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

function ElegantShape({ className = "", delay = 0, width = 400, height = 100, rotate = 0, gradient = "from-white/[0.08]" }: { className?: string; delay?: number; width?: number; height?: number; rotate?: number; gradient?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 2.4, delay, opacity: { duration: 1.2 } }}
      className={`absolute ${className}`}>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }} className="relative">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border-2 border-white/[0.08] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]`} />
      </motion.div>
    </motion.div>
  );
}

export function HeroGeometric({ badge = "Automatizai", title1 = "Seu negócio na", title2 = "internet do jeito certo." }: { badge?: string; title1?: string; title2?: string }) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden" style={{ background: "#0A0A0A" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(255,61,0,0.05) 0%, transparent 60%)" }} />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-[#FF3D00]/[0.12]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
        <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-[#FF3D00]/[0.08]" className="right-[-5%] md:right-[0%] top-[60%] md:top-[65%]" />
        <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-white/[0.05]" className="left-[5%] md:left-[10%] bottom-[10%]" />
        <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-[#FF3D00]/[0.1]" className="right-[15%] md:right-[20%] top-[10%]" />
        <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-white/[0.06]" className="left-[20%] md:left-[25%] top-[5%]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 md:mb-12"
            style={{ background: "rgba(255,61,0,0.08)", border: "1px solid rgba(255,61,0,0.2)", padding: "0.3rem 1rem" }}>
            <Circle className="h-2 w-2" style={{ fill: "#FF3D00", color: "#FF3D00" }} />
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#FF3D00" }}>{badge}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', fontSize: "clamp(3.5rem,9vw,9rem)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.05em", marginBottom: "2rem" }}>
            <span style={{ color: "#FAFAFA" }}>{title1}</span>
            <br />
            <em style={{ fontFamily: '"Playfair Display", Georgia, serif', fontStyle: "italic", fontWeight: 400, color: "#FF3D00" }}>{title2}</em>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }}
            style={{ color: "#737373", fontSize: "clamp(1rem,1.5vw,1.1rem)", lineHeight: 1.8, maxWidth: "42ch", marginBottom: "3rem" }}>
            A gente cria o site que seu negócio precisa — bonito, rápido, no celular e no Google. Entrega em até 72h, suporte incluso.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-wrap gap-4 items-center">
            <a href="#orcamento" className="group relative inline-flex items-center gap-2"
              style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF3D00", textDecoration: "none", paddingBottom: "4px" }}>
              Solicitar orçamento
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              <span className="absolute bottom-0 left-0 w-full h-0.5 origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-150" style={{ background: "#FF3D00" }} />
            </a>
            <a href="#como-funciona" className="inline-flex items-center transition-all duration-150 hover:bg-white hover:text-black"
              style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FAFAFA", border: "1px solid #262626", padding: "0.75rem 1.5rem", textDecoration: "none" }}>
              Como funciona
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, #0A0A0A 0%, transparent 25%), linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, transparent 15%)" }} />
    </div>
  );
}
