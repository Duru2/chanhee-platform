export type BrandHub = {
  slug: string;
  title: string;
  label: string;
  description: string;
  audienceSignal: string;
  href: string;
  items: string[];
};

export type ProofCard = {
  label: string;
  value: string;
  detail: string;
  href: string;
};

export type RecruiterQuestion = {
  question: string;
  answerPath: string;
};

export const brandPositioning = {
  name: "Chanhee Lee",
  headline: "Software Engineering Student · AI Builder · Full-Stack Developer",
  promise:
    "A personal ecosystem where development, YouTube, writing, English study, life in Australia, and visitor Q&A connect into one visible growth record.",
  visitorFeeling:
    "This person keeps learning, building, reflecting, and turning the process into public value."
};

export const proofCards: ProofCard[] = [
  {
    label: "Education",
    value: "UNSW Sydney",
    detail: "Software Engineering student documenting the learning process.",
    href: "/life"
  },
  {
    label: "Builder Proof",
    value: "Projects + AI",
    detail: "Full-stack builds, RAG experiments, system design notes, and decision logs.",
    href: "/dev"
  },
  {
    label: "Content Engine",
    value: "YouTube + Writing",
    detail: "Videos, essays, reviews, Bible study, reading logs, and learning reflections.",
    href: "/youtube"
  },
  {
    label: "Professional Signal",
    value: "GitHub + LinkedIn",
    detail: "Recruiter-ready proof, project links, architecture notes, and contact paths.",
    href: "/about"
  }
];

export const brandHubs: BrandHub[] = [
  {
    slug: "dev",
    title: "Dev",
    label: "Developer portfolio",
    description:
      "Projects, tech blog, dev logs, system design, AI, and software engineering notes.",
    audienceSignal:
      "Recruiters and developer peers should quickly see skill, judgment, and shipping habits.",
    href: "/dev",
    items: ["Projects", "Tech Blog", "Dev Logs", "System Design", "AI / Software Engineering"]
  },
  {
    slug: "youtube",
    title: "YouTube",
    label: "Content archive",
    description:
      "Video library, episode notes, highlights, shorts, transcripts, and related posts.",
    audienceSignal:
      "Subscribers should move from video to deeper notes, projects, and essays.",
    href: "/youtube",
    items: ["All Videos", "Episodes", "Highlights", "Shorts", "Transcript Notes"]
  },
  {
    slug: "writing",
    title: "Writing",
    label: "Thinking shelf",
    description:
      "Movie reviews, song reviews, anime reviews, Bible study, essays, and reading logs.",
    audienceSignal:
      "Visitors should understand Chanhee's taste, values, communication style, and reflection depth.",
    href: "/writing",
    items: ["Movie Reviews", "Song Reviews", "Anime Reviews", "Bible Study", "Essays", "Reading Logs"]
  },
  {
    slug: "pte",
    title: "PTE / English",
    label: "Study cockpit",
    description:
      "Study records, score tracking, exam reviews, English expressions, and speaking/writing templates.",
    audienceSignal:
      "Learners should see repeatable study systems and practical templates.",
    href: "/pte",
    items: ["Study Logs", "Exam Reviews", "Score Tracking", "English Expressions", "Templates"]
  },
  {
    slug: "life",
    title: "Life Graph",
    label: "Growth timeline",
    description:
      "Australia study abroad, UNSW life, part-time work, internships, job preparation, and growth records.",
    audienceSignal:
      "Recruiters and friends should see the person behind the portfolio.",
    href: "/life",
    items: ["Australia", "UNSW", "Part-Time Work", "Internships", "Job Prep", "Growth Records"]
  },
  {
    slug: "board",
    title: "Board",
    label: "Lightweight fan cafe",
    description:
      "Visitor posts, Q&A, guestbook-style messages, and operator replies.",
    audienceSignal:
      "Community should feel operator-centered and warm, not like a generic forum.",
    href: "/board",
    items: ["Visitor Posts", "Q&A", "Guestbook", "Operator Replies"]
  }
];

export const recruiterQuestions: RecruiterQuestion[] = [
  {
    question: "What has Chanhee built?",
    answerPath: "/dev"
  },
  {
    question: "How does Chanhee think about architecture and tradeoffs?",
    answerPath: "/dev/system-design"
  },
  {
    question: "What is Chanhee learning right now?",
    answerPath: "/now"
  },
  {
    question: "How does Chanhee communicate and document growth?",
    answerPath: "/journey"
  }
];
