import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automatizai — Seu negócio na internet do jeito certo",
  description:
    "Sites profissionais para qualquer negócio. Entrega em até 72h, SEO incluso, suporte garantido. Solicite seu orçamento agora.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
