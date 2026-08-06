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
    });
  });
});
