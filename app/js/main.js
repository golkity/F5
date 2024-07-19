
const swiper = new Swiper('.mySwiper', {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".Button-next-slide",
        prevEl: ".Button-previous-slide",
    },
});


  
let sliderBlock = document.querySelector ('.mySwiper');
sliderBlock.addEventListener ("mouseenter", function (e) {
    swiper.params.autoplay.disableOnInteraction = false;
    swiper.autoplay.stop();
}) ;
sliderBlock.addEventListener ("mouseleave", function (e) {
    swiper.params.autoplay.delay = 2500;
    swiper.autoplay.start();
}) ;



