
const renderCarouselMovies = function(root, category) {
  if (!root || moviesByCategory.hasOwnProperty(category) === false) return; 

  const movies = moviesByCategory[category];
  root.innerHTML = movies.map((movie, id) => {
    return `
      <div class="swiper-slide main-section__carousel-slide">
        <div class="film-item">
          <a href="/film_info.html?film_category=${category}&film_id=${id}" class="film-item-inner">
            <div class="film-item__main">
              <div class="film-item__thumb">
                <img src="${movie.thumb}" alt="${movie.titleEn}" class="film-item__thumb-img">
              </div>

              <div class="film-item__label">
                <div class="film-item__label-item">HD</div>
                <div class="film-item__label-item">Thuyết minh</div>
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
          </a>
        </div>
      </div>
    `;
  }).join('');
}

const renderMovieList = (root, category, colClassList = ['col-3']) => {
  if (!root || moviesByCategory.hasOwnProperty(category) === false) return;

  const movies = moviesByCategory[category];
  root.innerHTML = movies.map((movie, id) => {
    return `
      <div class="${colClassList.join(' ')}">
        <div class="film-item">
          <a href="/film_info.html?film_category=${category}&film_id=${id}" class="film-item-inner">
            <div class="film-item__main">
              <div class="film-item__thumb">
                <img src="${movie.thumb}" alt="${movie.titleEn}" class="film-item__thumb-img">
              </div>

              <div class="film-item__label">
                <div class="film-item__label-item">HD</div>
                <div class="film-item__label-item">Thuyết minh</div>
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
          </a>
        </div>
      </div>
    `;
  }).join('');
}

const renderTrailers = (root, category) => {
  if (!root || moviesByCategory.hasOwnProperty(category) == false) return;

  const movies = moviesByCategory[category];
  root.innerHTML = movies.map((movie, id) => {
    return `
      <div class="swiper-slide main-sidebar-section__carousel-slide">
        <div class="trailer-item">
          <a href="#" class="trailer-item-inner">
            <div class="trailer-item__main">
              <div class="trailer-item__thumb">
                <img src="${movie.thumb}" class="trailer-item__thumb-img" alt="${movie.titleVn}"></img>
              </div>

              <div class="trailer-item__label">Trailer</div>
            </div>

            <div class="trailer-item__desc">
              <div class="trailer-item__title">${movie.titleVn} | ${movie.titleEn} (${movie.year})</div>

              <div class="trailer-item__views">
                <span class="trailer-item__views-icon"><i class="fa-solid fa-eye"></i></span>
                <span class="trailer-item__views-quantity">${movie.views}</span>
              </div>
              <div class="trailer-item__like">
                <span class="trailer-item__like-icon"><i class="fa-solid fa-thumbs-up"></i></span>
                <span class="trailer-item__like-quantity">${movie.likes}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

const renderTrendingMovies = (root, category) => {
  if (!root || moviesByCategory.hasOwnProperty(category) === false) return;

  const movies = moviesByCategory[category];
  root.innerHTML = movies.map((movie, id) => {
    return `
      <div class="main-sidebar-section__tab-pane-item">
        <a href="/film_info.html?film_category=${category}&film_id=${id}" class="main-sidebar-section__tab-pane-item-inner">
          <div class="main-sidebar-section__tab-pane-item-thumb">
            <img src="${movie.thumb}" class="main-sidebar-section__tab-pane-item-img" alt="${movie.titleVn}">
          </div>
          <div class="main-sidebar-section__tab-pane-item-desc">
            <div class="main-sidebar-section__tab-pane-item-title" title="${movie.titleVn}">${movie.titleVn}</div>
            <div class="main-sidebar-section__tab-pane-item-subtitle">${movie.year}</div>

            <div class="main-sidebar-section__tab-pane-item-views">
              <span>${movie.views}</span> lượt người xem
            </div>
          </div>
        </a>
      </div>
    `;
  }).join('');
}

const renderQuickCategory = (root, categories) => {
  if (!root || !categories) return;

  root.innerHTML = categories.map((category) => {
    return `
      <li class="main-sidebar-section__list-item">
        <span class="main-sidebar-section__list-item-icon"><i class="fa-solid fa-gear"></i></span>
        <a href="${category.href}" class="main-sidebar-section__list-item-link">${category.category}</a>
      </li>
    `;
  }).join('');
}