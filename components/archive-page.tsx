import type { ArchiveItem, ArchiveKind } from "@/lib/content/archive";

type ArchivePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  kind: ArchiveKind;
  items: ArchiveItem[];
};

export function ArchivePage({ eyebrow, title, intro, kind, items }: ArchivePageProps) {
  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band bg-[linear-gradient(135deg,rgba(255,250,241,0.96),rgba(246,234,215,0.92))] pt-28">
        <a className="font-display font-black text-leaf-dark" href="/">
          Chanhee OS
        </a>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-label">{eyebrow}</p>
            <h1 className="font-display text-[3.4rem] font-black leading-none md:text-[5.4rem]">
              {title}
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">{intro}</p>
        </div>
      </section>

      <section className="section-band">
        <div className="mb-7 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-leaf/10 px-4 py-2 text-sm font-black uppercase text-leaf-dark">
            {kind}
          </span>
          <span className="rounded-full bg-honey/15 px-4 py-2 text-sm font-black uppercase text-[#7b5525]">
            {items.length} living notes
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.id} className="warm-card overflow-hidden">
              <div className="border-b border-ink/10 bg-cream/70 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-black uppercase text-berry">{item.eyebrow}</span>
                  <span className="rounded-full bg-leaf/10 px-3 py-1 text-xs font-black uppercase text-leaf-dark">
                    {item.status}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-black">{item.title}</h2>
                <p className="mt-3 leading-7 text-muted">{item.summary}</p>
              </div>
              <div className="grid gap-4 p-6">
                <div>
                  <p className="section-label">Lesson</p>
                  <p className="leading-7">{item.lesson}</p>
                </div>
                <div>
                  <p className="section-label">Next step</p>
                  <p className="leading-7 text-muted">{item.nextStep}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-honey/10 px-3 py-1 text-xs font-bold text-[#7b5525]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
