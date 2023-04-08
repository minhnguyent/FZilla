'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const popularMovies = [
    {
        titleEn: 'Avatar: The Way of Water',
        titleVn: 'Avatar: Dòng Chảy Của Nước',
        thumb: './assets/img/film/popular/avatar-2.jpg',
        rating: '7.7',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=o5F8MOz_IDw',
    },
    {
        titleEn: 'Ant-Man and the Wasp: Quantumania',
        titleVn: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
        thumb: './assets/img/film/popular/ant-man-3.jpg',
        rating: '6.4',
        year: '2023',
        trailerUrl: 'https://www.youtube.com/watch?v=ZlNFpri-Y40',
    },
    {
        titleEn: 'Shazam! Fury of the Gods',
        titleVn: 'Shazam! Cơn thịnh nộ của các vị thần',
        thumb: './assets/img/film/popular/shazam-fury-of-the-gods.jpg',
        rating: '6.5',
        year: '2023',
        trailerUrl: 'https://www.youtube.com/watch?v=Zi88i4CpHe4',
    },
    {
        titleEn: 'Disenchanted',
        titleVn: 'Chuyện Thần Tiên Ở New York 2',
        thumb: './assets/img/film/popular/disenchanted.jpg',
        rating: '5.6',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=dRuwjZJ-DQw',
    },
    {
        titleEn: 'Shang-Chi and the Legend of the Ten Rings',
        titleVn: 'Shang-Chi Và Huyền Thoại Thập Luân',
        thumb: './assets/img/film/popular/shang-chi.jpg',
        rating: '7.4',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=8YjFbMbfXaQ',
    },
    {
        titleEn: 'Loki',
        titleVn: 'Loki',
        thumb: './assets/img/film/popular/loki.jpg',
        rating: '8.2',
        year: '2021',
        trailerUrl: 'https://www.youtube.com/watch?v=nW948Va-l10',
    },
    {
        titleEn: 'Peaky Blinders (Season 5)',
        titleVn: 'Bóng ma Anh Quốc (Phần 5)',
        thumb: './assets/img/film/popular/peaky-blinders-5.jpg',
        rating: '',
        year: '2019',
        trailerUrl: 'https://www.youtube.com/watch?v=Ruyl8_PT_y8',
    },
    {
        titleEn: 'Black Adam',
        titleVn: 'Black Adam',
        thumb: './assets/img/film/popular/black-adam.jpg',
        rating: '6.3',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=X0tOpBuYasI',
    },

    // duplicate
    {
        titleEn: 'Avatar: The Way of Water',
        titleVn: 'Avatar: Dòng Chảy Của Nước',
        thumb: './assets/img/film/popular/avatar-2.jpg',
        rating: '7.7',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=o5F8MOz_IDw',
    },
    {
        titleEn: 'Ant-Man and the Wasp: Quantumania',
        titleVn: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
        thumb: './assets/img/film/popular/ant-man-3.jpg',
        rating: '6.4',
        year: '2023',
        trailerUrl: 'https://www.youtube.com/watch?v=ZlNFpri-Y40',
    },
    {
        titleEn: 'Shazam! Fury of the Gods',
        titleVn: 'Shazam! Cơn thịnh nộ của các vị thần',
        thumb: './assets/img/film/popular/shazam-fury-of-the-gods.jpg',
        rating: '6.5',
        year: '2023',
        trailerUrl: 'https://www.youtube.com/watch?v=Zi88i4CpHe4',
    },
    {
        titleEn: 'Disenchanted',
        titleVn: 'Chuyện Thần Tiên Ở New York 2',
        thumb: './assets/img/film/popular/disenchanted.jpg',
        rating: '5.6',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=dRuwjZJ-DQw',
    },
    {
        titleEn: 'Shang-Chi and the Legend of the Ten Rings',
        titleVn: 'Shang-Chi Và Huyền Thoại Thập Luân',
        thumb: './assets/img/film/popular/shang-chi.jpg',
        rating: '7.4',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=8YjFbMbfXaQ',
    },
    {
        titleEn: 'Loki',
        titleVn: 'Loki',
        thumb: './assets/img/film/popular/loki.jpg',
        rating: '8.2',
        year: '2021',
        trailerUrl: 'https://www.youtube.com/watch?v=nW948Va-l10',
    },
    {
        titleEn: 'Peaky Blinders (Season 5)',
        titleVn: 'Bóng ma Anh Quốc (Phần 5)',
        thumb: './assets/img/film/popular/peaky-blinders-5.jpg',
        rating: '',
        year: '2019',
        trailerUrl: 'https://www.youtube.com/watch?v=Ruyl8_PT_y8',
    },
    {
        titleEn: 'Black Adam',
        titleVn: 'Black Adam',
        thumb: './assets/img/film/popular/black-adam.jpg',
        rating: '6.3',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=X0tOpBuYasI',
    },

    // duplicate
    {
        titleEn: 'Avatar: The Way of Water',
        titleVn: 'Avatar: Dòng Chảy Của Nước',
        thumb: './assets/img/film/popular/avatar-2.jpg',
        rating: '7.7',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=o5F8MOz_IDw',
    },
    {
        titleEn: 'Ant-Man and the Wasp: Quantumania',
        titleVn: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
        thumb: './assets/img/film/popular/ant-man-3.jpg',
        rating: '6.4',
        year: '2023',
        trailerUrl: 'https://www.youtube.com/watch?v=ZlNFpri-Y40',
    },
    {
        titleEn: 'Shazam! Fury of the Gods',
        titleVn: 'Shazam! Cơn thịnh nộ của các vị thần',
        thumb: './assets/img/film/popular/shazam-fury-of-the-gods.jpg',
        rating: '6.5',
        year: '2023',
        trailerUrl: 'https://www.youtube.com/watch?v=Zi88i4CpHe4',
    },
    {
        titleEn: 'Disenchanted',
        titleVn: 'Chuyện Thần Tiên Ở New York 2',
        thumb: './assets/img/film/popular/disenchanted.jpg',
        rating: '5.6',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=dRuwjZJ-DQw',
    },
    {
        titleEn: 'Shang-Chi and the Legend of the Ten Rings',
        titleVn: 'Shang-Chi Và Huyền Thoại Thập Luân',
        thumb: './assets/img/film/popular/shang-chi.jpg',
        rating: '7.4',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=8YjFbMbfXaQ',
    },
    {
        titleEn: 'Loki',
        titleVn: 'Loki',
        thumb: './assets/img/film/popular/loki.jpg',
        rating: '8.2',
        year: '2021',
        trailerUrl: 'https://www.youtube.com/watch?v=nW948Va-l10',
    },
    {
        titleEn: 'Peaky Blinders (Season 5)',
        titleVn: 'Bóng ma Anh Quốc (Phần 5)',
        thumb: './assets/img/film/popular/peaky-blinders-5.jpg',
        rating: '',
        year: '2019',
        trailerUrl: 'https://www.youtube.com/watch?v=Ruyl8_PT_y8',
    },
    {
        titleEn: 'Black Adam',
        titleVn: 'Black Adam',
        thumb: './assets/img/film/popular/black-adam.jpg',
        rating: '6.3',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=X0tOpBuYasI',
    },
];

