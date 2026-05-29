"use client";

import { useState } from "react";
import { videos } from "@/lib/content/platform";

const categories = ["All", "AI", "Software Engineering", "UNSW", "Career", "Books", "Faith"] as const;

export function VideoLibrary() {
  const [selected, setSelected] = useState<(typeof categories)[number]>("All");
  const visibleVideos = selected === "All" ? videos : videos.filter((video) => video.category === selected);

  return (
    <section id="youtube" className="section-band bg-[#fff3e4]">
      <div className="section-heading">
        <div>
          <p className="section-label">Content engine</p>
          <h2 className="section-title">Video Library</h2>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-full border border-berry/25 px-4 py-3 font-extrabold ${
              selected === category ? "bg-berry text-cream" : "bg-cream/75 text-ink"
            }`}
            onClick={() => setSelected(category)}
          >
            {category === "All" ? "All Videos" : category}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleVideos.map((video) => (
          <article key={video.title} className="warm-card overflow-hidden">
            <div className="grid aspect-video place-items-center bg-gradient-to-br from-leaf-dark to-honey text-2xl font-black text-cream">
              {video.code}
            </div>
            <div className="p-5">
              <span className="text-xs font-black uppercase text-berry">{video.category}</span>
              <h3 className="mt-2 font-display text-xl font-black">{video.title}</h3>
              <p className="mt-2 leading-7 text-muted">{video.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
