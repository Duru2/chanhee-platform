import { builderGardens, communityRooms } from "@/lib/content/community";

export function CommunityPageContent() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band bg-[linear-gradient(135deg,rgba(255,250,241,0.96),rgba(233,240,228,0.9))] pt-28">
        <a className="font-display font-black text-leaf-dark" href="/">
          Chanhee OS
        </a>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label">Future community</p>
            <h1 className="font-display text-[3.4rem] font-black leading-none md:text-[5.4rem]">
              Community Rooms
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            The community layer should feel like study rooms inside a warm library:
            focused, generous, honest, and built around growth rituals rather than noisy feeds.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="section-heading">
          <div>
            <p className="section-label">Rooms</p>
            <h2 className="section-title">Spaces With Rituals</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {communityRooms.map((room) => (
            <article key={room.id} className="warm-card p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-black uppercase text-berry">{room.type.replace("_", " ")}</span>
                <span className="rounded-full bg-leaf/10 px-3 py-1 text-xs font-black uppercase text-leaf-dark">
                  {room.status}
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-black">{room.name}</h2>
              <p className="mt-3 leading-7 text-muted">{room.description}</p>
              <div className="mt-5 rounded-lg border border-dashed border-honey/40 bg-honey/10 p-4">
                <p className="section-label">First ritual</p>
                <p className="leading-7">{room.firstRitual}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band bg-[#fff3e4]">
        <div className="section-heading">
          <div>
            <p className="section-label">Platform future</p>
            <h2 className="section-title">Builder Gardens</h2>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {builderGardens.map((garden) => (
            <article key={garden.id} className="warm-card overflow-hidden">
              <div className="border-b border-ink/10 bg-cream/70 p-6">
                <span className="text-xs font-black uppercase text-leaf-dark">{garden.owner}</span>
                <h3 className="mt-3 font-display text-3xl font-black">{garden.title}</h3>
                <p className="mt-3 leading-7 text-muted">{garden.focus}</p>
              </div>
              <div className="p-6">
                <p className="section-label">Modules</p>
                <div className="flex flex-wrap gap-2">
                  {garden.modules.map((module) => (
                    <span key={module} className="rounded-full bg-leaf/10 px-3 py-1 text-sm font-bold text-leaf-dark">
                      {module}
                    </span>
                  ))}
                </div>
                <div className="mt-5 rounded-lg bg-berry/5 p-4">
                  <p className="section-label text-berry">Promise</p>
                  <p className="leading-7">{garden.promise}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
