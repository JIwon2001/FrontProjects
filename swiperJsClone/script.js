const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  effect: "cards",
  cardsEffect: {
    perSlideOffset: 5,
    perSlideRotate: 2,
    rotate: true,
    slideShadows: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  speed: 400,
  grabCursor: true,
});
function changeLogoColor() {
  const gitCatLogo = document.querySelector(".gitCat .gitCat_logo");
  const gitCatBox = document.querySelector(".gitCat");

  gitCatBox.addEventListener("mouseenter", () => {
    gitCatLogo.style.backgroundImage = "url(img/gitCat_color.svg)";
  });

  gitCatBox.addEventListener("mouseleave", () => {
    gitCatLogo.style.backgroundImage = "url(img/gitCat.svg)";
  });
}

changeLogoColor();
