type ComingSoonPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export function ComingSoonPage({
  eyebrow,
  title,
  description,
  bullets
}: ComingSoonPageProps) {
  return (
    <main className="min-h-screen bg-paper px-5 py-20 md:px-16">
      <a className="font-display font-black text-leaf-dark" href="/">
        Chanhee OS
      </a>
      <section className="mx-auto mt-20 max-w-4xl">
        <p className="section-label">{eyebrow}</p>
        <h1 className="font-display text-[3.2rem] font-black leading-none md:text-[5.2rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{description}</p>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {bullets.map((bullet) => (
            <div key={bullet} className="warm-card p-5 font-bold text-leaf-dark">
              {bullet}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
