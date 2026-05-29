import { BrandHubPage } from "@/components/brand-hub-page";
import { brandHubs } from "@/lib/content/brand";

const devHub = brandHubs.find((hub) => hub.slug === "dev")!;

const designNotes = [
  "RAG architecture: documents, chunks, embeddings, vector retrieval, citations.",
  "Supabase architecture: content tables, pgvector embeddings, RLS, public/private visibility.",
  "Personal OS architecture: each post, video, project, and life event connects through tags and timeline metadata.",
  "Portfolio architecture: projects expose problem, stack, decision log, demo, repo, and lesson learned."
];

export default function SystemDesignPage() {
  return (
    <BrandHubPage hub={{ ...devHub, title: "System Design", label: "Technical depth" }}>
      <div className="grid gap-4 md:grid-cols-2">
        {designNotes.map((note) => (
          <article key={note} className="warm-card p-5">
            <p className="section-label">Architecture note</p>
            <p className="leading-8 text-muted">{note}</p>
          </article>
        ))}
      </div>
    </BrandHubPage>
  );
}
