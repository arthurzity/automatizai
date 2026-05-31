"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [["#sobre","Sobre"],["#servicos","Serviços"],["#como-funciona","Como funciona"],["#orcamento","Orçamento"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ borderColor: "var(--border)", background: "rgba(10,10,10,0.92)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="flex items-center justify-between h-16">
            <Link href="#" style={{ fontFamily: "var(--sans)", fontSize: "1rem", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--fg)", textDecoration: "none" }}>
              Automatiz<span style={{ color: "var(--accent)" }}>ai</span>
            </Link>
            <ul className="hidden md:flex items-center gap-8 list-none">
              {links.map(([h,l]) => (
                <li key={h}>
                  <Link href={h} className="group relative" style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-fg)", textDecoration: "none", transition: "color 150ms" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-fg)")}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Link href="#orcamento" className="hidden md:inline-flex relative group items-center gap-1"
                style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", textDecoration: "none", paddingBottom: "2px" }}>
                Pedir orçamento
                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-150" style={{ background: "var(--accent)" }} />
              </Link>
              <button className="md:hidden" style={{ background: "none", border: "none", cursor: "pointer", color: "var(--fg)", padding: "4px" }} onClick={() => setOpen(o => !o)}>
                {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col" style={{ background: "var(--bg)", paddingTop: "64px" }}>
            <ul className="list-none">
              {[...links, ["#orcamento","Pedir orçamento →"]].map(([h,l], i) => (
                <motion.li key={h} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}
                  style={{ borderBottom: "1px solid var(--border)" }}>
                  <Link href={h} onClick={() => setOpen(false)} className="block"
                    style={{ padding: "1.1rem 1.5rem", fontFamily: "var(--mono)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: i === links.length ? "var(--accent)" : "var(--muted-fg)", textDecoration: "none" }}>
                    {l}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
