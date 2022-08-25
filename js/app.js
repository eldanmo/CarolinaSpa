/*window.Swiper = new Swiper({
    el: '.slider__contenedor',
    slideClass: 'slider__slide',
    createElements: true,
    autoplay: {
        delay: 5000
    },
    loop: true,
    pagination: true,
    navigation: true,
});*/

var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    autoplay: {
        delay: 3000
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
});