const hotMovies = [
    {
        titleEn: 'Avatar: The Way of Water',
        titleVn: 'Avatar: Dòng Chảy Của Nước',
        thumb: './assets/img/film/popular/avatar-2.jpg',
        rating: '7.7',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=o5F8MOz_IDw',
    },
    {
        titleEn: 'Ant-Man and the Wasp: Quantumania',
        titleVn: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
        thumb: './assets/img/film/popular/ant-man-3.jpg',
        rating: '6.4',
        year: '2023',
        trailerUrl: 'https://www.youtube.com/watch?v=ZlNFpri-Y40',
    },
    {
        titleEn: 'Shazam! Fury of the Gods',
        titleVn: 'Shazam! Cơn thịnh nộ của các vị thần',
        thumb: './assets/img/film/popular/shazam-fury-of-the-gods.jpg',
        rating: '6.5',
        year: '2023',
        trailerUrl: 'https://www.youtube.com/watch?v=Zi88i4CpHe4',
    },
    {
        titleEn: 'Disenchanted',
        titleVn: 'Chuyện Thần Tiên Ở New York 2',
        thumb: './assets/img/film/popular/disenchanted.jpg',
        rating: '5.6',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=dRuwjZJ-DQw',
    },
    {
        titleEn: 'Shang-Chi and the Legend of the Ten Rings',
        titleVn: 'Shang-Chi Và Huyền Thoại Thập Luân',
        thumb: './assets/img/film/popular/shang-chi.jpg',
        rating: '7.4',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=8YjFbMbfXaQ',
    },
    {
        titleEn: 'Loki',
        titleVn: 'Loki',
        thumb: './assets/img/film/popular/loki.jpg',
        rating: '8.2',
        year: '2021',
        trailerUrl: 'https://www.youtube.com/watch?v=nW948Va-l10',
    },
    {
        titleEn: 'Peaky Blinders (Season 5)',
        titleVn: 'Bóng ma Anh Quốc (Phần 5)',
        thumb: './assets/img/film/popular/peaky-blinders-5.jpg',
        rating: '',
        year: '2019',
        trailerUrl: 'https://www.youtube.com/watch?v=Ruyl8_PT_y8',
    },
    {
        titleEn: 'Black Adam',
        titleVn: 'Black Adam',
        thumb: './assets/img/film/popular/black-adam.jpg',
        rating: '6.3',
        year: '2022',
        trailerUrl: 'https://www.youtube.com/watch?v=X0tOpBuYasI',
    },
];

