import { ComingSoonPage } from "@/components/coming-soon-page";

export default function PtePage() {
  return (
    <ComingSoonPage
      eyebrow="Study cockpit"
      title="PTE Hub"
      description="Vocabulary, speaking templates, writing templates, exam strategy, and study notes become interactive drills."
      bullets={["Speaking templates", "Writing templates", "Vocabulary drills", "Exam strategies"]}
    />
  );
}
