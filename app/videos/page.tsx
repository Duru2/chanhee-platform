import { ArchivePage } from "@/components/archive-page";
import { videoItems } from "@/lib/content/archive";

export default function VideosPage() {
  return (
    <ArchivePage
      eyebrow="Content engine"
      title="YouTube"
      intro="Videos become entry points into the wider learning archive, not isolated content."
      kind="video"
      items={videoItems}
    />
  );
}
