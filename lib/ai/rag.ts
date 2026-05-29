export type ContentSource =
  | "blog"
  | "book"
  | "writing"
  | "pte"
  | "project"
  | "thesis"
  | "video"
  | "faith";

export type IndexableDocument = {
  id: string;
  source: ContentSource;
  title: string;
  slug: string;
  body: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  visibility: "public" | "private" | "community";
};

export type DocumentChunk = {
  id: string;
  documentId: string;
  source: ContentSource;
  title: string;
  content: string;
  tokenEstimate: number;
  metadata: Record<string, string | string[]>;
};

export function chunkDocument(document: IndexableDocument): DocumentChunk[] {
  const sections = document.body
    .split(/\n{2,}/)
    .map((section) => section.trim())
    .filter(Boolean);

  return sections.map((content, index) => ({
    id: `${document.id}:${index}`,
    documentId: document.id,
    source: document.source,
    title: document.title,
    content,
    tokenEstimate: Math.ceil(content.length / 4),
    metadata: {
      slug: document.slug,
      tags: document.tags,
      visibility: document.visibility
    }
  }));
}

export const ragPipeline = [
  "Collect source content",
  "Normalize documents",
  "Chunk by semantic section",
  "Generate embeddings",
  "Store vectors with metadata",
  "Retrieve grounded context",
  "Answer with citations",
  "Capture feedback"
];
