import { LearningHubPage } from "@/components/learning-hub-page";
import { pteCards } from "@/lib/content/learning-hubs";

export default function PtePage() {
  return (
    <LearningHubPage
      eyebrow="Study cockpit"
      title="PTE Hub"
      intro="Vocabulary, speaking templates, writing templates, exam strategies, and study notes become interactive drills that help learners practice, repeat, and improve."
      cards={pteCards}
      companionNote="Make the answer simple, fluent, and repeatable. Confidence grows through small reps."
    />
  );
}
