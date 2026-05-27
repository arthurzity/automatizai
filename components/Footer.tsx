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
    <footer className="py-12 md:py-16 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <Link href="#" className="text-xl font-black tracking-[-0.04em]">
            Automatiz<span style={{ color: "var(--accent)" }}>ai</span>
          </Link>
          <ul className="flex flex-wrap gap-6 list-none">
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
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-8 pt-8 border-t text-[0.65rem]"
          style={{ borderColor: "var(--border)", color: "var(--muted-fg)", fontFamily: '"JetBrains Mono", monospace' }}>
          <span>© 2025 Automatizai. Todos os direitos reservados.</span>
          <span>Todo o Brasil — atendemos de qualquer lugar.</span>
        </div>
      </div>
    </footer>
  );
}
