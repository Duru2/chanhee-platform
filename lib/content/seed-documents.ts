import type { IndexableDocument } from "@/lib/ai/rag";
import { archiveItems } from "@/lib/content/archive";
import { learningCards } from "@/lib/content/learning-hubs";

const learningDocuments: IndexableDocument[] = learningCards.map((card) => ({
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

const archiveDocuments: IndexableDocument[] = archiveItems.map((item) => ({
  id: item.id,
  source: item.kind === "book" ? "book" : item.kind,
  title: item.title,
  slug: `${item.kind}/${item.id}`,
  body: [
    item.summary,
    `Lesson: ${item.lesson}`,
    `Next step: ${item.nextStep}`
  ].join("\n\n"),
  tags: item.tags,
  createdAt: item.date,
  updatedAt: item.date,
  visibility: "public"
}));

export const seedDocuments: IndexableDocument[] = [
  ...learningDocuments,
  ...archiveDocuments
];
