import { NextResponse } from "next/server";
import { ingestDocuments } from "@/lib/ai/ingest";
import { seedDocuments } from "@/lib/content/seed-documents";

export async function POST() {
  const report = await ingestDocuments(seedDocuments, {
    dryRun: true
  });

  return NextResponse.json({
    ...report,
    note: "Dry run only. Set dryRun=false in server code and configure OPENAI_API_KEY plus a VectorStore to embed and store chunks."
  });
}
