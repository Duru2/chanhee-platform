import { ArchivePage } from "@/components/archive-page";
import { projectItems } from "@/lib/content/archive";

export default function ProjectsPage() {
  return (
    <ArchivePage
      eyebrow="Build in public"
      title="Projects"
      intro="Projects become chapters: decisions, bugs, demos, release notes, and lessons from shipping."
      kind="project"
      items={projectItems}
    />
  );
}
