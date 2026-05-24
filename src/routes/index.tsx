import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  component: Index,
});

const marquee = ["VR / AR", "Wearables", "Developer Tooling", "Enterprise", "Interaction Design", "Spatial Computing"];

function Index() {
  const featured = projects.slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="text-display text-[7vw] font-medium leading-[1.1] tracking-[-0.04em] md:text-[4.5vw]">
              Senior Designer<br /><span className="italic">@Meta Reality Labs</span>
            </h1>
            <p className="text-display mt-3 text-sm tracking-tight text-muted-foreground md:text-base">
              previously @alaska airlines, keurig dr pepper
            </p>
          </div>
          <div className="flex flex-col justify-end md:col-span-4">
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-lg">
              VR / AR, Wearables, Developer Tooling, Enterprise, Interaction Design, Spatial Computing
            </p>
            <div className="mt-8 text-sm">
              <Link to="/work" className="rounded-full bg-foreground px-5 py-2.5 text-background transition-opacity hover:opacity-80">
                View work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-y border-border/60 py-6">
        <div className="marquee flex whitespace-nowrap text-display text-xl md:text-3xl">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-8">
              {m}
              <span aria-hidden className="text-muted-foreground">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Selected Work — hero + grid */}
      <section className="mx-auto max-w-[1400px] px-6 pt-24 md:px-10 md:pt-32">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-3">
          {featured.map((p) => (
            <Link to="/work" key={p.slug} className="group">
              <div className="overflow-hidden rounded-sm bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="text-display text-xl font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.discipline} · {p.client}</p>
                </div>
                <span className="shrink-0 text-sm text-muted-foreground">{p.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
