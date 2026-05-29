import { brandHubs, brandPositioning, proofCards, recruiterQuestions } from "@/lib/content/brand";

export function BrandHQ() {
  return (
    <section className="section-band bg-[#fff8ec]">
      <div className="section-heading">
        <div>
          <p className="section-label">Personal Branding Digital HQ</p>
          <h2 className="section-title">Chanhee Lee 중심의 개인 생태계</h2>
        </div>
        <p className="max-w-2xl leading-8 text-muted">{brandPositioning.promise}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {proofCards.map((card) => (
          <a key={card.label} href={card.href} className="warm-card p-5 transition hover:-translate-y-1">
            <span className="text-xs font-black uppercase text-berry">{card.label}</span>
            <h3 className="mt-3 font-display text-2xl font-black">{card.value}</h3>
            <p className="mt-2 leading-7 text-muted">{card.detail}</p>
          </a>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {brandHubs.map((hub) => (
            <a key={hub.slug} href={hub.href} className="warm-card p-5">
              <span className="text-xs font-black uppercase text-leaf-dark">{hub.label}</span>
              <h3 className="mt-2 font-display text-2xl font-black">{hub.title}</h3>
              <p className="mt-2 leading-7 text-muted">{hub.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {hub.items.slice(0, 4).map((item) => (
                  <span key={item} className="rounded-full bg-honey/10 px-3 py-1 text-xs font-bold text-[#7b5525]">
                    {item}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <aside className="warm-card h-fit p-6">
          <p className="section-label">Recruiter Mode</p>
          <h3 className="font-display text-3xl font-black">2-click proof paths</h3>
          <p className="mt-3 leading-7 text-muted">
            Hiring managers should reach projects, architecture, GitHub proof,
            current learning, and contact paths without digging.
          </p>
          <div className="mt-5 grid gap-3">
            {recruiterQuestions.map((item) => (
              <a key={item.question} href={item.answerPath} className="rounded-lg border border-leaf/20 bg-leaf/10 p-4 font-bold text-leaf-dark">
                {item.question}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
