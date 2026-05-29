import { NextResponse } from "next/server";
import {
  chunkDocument,
  createCitationAnswer,
  filterDocuments,
  type RetrievedContext
} from "@/lib/ai/rag";
import { seedDocuments } from "@/lib/content/seed-documents";

type AskRequest = {
  question?: string;
  sources?: Array<"writing" | "pte" | "blog" | "book" | "project" | "thesis" | "video" | "faith">;
  tags?: string[];
};

export async function POST(request: Request) {
  const body = (await request.json()) as AskRequest;
  const question = body.question?.trim();

  if (!question) {
    return NextResponse.json(
      { error: "Question is required." },
      { status: 400 }
    );
  }

  const documents = filterDocuments(seedDocuments, {
    sources: body.sources,
    tags: body.tags,
    visibility: "public"
  });

  const contexts: RetrievedContext[] = documents
    .flatMap(chunkDocument)
    .slice(0, 4)
    .map((chunk, index) => ({
      chunk,
      score: 1 - index * 0.08
    }));

  return NextResponse.json({
    question,
    ...createCitationAnswer(question, contexts),
    mode: "local-seed-rag-preview"
  });
}
