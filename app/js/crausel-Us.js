const swprA = new Swiper('.AbUsswiper ', {
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerView: "auto",
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".Button-next-slide-US",
        prevEl: ".Button-previous-slide-US",
    },
});
let slA = document.querySelector ('.AbUsswiper ');

slA.addEventListener ("mouseenter", function (e) {
    swprA .params.autoplay.disableOnInteraction = false;
    swprA .autoplay.stop();
}) ;
slA.addEventListener ("mouseleave", function (e) {
    swprA .params.autoplay.delay = 2500;
    swprA .autoplay.start();
}) ;