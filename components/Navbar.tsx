"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      style={{ borderColor: "var(--border)", background: "rgba(10,10,10,0.92)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">

          <Link href="#" className="text-lg font-black tracking-[-0.04em]"
            style={{ color: "var(--fg)" }}>
            Automatiz<span style={{ color: "var(--accent)" }}>ai</span>
          </Link>

          <ul className="hidden md:flex gap-8 list-none">
            {[["#sobre","Sobre"],["#servicos","Serviços"],["#como-funciona","Como funciona"],["#orcamento","Orçamento"]].map(([href, label]) => (
              <li key={href}>
                <Link href={href}
                  className="text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-150"
                  style={{ color: "var(--muted-fg)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-fg)")}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="#orcamento"
            className="relative text-xs font-semibold tracking-[0.1em] uppercase pb-0.5 group"
            style={{ color: "var(--accent)" }}>
            Pedir orçamento
            <span className="absolute bottom-0 left-0 w-full h-px transition-transform duration-150 origin-left scale-x-100 group-hover:scale-x-110"
              style={{ background: "var(--accent)" }} />
          </Link>

        </div>
      </div>
    </nav>
  );
}
