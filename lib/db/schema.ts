export const tables = [
  "users",
  "profiles",
  "posts",
  "notes",
  "books",
  "book_notes",
  "projects",
  "project_updates",
  "videos",
  "thesis_updates",
  "learning_hubs",
  "hub_lessons",
  "tags",
  "content_tags",
  "embeddings",
  "ai_conversations",
  "comments",
  "groups",
  "group_members",
  "discussions",
  "messages"
] as const;

export type PlatformTable = (typeof tables)[number];

export const schemaNotes: Record<PlatformTable, string> = {
  users: "Authentication identity and account ownership.",
  profiles: "Public garden profile, bio, links, and growth story.",
  posts: "Blog essays, reflections, and long-form updates.",
  notes: "Atomic notes across writing, PTE, thesis, books, and projects.",
  books: "Book catalog with reading status and metadata.",
  book_notes: "Highlights, summaries, takeaways, and applications.",
  projects: "Build-in-public project records.",
  project_updates: "Progress logs, releases, bugs, decisions, and demos.",
  videos: "YouTube content metadata and transcript references.",
  thesis_updates: "Research progress, paper notes, methods, and results.",
  learning_hubs: "Writing, PTE, books, thesis, projects, and future hubs.",
  hub_lessons: "Interactive lessons, prompts, drills, and guided paths.",
  tags: "Reusable content taxonomy.",
  content_tags: "Join table connecting tags to any content item.",
  embeddings: "Vector records for RAG retrieval.",
  ai_conversations: "Ask Chanhee AI threads and feedback.",
  comments: "Community discussion on public content.",
  groups: "Study groups, book clubs, career groups, and rooms.",
  group_members: "Membership, roles, and participation state.",
  discussions: "Community threads and prompts.",
  messages: "Future direct and group communication."
};
