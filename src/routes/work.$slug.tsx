import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/lib/projects";

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

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero image */}
      <section className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10 md:pt-24">
        <div className="overflow-hidden rounded-sm bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </section>

      {/* Project meta */}
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 md:px-10 md:pb-12 md:pt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="text-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              {project.title}
            </h1>
            {project.caseStudy && (
              <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
                {project.caseStudy.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
          </div>
          <div className="md:col-span-4">
            <div className="space-y-6 border-t border-border/60 pt-6 md:border-t-5 md:pt-0 md:border-l md:border-t-0 md:pl-10 md:border-l-border/60">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Client</div>
                <div className="mt-1 text-lg font-medium">{project.client}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Year</div>
                <div className="mt-1 text-lg font-medium">{project.year}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Discipline</div>
                <div className="mt-1 text-lg font-medium">{project.discipline}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
