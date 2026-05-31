"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["#sobre","Sobre"],["#servicos","Serviços"],["#como-funciona","Como funciona"],["#orcamento","Orçamento"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ borderColor: "var(--border)", background: "rgba(250,250,248,0.94)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16">
          <div className="flex items-center justify-between h-[68px]">
            <Link href="#" style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", fontWeight: 500, color: "var(--fg)", textDecoration: "none", letterSpacing: "-0.01em" }}>
              Automatiz<em style={{ fontStyle: "italic", color: "var(--accent)" }}>ai</em>
            </Link>
            <ul className="hidden md:flex items-center gap-8 list-none">
              {links.map(([h, l]) => (
                <li key={h}>
                  <Link href={h} style={{ fontFamily: "var(--sans)", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted-fg)", textDecoration: "none", transition: "color 200ms" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-fg)")}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Link href="#orcamento" className="hidden md:inline-flex items-center"
                style={{ fontFamily: "var(--sans)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", background: "var(--accent)", padding: "0.55rem 1.4rem", borderRadius: "4px", textDecoration: "none", transition: "background 200ms, transform 200ms" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--accent2)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                Pedir orçamento
              </Link>
              <button className="md:hidden" style={{ background: "none", border: "none", cursor: "pointer", color: "var(--fg)", padding: "4px" }} onClick={() => setOpen(o => !o)} aria-label="Menu">
                {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col" style={{ background: "var(--bg)", paddingTop: "68px" }}>
          <ul className="list-none">
            {[...links, ["#orcamento", "Pedir orçamento →"]].map(([h, l], i) => (
              <li key={h} style={{ borderBottom: "1px solid var(--border)" }}>
                <Link href={h} onClick={() => setOpen(false)}
                  className="block"
                  style={{ padding: "1.1rem 1.5rem", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", color: i === links.length ? "var(--accent)" : "var(--muted-fg)" }}>
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
