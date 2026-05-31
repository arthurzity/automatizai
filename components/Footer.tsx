"use client";
import Link from "next/link";

const links = [["#sobre","Sobre"],["#servicos","Serviços"],["#como-funciona","Como funciona"],["#orcamento","Orçamento"]];

export default function Footer() {
  return (
    <footer style={{ padding: "clamp(3rem,6vw,5rem) 0", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <Link href="#" style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", fontWeight: 500, color: "var(--fg)", textDecoration: "none", letterSpacing: "-0.01em" }}>
            Automatiz<em style={{ fontStyle: "italic", color: "var(--accent)" }}>ai</em>
          </Link>
          <ul className="flex flex-wrap gap-6 list-none">
            {links.map(([h, l]) => (
              <li key={h}>
                <Link href={h} style={{ fontFamily: "var(--sans)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-fg)", textDecoration: "none", transition: "color 200ms" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-fg)")}>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-8 pt-8" style={{ borderTop: "1px solid var(--border)", fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.05em", color: "var(--muted-fg)" }}>
          <span>© 2025 Automatizai. Todos os direitos reservados.</span>
          <span>Todo o Brasil — atendemos de qualquer lugar.</span>
        </div>
      </div>
    </footer>
  );
}
