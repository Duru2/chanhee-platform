import { ArchivePage } from "@/components/archive-page";
import { blogItems } from "@/lib/content/archive";

export default function BlogPage() {
  return (
    <ArchivePage
      eyebrow="Growth essays"
      title="Blog"
      intro="A home for reflections, build notes, personal systems, and lessons learned in public."
      kind="blog"
      items={blogItems}
    />
  );
}
