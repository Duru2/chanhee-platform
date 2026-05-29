import { journeyEvents, weeklyLogs } from "@/lib/content/journey";

export function JourneyPage() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band bg-[linear-gradient(135deg,rgba(255,250,241,0.96),rgba(246,234,215,0.92))] pt-28">
        <a className="font-display font-black text-leaf-dark" href="/">
          Chanhee OS
        </a>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-label">Growth over time</p>
            <h1 className="font-display text-[3.4rem] font-black leading-none md:text-[5.4rem]">
              Journey
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Chanhee OS should document a human being growing over time. This
            timeline turns university, AI experiments, research, projects, and
            content creation into a visible learning trail.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="section-heading">
          <div>
            <p className="section-label">Timeline</p>
            <h2 className="section-title">Not perfection. Growth.</h2>
          </div>
        </div>
        <div className="grid gap-5">
          {journeyEvents.map((event) => (
            <article key={event.id} className="warm-card grid gap-5 p-6 lg:grid-cols-[0.35fr_1fr]">
              <div>
                <span className="text-xs font-black uppercase text-berry">{event.period}</span>
                <h2 className="mt-3 font-display text-2xl font-black">{event.title}</h2>
              </div>
              <div>
                <p className="leading-8 text-muted">{event.summary}</p>
                <div className="mt-4 rounded-lg border border-dashed border-leaf/35 bg-leaf/10 p-4">
                  <p className="section-label">Signal</p>
                  <p className="leading-7">{event.signal}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
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

export function NowPage() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band bg-[linear-gradient(135deg,rgba(255,250,241,0.96),rgba(233,240,228,0.9))] pt-28">
        <a className="font-display font-black text-leaf-dark" href="/">
          Chanhee OS
        </a>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-label">Now page</p>
            <h1 className="font-display text-[3.4rem] font-black leading-none md:text-[5.4rem]">
              What is alive now
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            A living OS needs a current pulse: what is being built, learned,
            questioned, and improved this season.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="grid gap-5 lg:grid-cols-2">
          {weeklyLogs.map((log) => (
            <article key={log.id} className="warm-card overflow-hidden">
              <div className="border-b border-ink/10 bg-cream/70 p-6">
                <span className="text-xs font-black uppercase text-berry">{log.week}</span>
                <h2 className="mt-3 font-display text-2xl font-black">{log.focus}</h2>
              </div>
              <div className="grid gap-4 p-6">
                <LogBlock label="Built" value={log.built} />
                <LogBlock label="Learned" value={log.learned} />
                <LogBlock label="Next" value={log.next} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function LogBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/45 p-4">
      <p className="section-label">{label}</p>
      <p className="leading-7 text-muted">{value}</p>
    </div>
  );
}
