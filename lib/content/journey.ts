export type JourneyEvent = {
  id: string;
  period: string;
  title: string;
  summary: string;
  signal: string;
  tags: string[];
};

export type WeeklyLog = {
  id: string;
  week: string;
  focus: string;
  built: string;
  learned: string;
  next: string;
};

export const journeyEvents: JourneyEvent[] = [
  {
    id: "unsw-foundation",
    period: "UNSW Sydney",
    title: "Building the software engineering foundation",
    summary:
      "Coursework, assignments, systems thinking, and the discipline of learning technical ideas deeply.",
    signal:
      "The platform should show the student journey honestly, not only polished outcomes.",
    tags: ["unsw", "software-engineering", "learning"]
  },
  {
    id: "ai-builder",
    period: "AI Builder",
    title: "Turning curiosity into AI experiments",
    summary:
      "RAG prototypes, assistants, prompt systems, and applied AI workflows become public build logs.",
    signal:
      "AI is not a decoration here. It is a layer powered by Chanhee's real archive.",
    tags: ["ai", "rag", "projects"]
  },
  {
    id: "research-student",
    period: "Research",
    title: "Learning how to ask better questions",
    summary:
      "Thesis notes, paper reading, experiments, and open questions become part of the learning trail.",
    signal:
      "Research progress is valuable because it shows how uncertainty becomes understanding.",
    tags: ["research", "thesis", "questions"]
  },
  {
    id: "creator",
    period: "Creator",
    title: "Making the journey useful for others",
    summary:
      "Blog posts, YouTube videos, book notes, and reflections become doors into the wider garden.",
    signal:
      "The visitor should leave thinking: if he can learn this, maybe I can too.",
    tags: ["youtube", "writing", "community"]
  }
];

export const weeklyLogs: WeeklyLog[] = [
  {
    id: "week-chanhee-os-foundation",
    week: "2026-05-29",
    focus: "Turn Chanhee OS from a static concept into a living platform foundation.",
    built:
      "Next.js scaffold, learning hubs, archive routes, RAG preview, community rooms, growth gardens, and garden map.",
    learned:
      "The emotional direction and the information architecture have to grow together.",
    next:
      "Replace seeded examples with Chanhee's real writing, PTE notes, books, project logs, and video transcripts."
  },
  {
    id: "week-rag-spine",
    week: "Next",
    focus: "Make the RAG spine real.",
    built:
      "Dry-run ingestion pipeline and OpenAI embedding adapter skeleton.",
    learned:
      "Every content type needs shared metadata before AI answers can be trustworthy.",
    next:
      "Connect database records, embeddings, vector storage, and cited answers end to end."
  }
];
