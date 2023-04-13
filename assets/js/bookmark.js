const bookmarkElement = document.querySelector('.bookmark');

const listfavouriteMovies = {
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

localStorage.setItem('favouriteMovies', JSON.stringify(listfavouriteMovies));

function getFavouriteMovies() {
    let favouriteMovies = localStorage['favouriteMovies'];
    return (typeof favouriteMovies !== 'undefined') ? JSON.parse(favouriteMovies) : undefined;
}

function setFavouriteMovies(movies) {
    if (movies.length === 0) 
        localStorage.removeItem('favouriteMovies');
    else {
        let favouriteMovies = {
            'movies': movies
        };
        localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies));
    }
}

if (bookmarkElement) {
    const bookmarkWrapper = bookmarkElement.querySelector('.bookmark-wrapper');
    
    updateBookmark();

    function updateBookmark() {
        let favouriteMovies = getFavouriteMovies();

        if (favouriteMovies === undefined) {
            bookmarkWrapper.innerHTML =
                `<div class="bookmark-wrapper--empty">
                    Không có phim nào ở đây!
                </div>`;
        } else {
            renderBookmark(bookmarkWrapper, favouriteMovies['movies']);
        }
    }

    function renderBookmark(root, items) {
        root.innerHTML = '';
        items.forEach(function (movie, key) {
            let item = document.createElement('div');
            item.classList.add('dropdown__list-item', 'bookmark-item');
            item.innerHTML =
                `<div class="bookmark-item-thumb">
                    <img class="bookmark-item-img" src="${movie.thumb}" alt="">
                </div>
                <div class="bookmark-item-desc">
                    <div class="bookmark-item-tittle">
                        ${movie.titleVn}
                    </div>
                    <div class="bookmark-item-subtitle">
                        ${movie.year}
                    </div>
                </div>
                <i class="bookmark-item-remove fa-solid fa-xmark"></i>`;
            item.querySelector('.bookmark-item-remove').addEventListener('click', function() {
                items.splice(key, 1);
                setFavouriteMovies(items);
                updateBookmark();
            });
            
            root.append(item);
        });

        showClearAllButton();
    }

    function showClearAllButton() {
        if (bookmarkElement.querySelector('.bookmark-clear-all')) return;

        let clearAllButton = document.createElement('div');
        clearAllButton.classList.add('bookmark-clear-all');
        clearAllButton.textContent = 'Xóa tất cả';
        clearAllButton.addEventListener('click', function () {
            setFavouriteMovies([]);
            updateBookmark();
        });
        bookmarkElement.append(clearAllButton);
    }
}





