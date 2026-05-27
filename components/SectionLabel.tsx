export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="flex items-center gap-3 uppercase tracking-[0.2em] mb-5"
      style={{
        color: "var(--accent)",
        fontSize: "0.68rem",
        fontFamily: '"JetBrains Mono", monospace',
        fontWeight: 500,
      }}
    >
      <span className="inline-block w-7 h-px shrink-0" style={{ background: "var(--accent)" }} />
      {children}
    </p>
  );
}
