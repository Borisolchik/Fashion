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

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    prevArrow: '<div class="slick-prev"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M0.0143415 8.60912L15.0267 16.8824L15.0019 0.290927L0.0143415 8.60912Z" fill="#D2AD95"/>\n' +
        '</svg>\n</div>',
    nextArrow: '<div class="slick-next"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M15.014 8.60912L0.00157572 16.8824L0.0264159 0.290927L15.014 8.60912Z" fill="#D2AD95"/>\n' +
        '</svg>\n</div>',
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1
            }
        },
    ]
});
