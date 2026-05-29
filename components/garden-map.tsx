"use client";

import { useMemo, useState } from "react";
import {
  buildGardenConnections,
  getGardenStats,
  searchGarden
} from "@/lib/search/garden-search";

export function GardenMap() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchGarden(query), [query]);
  const stats = getGardenStats();
  const connections = buildGardenConnections().slice(0, 8);

  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band bg-[linear-gradient(135deg,rgba(255,250,241,0.96),rgba(233,240,228,0.9))] pt-28">
        <a className="font-display font-black text-leaf-dark" href="/">
          Chanhee OS
        </a>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-label">Living knowledge graph</p>
            <h1 className="font-display text-[3.4rem] font-black leading-none md:text-[5.4rem]">
              Garden Map
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Search across Writing, PTE, Blog, Books, Projects, Thesis, and YouTube.
            This is the first visible layer of Chanhee OS as a connected knowledge ecosystem.
          </p>
        </div>
      </section>

      <section className="section-band">
        <div className="grid gap-5 md:grid-cols-4">
          <Stat label="Documents" value={stats.documents} />
          <Stat label="Sources" value={stats.sources} />
          <Stat label="Tags" value={stats.tags} />
          <Stat label="Connections" value={stats.connections} />
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="warm-card h-fit p-5">
            <label className="section-label" htmlFor="garden-search">
              Search the garden
            </label>
            <input
              id="garden-search"
              className="w-full rounded-lg border border-ink/15 bg-white/65 p-4 outline-none focus:border-leaf-dark"
              placeholder="Try: RAG, reflection, UNSW, speaking..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="mt-5">
              <p className="section-label">Live connections</p>
              <div className="grid gap-3">
                {connections.map((connection) => (
                  <div key={`${connection.sourceId}-${connection.targetId}`} className="rounded-lg bg-leaf/10 p-3 text-sm leading-6">
                    <strong>{connection.sourceId}</strong>
                    <span className="mx-2 text-leaf-dark">connects to</span>
                    <strong>{connection.targetId}</strong>
                    <p className="mt-1 text-muted">{connection.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="grid gap-4">
            {results.map((result) => (
              <article key={result.document.id} className="warm-card p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-leaf/10 px-3 py-1 text-xs font-black uppercase text-leaf-dark">
                    {result.document.source}
                  </span>
                  <span className="text-sm font-bold text-muted">Score {result.score}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-black">{result.document.title}</h2>
                <p className="mt-2 leading-7 text-muted">{result.document.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {result.document.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-honey/10 px-3 py-1 text-xs font-bold text-[#7b5525]">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="warm-card p-5">
      <p className="section-label">{label}</p>
      <strong className="font-display text-4xl">{value}</strong>
    </div>
  );
}
