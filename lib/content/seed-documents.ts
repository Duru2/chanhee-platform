import type { IndexableDocument } from "@/lib/ai/rag";
import { archiveItems } from "@/lib/content/archive";
import { journeyEvents, weeklyLogs } from "@/lib/content/journey";
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

const journeyDocuments: IndexableDocument[] = journeyEvents.map((event) => ({
  id: event.id,
  source: "blog",
  title: event.title,
  slug: `journey/${event.id}`,
  body: [event.summary, `Signal: ${event.signal}`].join("\n\n"),
  tags: event.tags,
  createdAt: "2026-05-29",
  updatedAt: "2026-05-29",
  visibility: "public"
}));

const weeklyLogDocuments: IndexableDocument[] = weeklyLogs.map((log) => ({
  id: log.id,
  source: "blog",
  title: log.focus,
  slug: `now/${log.id}`,
  body: [
    `Built: ${log.built}`,
    `Learned: ${log.learned}`,
    `Next: ${log.next}`
  ].join("\n\n"),
  tags: ["now", "weekly-log", "growth"],
  createdAt: log.week === "Next" ? "2026-05-29" : log.week,
  updatedAt: "2026-05-29",
  visibility: "public"
}));

export const seedDocuments: IndexableDocument[] = [
  ...learningDocuments,
  ...archiveDocuments,
  ...journeyDocuments,
  ...weeklyLogDocuments
];
