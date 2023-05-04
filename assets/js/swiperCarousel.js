const mainSectionCarousel = new Swiper('.main-section__carousel', {
    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },
    loop: true,
    slidesPerView: 'auto',

    breakpoints: {
        // xs - width < 576px
        0: {
            loopedSlides: 2,
            spaceBetween: 8,
            slidesPerGroup: 2,
        },
        // sm - width >= 576px
        576: {
            loopedSlides: 4,
            spaceBetween: 8,
            slidesPerGroup: 4,
        },
        // md - width >= 768px
        768: {
            loopedSlides: 4,
            spaceBetween: 12,
            slidesPerGroup: 4,
        },
        // lg - width >= 992px
        992: {
            loopedSlides: 5,
            spaceBetween: 16,
            slidesPerGroup: 5,

        },
        // xl - width >= 1200px
        1200: {
            loopedSlides: 6,
            spaceBetween: 20,
            slidesPerGroup: 6,
        },
        // xxl - width >= 1400px
        1400: {
        },
    },

    speed: 1300,
    navigation: {
        nextEl: '.main-section__carousel-btn-next',
        prevEl: '.main-section__carousel-btn-prev',
    },
});

const mainSectionCarouselInfoPage = new Swiper('.main-section__carousel--same-topic', {
    autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },
    loop: true,
    slidesPerView: 'auto',
    loopedSlides: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,

    breakpoints: {
        // xs - width < 576px
        0: {
            spaceBetween: 8,
        },
        // sm - width >= 576px
        576: {
            spaceBetween: 8,
        },
        // md - width >= 768px
        768: {
            spaceBetween: 12,
        },
    },

    speed: 650,
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
    loop: false,
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