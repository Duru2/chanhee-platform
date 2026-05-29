const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".video-card");

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
