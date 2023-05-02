const historyItemList = [
    'Avatar Dòng chảy của nước',
    'Hành động',
    'Loki',
    'Khế ước'
];

// localStorage.setItem('searchHistory', JSON.stringify(historyItemList));

const listFavouriteMovies = [
    {
        category: 'trendingMoviesMonth',
        filmId: 2
    },
    {
        category: 'trendingMoviesMonth',
        filmId: 3
    },
    {
        category: 'popularMovies',
        filmId: 6
    },
    {
        category: 'popularMovies',
        filmId: 4
    },
    {
        category: 'hotMovies',
        filmId: 3
    },
];

const listHistoryMovies = [
    {
        category: 'trendingMoviesMonth',
        filmId: 3
    },
    {
        category: 'trendingMoviesMonth',
        filmId: 1
    },
    {
        category: 'popularMovies',
        filmId: 2
    },
];

// localStorage.setItem('favouriteMovies', JSON.stringify(listFavouriteMovies));

const user = {
    username: 'fzilla', // username maxlength12
    fullname: 'Nguyen Trong Huu',
    email: 'fzilla@github.com',
    phone: '0912323223',
    registrationDate: '29-12-2022',
    password: 12345678,
    avatar: '/FZilla/assets/img/nav-brand.png',
    favourite: listFavouriteMovies,
    history: listHistoryMovies
}

// Mô phỏng đăng nhập
// localStorage.setItem('user', JSON.stringify(user));


if (typeof localStorage['allUserData'] === 'undefined')
    localStorage.setItem('allUserData', JSON.stringify([]));
