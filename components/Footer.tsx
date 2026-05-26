"use client";
import Link from "next/link";

const links = [
  ["#sobre", "Sobre"],
  ["#servicos", "Serviços"],
  ["#como-funciona", "Como funciona"],
  ["#orcamento", "Orçamento"],
];

export default function Footer() {
  return (
    <footer className="py-16 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-wrap justify-between items-center gap-8">
          <Link href="#" className="text-xl font-black tracking-[-0.04em]">
            Automatiz<span style={{ color: "var(--accent)" }}>ai</span>
          </Link>
          <ul className="flex flex-wrap gap-8 list-none">
            {links.map(([href, label]) => (
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
        </div>

        <div className="flex flex-wrap justify-between gap-4 mt-8 pt-8 border-t font-mono text-[0.7rem]"
          style={{ borderColor: "var(--border)", color: "var(--muted-fg)", fontFamily: "var(--font-mono)" }}>
          <span>© 2025 Automatizai. Todos os direitos reservados.</span>
          <span>Todo o Brasil — atendemos de qualquer lugar.</span>
        </div>
      </div>
    </footer>
  );
}
