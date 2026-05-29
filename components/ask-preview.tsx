"use client";

import { useState } from "react";

type AskResponse = {
  answer: string;
  citations: Array<{
    documentId: string;
    title: string;
    source: string;
  }>;
  mode: string;
};

const exampleQuestions = [
  "How should I reflect on what I learned this week?",
  "Give me a PTE speaking practice structure.",
  "How can I turn a project update into a story?"
];

export function AskPreview() {
  const [question, setQuestion] = useState(exampleQuestions[0]);
  const [response, setResponse] = useState<AskResponse | null>(null);
  const [loading, setLoading] = useState(false);

  async function askChanheeOS(nextQuestion = question) {
    setQuestion(nextQuestion);
    setLoading(true);

    try {
      const result = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: nextQuestion })
      });

      setResponse((await result.json()) as AskResponse);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band pt-28">
        <a className="font-display font-black text-leaf-dark" href="/">
          Chanhee OS
        </a>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-label">AI companion</p>
            <h1 className="font-display text-[3.2rem] font-black leading-none md:text-[5.2rem]">
              Ask Chanhee AI
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              A local seed-based RAG preview. It currently answers from the Writing
              Hub and PTE Hub sample knowledge cards, then returns citations.
            </p>
          </div>
          <div className="warm-card overflow-hidden">
            <div className="border-b border-ink/10 bg-cream/70 p-5">
              <label className="section-label" htmlFor="question">
                Question
              </label>
              <textarea
                id="question"
                className="min-h-32 w-full resize-none rounded-lg border border-ink/15 bg-white/60 p-4 leading-7 outline-none focus:border-leaf-dark"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
              />
              <div className="mt-3 flex flex-wrap gap-2">
                {exampleQuestions.map((item) => (
                  <button
                    key={item}
                    className="rounded-full border border-leaf/20 bg-leaf/10 px-3 py-2 text-sm font-bold text-leaf-dark"
                    onClick={() => askChanheeOS(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                className="mt-5 rounded-full bg-leaf-dark px-5 py-3 font-extrabold text-cream disabled:opacity-60"
                disabled={loading}
                onClick={() => askChanheeOS()}
              >
                {loading ? "Reading the garden..." : "Ask the archive"}
              </button>
            </div>
            <div className="p-5">
              {response ? (
                <div className="grid gap-5">
                  <div>
                    <p className="section-label">Answer</p>
                    <p className="text-lg leading-8">{response.answer}</p>
                  </div>
                  <div>
                    <p className="section-label">Citations</p>
                    <div className="grid gap-2">
                      {response.citations.map((citation) => (
                        <div key={`${citation.documentId}-${citation.title}`} className="rounded-lg bg-honey/10 p-3 text-sm">
                          <strong>{citation.title}</strong>
                          <span className="ml-2 text-muted">({citation.source})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-bold text-muted">Mode: {response.mode}</p>
                </div>
              ) : (
                <p className="leading-8 text-muted">
                  Ask a question to see the first grounded-answer preview. This
                  will later use OpenAI embeddings and a vector database.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
