export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      <span style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)" }}>
        {children}
      </span>
      <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
    </div>
  );
}
