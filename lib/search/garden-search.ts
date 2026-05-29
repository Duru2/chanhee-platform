import type { IndexableDocument } from "@/lib/ai/rag";
import { seedDocuments } from "@/lib/content/seed-documents";

export type GardenSearchResult = {
  document: IndexableDocument;
  score: number;
  matchedTags: string[];
};

export type GardenConnection = {
  sourceId: string;
  targetId: string;
  reason: string;
  sharedTags: string[];
};

export function searchGarden(query: string, documents = seedDocuments): GardenSearchResult[] {
  const terms = normalize(query).split(" ").filter(Boolean);

  if (terms.length === 0) {
    return documents.map((document) => ({
      document,
      score: 1,
      matchedTags: []
    }));
  }

  return documents
    .map((document) => {
      const haystack = normalize([
        document.title,
        document.body,
        document.source,
        document.tags.join(" ")
      ].join(" "));
      const matchedTerms = terms.filter((term) => haystack.includes(term));
      const matchedTags = document.tags.filter((tag) =>
        terms.some((term) => normalize(tag).includes(term))
      );

      return {
        document,
        matchedTags,
        score: matchedTerms.length + matchedTags.length * 2
      };
    })
    .filter((result) => result.score > 0)
    .sort((left, right) => right.score - left.score);
}

export function buildGardenConnections(documents = seedDocuments): GardenConnection[] {
  const connections: GardenConnection[] = [];

  documents.forEach((source, sourceIndex) => {
    documents.slice(sourceIndex + 1).forEach((target) => {
      const sharedTags = source.tags.filter((tag) => target.tags.includes(tag));

      if (sharedTags.length > 0) {
        connections.push({
          sourceId: source.id,
          targetId: target.id,
          sharedTags,
          reason: `Both connect through ${sharedTags.join(", ")}.`
        });
      }
    });
  });

  return connections;
}

export function getGardenStats(documents = seedDocuments) {
  const sources = new Set(documents.map((document) => document.source));
  const tags = new Set(documents.flatMap((document) => document.tags));
  const connections = buildGardenConnections(documents);

  return {
    documents: documents.length,
    sources: sources.size,
    tags: tags.size,
    connections: connections.length
  };
}

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s-]/g, " ");
}
