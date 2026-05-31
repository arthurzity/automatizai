"use client";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

function ElegantShape({ className, delay = 0, width = 400, height = 100, rotate = 0, gradient = "from-white/[0.08]" }: {
  className?: string; delay?: number; width?: number; height?: number; rotate?: number; gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 2.4, delay, opacity: { duration: 1.2 } }}
      className={`absolute ${className}`}>
      <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }} className="relative">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.08)]`} />
      </motion.div>
    </motion.div>
  );
}

export function HeroGeometric({ badge, title1, title2 }: { badge?: string; title1?: string; title2?: string }) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden" style={{ background: "#0A0A0A" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] via-transparent to-red-500/[0.04] blur-3xl" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape delay={0.3} width={600} height={130} rotate={12} gradient="from-orange-500/[0.12]" className="left-[-8%] top-[18%]" />
        <ElegantShape delay={0.5} width={480} height={110} rotate={-15} gradient="from-red-500/[0.10]" className="right-[-4%] top-[68%]" />
        <ElegantShape delay={0.4} width={280} height={75} rotate={-8} gradient="from-amber-500/[0.12]" className="left-[8%] bottom-[8%]" />
        <ElegantShape delay={0.6} width={200} height={55} rotate={20} gradient="from-orange-400/[0.10]" className="right-[18%] top-[12%]" />
        <ElegantShape delay={0.7} width={140} height={38} rotate={-25} gradient="from-yellow-500/[0.08]" className="left-[22%] top-[8%]" />
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 md:mb-12"
            style={{ background: "rgba(255,61,0,0.08)", border: "1px solid rgba(255,61,0,0.2)" }}>
            <Circle className="h-2 w-2" style={{ fill: "#FF3D00", color: "#FF3D00" }} />
            <span style={{ fontSize: "0.7rem", color: "rgba(250,250,250,0.5)", letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: '"JetBrains Mono", monospace' }}>
              {badge}
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{ fontFamily: '"Inter Tight", system-ui', fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            <span className="block" style={{ fontSize: "clamp(4rem,10vw,9rem)", background: "linear-gradient(to bottom, #FAFAFA, rgba(250,250,250,0.6))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {title1}
            </span>
            <span className="block" style={{ fontSize: "clamp(4rem,10vw,9rem)", background: "linear-gradient(to right, #FF3D00, #FF6B35, #FF3D00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {title2}
            </span>
          </motion.h1>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60 pointer-events-none" />
    </div>
  );
}
