import { ComingSoonPage } from "@/components/coming-soon-page";

export default function ThesisPage() {
  return (
    <ComingSoonPage
      eyebrow="Research archive"
      title="Thesis"
      description="Research progress, paper notes, methods, experiments, and open questions documented over time."
      bullets={["Paper notes", "Weekly updates", "Methods", "Experiment logs"]}
    />
  );
}