const trendingMovies = {
    day: [
        {
            titleEn: 'Avatar: The Way of Water',
            titleVn: 'Avatar: Dòng Chảy Của Nước',
            thumb: './assets/img/film/popular/avatar-2.jpg',
            rating: '7.7',
            views: '318',
            year: '2022',
            trailerUrl: 'https://www.youtube.com/watch?v=o5F8MOz_IDw',
        },
        {
            titleEn: 'Ant-Man and the Wasp: Quantumania',
            titleVn: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
            thumb: './assets/img/film/popular/ant-man-3.jpg',
            rating: '6.4',
            views: '232',
            year: '2023',
            trailerUrl: 'https://www.youtube.com/watch?v=ZlNFpri-Y40',
        },
        {
            titleEn: 'Shazam! Fury of the Gods',
            titleVn: 'Shazam! Cơn thịnh nộ của các vị thần',
            thumb: './assets/img/film/popular/shazam-fury-of-the-gods.jpg',
            rating: '6.5',
            views: '220',
            year: '2023',
            trailerUrl: 'https://www.youtube.com/watch?v=Zi88i4CpHe4',
        },
        {
            titleEn: 'Disenchanted',
            titleVn: 'Chuyện Thần Tiên Ở New York 2',
            thumb: './assets/img/film/popular/disenchanted.jpg',
            rating: '5.6',
            views: '178',
            year: '2022',
            trailerUrl: 'https://www.youtube.com/watch?v=dRuwjZJ-DQw',
        }
    ],
    week: [
        {
            titleEn: 'Shang-Chi and the Legend of the Ten Rings',
            titleVn: 'Shang-Chi Và Huyền Thoại Thập Luân',
            thumb: './assets/img/film/popular/shang-chi.jpg',
            rating: '7.4',
            views: '520',
            year: '2022',
            trailerUrl: 'https://www.youtube.com/watch?v=8YjFbMbfXaQ',
        },
        {
            titleEn: 'Loki',
            titleVn: 'Loki',
            thumb: './assets/img/film/popular/loki.jpg',
            rating: '8.2',
            views: '480',
            year: '2021',
            trailerUrl: 'https://www.youtube.com/watch?v=nW948Va-l10',
        },
        {
            titleEn: 'Peaky Blinders (Season 5)',
            titleVn: 'Bóng ma Anh Quốc (Phần 5)',
            thumb: './assets/img/film/popular/peaky-blinders-5.jpg',
            rating: '',
            views: '213',
            year: '2019',
            trailerUrl: 'https://www.youtube.com/watch?v=Ruyl8_PT_y8',
        },
        {
            titleEn: 'Black Adam',
            titleVn: 'Black Adam',
            thumb: './assets/img/film/popular/black-adam.jpg',
            rating: '6.3',
            views: '202',
            year: '2022',
            trailerUrl: 'https://www.youtube.com/watch?v=X0tOpBuYasI',
        },
    ],
    month: [
        {
            titleEn: 'Loki',
            titleVn: 'Loki',
            thumb: './assets/img/film/popular/loki.jpg',
            rating: '8.2',
            views: '1.5k',
            year: '2021',
            trailerUrl: 'https://www.youtube.com/watch?v=nW948Va-l10',
        },
        {
            titleEn: 'Peaky Blinders (Season 5)',
            titleVn: 'Bóng ma Anh Quốc (Phần 5)',
            thumb: './assets/img/film/popular/peaky-blinders-5.jpg',
            rating: '',
            views: '1.2k',
            year: '2019',
            trailerUrl: 'https://www.youtube.com/watch?v=Ruyl8_PT_y8',
        },
        {
            titleEn: 'Ant-Man and the Wasp: Quantumania',
            titleVn: 'Người Kiến và Chiến binh Ong: Thế giới Lượng tử',
            thumb: './assets/img/film/popular/ant-man-3.jpg',
            rating: '6.4',
            views: '920',
            year: '2023',
            trailerUrl: 'https://www.youtube.com/watch?v=ZlNFpri-Y40',
        },
        {
            titleEn: 'Shazam! Fury of the Gods',
            titleVn: 'Shazam! Cơn thịnh nộ của các vị thần',
            thumb: './assets/img/film/popular/shazam-fury-of-the-gods.jpg',
            rating: '6.5',
            views: '678',
            year: '2023',
            trailerUrl: 'https://www.youtube.com/watch?v=Zi88i4CpHe4',
        },
    ]
};

