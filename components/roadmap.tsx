import { roadmap } from "@/lib/content/platform";

export function Roadmap() {
  return (
    <section id="roadmap" className="section-band bg-[#fdf7ed]">
      <div className="section-heading">
        <div>
          <p className="section-label">Platform path</p>
          <h2 className="section-title">From One Garden to Many</h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {roadmap.map((item) => (
          <article key={item.phase} className="warm-card p-6">
            <span className="mb-9 inline-block font-black text-berry">{item.phase}</span>
            <h3 className="font-display text-xl font-black">{item.title}</h3>
            <p className="mt-2 leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
