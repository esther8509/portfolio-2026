import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Esther Nam" },
      { name: "description", content: "Selected projects in brand, editorial, art direction, and product design." },
      { property: "og:title", content: "Work — Esther Nam" },
      { property: "og:description", content: "Selected projects across brand, editorial, and product." },
    ],
  }),
  component: WorkPage,
});

const aspectClass: Record<string, string> = {
  tall: "aspect-[4/5]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
};

function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Index of Work / 2023 — 2026
          </div>
          <div className="md:col-span-9">
            <h1 className="text-display text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">
              Twenty-eight projects.<br />
              <span className="italic text-muted-foreground">A small, careful catalogue.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* List view */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 border-y border-border/60 py-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <div className="col-span-1">№</div>
          <div className="col-span-5">Project</div>
          <div className="col-span-3">Discipline</div>
          <div className="col-span-2">Client</div>
          <div className="col-span-1 text-right">Year</div>
        </div>
        {projects.map((p, i) => (
          <a
            key={p.slug}
            href="#grid"
            className="group grid grid-cols-12 items-center border-b border-border/60 py-5 transition-colors hover:bg-secondary/60"
          >
            <div className="col-span-1 text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
            <div className="col-span-5 text-display text-xl font-medium tracking-tight md:text-2xl">
              {p.title}
            </div>
            <div className="col-span-3 text-sm">{p.discipline}</div>
            <div className="col-span-2 text-sm text-muted-foreground">{p.client}</div>
            <div className="col-span-1 text-right text-sm text-muted-foreground">{p.year}</div>
          </a>
        ))}
      </section>

      {/* Grid view */}
      <section id="grid" className="mx-auto mt-24 max-w-[1400px] px-6 md:px-10">
        <div className="mb-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">Visual archive</div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-6">
          {projects.map((p, i) => (
            <div
              key={p.slug}
              className={`hover-lift group ${i % 5 === 0 ? "md:col-span-4" : "md:col-span-2"}`}
            >
              <div className="overflow-hidden rounded-sm bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className={`${aspectClass[p.aspect]} w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]`}
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="text-display text-lg font-medium tracking-tight">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.discipline}</p>
                </div>
                <span className="text-sm text-muted-foreground">{p.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