const inTrailerMovies = [
    {
        titleEn: 'Avatar: The Way of Water',
        titleVn: 'Avatar: Dòng Chảy Của Nước',
        thumb: './assets/img/film/trailer/avatar-2.jpg',
        year: '2022',
        views: '2.6k',
        likes: '928',
        trailerUrl: 'https://www.youtube.com/watch?v=o5F8MOz_IDw',
    },
    {
        titleEn: 'Shazam! Fury of the Gods',
        titleVn: 'Shazam! Cơn thịnh nộ của các vị thần',
        thumb: './assets/img/film/trailer/shazam-fury-of-the-gods.jpg',
        year: '2023',
        views: '1.2k',
        likes: '500',
        trailerUrl: 'https://www.youtube.com/watch?v=Zi88i4CpHe4',
    },
    {
        titleEn: 'John Wick: Chapter 4',
        titleVn: 'John wick: Chương 4',
        thumb: './assets/img/film/trailer/john-wick-4.jpg',
        year: '2023',
        views: '860',
        likes: '335',
        trailerUrl: 'https://www.youtube.com/watch?v=yjRHZEUamCc',
    },
    {
        titleEn: 'Guy Ritchie’s The Covenant',
        titleVn: 'Khế Ước',
        thumb: './assets/img/film/trailer/the-covenant.jpg',
        year: '2023',
        views: '520',
        likes: '128',
        trailerUrl: 'https://www.youtube.com/watch?v=02PPMPArNEQ',
    },
];

