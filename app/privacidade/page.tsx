import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Automatizai",
  description: "Saiba como a Automatizai coleta, usa e protege suas informações pessoais.",
};

export default function Privacidade() {
  const today = "27 de maio de 2025";

  return (
    <main style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>
      {/* Nav simples */}
      <nav
        className="border-b"
        style={{ borderColor: "var(--border)", padding: "1rem 0" }}
      >
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Link href="/" className="text-base font-black tracking-[-0.04em]">
            Automatiz<span style={{ color: "var(--accent)" }}>ai</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">

        <p
          className="text-[0.7rem] tracking-[0.2em] uppercase mb-4"
          style={{ color: "var(--accent)", fontFamily: '"JetBrains Mono", monospace' }}
        >
          Legal
        </p>

        <h1
          className="font-black tracking-[-0.04em] leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Política de Privacidade
        </h1>

        <p className="text-sm mb-12" style={{ color: "var(--muted-fg)" }}>
          Última atualização: {today}
        </p>

        <div
          className="flex flex-col gap-10 text-base leading-relaxed"
          style={{ color: "var(--muted-fg)" }}
        >
          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--fg)" }}>
              1. Quem somos
            </h2>
            <p>
              A <strong style={{ color: "var(--fg)" }}>Automatizai</strong> é uma empresa
              especializada em criação de sites profissionais para pequenos e médios negócios,
              com atendimento em todo o Brasil. Nosso site é{" "}
              <a href="https://automatizai.online" style={{ color: "var(--accent)" }}>
                automatizai.online
              </a>{" "}
              e nosso contato é pelo WhatsApp (11) 91243-5135.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--fg)" }}>
              2. Quais dados coletamos
            </h2>
            <p className="mb-3">
              Coletamos apenas os dados que você nos fornece voluntariamente, incluindo:
            </p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                "Nome completo",
                "Número de telefone / WhatsApp",
                "Endereço de e-mail",
                "Informações sobre seu negócio (nicho, objetivos, orçamento)",
                "Mensagens enviadas pelo formulário de contato",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "var(--accent)", marginTop: "2px" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--fg)" }}>
              3. Como usamos seus dados
            </h2>
            <p className="mb-3">Suas informações são utilizadas exclusivamente para:</p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                "Entrar em contato via WhatsApp com uma proposta personalizada",
                "Elaborar orçamentos e propostas comerciais",
                "Prestar o serviço de criação de sites contratado",
                "Enviar informações relevantes sobre nossos serviços, mediante seu consentimento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "var(--accent)", marginTop: "2px" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--fg)" }}>
              4. Compartilhamento de dados
            </h2>
            <p>
              Seus dados <strong style={{ color: "var(--fg)" }}>não são vendidos, alugados
              ou compartilhados</strong> com terceiros para fins comerciais. Podemos compartilhar
              informações apenas quando exigido por lei ou autoridade competente.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--fg)" }}>
              5. Armazenamento e segurança
            </h2>
            <p>
              Os dados coletados são armazenados de forma segura e acessados apenas pela
              equipe da Automatizai. Adotamos medidas técnicas e organizacionais para proteger
              suas informações contra acesso não autorizado, perda ou divulgação indevida.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--fg)" }}>
              6. Seus direitos (LGPD)
            </h2>
            <p className="mb-3">
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018),
              você tem direito a:
            </p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                "Confirmar a existência de tratamento dos seus dados",
                "Acessar seus dados pessoais",
                "Corrigir dados incompletos ou desatualizados",
                "Solicitar a exclusão dos seus dados",
                "Revogar o consentimento a qualquer momento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "var(--accent)", marginTop: "2px" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Para exercer qualquer um desses direitos, entre em contato pelo WhatsApp{" "}
              <a href="https://wa.me/5511912435135" style={{ color: "var(--accent)" }}>
                (11) 91243-5135
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--fg)" }}>
              7. Cookies
            </h2>
            <p>
              Nosso site pode utilizar cookies para melhorar a experiência de navegação e
              analisar o tráfego. Você pode desativar os cookies nas configurações do seu
              navegador a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--fg)" }}>
              8. Alterações nesta política
            </h2>
            <p>
              Esta política pode ser atualizada periodicamente. A data da última atualização
              sempre estará indicada no topo desta página. Recomendamos que você a consulte
              periodicamente.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-3" style={{ color: "var(--fg)" }}>
              9. Contato
            </h2>
            <p>
              Dúvidas sobre esta política? Fale conosco:
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <span>
                WhatsApp:{" "}
                <a href="https://wa.me/5511912435135" style={{ color: "var(--accent)" }}>
                  (11) 91243-5135
                </a>
              </span>
              <span>
                Site:{" "}
                <a href="https://automatizai.online" style={{ color: "var(--accent)" }}>
                  automatizai.online
                </a>
              </span>
            </div>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          <Link
            href="/"
            className="text-sm font-medium tracking-[0.05em] transition-colors duration-150"
            style={{ color: "var(--muted-fg)" }}
          >
            ← Voltar para o site
          </Link>
        </div>
      </div>
    </main>
  );
}
