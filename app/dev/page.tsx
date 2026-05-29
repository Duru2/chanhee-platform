import { BrandHubPage } from "@/components/brand-hub-page";
import { brandHubs } from "@/lib/content/brand";
import { projectItems } from "@/lib/content/archive";

const devHub = brandHubs.find((hub) => hub.slug === "dev")!;

export default function DevPage() {
  return (
    <BrandHubPage hub={devHub}>
      <div className="grid gap-4 md:grid-cols-2">
        {projectItems.map((project) => (
          <article key={project.id} className="warm-card p-5">
            <span className="text-xs font-black uppercase text-berry">Featured project</span>
            <h2 className="mt-3 font-display text-2xl font-black">{project.title}</h2>
            <p className="mt-2 leading-7 text-muted">{project.summary}</p>
            <div className="mt-4 rounded-lg bg-leaf/10 p-4">
              <p className="section-label">Recruiter proof</p>
              <p className="leading-7">{project.lesson}</p>
            </div>
          </article>
        ))}
      </div>
    </BrandHubPage>
  );
}
