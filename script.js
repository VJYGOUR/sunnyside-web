const hamEl = document.querySelector(".hamburger");
const aboutEl = document.querySelector(".about-section");
const aboveEl = document.querySelector(".above-section");
hamEl.addEventListener("click", function () {
  if (aboutEl.style.display === "none") {
    aboutEl.style.display = "flex";
    aboveEl.style.display = "block";
  } else {
    aboutEl.style.display = "none";
    aboveEl.style.display = "none";
  }
});
