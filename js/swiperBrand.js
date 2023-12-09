$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
                slidesToShow: 1,
                arrows : false
            }
        },
    ]
});

$('.multiple-items2').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
                slidesToShow: 2,
                speed: 1000,
                arrows : false,
                centerMode: true,
                centerPadding: '50px',
            }
        },
    ]
});
