const bookmarkElement = document.querySelector('.bookmark');

function getFavouriteMovies() {
    let userData = localStorage['user'];
    if (userData) { // login
        return (JSON.parse(userData)['favourite']);
    } else { // not
        if (typeof localStorage['favouriteMovies'] === 'undefined')
            localStorage.setItem('favouriteMovies', JSON.stringify({ 'movies': [] }));
        return JSON.parse(localStorage['favouriteMovies'])['movies'];
    }
}

function setFavouriteMovies(movies) {
    let userData = localStorage['user'];
    if (userData) { // login
        let newData = JSON.parse(userData);
        newData['favourite'] = movies;
        localStorage.setItem('user', JSON.stringify(newData));
    } else { // not
        localStorage.setItem('favouriteMovies', JSON.stringify({'movies': movies}));
    }
}



if (bookmarkElement) {
    const bookmarkWrapper = bookmarkElement.querySelector('.bookmark-wrapper');

    updateBookmark();

    function updateBookmark() {
        let favouriteMovies = getFavouriteMovies();

        if (favouriteMovies.length === 0) {
            bookmarkWrapper.innerHTML =
                `<div class="bookmark-wrapper--empty">
                    Không có phim nào ở đây!
                </div>`;
            
        } else {
            renderBookmark(bookmarkWrapper, favouriteMovies);
        }
    }

    function renderBookmark(root, items) {
        root.innerHTML = '';
        items.forEach(function (value, key) {
            let movie = moviesByCategory[value['category']][value['filmId']];
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
            item.querySelector('.bookmark-item-remove').addEventListener('click', function (e) {
                e.stopPropagation();
                items.splice(key, 1);
                setFavouriteMovies(items);
                updateBookmark();
            });

            item.addEventListener('click', function() {
                window.location.href = `/FZilla/film_info.html?film_category=${value['category']}&film_id=${value['filmId']}`;
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
            bookmarkElement.removeChild(bookmarkElement.querySelector('.bookmark-clear-all'));
        });
        bookmarkElement.append(clearAllButton);
    }
}

window.addEventListener('storage', updateBookmark);