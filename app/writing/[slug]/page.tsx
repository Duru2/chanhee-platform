import { writingCards } from "@/lib/content/learning-hubs";

export default function WritingDetailPage({ params }: { params: { slug: string } }) {
  const card = writingCards.find((item) => item.id === params.slug) ?? writingCards[0];

  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band pt-28">
        <a className="font-display font-black text-leaf-dark" href="/writing">
          Writing
        </a>
        <article className="mt-16 warm-card p-6">
          <p className="section-label">{card.mode}</p>
          <h1 className="font-display text-4xl font-black">{card.title}</h1>
          <p className="mt-4 leading-8 text-muted">{card.summary}</p>
          <div className="mt-6 rounded-lg bg-honey/10 p-4">
            <p className="section-label">Practice prompt</p>
            <p className="leading-7">{card.prompt}</p>
          </div>
        </article>
      </section>
    </main>
  );
}
