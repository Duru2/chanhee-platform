import { ComingSoonPage } from "@/components/coming-soon-page";

export default function AskPage() {
  return (
    <ComingSoonPage
      eyebrow="AI companion"
      title="Ask Chanhee AI"
      description="A future RAG assistant that answers from Chanhee's real archive with grounded citations."
      bullets={["Blog retrieval", "Book note retrieval", "PTE retrieval", "Project retrieval"]}
    />
  );
}
