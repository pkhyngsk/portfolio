document.addEventListener("DOMContentLoaded", () => {
  const mainSwiper = new Swiper(".mainSwiper", {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  const sectionSwiper = new Swiper(".sectionSwiper", {
    direction: "vertical",
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});