const renderFilmInfo = function(root, category, filmId) {
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
          <div class="main-film-info__bookmark" title="Bookmark">
            <span class="main-film-info__bookmark-icon"><i class="fa-solid fa-bookmark"></i></span>
            <span class="main-film-info__bookmark-add-icon"><i class="fa-solid fa-plus"></i></span>
          </div>
          <div class="main-film-info__btn main-film-info__watch-trailer-btn my-btn my-btn-flex">
            <span class="main-film-info__btn-icon"><i class="fa-brands fa-youtube"></i></span>
            Xem trailer
          </div>
          <div class="main-film-info__btn main-film-info__watch-film-btn my-btn my-btn-flex">
            <span class="main-film-info__btn-icon"><i class="fa-regular fa-circle-play"></i></span>
            Xem phim
          </div>
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
          <div class="main-film-info__about-rate">
            <span class="main-film-info__about-rate-title">Đánh giá phim</span>
            <span class="main-film-info__about-rate-votes">(43 lượt)</span>

            <span class="main-film-info__about-rate-star active"><i class="fa-solid fa-star"></i></span>
            <span class="main-film-info__about-rate-star active"><i class="fa-solid fa-star"></i></span>
            <span class="main-film-info__about-rate-star active"><i class="fa-solid fa-star"></i></span>
            <span class="main-film-info__about-rate-star active"><i class="fa-solid fa-star"></i></span>
            <span class="main-film-info__about-rate-star"><i class="fa-solid fa-star"></i></span>
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