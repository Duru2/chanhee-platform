import { ComingSoonPage } from "@/components/coming-soon-page";

export default function BlogPage() {
  return (
    <ComingSoonPage
      eyebrow="Growth essays"
      title="Blog"
      description="A home for reflections, build notes, personal systems, and lessons learned in public."
      bullets={["Learning logs", "Career reflections", "Project essays", "Faith and formation"]}
    />
  );
}
