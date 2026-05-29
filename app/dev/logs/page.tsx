import { ArchivePage } from "@/components/archive-page";
import { blogItems, projectItems } from "@/lib/content/archive";

export default function DevLogsPage() {
  return (
    <ArchivePage
      eyebrow="Development logs"
      title="Dev Logs"
      intro="Build notes, product decisions, implementation lessons, and weekly engineering progress."
      kind="project"
      items={[...projectItems, ...blogItems]}
    />
  );
}
