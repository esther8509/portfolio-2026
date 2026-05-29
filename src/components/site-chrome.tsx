import { Link } from "@tanstack/react-router";

const navLinks: ReadonlyArray<{ to: "/work" | "/about"; label: string }> = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="text-display text-xl font-semibold tracking-tight md:text-2xl">
          Esther Nam
        </Link>
        <nav className="flex items-center gap-6 text-display text-base tracking-tight md:gap-10 md:text-lg">
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
            href="https://docs.google.com/document/d/e/2PACX-1vQKN6CL3zkqByhqYAxzKfM9m8btvLGfYZLb9jskVl8140ezrY_Hp2eBFcp3ekqOIuX6WXmqaUJh-f0C/pub"
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
        <h2 className="text-display text-4xl font-medium leading-[0.95] tracking-tight md:text-6xl">
          let's chat
        </h2>
        <a
          href="mailto:esthernamhy@gmail.com"
          className="mt-8 inline-block text-display text-lg underline decoration-1 underline-offset-[6px] hover:opacity-60"
        >
          esthernamhy@gmail.com
        </a>
        <div className="mt-16 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <span>© 2026 Esther Nam</span>
        </div>
      </div>
    </footer>
  );
}
