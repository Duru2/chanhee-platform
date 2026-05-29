export type LearningMode = "framework" | "reflection" | "template" | "drill" | "strategy";

export type LearningCard = {
  id: string;
  hub: "writing" | "pte";
  mode: LearningMode;
  title: string;
  summary: string;
  steps: string[];
  prompt: string;
  example: string;
  tags: string[];
};

export const writingCards: LearningCard[] = [
  {
    id: "writing-reflection-loop",
    hub: "writing",
    mode: "reflection",
    title: "The Weekly Growth Loop",
    summary:
      "A reflection system for turning ordinary weeks into visible learning progress.",
    steps: [
      "Name one thing you tried.",
      "Name what felt harder than expected.",
      "Extract one lesson that can help someone else.",
      "Choose one small next experiment."
    ],
    prompt:
      "What did this week teach me that I could only learn by actually trying?",
    example:
      "I thought the hard part was coding the feature, but the hard part was deciding what not to build yet.",
    tags: ["reflection", "journaling", "growth"]
  },
  {
    id: "writing-story-arc",
    hub: "writing",
    mode: "framework",
    title: "Build-in-Public Story Arc",
    summary:
      "A simple storytelling structure for project updates that feel human instead of performative.",
    steps: [
      "Start with the honest situation.",
      "Show the tension or uncertainty.",
      "Explain what you tried.",
      "Share the lesson and the next move."
    ],
    prompt:
      "What changed between the moment I started this project and where I am now?",
    example:
      "I started with a dashboard idea, but the real product became a learning archive that explains why the work matters.",
    tags: ["storytelling", "projects", "content"]
  },
  {
    id: "writing-clear-communication",
    hub: "writing",
    mode: "template",
    title: "Clear Communication Note",
    summary:
      "A reusable structure for explaining an idea, decision, or technical tradeoff.",
    steps: [
      "State the decision in one sentence.",
      "Explain the context.",
      "List the tradeoff.",
      "Say what you will watch next."
    ],
    prompt:
      "What is the clearest version of this idea if I had only five sentences?",
    example:
      "I chose a static prototype first because the emotional direction mattered before the database schema.",
    tags: ["communication", "writing", "decisions"]
  }
];

export const pteCards: LearningCard[] = [
  {
    id: "pte-speaking-template",
    hub: "pte",
    mode: "template",
    title: "Describe Image Speaking Template",
    summary:
      "A stable speaking pattern for answering image description tasks with fluency and structure.",
    steps: [
      "Introduce the image type.",
      "Describe the main trend or feature.",
      "Mention one supporting detail.",
      "Finish with a simple conclusion."
    ],
    prompt:
      "Describe a chart about international students in Australia using a 35-second answer.",
    example:
      "The image shows a chart about international students. Overall, the number increases steadily, with the highest point in the final year. One notable detail is that growth becomes faster after the middle period. In conclusion, the chart shows a clear upward trend.",
    tags: ["speaking", "template", "fluency"]
  },
  {
    id: "pte-writing-sentence",
    hub: "pte",
    mode: "drill",
    title: "Academic Sentence Builder",
    summary:
      "A writing drill for producing concise, high-scoring academic sentences.",
    steps: [
      "Choose one topic.",
      "Use one cause-effect connector.",
      "Add one specific academic noun.",
      "Check grammar and clarity."
    ],
    prompt:
      "Write one sentence about how technology affects university learning.",
    example:
      "Because digital tools improve access to resources, students can develop stronger independent learning habits.",
    tags: ["writing", "grammar", "academic"]
  },
  {
    id: "pte-vocabulary-loop",
    hub: "pte",
    mode: "strategy",
    title: "Vocabulary Conversion Loop",
    summary:
      "A study strategy for turning vocabulary lists into usable speaking and writing language.",
    steps: [
      "Pick five words.",
      "Write one personal sentence for each word.",
      "Speak the sentences out loud.",
      "Reuse two words in a new answer."
    ],
    prompt:
      "Use the words efficient, adapt, evidence, significant, and maintain in sentences about student life.",
    example:
      "Students need efficient study systems to maintain progress during a busy semester.",
    tags: ["vocabulary", "speaking", "study"]
  }
];

export const learningCards = [...writingCards, ...pteCards];
