import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Esther Nam" },
      { name: "description", content: "Get in touch for new work, collaborations, or a slow coffee." },
      { property: "og:title", content: "Contact — Esther Nam" },
      { property: "og:description", content: "Get in touch for new work, collaborations, or a slow coffee." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto w-full max-w-[1400px] flex-1 px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="mb-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Contact — Currently booking Q3 2026
        </div>
        <h1 className="text-display text-5xl font-medium leading-[0.95] tracking-tight md:text-[8vw]">
          Tell me about<br />
          the <span className="italic">project</span>.
        </h1>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-12">
          <form className="md:col-span-7 space-y-8">
            {[
              { label: "Your name", type: "text", name: "name" },
              { label: "Email", type: "email", name: "email" },
              { label: "Company / studio (optional)", type: "text", name: "company" },
            ].map((f) => (
              <div key={f.name} className="border-b border-border pb-3">
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  className="mt-2 w-full bg-transparent text-display text-xl outline-none placeholder:text-muted-foreground/50 md:text-2xl"
                  placeholder="—"
                />
              </div>
            ))}

            <div className="border-b border-border pb-3">
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Project type
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Brand identity", "Editorial", "Art direction", "Product", "Other"].map((t) => (
                  <button
                    type="button"
                    key={t}
                    className="rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:bg-foreground hover:text-background"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-b border-border pb-3">
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Tell me more
              </label>
              <textarea
                rows={5}
                className="mt-2 w-full resize-none bg-transparent text-lg outline-none placeholder:text-muted-foreground/50"
                placeholder="A few sentences about scope, timing, and where you'd like to land."
              />
            </div>

            <button
              type="button"
              className="group flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-80"
            >
              Send enquiry
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>

          <aside className="space-y-10 md:col-span-5 md:pl-10">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Direct</div>
              <a href="mailto:hello@esthernam.studio" className="mt-2 block text-display text-2xl underline decoration-1 underline-offset-[6px] hover:opacity-60 md:text-3xl">
                hello@esthernam.studio
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio</div>
              <p className="mt-2 text-lg leading-relaxed">
                Mangwon-dong<br />
                Mapo-gu, Seoul 04039<br />
                Republic of Korea
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Engagements</div>
              <ul className="mt-2 space-y-1 text-lg">
                <li>Brand systems — from 4 weeks</li>
                <li>Editorial — from 6 weeks</li>
                <li>Product surfaces — ongoing</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
