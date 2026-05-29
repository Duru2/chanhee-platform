import { AssistantBlueprint } from "@/components/assistant-blueprint";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HubGrid } from "@/components/hub-grid";
import { MotionReveal } from "@/components/motion-reveal";
import { ProjectChapters } from "@/components/project-chapters";
import { Roadmap } from "@/components/roadmap";
import { VideoLibrary } from "@/components/video-library";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MotionReveal>
          <section className="section-band grid gap-8 bg-cream/75 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="section-label">The feeling</p>
              <h2 className="section-title">A study room that remembers the journey.</h2>
            </div>
            <p className="section-copy">
              Chanhee OS is not a static portfolio. It is a digital garden,
              learning archive, build-in-public log, and future community shaped
              around a real person growing over time.
            </p>
          </section>
        </MotionReveal>
        <MotionReveal>
          <HubGrid />
        </MotionReveal>
        <MotionReveal>
          <ProjectChapters />
        </MotionReveal>
        <MotionReveal>
          <VideoLibrary />
        </MotionReveal>
        <MotionReveal>
          <AssistantBlueprint />
        </MotionReveal>
        <MotionReveal>
          <Roadmap />
        </MotionReveal>
      </main>
      <footer className="flex flex-col gap-3 bg-ink px-5 py-7 text-cream md:flex-row md:justify-between md:px-16">
        <span className="font-display font-black">Chanhee OS</span>
        <span>Life becomes content. Content becomes knowledge. Knowledge becomes community.</span>
      </footer>
    </>
  );
}
