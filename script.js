document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     LOADING ANIMATION
  ====================== */
  gsap.fromTo(".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      duration: 1.5,
      delay: 3.5,
      onComplete: () => {
        document.querySelector(".loading-page").style.display = "none";
      }
    }
  );

  gsap.fromTo(".logo-name",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 1.5
    }
  );

  /* =====================
     MOBILE MENU
  ====================== */
  const menuToggle = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }

  /* =====================
     SLIDER
  ====================== */
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  if (nextBtn && prevBtn && slides.length) {
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });
  }

  /* =====================
     SCROLL BUTTON
  ====================== */
  const scrollBtn = document.getElementById("scrollBtn");

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollBy({
        top: 740,
        behavior: "smooth"
      });
    });

    gsap.fromTo("#scrollBtn",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power3.out",
        delay: 4.5
      }
    );
  }

});
