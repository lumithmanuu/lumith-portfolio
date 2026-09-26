export default function Footer() {
  const linkClass = 'inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-cyan-300';

  return (
    <footer className="relative z-10 border-t border-sky-200/10 bg-slate-950/30 px-6 py-7 text-xs leading-6 text-slate-400 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between min-[1600px]:max-w-[1200px]">
        <div>
          <p className="font-medium text-slate-200">Lumith Manujaya</p>
          <p>Designed &amp; built by Lumith Manujaya.</p>
          <p className="mt-1">© {new Date().getFullYear()} Lumith Manujaya</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6">
          <a className={linkClass} href="https://github.com/lumithmanuu" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">GitHub</a>
          <a className={linkClass} href="https://www.linkedin.com/in/lumith-manujaya-681776300/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">LinkedIn</a>
          <a className={linkClass} href="#home">Back to Top ↑</a>
        </nav>
      </div>
    </footer>
  );
}
