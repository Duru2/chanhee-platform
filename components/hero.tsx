import Image from "next/image";
import { Mascot } from "@/components/mascot";

export function Hero() {
  return (
    <section id="home" className="relative grid min-h-[94vh] overflow-hidden text-cream">
      <Image
        src="/assets/hero-workspace.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,22,15,0.9)_0%,rgba(31,22,15,0.58)_46%,rgba(31,22,15,0.16)_100%),linear-gradient(0deg,rgba(31,22,15,0.54),rgba(31,22,15,0.08))]" />
      <div className="relative z-10 self-end px-5 pb-24 pt-48 md:px-16 lg:max-w-3xl">
        <p className="section-label text-honey">Chanhee Lee Digital HQ</p>
        <h1 className="max-w-[10ch] font-display text-[3.9rem] font-black leading-[0.86] md:text-[5.4rem] xl:text-[7.2rem]">
          Chanhee OS
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/90 md:text-xl">
          Software Engineering student, AI builder, full-stack developer, writer,
          and creator. A personal ecosystem where proof, story, learning, and
          content connect into one living brand.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="rounded-full bg-cream px-6 py-3 font-extrabold text-ink shadow-soft" href="/dev">
            View developer proof
          </a>
          <a className="rounded-full border border-cream/45 bg-cream/10 px-6 py-3 font-extrabold text-cream" href="/about">
            Recruiter snapshot
          </a>
        </div>
      </div>
      <aside className="relative z-10 m-5 mb-7 grid max-w-xs grid-cols-[auto_1fr] items-center gap-4 self-end rounded-lg border border-cream/40 bg-cream/15 p-4 backdrop-blur md:ml-16 lg:absolute lg:bottom-10 lg:right-16 lg:m-0">
        <Mascot />
        <div>
          <p className="mb-1 font-display font-black">Mori</p>
          <p className="mb-0 text-sm leading-6 text-cream/85">
            A calm study companion who collects questions, lessons, and small wins.
          </p>
        </div>
      </aside>
    </section>
  );
}
