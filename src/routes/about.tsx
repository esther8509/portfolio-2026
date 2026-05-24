import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Esther Nam" },
      { name: "description", content: "Esther Nam is an independent designer and art director based in Seoul." },
      { property: "og:title", content: "About — Esther Nam" },
      { property: "og:description", content: "Independent designer and art director, based in Seoul." },
    ],
  }),
  component: AboutPage,
});

const cv = [
  { year: "2024 — Present", role: "Independent Practice", place: "Seoul" },
  { year: "2022 — 2024", role: "Senior Designer, Studio Aoyama", place: "Tokyo" },
  { year: "2019 — 2022", role: "Designer, Maru Press", place: "Seoul" },
  { year: "2018", role: "BFA, Communication Design", place: "RISD" },
];

const recognition = [
  ["TDC", "Type Directors Club, 2025"],
  ["BoY", "Brand New Awards, Honourable Mention, 2024"],
  ["It's Nice That", "Studio Feature, 2024"],
  ["D&AD", "Wood Pencil, 2023"],
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              About — Esther Nam
            </div>
            <h1 className="text-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              I'm a designer working between brand systems, editorial,
              and the slow, careful kind of digital product —
              <span className="italic text-muted-foreground"> the sort that doesn't shout.</span>
            </h1>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg md:max-w-xl">
              <p>
                After six years inside studios in Seoul and Tokyo, I started my own practice in 2024.
                I work with a small handful of clients each year — usually founders, publishers, and
                cultural institutions — on identities and surfaces meant to last.
              </p>
              <p>
                My work has been recognised by TDC, D&AD, and It's Nice That. I teach a yearly
                workshop on editorial systems at SADI, and write occasionally about type, paper, and
                the quiet things.
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-sm bg-muted">
              <img
                src={portrait}
                alt="Portrait of Esther Nam"
                width={1000}
                height={1200}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Studio, Mangwon-dong — Spring 2026
            </p>
          </div>
        </div>
      </section>

      {/* CV */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 border-t border-border/60 pt-12 md:grid-cols-12">
          <div className="md:col-span-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Curriculum
          </div>
          <div className="md:col-span-9">
            <ul className="divide-y divide-border/60">
              {cv.map((c) => (
                <li key={c.year} className="grid grid-cols-12 gap-4 py-5">
                  <span className="col-span-12 text-sm text-muted-foreground md:col-span-3">{c.year}</span>
                  <span className="col-span-8 text-display text-lg md:col-span-6 md:text-xl">{c.role}</span>
                  <span className="col-span-4 text-right text-sm text-muted-foreground md:col-span-3">{c.place}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="mx-auto mt-24 max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 border-t border-border/60 pt-12 md:grid-cols-12">
          <div className="md:col-span-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Recognition
          </div>
          <div className="md:col-span-9 grid grid-cols-1 gap-6 md:grid-cols-2">
            {recognition.map(([title, sub]) => (
              <div key={title} className="border-l border-border pl-5">
                <div className="text-display text-xl">{title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
