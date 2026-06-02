import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects, type CaseStudyBlock } from "@/lib/projects";


export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: project ? `${project.title} — Work` : "Project" },
        { name: "description", content: project?.discipline || "" },
      ],
    };
  },
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-[1400px] px-6 py-32 text-center md:px-10">
        <h1 className="text-display text-4xl font-medium tracking-tight">Project not found</h1>
      </div>
      <SiteFooter />
    </div>
  ),
});

type Section = { heading?: string; body: string };

function parseCaseStudy(text: string): { intro: string | null; sections: Section[] } {
  const paragraphs = text.split("\n\n").map((p) => p.trim()).filter(Boolean);
  if (paragraphs.length === 0) return { intro: null, sections: [] };

  const sections: Section[] = [];
  let intro: string | null = null;

  for (const para of paragraphs) {
    // Match "01 — Heading: body" or "Heading: body"
    const numbered = para.match(/^(\d{2})\s*[—–-]\s*([^:]+?):\s*([\s\S]+)$/);
    const labeled = para.match(/^([A-Z][A-Za-z0-9 +&/()]{1,60}?):\s+([\s\S]+)$/);

    if (numbered) {
      sections.push({ heading: `${numbered[1]} — ${numbered[2].trim()}`, body: numbered[3].trim() });
    } else if (labeled) {
      sections.push({ heading: labeled[1].trim(), body: labeled[2].trim() });
    } else if (!intro && sections.length === 0) {
      intro = para;
    } else {
      sections.push({ body: para });
    }
  }

  return { intro, sections };
}

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  const blocks: CaseStudyBlock[] | null = project.caseStudyBlocks ?? null;
  const parsed = !blocks && project.caseStudy ? parseCaseStudy(project.caseStudy) : { intro: null, sections: [] };
  const introFromBlocks = blocks?.find((b) => b.type === "intro");
  const introText =
    introFromBlocks && introFromBlocks.type === "intro" ? introFromBlocks.body : parsed.intro;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Title block */}
      <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-16 md:px-10 md:pb-20 md:pt-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-9 md:col-start-4">
            <h1 className="text-display text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">
              {project.title}
            </h1>
            {project.subtitle && (
              <div className="mt-4 font-mono text-sm text-muted-foreground">{project.subtitle}</div>
            )}
            {introText && (
              <p className="mt-8 max-w-2xl text-display text-lg font-medium leading-[1.35] tracking-tight text-muted-foreground md:text-xl">
                {introText}
              </p>
            )}
          </div>
        </div>
      </section>


      {/* Meta strip */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-6 border-y border-border/60 py-6 md:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Company</div>
            <div className="mt-2 text-base font-medium">{project.client}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Team</div>
            <div className="mt-2 text-base font-medium">{project.team || project.discipline}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Timeline</div>
            <div className="mt-2 text-base font-medium">{project.timeline || project.year}</div>
          </div>
        </div>
      </section>
      </section>

      {/* Body */}
      {blocks ? (
        <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-32">
          <div className="space-y-16 md:space-y-24">
            {(() => {
              let visibleIndex = 0;
              return blocks.map((b, i) => {
                if (b.type === "intro") return null;
                const isFirstVisible = visibleIndex === 0;
                visibleIndex++;
                if (b.type === "part") {
                  return (
                    <div key={i} className={isFirstVisible ? "" : "border-t border-border/60 pt-12 md:pt-20"}>
                      {b.eyebrow && (
                        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                          {b.eyebrow}
                        </div>
                      )}
                      <h2 className="mt-4 text-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
                        {b.title}
                      </h2>
                      {b.subtitle && (
                        <div className="mt-3 font-mono text-sm text-muted-foreground">{b.subtitle}</div>
                      )}
                    </div>
                  );
                }
                if (b.type === "section") {
                  return (
                    <div key={i} className="grid grid-cols-1 gap-8 md:grid-cols-12">
                      <div className="md:col-span-4">
                        <h3 className="text-display text-2xl font-medium leading-tight tracking-tight md:text-3xl">
                          {b.heading}
                        </h3>
                      </div>
                      <div className="md:col-span-7 md:col-start-6">
                        <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
                          {b.body}
                          {b.link && (
                            <>
                              {" "}
                              <Link to={b.link.to} className="underline underline-offset-4 hover:text-foreground">
                                {b.link.text}
                              </Link>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  );
                }
                if (b.type === "quote") {
                  return (
                    <div key={i} className="grid grid-cols-1 gap-8 md:grid-cols-12">
                      <div className="md:col-span-7 md:col-start-6">
                        <blockquote className="border-l-2 border-border pl-6">
                          <p className="text-display text-xl font-medium leading-[1.3] tracking-tight text-foreground md:text-2xl">
                            {b.body}
                          </p>
                          {b.attribution && (
                            <footer className="mt-4 font-mono text-sm text-muted-foreground">— {b.attribution}</footer>
                          )}
                        </blockquote>
                      </div>
                    </div>
                  );
                }

                if (b.type === "callout") {
                  return (
                    <div key={i} className="grid grid-cols-1 gap-8 md:grid-cols-12">
                      <div className="md:col-span-7 md:col-start-6">
                        <p className="text-display text-2xl font-medium leading-[1.2] tracking-tight text-foreground md:text-3xl">
                          {b.body}
                        </p>
                      </div>
                    </div>
                  );
                }
                if (b.type === "placeholder") {
                  const aspect =
                    b.aspect === "tall" ? "aspect-[4/5]" : b.aspect === "square" ? "aspect-square" : "aspect-[16/9]";
                  return (
                    <figure key={i} className="space-y-4">
                      <div
                        className={`${aspect} flex w-full items-center justify-center rounded-lg border border-dashed border-border/70 bg-muted/30`}
                      >
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                          {b.label}
                        </span>
                      </div>
                      <figcaption className="text-sm text-muted-foreground">{b.caption}</figcaption>
                    </figure>
                  );
                }
                if (b.type === "image") {
                  return (
                    <figure key={i} className="space-y-4">
                      <img
                        src={b.src}
                        alt={b.alt}
                        className={b.natural ? "mx-auto h-auto max-w-full rounded-md" : "h-auto w-full rounded-md"}
                        loading="lazy"
                      />
                      {b.caption && <figcaption className={b.natural ? "text-center text-sm text-muted-foreground" : "text-sm text-muted-foreground"}>{b.caption}</figcaption>}
                    </figure>
                  );
                }
                if (b.type === "image-grid") {
                  const cols = b.columns ?? 2;
                  const colClass = cols === 4 ? "md:grid-cols-4" : cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
                  return (
                    <figure key={i} className="space-y-4">
                      <div className={`grid grid-cols-1 gap-4 ${colClass}`}>
                        {b.images.map((img, j) => (
                          <img key={j} src={img.src} alt={img.alt} className="h-auto w-full rounded-md" loading="lazy" />
                        ))}
                      </div>
                      {b.caption && <figcaption className="text-sm text-muted-foreground">{b.caption}</figcaption>}
                    </figure>
                  );
                }
                if (b.type === "image-text") {
                  const imgFirst = (b.imageSide ?? "left") === "left";
                  return (
                    <div key={i} className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
                      <div className={imgFirst ? "md:col-span-5" : "md:col-span-5 md:col-start-8 md:row-start-1"}>
                        <img src={b.src} alt={b.alt} className="h-auto max-w-full rounded-md" loading="lazy" />
                      </div>
                      <div className={imgFirst ? "md:col-span-7 md:col-start-6" : "md:col-span-7 md:col-start-1 md:row-start-1"}>
                        <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">{b.body}</p>
                      </div>
                    </div>
                  );
                }
                if (b.type === "video") {
                  return (
                    <figure key={i} className="space-y-4">
                      <video
                        src={b.src}
                        poster={b.poster}
                        className="h-auto w-full rounded-md"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      />
                      {b.caption && <figcaption className="text-sm text-muted-foreground">{b.caption}</figcaption>}
                    </figure>
                  );
                }
                return null;
              });
            })()}
          </div>
        </section>
      ) : parsed.sections.length > 0 ? (
        <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-32">
          <div className="space-y-16 md:space-y-24">
            {parsed.sections.map((s, i) => (
              <div key={i} className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  {s.heading && (
                    <h2 className="text-display text-2xl font-medium leading-tight tracking-tight md:text-3xl">
                      {s.heading}
                    </h2>
                  )}
                </div>
                <div className="md:col-span-7 md:col-start-6">
                  <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-32">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Case study coming soon. Reach out for the full walkthrough.
          </p>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}

