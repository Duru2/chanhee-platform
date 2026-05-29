import type { BrandHub } from "@/lib/content/brand";
import type { ReactNode } from "react";

type BrandHubPageProps = {
  hub: BrandHub;
  children?: ReactNode;
};

export function BrandHubPage({ hub, children }: BrandHubPageProps) {
  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band bg-[linear-gradient(135deg,rgba(255,250,241,0.96),rgba(246,234,215,0.92))] pt-28">
        <a className="font-display font-black text-leaf-dark" href="/">
          Chanhee OS
        </a>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-label">{hub.label}</p>
            <h1 className="font-display text-[3.4rem] font-black leading-none md:text-[5.4rem]">
              {hub.title}
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">{hub.description}</p>
        </div>
      </section>

      <section className="section-band">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="warm-card h-fit p-6">
            <p className="section-label">Audience signal</p>
            <p className="leading-8 text-muted">{hub.audienceSignal}</p>
          </aside>
          <div className="grid gap-4 md:grid-cols-2">
            {hub.items.map((item) => (
              <article key={item} className="warm-card p-5">
                <span className="text-xs font-black uppercase text-berry">{hub.title}</span>
                <h2 className="mt-2 font-display text-2xl font-black">{item}</h2>
                <p className="mt-2 leading-7 text-muted">
                  Seeded surface for {item.toLowerCase()} content, ready to connect
                  to Supabase records, tags, and RAG indexing.
                </p>
              </article>
            ))}
          </div>
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </section>
    </main>
  );
}
