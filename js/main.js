document.addEventListener("DOMContentLoaded", () => {

  // =========================================================
  // FILTROS DE PROYECTOS
  // =========================================================

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

          projectCard.classList.toggle(
            "is-hidden",
            !shouldShow
          );
        });
      });
    });
  }


  // =========================================================
  // CARRUSEL MANUAL DE LAS FICHAS DE PROYECTO
  // =========================================================

  const projectSlider = document.querySelector(".project-slider");

  if (projectSlider) {
    const slides = projectSlider.querySelectorAll(".project-slide");
    const previousButton =
      projectSlider.querySelector(".project-slider-prev");
    const nextButton =
      projectSlider.querySelector(".project-slider-next");

    let currentSlide = 0;

    function showProjectSlide(newIndex) {
      if (!slides.length) {
        return;
      }

      slides[currentSlide].classList.remove("is-active");

      if (newIndex < 0) {
        currentSlide = slides.length - 1;
      } else if (newIndex >= slides.length) {
        currentSlide = 0;
      } else {
        currentSlide = newIndex;
      }

      slides[currentSlide].classList.add("is-active");
    }

    if (slides.length && previousButton && nextButton) {
      previousButton.addEventListener("click", (event) => {
        event.preventDefault();

        showProjectSlide(currentSlide - 1);

        event.currentTarget.blur();
      });

      nextButton.addEventListener("click", (event) => {
        event.preventDefault();

        showProjectSlide(currentSlide + 1);

        event.currentTarget.blur();
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          showProjectSlide(currentSlide - 1);
        }

        if (event.key === "ArrowRight") {
          showProjectSlide(currentSlide + 1);
        }
      });
    }
  }


  // =========================================================
  // CARRUSEL AUTOMÁTICO DE LA PORTADA
  // =========================================================

  const homeSlider = document.querySelector(".home-slider");

  if (homeSlider) {
    const homeSlides = homeSlider.querySelectorAll(".home-slide");

    if (homeSlides.length > 1) {
      let currentHomeSlide = 0;

      function showNextHomeSlide() {
        homeSlides[currentHomeSlide].classList.remove("is-active");

        currentHomeSlide =
          (currentHomeSlide + 1) % homeSlides.length;

        homeSlides[currentHomeSlide].classList.add("is-active");
      }

      setInterval(showNextHomeSlide, 4500);
    }
  }

});
});
    }
  }
});
