export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-line px-6 py-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted sm:flex-row sm:px-10">
      <span>Designed &amp; Developed by Jeswin Chacko</span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
