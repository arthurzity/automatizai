export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.2em] uppercase mb-6"
      style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
      <span className="block w-8 h-px" style={{ background: "var(--accent)" }} />
      {children}
    </p>
  );
}
