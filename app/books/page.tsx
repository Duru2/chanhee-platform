import { ArchivePage } from "@/components/archive-page";
import { bookItems } from "@/lib/content/archive";

export default function BooksPage() {
  return (
    <ArchivePage
      eyebrow="Reading trails"
      title="Books"
      intro="Book notes connect ideas to projects, habits, research, faith, and real decisions."
      kind="book"
      items={bookItems}
    />
  );
}
