const listFavouriteMovies = {
    'movies': [
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
        }
    ]
};

localStorage.setItem('favouriteMovies', JSON.stringify(listFavouriteMovies));

const user = {
    username: 'fzilla', // username maxlength12
    fullname: 'Nguyen Trong Huu',
    email: 'fzilla@github.com',
    phone: '0912323223',
    registrationDate: '29-12-2022',
    password: 12345678,
    avatar: '/assets/img/nav-brand.png',
    favourite: listFavouriteMovies['movies'],
    history: listFavouriteMovies['movies']
}

// Mô phỏng đăng nhập
localStorage.setItem('user', JSON.stringify(user));