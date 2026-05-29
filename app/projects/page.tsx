import { ComingSoonPage } from "@/components/coming-soon-page";

export default function ProjectsPage() {
  return (
    <ComingSoonPage
      eyebrow="Build in public"
      title="Projects"
      description="Projects become chapters: decisions, bugs, demos, release notes, and lessons from shipping."
      bullets={["AI experiments", "Full-stack builds", "Chrome extensions", "Startup lessons"]}
    />
  );
}
