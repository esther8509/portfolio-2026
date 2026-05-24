import { Link } from "@tanstack/react-router";

const navLinks: ReadonlyArray<{ to: "/work" | "/about"; label: string }> = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="text-display text-base font-semibold tracking-tight">
          Esther Nam
        </Link>
        <nav className="flex items-center gap-6 text-sm md:gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="text-display text-4xl font-medium leading-[0.95] tracking-tight md:text-6xl">
              If you like my work,<br />let's chat!
            </h2>
            <a
              href="mailto:hello@esthernam.studio"
              className="mt-8 inline-block text-display text-lg underline decoration-1 underline-offset-[6px] hover:opacity-60"
            >
              hello@esthernam.studio
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:col-span-6 md:grid-cols-3">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Index</div>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="hover:opacity-60">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:opacity-60">Instagram</a></li>
                <li><a href="#" className="hover:opacity-60">Are.na</a></li>
                <li><a href="#" className="hover:opacity-60">Read.cv</a></li>
                <li><a href="#" className="hover:opacity-60">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio</div>
              <p className="text-muted-foreground">
                Seoul, KR<br />
                Available Q2 2026
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <span>© 2026 Esther Nam</span>
        </div>
      </div>
    </footer>
  );
}
