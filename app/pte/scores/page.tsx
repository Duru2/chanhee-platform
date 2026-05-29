export default function PteScoresPage() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band pt-28">
        <a className="font-display font-black text-leaf-dark" href="/pte">
          PTE / English
        </a>
        <div className="mt-16 warm-card p-6">
          <p className="section-label">Score tracking</p>
          <h1 className="font-display text-4xl font-black">PTE Score Tracker</h1>
          <p className="mt-4 leading-8 text-muted">
            MVP surface for test dates, target scores, actual scores, weaknesses,
            and next study actions.
          </p>
        </div>
      </section>
    </main>
  );
}
