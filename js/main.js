document.addEventListener("DOMContentLoaded", () => {
  // FILTROS DE PROYECTOS
  const filterButtons = document.querySelectorAll(".project-filter");
  const projectCards = document.querySelectorAll(
    ".projects-page-section .project-card"
  );

  if (filterButtons.length && projectCards.length) {
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
  }

  // CARRUSEL DE PROYECTO
  const slider = document.querySelector(".project-slider");

  if (slider) {
    const slides = slider.querySelectorAll(".project-slide");
    const previousButton = slider.querySelector(".project-slider-prev");
    const nextButton = slider.querySelector(".project-slider-next");
    const currentCounter = slider.querySelector("#current-slide");
    const totalCounter = slider.querySelector("#total-slides");

    if (slides.length && previousButton && nextButton) {
      let currentSlide = 0;

      if (totalCounter) {
        totalCounter.textContent = slides.length;
      }

      function showSlide(newIndex) {
        slides[currentSlide].classList.remove("is-active");

        if (newIndex < 0) {
          currentSlide = slides.length - 1;
        } else if (newIndex >= slides.length) {
          currentSlide = 0;
        } else {
          currentSlide = newIndex;
        }

        slides[currentSlide].classList.add("is-active");

        if (currentCounter) {
          currentCounter.textContent = currentSlide + 1;
        }
      }

      previousButton.addEventListener("click", (event) => {
        event.preventDefault();
        showSlide(currentSlide - 1);
        event.currentTarget.blur();
      });

      nextButton.addEventListener("click", (event) => {
        event.preventDefault();
        showSlide(currentSlide + 1);
        event.currentTarget.blur();
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          showSlide(currentSlide - 1);
        }

        if (event.key === "ArrowRight") {
          showSlide(currentSlide + 1);
        }
      });
    }
  }
});
