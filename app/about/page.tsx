import { brandPositioning, proofCards, recruiterQuestions } from "@/lib/content/brand";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band bg-[linear-gradient(135deg,rgba(255,250,241,0.96),rgba(246,234,215,0.92))] pt-28">
        <a className="font-display font-black text-leaf-dark" href="/">
          Chanhee OS
        </a>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-label">Recruiter snapshot</p>
            <h1 className="font-display text-[3.4rem] font-black leading-none md:text-[5.4rem]">
              {brandPositioning.name}
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            {brandPositioning.headline}. {brandPositioning.visitorFeeling}
          </p>
        </div>
      </section>
      <section className="section-band">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {proofCards.map((card) => (
            <a key={card.label} href={card.href} className="warm-card p-5">
              <span className="text-xs font-black uppercase text-berry">{card.label}</span>
              <h2 className="mt-3 font-display text-2xl font-black">{card.value}</h2>
              <p className="mt-2 leading-7 text-muted">{card.detail}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 warm-card p-6">
          <p className="section-label">Recruiter questions</p>
          <div className="grid gap-3 md:grid-cols-2">
            {recruiterQuestions.map((item) => (
              <a key={item.question} href={item.answerPath} className="rounded-lg bg-leaf/10 p-4 font-bold text-leaf-dark">
                {item.question}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
