"use client";
import Link from "next/link";

const links = [["#sobre","Sobre"],["#servicos","Serviços"],["#como-funciona","Como funciona"],["#orcamento","Orçamento"]];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "clamp(3rem,6vw,5rem) 0" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <Link href="#" className="text-xl font-black tracking-[-0.04em]">
            Automatiz<span style={{ color: "var(--accent)" }}>ai</span>
          </Link>
          <ul className="flex flex-wrap gap-6 list-none">
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
        </div>
        <div
          className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-8 pt-8"
          style={{ borderTop: "1px solid var(--border)", color: "var(--muted-fg)", fontSize: "0.65rem", fontFamily: '"JetBrains Mono", monospace', letterSpacing: "0.04em" }}
        >
          <span>© 2025 Automatizai. Todos os direitos reservados.</span>
          <span>Todo o Brasil — atendemos de qualquer lugar.</span>
        </div>
      </div>
    </footer>
  );
}
