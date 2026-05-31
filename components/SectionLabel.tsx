export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <span style={{ display: "inline-block", width: "2rem", height: "1px", background: "var(--accent)" }} />
      {children}
    </p>
  );
}
