const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".video-card");
const output = document.querySelector("[data-prompt-output]");
const journalButton = document.querySelector("[data-journal-prompt]");
const pteButton = document.querySelector("[data-pte-prompt]");

const journalPrompts = [
  "What did I learn this week that felt small today but might compound over a year?",
  "Where did I avoid difficulty, and what would a kinder next attempt look like?",
  "What did building teach me that studying alone could not have taught me?"
];

const ptePrompts = [
  "Speak for 40 seconds about a useful habit. Record once, then improve fluency and structure.",
  "Write one high-scoring sentence using a cause-effect structure and one academic connector.",
  "Pick five vocabulary words and use each in a sentence about university life in Australia."
];

function showRandomPrompt(prompts) {
  if (!output) return;

  const index = Math.floor(Math.random() * prompts.length);
  output.textContent = prompts[index];
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    cards.forEach((card) => {
      const visible = selected === "All" || card.dataset.category === selected;
      card.hidden = !visible;
    });
  });
});

journalButton?.addEventListener("click", () => showRandomPrompt(journalPrompts));
pteButton?.addEventListener("click", () => showRandomPrompt(ptePrompts));
