import { ragPipeline } from "@/lib/ai/rag";

export function AssistantBlueprint() {
  return (
    <section id="assistant" className="section-band bg-[#f6ead7]">
      <div className="section-heading">
        <div>
          <p className="section-label">AI layer</p>
          <h2 className="section-title">Ask Chanhee AI</h2>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="warm-card p-6 md:p-10">
          <p className="section-label">Future interface</p>
          <h3 className="font-display text-3xl font-black leading-tight md:text-4xl">
            Ask questions across Chanhee&apos;s real learning archive.
          </h3>
          <p className="mt-4 leading-8 text-muted">
            The assistant should answer from blog posts, videos, book notes,
            PTE lessons, writing frameworks, thesis updates, projects, and research notes.
          </p>
        </article>
        <div className="grid gap-3 md:grid-cols-2">
          {ragPipeline.map((step) => (
            <span key={step} className="grid min-h-24 place-items-center rounded-lg border border-sky/25 bg-cream/75 p-4 text-center font-black text-[#25475a]">
              {step}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
