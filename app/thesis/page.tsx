import { ArchivePage } from "@/components/archive-page";
import { thesisItems } from "@/lib/content/archive";

export default function ThesisPage() {
  return (
    <ArchivePage
      eyebrow="Research archive"
      title="Thesis"
      intro="Research progress, paper notes, methods, experiments, and open questions documented over time."
      kind="thesis"
      items={thesisItems}
    />
  );
}
