const renderFilmWatching = function(root, category, filmId) {
  if (!root || moviesByCategory.hasOwnProperty(category) === false) return;

  const movie = moviesByCategory[category][filmId];
  const titlePage = $('#titlePage');
  const breadCrumbList = $('.breadcrumb__list');

  titlePage.innerHTML = `FZilla - Xem phim ${movie.titleVn}`;

  breadCrumbList.querySelector('.breadcrumb__item:last-child .breadcrumb__item-link').innerHTML = movie.titleVn;

  root.innerHTML = `
    <div class="player__title text-center d-md-none">
      <h2 class="player_title-heading">Bạn đang xem phim <span>${movie.titleVn}</span></h2>
    </div>
    <div class="player__video-wrapper">
      <video src="${movie.trailer}" class="player__video" controls></video>
    </div>

    <div class="player__control-btns d-flex flex-wrap justify-content-center justify-content-md-end">
      <button class="player__control-btns-btn my-btn my-btn-flex">
        <span class="player__control-btns-btn-icon player__control-btns-btn-icon--left"><i class="fa-solid fa-caret-left"></i></span>
        Tập trước
      </button>
      <button class="player__control-btns-btn my-btn my-btn-flex">
        Tập tiếp theo
        <span class="player__control-btns-btn-icon"><i class="fa-solid fa-caret-right"></i></span>
      </button>
      <button class="player__control-btns-btn my-btn my-btn-flex">
        Tắt đèn
        <span class="player__control-btns-btn-icon"><i class="fa-regular fa-lightbulb"></i></span>
      </button>
      <button class="player__control-btns-btn my-btn my-btn-flex">
        Tự động chuyển tập: Bật
      </button>
      <button class="player__control-btns-btn my-btn my-btn-flex">
        Mở rộng
        <span class="player__control-btns-btn-icon"><i class="fa-solid fa-up-right-and-down-left-from-center"></i></span>
      </button>
    </div>

    <div class="player__film-info">
      <div class="player__film-info-heading d-flex flex-column flex-md-row">
        <div class="player__film-info-heading-item">
          <div class="player__film-info-title">${movie.titleVn}</div>
          <div class="player__film-info-subtitle">${movie.titleEn} (${movie.year})</div>
        </div>
        <div class="player__film-info-heading-item">
          <div class="player__film-info-rating mt-2 mt-md-0">
            <div class="player__film-info-rating-label">
              Đánh giá phim
              <span class="player__film-info-rating-label-num">(43 lượt)</span>
            </div>
            <div class="player__film-info-rating-stars text-md-end">
              <span class="player__film-info-rating-stars-item active"><i class="fa-solid fa-star"></i></span>
              <span class="player__film-info-rating-stars-item active"><i class="fa-solid fa-star"></i></span>
              <span class="player__film-info-rating-stars-item active"><i class="fa-solid fa-star"></i></span>
              <span class="player__film-info-rating-stars-item active"><i class="fa-solid fa-star"></i></span>
              <span class="player__film-info-rating-stars-item active"><i class="fa-solid fa-star"></i></span>
              <span class="player__film-info-rating-stars-item"><i class="fa-solid fa-star"></i></span>
            </div>
          </div>
        </div>
      </div>
      <div class="player__film-info-body">
        <div class="player__film-info-expand-desc">
          Nội dung phim
          <span class="player__film-info-expand-desc-icon">
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div class="player__film-info-desc">
          <p class="py-2">The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
        </div>
      </div>
    </div>
  `;
}

const handleAccordion = function() {
  const playerFilmExpandDesc = $('.player__film-info-expand-desc');
  const playerFilmInfoDesc = $('.player__film-info-desc');

  playerFilmExpandDesc.onclick = function() {
    this.classList.toggle('player__film-info-expand-desc--active');
    console.log('Current height: ', playerFilmInfoDesc.style.maxHeight);
    if (playerFilmInfoDesc.style.maxHeight) {
        playerFilmInfoDesc.style.maxHeight = null;
    }
    else {
        playerFilmInfoDesc.style.maxHeight = playerFilmInfoDesc.scrollHeight + "px";
    }
  }
}