const renderPopularMovies = function(root) {
    if (!root) return; 

    root.innerHTML = popularMovies.map((movie) => {
        return `
            <div class="swiper-slide main-section__carousel-slide">
                <div class="film-item">
                    <div class="film-item-inner">
                        <div class="film-item__main">
                            <div class="film-item__thumb">
                                <img src="${movie.thumb}" alt="${movie.titleEn}" class="film-item__thumb-img">
                            </div>

                            <div class="film-item__label">
                                <div class="film-item__label-item">HD</div>
                                <div class="film-item__label-item">Thuyết minh</div>
                            </div>

                            <div class="film-item__bookmark" title="Bookmark">
                                <span class="film-item__bookmark-icon"><i class="fa-regular fa-bookmark"></i></span>
                            </div>

                            <div class="film-item__rating ${movie.rating ? '' : 'film-item__rating--not-available'}">
                                <span class="film-item__rating-icon"><i class="fa-regular fa-star"></i></span>
                                <span class="film-item__rating-num">${movie.rating}</span>
                                <span class="film-item__rating-NA">N/A</span>
                            </div>

                            <div class="film-item__play-btn" title="Xem phim">
                            <span class="film-item__play-btn-icon"><i class="fa-solid fa-play"></i></span>
                            </div>
                        </div>
                        <div class="film-item__desc">
                            <div class="film-item__title" title="${movie.titleVn}">${movie.titleVn}</div>
                            <div class="film-item__subtitle">
                            <span class="film-item__subtitle-item" title="${movie.titleEn} (${movie.year})">${movie.titleEn} (${movie.year})</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

const renderMovieList = (root, movies) => {
    if (!root || !movies) return;

    root.innerHTML = movies.map((movie) => {
        return `
            <div class="col-3">
                <div class="film-item">
                    <div class="film-item-inner">
                        <div class="film-item__main">
                            <div class="film-item__thumb">
                                <img src="${movie.thumb}" alt="${movie.titleEn}" class="film-item__thumb-img">
                            </div>

                            <div class="film-item__label">
                                <div class="film-item__label-item">HD</div>
                                <div class="film-item__label-item">Thuyết minh</div>
                            </div>

                            <div class="film-item__bookmark" title="Bookmark">
                            <span class="film-item__bookmark-icon"><i class="fa-regular fa-bookmark"></i></span>
                            </div>

                            <div class="film-item__rating ${movie.rating ? '' : 'film-item__rating--not-available'}">
                                <span class="film-item__rating-icon"><i class="fa-regular fa-star"></i></span>
                                <span class="film-item__rating-num">${movie.rating}</span>
                                <span class="film-item__rating-NA">N/A</span>
                            </div>

                            <div class="film-item__play-btn" title="Xem phim">
                            <span class="film-item__play-btn-icon"><i class="fa-solid fa-play"></i></span>
                            </div>
                        </div>
                        <div class="film-item__desc">
                            <div class="film-item__title" title="${movie.titleVn}">${movie.titleVn}</div>
                            <div class="film-item__subtitle">
                            <span class="film-item__subtitle-item" title="${movie.titleEn} (${movie.year})">${movie.titleEn} (${movie.year})</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

const renderTrailers = (root, movies) => {
    if (!root || !movies) return;

    root.innerHTML = movies.map((movie) => {
        return `
            <div class="swiper-slide main-sidebar-section__carousel-slide">
                <div class="trailer-item">
                    <div class="trailer-item-inner">
                        <div class="trailer-item__main">
                            <div class="trailer-item__thumb">
                                <img src="${movie.thumb}" class="trailer-item__thumb-img" alt="${movie.titleVn}"></img>
                            </div>

                            <div class="trailer-item__label">Trailer</div>
                        </div>

                        <div class="trailer-item__desc">
                            <div class="trailer-item__title">${movie.titleVn} - ${movie.titleEn} (${movie.year})</div>

                            <div class="trailer-item__views">
                                <span class="trailer-item__views-icon"><i class="fa-solid fa-eye"></i></span>
                                <span class="trailer-item__views-quantity">${movie.views}</span>
                            </div>
                            <div class="trailer-item__like">
                                <span class="trailer-item__like-icon"><i class="fa-solid fa-thumbs-up"></i></span>
                                <span class="trailer-item__like-quantity">${movie.likes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

const renderTrendingMovies = (root, movies) => {
    if (!root || !movies) return;

    root.innerHTML = movies.map((movie) => {
        return `
            <div class="main-sidebar-section__tab-pane-item">
                <div class="main-sidebar-section__tab-pane-item-thumb">
                    <img src="${movie.thumb}" class="main-sidebar-section__tab-pane-item-img" alt="${movie.titleVn}">
                </div>
                <div class="main-sidebar-section__tab-pane-item-desc">
                    <div class="main-sidebar-section__tab-pane-item-title">${movie.titleVn}</div>
                    <div class="main-sidebar-section__tab-pane-item-subtitle">${movie.year}</div>

                    <div class="main-sidebar-section__tab-pane-item-views">
                        <span>${movie.views}</span> lượt người xem
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

renderPopularMovies($('.main-section__carousel-wrapper'));

renderMovieList($('.main-section--category-1 .main-section__body .row'), hotMovies);
renderMovieList($('.main-section--category-2 .main-section__body .row'), hotMovies);
renderMovieList($('.main-section--category-3 .main-section__body .row'), hotMovies);
renderMovieList($('.main-section--category-4 .main-section__body .row'), hotMovies);

renderTrailers($('.main-sidebar-section__carousel-wrapper'), inTrailerMovies);

renderTrendingMovies($('.main-sidebar-section__tab-pane--day'), trendingMovies.day);
renderTrendingMovies($('.main-sidebar-section__tab-pane--week'), trendingMovies.week);
renderTrendingMovies($('.main-sidebar-section__tab-pane--month'), trendingMovies.month);



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

// main-sidebar-section__tabs
const tabItems = $$('.main-sidebar-section__tab-item');
const tabPanes = $$('.main-sidebar-section__tab-pane');
const tabLine = $('.main-sidebar-section__tab-line');

tabItems.forEach((tabItem, index) => {
    tabItem.onclick = () => {
        $('.main-sidebar-section__tab-item.active')?.classList.remove('active');
        $('.main-sidebar-section__tab-pane.active')?.classList.remove('active');

        tabItem.classList.add('active');
        tabPanes[index].classList.add('active');

        tabLine.style.left = tabItem.offsetLeft + 'px';
        tabLine.style.width = tabItem.offsetWidth + 'px';
    }
});

// to-top btn
const toTopBtn = $('.to-top-btn');
const viewportHeight = window.innerHeight;

toTopBtn.onclick = () => {
    // document.body.scrollTop = 0; // for safari
    // document.documentElement.scrollTop = 0; // for chrome, firefox, IE and opera
    document.body.scrollIntoView({
        behavior: "smooth"
    });
}

window.onscroll = () => {
    if (
        document.body.scrollTop > viewportHeight || // for safari
        document.documentElement.scrollTop > viewportHeight // for chrome, firefox, IE and opera
    ) {
        // show
        toTopBtn.classList.add('active');
    }
    else {
        toTopBtn.classList.remove('active');
    }
}
