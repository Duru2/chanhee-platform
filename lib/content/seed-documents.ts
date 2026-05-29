import type { IndexableDocument } from "@/lib/ai/rag";
import { learningCards } from "@/lib/content/learning-hubs";

export const seedDocuments: IndexableDocument[] = learningCards.map((card) => ({
  id: card.id,
  source: card.hub,
  title: card.title,
  slug: `${card.hub}/${card.id}`,
  body: [
    card.summary,
    `Practice path: ${card.steps.join(" ")}`,
    `Prompt: ${card.prompt}`,
    `Example: ${card.example}`
  ].join("\n\n"),
  tags: card.tags,
  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
  visibility: "public"
}));
