import { LearningHubPage } from "@/components/learning-hub-page";
import { writingCards } from "@/lib/content/learning-hubs";

export default function WritingPage() {
  return (
    <LearningHubPage
      eyebrow="Writing knowledge base"
      title="Writing Hub"
      intro="Writing frameworks, reflection systems, journaling structures, storytelling methods, and communication notes become guided practice instead of forgotten documents."
      cards={writingCards}
      companionNote="Do not wait until the lesson feels impressive. Capture the honest version first, then make it useful."
    />
  );
}
