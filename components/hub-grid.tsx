"use client";

import { useState } from "react";
import { hubs, identitySignals } from "@/lib/content/platform";

const prompts = {
  writing: [
    "What did I learn this week that felt small today but might compound over a year?",
    "Where did I avoid difficulty, and what would a kinder next attempt look like?",
    "What did building teach me that studying alone could not have taught me?"
  ],
  pte: [
    "Speak for 40 seconds about a useful habit. Record once, then improve fluency and structure.",
    "Write one high-scoring sentence using a cause-effect structure and one academic connector.",
    "Pick five vocabulary words and use each in a sentence about university life in Australia."
  ]
};

export function HubGrid() {
  const [prompt, setPrompt] = useState("Pick a hub action to surface a small practice prompt.");

  function choosePrompt(kind: keyof typeof prompts) {
    const options = prompts[kind];
    setPrompt(options[Math.floor(Math.random() * options.length)]);
  }

  return (
    <section id="garden" className="section-band bg-[#f6ead7]">
      <div className="section-heading">
        <div>
          <p className="section-label">Digital garden</p>
          <h2 className="section-title">What Is Growing Now</h2>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="warm-card p-6 md:p-10">
          <p className="section-label">Now Page</p>
          <h3 className="font-display text-3xl font-black leading-tight md:text-5xl">
            Learning in public as a UNSW software engineering student and AI builder.
          </h3>
          <p className="mt-4 max-w-3xl leading-8 text-muted">
            The center of Chanhee OS is the practice of documenting the process:
            what is being studied, built, questioned, shipped, and refined this season.
          </p>
          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {identitySignals.slice(0, 6).map((signal) => (
              <span key={signal} className="rounded-lg border border-leaf/20 bg-white/35 p-4 text-sm font-bold text-leaf-dark">
                {signal}
              </span>
            ))}
          </div>
        </article>
        <article id="hubs" className="warm-card p-6 md:p-9">
          <p className="section-label">Living knowledge</p>
          <h3 className="font-display text-2xl font-black">Interactive Learning Hubs</h3>
          <div className="mt-5 grid gap-3">
            {hubs.map((hub) => (
              <div key={hub.title} className="rounded-lg border border-ink/10 bg-cream/75 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-black uppercase text-leaf-dark">{hub.eyebrow}</span>
                  <span className="rounded-full bg-leaf/10 px-3 py-1 text-xs font-black uppercase text-leaf-dark">
                    {hub.status}
                  </span>
                </div>
                <h4 className="mt-2 font-display text-xl font-black">{hub.title}</h4>
                <p className="mt-1 text-sm leading-6 text-muted">{hub.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
      <div className="mt-5 grid gap-4 rounded-lg border border-dashed border-leaf/45 bg-leaf/10 p-5 text-leaf-dark md:grid-cols-[1fr_auto_auto] md:items-center">
        <p className="font-bold">{prompt}</p>
        <button className="rounded-full bg-leaf-dark px-5 py-3 font-extrabold text-cream" onClick={() => choosePrompt("writing")}>
          Writing prompt
        </button>
        <button className="rounded-full bg-berry px-5 py-3 font-extrabold text-cream" onClick={() => choosePrompt("pte")}>
          PTE drill
        </button>
      </div>
    </section>
  );
}
