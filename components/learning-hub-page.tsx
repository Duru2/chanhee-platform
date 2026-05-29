"use client";

import { useMemo, useState } from "react";
import type { LearningCard } from "@/lib/content/learning-hubs";

type LearningHubPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  cards: LearningCard[];
  companionNote: string;
};

export function LearningHubPage({
  eyebrow,
  title,
  intro,
  cards,
  companionNote
}: LearningHubPageProps) {
  const [selectedId, setSelectedId] = useState(cards[0]?.id);
  const selected = useMemo(
    () => cards.find((card) => card.id === selectedId) ?? cards[0],
    [cards, selectedId]
  );

  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band bg-[linear-gradient(135deg,rgba(255,250,241,0.95),rgba(246,234,215,0.92))] pt-28">
        <a className="font-display font-black text-leaf-dark" href="/">
          Chanhee OS
        </a>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label">{eyebrow}</p>
            <h1 className="font-display text-[3.4rem] font-black leading-none md:text-[5.4rem]">
              {title}
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">{intro}</p>
        </div>
      </section>

      <section className="section-band">
        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="warm-card h-fit p-4">
            <p className="section-label">Knowledge shelf</p>
            <div className="grid gap-3">
              {cards.map((card) => (
                <button
                  key={card.id}
                  className={`rounded-lg border p-4 text-left transition ${
                    selected?.id === card.id
                      ? "border-leaf-dark bg-leaf/10"
                      : "border-ink/10 bg-cream/65"
                  }`}
                  onClick={() => setSelectedId(card.id)}
                >
                  <span className="text-xs font-black uppercase text-berry">{card.mode}</span>
                  <strong className="mt-1 block font-display text-lg">{card.title}</strong>
                  <span className="mt-1 block text-sm leading-6 text-muted">{card.summary}</span>
                </button>
              ))}
            </div>
          </aside>

          {selected ? (
            <article className="warm-card overflow-hidden">
              <div className="border-b border-ink/10 bg-cream/70 p-6 md:p-8">
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-honey/15 px-3 py-1 text-xs font-black uppercase text-[#7b5525]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">
                  {selected.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-8 text-muted">{selected.summary}</p>
              </div>
              <div className="grid gap-5 p-6 md:grid-cols-2 md:p-8">
                <div>
                  <p className="section-label">Practice path</p>
                  <ol className="grid gap-3">
                    {selected.steps.map((step, index) => (
                      <li key={step} className="rounded-lg border border-leaf/20 bg-white/45 p-4 leading-7">
                        <span className="mr-2 font-black text-leaf-dark">{index + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-lg border border-dashed border-berry/35 bg-berry/5 p-5">
                    <p className="section-label text-berry">Try this</p>
                    <p className="font-display text-xl font-black leading-8">{selected.prompt}</p>
                  </div>
                  <div className="rounded-lg border border-leaf/20 bg-leaf/10 p-5">
                    <p className="section-label">Example</p>
                    <p className="leading-8 text-leaf-dark">{selected.example}</p>
                  </div>
                  <div className="rounded-lg border border-honey/25 bg-honey/10 p-5">
                    <p className="section-label">Mori says</p>
                    <p className="leading-8 text-muted">{companionNote}</p>
                  </div>
                </div>
              </div>
            </article>
          ) : null}
        </div>
      </section>
    </main>
  );
}
