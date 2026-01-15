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

gsap.fromTo(".logo-name" , {
    y:50,
    opacity:0,
},{
    y:0,
    opacity:1,
    duration:2,
    delay:1.5,
}
);

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scrollBtn");

  if (!btn) {
    console.error("scrollBtn not found");
    return;
  }

  btn.addEventListener("click", () => {
    window.scrollBy({
      top: 740,
      behavior: "smooth"
    });
  });
});





