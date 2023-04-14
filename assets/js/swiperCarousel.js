const mainSectionCarousel = new Swiper('.main-section__carousel', {
    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },
    loop: true,
    slidesPerView: 'auto',
    loopedSlides: 6,
    spaceBetween: 20,
    slidesPerGroup: 6,

    breakpoints: {
        // TODO
    },

    speed: 1300,
    navigation: {
        nextEl: '.main-section__carousel-btn-next',
        prevEl: '.main-section__carousel-btn-prev',
    },
});

const mainSectionCarouselInfoPage = new Swiper('.main-section__carousel--info-page', {
    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },
    loop: true,
    slidesPerView: 'auto',
    loopedSlides: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,

    breakpoints: {
        // TODO
    },

    speed: 1450,
    navigation: {
        nextEl: '.main-section__carousel-btn-next',
        prevEl: '.main-section__carousel-btn-prev',
    },
});

const mainSidebarSectionCarousel = new Swiper('.main-sidebar-section__carousel', {
    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    loop: true,
    breakpoints: {
        // TODO
    },
    speed: 600,
    pagination: {
        el: ".main-sidebar-section__carousel-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: '.main-sidebar-section__carousel-btn-next',
        prevEl: '.main-sidebar-section__carousel-btn-prev',
    },
});