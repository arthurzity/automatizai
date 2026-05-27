"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["#sobre", "Sobre"],
  ["#servicos", "Serviços"],
  ["#como-funciona", "Como funciona"],
  ["#orcamento", "Orçamento"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
        style={{ borderColor: "var(--border)", background: "rgba(10,10,10,0.92)" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-16">

            <Link href="#" className="text-lg font-black tracking-[-0.04em]"
              style={{ color: "var(--fg)" }}>
              Automatiz<span style={{ color: "var(--accent)" }}>ai</span>
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex gap-8 list-none">
              {links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href}
                    className="text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-150 hover:text-white"
                    style={{ color: "var(--muted-fg)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <Link href="#orcamento"
                className="hidden md:inline-flex relative text-xs font-semibold tracking-[0.1em] uppercase pb-0.5 group"
                style={{ color: "var(--accent)" }}>
                Pedir orçamento
                <span className="absolute bottom-0 left-0 w-full h-px transition-transform duration-150 origin-left scale-x-100 group-hover:scale-x-110"
                  style={{ background: "var(--accent)" }} />
              </Link>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-1"
                style={{ color: "var(--fg)" }}
                onClick={() => setOpen(o => !o)}
                aria-label="Menu">
                {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col pt-16"
          style={{ background: "var(--bg)" }}>
          <ul className="list-none flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-5 text-sm font-semibold tracking-[0.1em] uppercase transition-colors duration-150"
                  style={{ color: "var(--muted-fg)" }}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#orcamento"
                onClick={() => setOpen(false)}
                className="block px-6 py-5 text-sm font-semibold tracking-[0.1em] uppercase"
                style={{ color: "var(--accent)" }}>
                Pedir orçamento →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
