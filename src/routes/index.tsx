import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/lib/projects";
import heroImg from "@/assets/hero.jpg";

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
            <h1 className="text-display text-[14vw] font-medium leading-[0.88] tracking-[-0.04em] md:text-[8.5vw]">
              Designer<br />
              <span className="italic">@Meta</span><br />
              Reality Labs
            </h1>
          </div>
          <div className="flex flex-col justify-end md:col-span-4">
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-lg">
              Esther Nam designs for VR, wearables, and developer tooling — turning complex
              enterprise systems into calm, human-centered products with restraint and clarity.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm">
              <Link to="/work" className="rounded-full bg-foreground px-5 py-2.5 text-background transition-opacity hover:opacity-80">
                View selected work →
              </Link>
              <Link to="/about" className="underline decoration-1 underline-offset-4 hover:opacity-60">
                About
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-sm md:mt-24">
          <img
            src={heroImg}
            alt="Folded paper catching soft light — Esther Nam studio"
            width={1600}
            height={1200}
            className="h-[55vh] w-full object-cover md:h-[70vh]"
          />
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-y border-border/60 py-6">
        <div className="marquee flex whitespace-nowrap text-display text-3xl md:text-5xl">
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
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">01 — Selected</div>
            <h2 className="text-display text-4xl font-medium tracking-tight md:text-6xl">Work, recently.</h2>
          </div>
          <Link to="/work" className="hidden text-sm underline decoration-1 underline-offset-4 hover:opacity-60 md:inline">
            Full archive →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-12">
          {featured.map((p, i) => {
            // hero+grid: first one large, rest in 3-up
            if (i === 0) {
              return (
                <Link to="/work" key={p.slug} className="group md:col-span-12">
                  <div className="overflow-hidden rounded-sm bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-6">
                    <div>
                      <h3 className="text-display text-2xl font-medium tracking-tight md:text-3xl">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.discipline} — {p.client}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{p.year}</span>
                  </div>
                </Link>
              );
            }
            return (
              <Link to="/work" key={p.slug} className="group md:col-span-4">
                <div className="overflow-hidden rounded-sm bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-display text-xl font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.discipline} · {p.year}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto mt-32 max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground md:col-span-3">
            02 — Approach
          </div>
          <div className="md:col-span-9">
            <p className="text-display text-3xl font-normal leading-[1.15] tracking-tight md:text-5xl">
              I make calm, durable design. Work that reads at a glance and rewards a second look —
              built from the page outward, with type, paper, and pace doing most of the talking.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border/60 pt-10 md:grid-cols-4">
          {[
            ["28+", "Projects shipped"],
            ["6", "Years independent"],
            ["12", "Awards & features"],
            ["3", "Continents served"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-display text-4xl font-medium md:text-6xl">{n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients strip */}
      <section className="mx-auto mt-32 max-w-[1400px] px-6 md:px-10">
        <div className="mb-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">03 — Selected clients</div>
        <div className="grid grid-cols-2 gap-y-6 border-y border-border/60 py-10 text-display text-2xl md:grid-cols-4 md:text-3xl">
          {["Noyu", "Kassette", "Studio Aoyama", "Linea", "Maru Press", "Folio", "Ondol", "Kinto"].map((c) => (
            <span key={c} className="opacity-80">{c}</span>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
