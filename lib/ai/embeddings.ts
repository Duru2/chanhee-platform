import OpenAI from "openai";
import type { DocumentChunk } from "@/lib/ai/rag";

export type EmbeddedChunk = DocumentChunk & {
  embedding: number[];
  embeddingModel: string;
};

const defaultEmbeddingModel = "text-embedding-3-small";

export function createOpenAIClient(apiKey = process.env.OPENAI_API_KEY) {
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is required to generate embeddings.");
  }

  return new OpenAI({ apiKey });
}

export async function embedChunks(
  chunks: DocumentChunk[],
  options: {
    model?: string;
    client?: OpenAI;
  } = {}
): Promise<EmbeddedChunk[]> {
  const model = options.model ?? defaultEmbeddingModel;
  const client = options.client ?? createOpenAIClient();

  const response = await client.embeddings.create({
    model,
    input: chunks.map((chunk) => chunk.content)
  });

  return chunks.map((chunk, index) => ({
    ...chunk,
    embedding: response.data[index]?.embedding ?? [],
    embeddingModel: model
  }));
}
