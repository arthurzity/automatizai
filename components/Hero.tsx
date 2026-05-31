"use client";
import { HeroGeometric } from "./ui/shape-landing-hero";
import { useEffect, useRef } from "react";

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
    <div ref={sectionRef} className="relative">
      {/* Scroll-driven video — subtle layer under HeroGeometric */}
      <video ref={videoRef} className="hidden lg:block absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.07, zIndex: 0 }} src="/hero.mp4" muted playsInline preload="auto" />
      <div className="relative" style={{ zIndex: 1 }}>
        <HeroGeometric
          badge="Automatizai"
          title1="Seu negócio na"
          title2="internet do jeito certo."
        />
      </div>
    </div>
  );
}
