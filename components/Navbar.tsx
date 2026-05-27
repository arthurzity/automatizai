"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["#sobre","Sobre"],["#servicos","Serviços"],["#como-funciona","Como funciona"],["#orcamento","Orçamento"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          borderBottom: "1px solid var(--border)",
          background: "rgba(10,10,10,0.9)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="flex items-center justify-between h-16">
            <Link href="#" className="text-base font-black tracking-[-0.04em]">
              Automatiz<span style={{ color: "var(--accent)" }}>ai</span>
            </Link>

            {/* Desktop */}
            <ul className="hidden md:flex items-center gap-8 list-none">
              {links.map(([h, l]) => (
                <li key={h}>
                  <Link href={h}
                    className="transition-colors duration-150 hover:text-white"
                    style={{ color: "var(--muted-fg)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <Link href="#orcamento"
                className="hidden md:inline-flex relative group font-semibold tracking-[0.1em] uppercase"
                style={{ color: "var(--accent)", fontSize: "0.72rem", paddingBottom: "3px" }}>
                Pedir orçamento
                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-150"
                  style={{ background: "var(--accent)" }} />
              </Link>
              <button
                className="md:hidden"
                style={{ color: "var(--fg)", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
                onClick={() => setOpen(o => !o)}
                aria-label="Menu"
              >
                {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col" style={{ background: "var(--bg)", paddingTop: "64px" }}>
          <ul className="list-none">
            {[...links, ["#orcamento", "Pedir orçamento →"]].map(([h, l], i) => (
              <li key={h} style={{ borderBottom: "1px solid var(--border)" }}>
                <Link href={h}
                  onClick={() => setOpen(false)}
                  className="block font-semibold tracking-[0.1em] uppercase transition-colors duration-150"
                  style={{
                    padding: "1.25rem 1.5rem",
                    fontSize: "0.8rem",
                    color: i === links.length ? "var(--accent)" : "var(--muted-fg)",
                  }}>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
