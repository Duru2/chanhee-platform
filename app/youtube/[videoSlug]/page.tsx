import { videoItems } from "@/lib/content/archive";

export default function YouTubeDetailPage({ params }: { params: { videoSlug: string } }) {
  const video = videoItems.find((item) => item.id === params.videoSlug) ?? videoItems[0];

  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band pt-28">
        <a className="font-display font-black text-leaf-dark" href="/youtube">
          YouTube
        </a>
        <article className="mt-16 warm-card p-6">
          <p className="section-label">{video.eyebrow}</p>
          <h1 className="font-display text-4xl font-black">{video.title}</h1>
          <p className="mt-4 leading-8 text-muted">{video.summary}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-leaf/10 p-4">
              <p className="section-label">Episode note</p>
              <p className="leading-7">{video.lesson}</p>
            </div>
            <div className="rounded-lg bg-honey/10 p-4">
              <p className="section-label">Next content link</p>
              <p className="leading-7">{video.nextStep}</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
