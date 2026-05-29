export type ArchiveKind = "blog" | "book" | "project" | "thesis" | "video";

export type ArchiveItem = {
  id: string;
  kind: ArchiveKind;
  title: string;
  eyebrow: string;
  summary: string;
  status: "seed" | "active" | "published" | "researching" | "building";
  date: string;
  tags: string[];
  lesson: string;
  nextStep: string;
};

export const blogItems: ArchiveItem[] = [
  {
    id: "learning-in-public",
    kind: "blog",
    title: "Learning in Public Without Pretending",
    eyebrow: "Growth essay",
    summary:
      "A reflection on documenting the unfinished middle: uncertainty, attempts, mistakes, and small improvements.",
    status: "active",
    date: "2026-05-29",
    tags: ["reflection", "learning", "identity"],
    lesson:
      "The most useful posts are not victory laps. They are honest maps of how understanding changed.",
    nextStep: "Turn one weekly learning note into a short essay."
  },
  {
    id: "digital-home-not-portfolio",
    kind: "blog",
    title: "Why Chanhee OS Is Not a Portfolio",
    eyebrow: "Platform philosophy",
    summary:
      "A note about building a digital home where projects, books, thesis, and videos connect into one living system.",
    status: "seed",
    date: "2026-05-29",
    tags: ["digital-garden", "platform", "writing"],
    lesson:
      "A portfolio asks people to judge the output. A digital home invites them to follow the growth.",
    nextStep: "Connect this philosophy to the homepage and About page."
  }
];

export const bookItems: ArchiveItem[] = [
  {
    id: "atomic-habits",
    kind: "book",
    title: "Atomic Habits",
    eyebrow: "Book trail",
    summary:
      "Reading notes on identity-based habits, environment design, and compounding small improvements.",
    status: "active",
    date: "2026-05-29",
    tags: ["habits", "systems", "growth"],
    lesson:
      "A growth platform should make the next good action easier, not merely store information.",
    nextStep: "Create a habit reflection card connected to the Writing Hub."
  },
  {
    id: "show-your-work",
    kind: "book",
    title: "Show Your Work",
    eyebrow: "Creator shelf",
    summary:
      "Notes on sharing process, documenting progress, and becoming discoverable through generosity.",
    status: "seed",
    date: "2026-05-29",
    tags: ["creator", "content", "build-in-public"],
    lesson:
      "The archive should make the process visible enough that others can borrow courage from it.",
    nextStep: "Link project updates to video and blog formats."
  }
];

export const projectItems: ArchiveItem[] = [
  {
    id: "chanhee-os",
    kind: "project",
    title: "Chanhee OS",
    eyebrow: "Personal operating system",
    summary:
      "A digital home that connects learning, projects, writing, PTE, videos, AI, and future community.",
    status: "building",
    date: "2026-05-29",
    tags: ["nextjs", "rag", "digital-garden"],
    lesson:
      "The emotional direction matters as much as the database because people need to feel invited before they explore.",
    nextStep: "Replace seeded knowledge with Chanhee's real writing and PTE assets."
  },
  {
    id: "ask-chanhee-ai",
    kind: "project",
    title: "Ask Chanhee AI",
    eyebrow: "AI assistant",
    summary:
      "A RAG assistant that answers from the real archive with citations and feedback loops.",
    status: "building",
    date: "2026-05-29",
    tags: ["openai", "vector-db", "assistant"],
    lesson:
      "The assistant should be grounded in lived learning, not generic motivational answers.",
    nextStep: "Connect OpenAI embeddings and a vector store."
  }
];

export const thesisItems: ArchiveItem[] = [
  {
    id: "research-question-map",
    kind: "thesis",
    title: "Research Question Map",
    eyebrow: "Thesis progress",
    summary:
      "A living map for research questions, paper notes, assumptions, methods, and experiments.",
    status: "researching",
    date: "2026-05-29",
    tags: ["research", "thesis", "questions"],
    lesson:
      "Research notes become more useful when they show why a question matters and what changed after reading.",
    nextStep: "Add paper note cards with claims, evidence, and open questions."
  }
];

export const videoItems: ArchiveItem[] = [
  {
    id: "week-at-unsw",
    kind: "video",
    title: "A Week at UNSW Sydney",
    eyebrow: "UNSW",
    summary:
      "A video concept connecting university life, study routines, research, projects, and honest reflection.",
    status: "seed",
    date: "2026-05-29",
    tags: ["unsw", "student-life", "youtube"],
    lesson:
      "Videos should be doors into the archive, not isolated uploads.",
    nextStep: "Attach transcript, related posts, and project references."
  },
  {
    id: "building-rag-assistant",
    kind: "video",
    title: "Building a Personal RAG Assistant",
    eyebrow: "AI",
    summary:
      "A video concept explaining how Chanhee OS turns notes and content into a grounded AI assistant.",
    status: "seed",
    date: "2026-05-29",
    tags: ["ai", "rag", "youtube"],
    lesson:
      "Technical content feels more human when it starts with the personal problem it solves.",
    nextStep: "Record a build log from the current implementation."
  }
];

export const archiveItems = [
  ...blogItems,
  ...bookItems,
  ...projectItems,
  ...thesisItems,
  ...videoItems
];
