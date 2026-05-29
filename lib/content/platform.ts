export type Hub = {
  title: string;
  eyebrow: string;
  description: string;
  path: string;
  status: "active" | "seed" | "future";
};

export type Video = {
  title: string;
  category: "AI" | "Software Engineering" | "UNSW" | "Career" | "Books" | "Faith";
  description: string;
  code: string;
};

export type RoadmapItem = {
  phase: string;
  title: string;
  description: string;
};

export const identitySignals = [
  "UNSW Sydney Software Engineering student",
  "AI builder",
  "Full-stack developer",
  "Research student",
  "Startup contributor",
  "Content creator",
  "Lifelong learner"
];

export const hubs: Hub[] = [
  {
    title: "Writing Hub",
    eyebrow: "Reflection systems",
    description:
      "Writing frameworks, journaling structures, storytelling methods, and communication notes become guided practice paths.",
    path: "/writing",
    status: "active"
  },
  {
    title: "PTE Hub",
    eyebrow: "Study cockpit",
    description:
      "Vocabulary, speaking templates, writing templates, exam strategies, and study notes become interactive drills.",
    path: "/pte",
    status: "active"
  },
  {
    title: "Books",
    eyebrow: "Reading trails",
    description:
      "Book notes connect ideas to projects, faith, productivity, research, and career decisions.",
    path: "/books",
    status: "seed"
  },
  {
    title: "Thesis",
    eyebrow: "Research in progress",
    description:
      "Paper notes, weekly updates, experiments, methods, and open questions become a public research archive.",
    path: "/thesis",
    status: "seed"
  },
  {
    title: "Projects",
    eyebrow: "Build in public",
    description:
      "Project logs, architecture decisions, bugs, releases, and demos show how ideas become systems.",
    path: "/projects",
    status: "active"
  },
  {
    title: "Community",
    eyebrow: "Future rooms",
    description:
      "Profiles, study groups, discussions, book clubs, and career groups come after the personal OS has gravity.",
    path: "/community",
    status: "future"
  }
];

export const videos: Video[] = [
  {
    title: "Building Ask Chanhee AI",
    category: "AI",
    description:
      "How notes, posts, videos, and projects become an answerable personal knowledge base.",
    code: "AI"
  },
  {
    title: "Shipping a Full-Stack Project",
    category: "Software Engineering",
    description:
      "Architecture, bugs, tradeoffs, and habits that make shipping possible.",
    code: "SE"
  },
  {
    title: "A Week at UNSW Sydney",
    category: "UNSW",
    description:
      "Lectures, assignments, deep work, research, and student life in Australia.",
    code: "UNSW"
  },
  {
    title: "Books That Changed How I Build",
    category: "Books",
    description:
      "Reading notes connected to productivity, faith, career, and technical depth.",
    code: "BOOK"
  },
  {
    title: "From Student to Builder",
    category: "Career",
    description:
      "Career reflections, internships, portfolio choices, and lessons from startup work.",
    code: "CAREER"
  },
  {
    title: "Building With Patience",
    category: "Faith",
    description:
      "Thoughtful reflections on discipline, purpose, gratitude, and becoming useful.",
    code: "FAITH"
  }
];

export const roadmap: RoadmapItem[] = [
  {
    phase: "01",
    title: "Digital Home",
    description:
      "Warm identity, living homepage, content map, and personal OS language."
  },
  {
    phase: "02",
    title: "Knowledge Hubs",
    description:
      "Writing Hub, PTE Hub, books, thesis, projects, and blog as interactive learning spaces."
  },
  {
    phase: "03",
    title: "Content Engine",
    description:
      "YouTube, newsletter, blog, extensions, and side projects connected back to the OS."
  },
  {
    phase: "04",
    title: "AI Companion",
    description:
      "RAG-powered assistants for books, career, learning, writing, PTE, and research."
  },
  {
    phase: "05",
    title: "Community Rooms",
    description:
      "Profiles, comments, discussions, study groups, book clubs, and career groups."
  },
  {
    phase: "06",
    title: "Builder Gardens",
    description:
      "Other people create their own growth spaces, learning archives, and public journeys."
  }
];
