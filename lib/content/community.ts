export type CommunityRoom = {
  id: string;
  name: string;
  type: "study" | "book_club" | "career" | "project" | "research" | "faith";
  description: string;
  firstRitual: string;
  status: "future" | "seed";
};

export type BuilderGarden = {
  id: string;
  owner: string;
  title: string;
  focus: string;
  modules: string[];
  promise: string;
};

export const communityRooms: CommunityRoom[] = [
  {
    id: "study-room",
    name: "Study Room",
    type: "study",
    description:
      "A calm space for students to share weekly study goals, routines, resources, and honest progress.",
    firstRitual: "Post one goal, one obstacle, and one tiny next action every Monday.",
    status: "seed"
  },
  {
    id: "book-club",
    name: "Book Club",
    type: "book_club",
    description:
      "A reading room where people connect book notes to projects, habits, faith, and career decisions.",
    firstRitual: "Share one quote, one interpretation, and one action you will try.",
    status: "future"
  },
  {
    id: "builder-circle",
    name: "Builder Circle",
    type: "project",
    description:
      "A build-in-public room for shipping small products, extensions, AI experiments, and portfolio projects.",
    firstRitual: "Share what changed since the last build log and what you will ship next.",
    status: "seed"
  },
  {
    id: "career-room",
    name: "Career Room",
    type: "career",
    description:
      "A supportive room for internships, resumes, interviews, startup lessons, and career reflection.",
    firstRitual: "Post one lesson from a real application, conversation, or rejection.",
    status: "future"
  },
  {
    id: "research-desk",
    name: "Research Desk",
    type: "research",
    description:
      "A thesis and paper-reading space for claims, evidence, methods, experiments, and open questions.",
    firstRitual: "Summarize one paper as claim, evidence, limitation, and next question.",
    status: "future"
  },
  {
    id: "faith-and-formation",
    name: "Faith and Formation",
    type: "faith",
    description:
      "A quiet reflection room for purpose, discipline, service, gratitude, and becoming a thoughtful builder.",
    firstRitual: "Share one practice that helped you become more patient, grounded, or useful.",
    status: "future"
  }
];

export const builderGardens: BuilderGarden[] = [
  {
    id: "chanhee",
    owner: "Chanhee",
    title: "Chanhee OS",
    focus: "AI, software engineering, UNSW life, books, thesis, faith, and building in public.",
    modules: ["Blog", "Books", "Writing Hub", "PTE Hub", "Projects", "Thesis", "YouTube", "AI Assistant"],
    promise:
      "Follow the process of one person learning, building, reflecting, and becoming useful over time."
  },
  {
    id: "future-builder",
    owner: "Future Builder",
    title: "My Growth Garden",
    focus: "A personal learning archive for another student, creator, developer, or reader.",
    modules: ["Now Page", "Learning Notes", "Project Logs", "Reading Shelf", "Community Rooms"],
    promise:
      "Turn ordinary learning into a public trail that helps someone else begin."
  }
];
