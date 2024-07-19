const swiperBlog = new Swiper('.BlogSwiper', {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".Button-next-slide-blog",
        prevEl: ".Button-previous-slide-blog",
    },
});

  
let sliderBlog = document.querySelector ('.BlogSwiper');

sliderBlog.addEventListener ("mouseenter", function (e) {
    swiperBlog.params.autoplay.disableOnInteraction = false;
    swiperBlog.autoplay.stop();
}) ;
sliderBlog.addEventListener ("mouseleave", function (e) {
    swiperBlog.params.autoplay.delay = 2500;
    swiperBlog.autoplay.start();
}) ;







