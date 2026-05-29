import type { EmbeddedChunk } from "@/lib/ai/embeddings";
import type { RetrievedContext, RetrievalFilter } from "@/lib/ai/rag";

export type VectorSearchQuery = {
  embedding: number[];
  topK?: number;
  filter?: RetrievalFilter;
};

export interface VectorStore {
  upsert(chunks: EmbeddedChunk[]): Promise<void>;
  search(query: VectorSearchQuery): Promise<RetrievedContext[]>;
}

export class MemoryVectorStore implements VectorStore {
  private chunks: EmbeddedChunk[] = [];

  async upsert(chunks: EmbeddedChunk[]) {
    const next = new Map(this.chunks.map((chunk) => [chunk.id, chunk]));

    chunks.forEach((chunk) => {
      next.set(chunk.id, chunk);
    });

    this.chunks = Array.from(next.values());
  }

  async search(query: VectorSearchQuery): Promise<RetrievedContext[]> {
    const topK = query.topK ?? 5;

    return this.chunks
      .map((chunk) => ({
        chunk,
        score: cosineSimilarity(query.embedding, chunk.embedding)
      }))
      .sort((left, right) => right.score - left.score)
      .slice(0, topK);
  }
}

export function cosineSimilarity(left: number[], right: number[]) {
  if (left.length === 0 || right.length === 0 || left.length !== right.length) {
    return 0;
  }

  const dot = left.reduce((sum, value, index) => sum + value * right[index], 0);
  const leftMagnitude = Math.sqrt(left.reduce((sum, value) => sum + value * value, 0));
  const rightMagnitude = Math.sqrt(right.reduce((sum, value) => sum + value * value, 0));

  if (leftMagnitude === 0 || rightMagnitude === 0) {
    return 0;
  }

  return dot / (leftMagnitude * rightMagnitude);
}
