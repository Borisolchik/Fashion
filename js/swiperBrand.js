new Swiper('.image-slider1', {
    speed: 700,
    spaceBetween: 30,
    navigation: {
        nextEl: '.image-slider1 .swiper-button-next',
        prevEl: '.image-slider1 .swiper-button-prev',
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true
    }, 
    // autoHeight: true,
    // loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    slidesPerView: 'auto',
    slidesPerGroup: 1,
});

new Swiper('.image-slider2', {
    speed: 700,
    spaceBetween: 22,
    slidesPerView: 3,
    navigation: {
        nextEl: '.image-slider2 .swiper-button-next',
        prevEl: '.image-slider2 .swiper-button-prev',
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true
    }, 
    // autoHeight: true,
    // loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    // slidesPerView: 'auto',
    slidesPerGroup: 1,
});


$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    // speed: 1000,
    prevArrow: '<div class="slick-prev"><img src="../assets/images/icons/arr-1.svg" alt=""></div>',
    nextArrow: '<div class="slick-next"><img src="../assets/images/icons/arr-2.svg" alt=""></div>',
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1
            }
        },
    ]
});
