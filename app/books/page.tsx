import { ComingSoonPage } from "@/components/coming-soon-page";

export default function BooksPage() {
  return (
    <ComingSoonPage
      eyebrow="Reading trails"
      title="Books"
      description="Book notes should connect ideas to projects, habits, research, and real decisions."
      bullets={["Highlights", "Atomic takeaways", "Applications", "Reading paths"]}
    />
  );
}
