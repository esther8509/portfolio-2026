import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Esther Nam" },
      {
        name: "description",
        content:
          "Esther Nam is a product designer at Meta building the system layer for spatial computing.",
      },
      { property: "og:title", content: "About — Esther Nam" },
      {
        property: "og:description",
        content: "Product designer at Meta working on system apps for Quest.",
      },
    ],
  }),
  component: AboutPage,
});

const cv = [
  { year: "2022 — Present", role: "Meta, System Apps", place: "Bay Area" },
  { year: "[YEAR — YEAR]", role: "Alaska Airlines", place: "[Location]" },
  { year: "[YEAR — YEAR]", role: "Keurig", place: "[Location]" },
  { year: "[YEAR]", role: "[Degree, School]", place: "[Institution]" },
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
              I'm a product designer at Meta building the system layer for spatial computing,
              <span className="italic text-muted-foreground">
                {" "}
                the kind of work that lands when it feels like it was always there.
              </span>
            </h1>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg md:max-w-xl">
              <p>
                I currently own Clock, Files, and Calendar on Meta Quest, the default apps that
                define how the OS feels to use. Before that I designed the Meta Quest Developer
                Center, the developer Feedback Hub, and Quest for Business, Meta's enterprise fleet
                management product. The work tends to be zero to one, at the level of infrastructure
                rather than interface.
              </p>
              <p>
                Over the past year I have built an AI-native practice: I write specs detailed enough
                to ship from, straight to production code on the headset, without a traditional
                engineering handoff. My manager recognized me as the first AI-native designer on our
                team. I came to product design through hardware, working at Alaska Airlines and
                Keurig before Meta. That background shaped how I think about system-level work: the
                best infrastructure is invisible until it fails.
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-sm bg-muted">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Portrait — to be added
              </span>
            </div>
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
                <li key={c.role} className="grid grid-cols-12 gap-4 py-5">
                  <span className="col-span-12 text-sm text-muted-foreground md:col-span-3">
                    {c.year}
                  </span>
                  <span className="col-span-8 text-display text-lg md:col-span-6 md:text-xl">
                    {c.role}
                  </span>
                  <span className="col-span-4 text-right text-sm text-muted-foreground md:col-span-3">
                    {c.place}
                  </span>
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
          <div className="md:col-span-9">
            <div className="border-l border-border pl-5">
              <div className="text-display text-xl text-muted-foreground">add recognition here</div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
