import { builderGardens } from "@/lib/content/community";

const gardenPrinciples = [
  "Start with one honest Now page.",
  "Turn notes into connected lessons.",
  "Show projects as process, not trophies.",
  "Let AI answer from the real archive.",
  "Invite community only after the garden has gravity."
];

export default function GardensPage() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band bg-[linear-gradient(135deg,rgba(255,250,241,0.96),rgba(246,234,215,0.92))] pt-28">
        <a className="font-display font-black text-leaf-dark" href="/">
          Chanhee OS
        </a>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-label">Multi-user platform</p>
            <h1 className="font-display text-[3.4rem] font-black leading-none md:text-[5.4rem]">
              Growth Gardens
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Chanhee is the first user, not the only user. Growth Gardens are
            future personal operating systems for builders, learners, readers,
            students, and creators.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="warm-card h-fit p-6">
            <p className="section-label">Garden principles</p>
            <ol className="grid gap-3">
              {gardenPrinciples.map((principle, index) => (
                <li key={principle} className="rounded-lg bg-leaf/10 p-4 leading-7">
                  <span className="mr-2 font-black text-leaf-dark">{index + 1}.</span>
                  {principle}
                </li>
              ))}
            </ol>
          </aside>
          <div className="grid gap-5">
            {builderGardens.map((garden) => (
              <article key={garden.id} className="warm-card p-6">
                <span className="text-xs font-black uppercase text-berry">{garden.owner}</span>
                <h2 className="mt-3 font-display text-3xl font-black">{garden.title}</h2>
                <p className="mt-3 leading-7 text-muted">{garden.focus}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {garden.modules.map((module) => (
                    <span key={module} className="rounded-full bg-honey/10 px-3 py-1 text-sm font-bold text-[#7b5525]">
                      {module}
                    </span>
                  ))}
                </div>
                <p className="mt-5 rounded-lg border border-dashed border-leaf/35 bg-leaf/10 p-4 leading-7">
                  {garden.promise}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
