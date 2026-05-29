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

export type RetrievalFilter = {
  sources?: ContentSource[];
  tags?: string[];
  visibility?: IndexableDocument["visibility"];
};

export type RetrievedContext = {
  chunk: DocumentChunk;
  score: number;
};

export type GroundedAnswer = {
  answer: string;
  citations: Array<{
    documentId: string;
    title: string;
    source: ContentSource;
  }>;
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

export function filterDocuments(
  documents: IndexableDocument[],
  filter: RetrievalFilter = {}
) {
  return documents.filter((document) => {
    const sourceMatch = !filter.sources || filter.sources.includes(document.source);
    const visibilityMatch = !filter.visibility || filter.visibility === document.visibility;
    const tagMatch =
      !filter.tags ||
      filter.tags.length === 0 ||
      filter.tags.some((tag) => document.tags.includes(tag));

    return sourceMatch && visibilityMatch && tagMatch;
  });
}

export function createCitationAnswer(question: string, contexts: RetrievedContext[]): GroundedAnswer {
  const citations = contexts.map(({ chunk }) => ({
    documentId: chunk.documentId,
    title: chunk.title,
    source: chunk.source
  }));

  return {
    answer:
      contexts.length === 0
        ? `I do not have enough Chanhee OS context yet to answer: "${question}".`
        : `Based on the indexed Chanhee OS archive, start with "${contexts[0].chunk.title}" and connect it to ${contexts
            .slice(1)
            .map((context) => `"${context.chunk.title}"`)
            .join(", ") || "the same source"}.`,
    citations
  };
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
