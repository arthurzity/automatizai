export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 mb-5"
      style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)" }}>
      <span className="inline-block w-7 h-px shrink-0" style={{ background: "var(--accent)" }} />
      {children}
    </p>
  );
}
