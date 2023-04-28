const renderFilmInfo = function(root) {
  const { category, filmId } = getFilmInfoFromSearchParams();

  if (!root || moviesByCategory.hasOwnProperty(category) === false) return;

  const movie = moviesByCategory[category][filmId];

  const breadCrumbList = $('.breadcrumb__list');
  breadCrumbList.querySelector('.breadcrumb__item:last-child .breadcrumb__item-link').innerHTML = movie.titleVn;

  root.innerHTML = `
    <div class="main-film-info">
      <div class="main-film-info__with-thumb">
        <div class="main-film-info__thumb">
          <div class="main-film-info__thumb-img-wrapper">
            <img src="${movie.thumb}" class="main-film-info__img" alt="${movie.titleVn}">
          </div>
          <div class="main-film-info__bookmark ${isFavouriteMovie({ category, filmId }) !== -1 && 'main-film-info__bookmark--added'}">
            <span class="main-film-info__bookmark-icon">
              <i class="fa-solid fa-bookmark"></i>
            </span>
            <span class="main-film-info__bookmark-status-icon main-film-info__bookmark-add-icon" title="Thêm vào danh sách yêu thích">
              <i class="fa-solid fa-plus"></i>
            </span>
            <span class="main-film-info__bookmark-status-icon main-film-info__bookmark-tick-icon">
              <i class="fa-solid fa-check"></i>
            </span>
            <span class="main-film-info__bookmark-status-icon main-film-info__bookmark-remove-icon" title="Xóa khỏi danh sách yêu thích">
              <i class="fa-solid fa-x"></i>
            </span>
          </div>
          <a href="/FZilla/film_watching.html?film_category=${category}&film_id=${filmId}" class="main-film-info__btn main-film-info__watch-trailer-btn my-btn my-btn-flex">
            <span class="main-film-info__btn-icon"><i class="fa-brands fa-youtube"></i></span>
            Xem trailer
          </a>
          <a href="/FZilla/film_watching.html?film_category=${category}&film_id=${filmId}" class="main-film-info__btn main-film-info__watch-film-btn my-btn my-btn-flex">
            <span class="main-film-info__btn-icon"><i class="fa-regular fa-circle-play"></i></span>
            Xem phim
          </a>
        </div>
        <div class="main-film-info__about">
          <div class="main-film-info__about-title">${movie.titleVn}</div>
          <ul class="main-film-info__about-list">
            <li class="main-film-info__about-list-item">
              <span>Quốc gia:</span>
              <a href="#">Phim Mỹ</a>
            </li>
            <li class="main-film-info__about-list-item">
              <span>Đạo diễn:</span>
              <a href="#">Chris Renaud, Jonathan del Val</a>
            </li>
            <li class="main-film-info__about-list-item">
              <span>Năm sản xuất:</span>
              <a href="#">${movie.year}</a>
            </li>
            <li class="main-film-info__about-list-item">
              <span>Thời lượng:</span>
              <a href="#">220 phút</a>
            </li>
            <li class="main-film-info__about-list-item">
              <span>Thể loại:</span>
              <a href="#">Phim viễn tưởng, phiêu lưu, khoa học.</a>
            </li>
          </ul>
          <div class="main-film-info__about-rating">
            <span class="main-film-info__about-rating-title">Đánh giá phim</span>
            <span class="main-film-info__about-rating-votes">(43 lượt)</span>

            <span class="main-film-info__about-rating-star active"><i class="fa-solid fa-star"></i></span>
            <span class="main-film-info__about-rating-star active"><i class="fa-solid fa-star"></i></span>
            <span class="main-film-info__about-rating-star active"><i class="fa-solid fa-star"></i></span>
            <span class="main-film-info__about-rating-star active"><i class="fa-solid fa-star"></i></span>
            <span class="main-film-info__about-rating-star"><i class="fa-solid fa-star"></i></span>
          </div>
        </div>
      </div>
      <div class="main-film-info__film-content">
        <div class="main-film-info__film-content-heading text-uppercase">Nội dung phim</div>
        <div class="main-film-info__film-content-title">${movie.titleVn}</div>
        <div class="main-film-info__film-content-desc">The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</div>
      </div>
    </div>
  `;
}