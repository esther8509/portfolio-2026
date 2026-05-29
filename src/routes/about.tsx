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
  { year: "2021 — Present", role: "Meta, Reality Labs", place: "Bay Area" },
  { year: "2021", role: "Alaska Airlines", place: "Seattle" },
  { year: "2020 — 2021", role: "Keurig Dr Pepper", place: "Boston" },
  { year: "", role: "School of the Art Institute of Chicago, BFA", place: "" },
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
                I like designing foundational things: tools, systems, operating system experiences, and products that are still figuring out what they want to be. Recently that's evolved into building AI-native workflows where design and implementation happen almost at the same time. My background is in hardware, which taught me that the best systems usually disappear into the background.
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

      <SiteFooter />
    </div>
  );
}
