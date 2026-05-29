import { chunkDocument, type IndexableDocument } from "@/lib/ai/rag";
import { embedChunks, type EmbeddedChunk } from "@/lib/ai/embeddings";
import type { VectorStore } from "@/lib/vector/store";

export type IngestionReport = {
  documents: number;
  chunks: number;
  embedded: number;
  stored: number;
  mode: "dry-run" | "embedded";
};

export async function ingestDocuments(
  documents: IndexableDocument[],
  options: {
    vectorStore?: VectorStore;
    dryRun?: boolean;
  } = {}
): Promise<IngestionReport> {
  const chunks = documents.flatMap(chunkDocument);

  if (options.dryRun !== false) {
    return {
      documents: documents.length,
      chunks: chunks.length,
      embedded: 0,
      stored: 0,
      mode: "dry-run"
    };
  }

  const embeddedChunks: EmbeddedChunk[] = await embedChunks(chunks);

  if (options.vectorStore) {
    await options.vectorStore.upsert(embeddedChunks);
  }

  return {
    documents: documents.length,
    chunks: chunks.length,
    embedded: embeddedChunks.length,
    stored: options.vectorStore ? embeddedChunks.length : 0,
    mode: "embedded"
  };
}
