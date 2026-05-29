const rows = [
  ["AI Experiments", "RAG prototypes, prompt logs, evaluations, demos", "How ideas become working systems"],
  ["Full-Stack Projects", "Architecture notes, code decisions, release stories", "How to ship through ambiguity"],
  ["Chrome Extensions", "Product pages, changelogs, user feedback loops", "How small tools become useful products"],
  ["Startup Work", "Contribution logs, product lessons, team reflections", "How builders grow inside real constraints"]
];

export function ProjectChapters() {
  return (
    <section id="projects" className="section-band bg-[#e9f0e4]">
      <div className="section-heading">
        <div>
          <p className="section-label">Build in public</p>
          <h2 className="section-title">Projects Become Chapters</h2>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-leaf-dark/25 bg-cream">
        <div className="grid gap-4 bg-leaf-dark p-5 font-black text-cream md:grid-cols-[0.76fr_1.1fr_1.14fr]">
          <span>Channel</span>
          <span>Artifacts</span>
          <span>What visitors learn</span>
        </div>
        {rows.map(([channel, artifacts, lesson]) => (
          <div key={channel} className="grid gap-4 border-b border-leaf-dark/15 p-5 last:border-b-0 md:grid-cols-[0.76fr_1.1fr_1.14fr]">
            <span className="text-sm font-black uppercase text-leaf-dark">{channel}</span>
            <span>{artifacts}</span>
            <span>{lesson}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
