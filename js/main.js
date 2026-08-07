document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".project-filter");
  const projectCards = document.querySelectorAll(
    ".projects-page-section .project-card"
  );

  if (!filterButtons.length || !projectCards.length) {
    return;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((filterButton) => {
        const isSelected = filterButton === button;

        filterButton.classList.toggle("is-active", isSelected);
        filterButton.setAttribute(
          "aria-pressed",
          isSelected ? "true" : "false"
        );
      });

      projectCards.forEach((projectCard) => {
        const projectCategory = projectCard.dataset.category;
        const shouldShow =
          selectedFilter === "todos" ||
          projectCategory === selectedFilter;

        projectCard.classList.toggle("is-hidden", !shouldShow);
      });
      document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".project-slide");
  const previousButton = document.querySelector(".project-slider-prev");
  const nextButton = document.querySelector(".project-slider-next");
  const counter = document.querySelector("#current-slide");

  if (!slides.length || !previousButton || !nextButton) {
    return;
  }

  let currentSlide = 0;

  const showSlide = (index) => {
    slides[currentSlide].classList.remove("is-active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("is-active");

    if (counter) {
      counter.textContent = currentSlide + 1;
    }
  };

  previousButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      showSlide(currentSlide - 1);
    }

    if (event.key === "ArrowRight") {
      showSlide(currentSlide + 1);
    }
  });
});
