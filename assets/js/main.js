'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const renderChildren = function(root) {
  const numChildren = 16;
  root.innerHTML = '';
  for (let i = 1; i <= numChildren; i++) {
    const child = `
      <div class="swiper-slide main-section__carousel-slide">
        <div class="film-item">
          <div class="film-item-inner">
            <div class="film-item__main">
              <div class="film-item__thumb">
              <img src="./assets/img/thumb/thumb_1.jpg" alt="Free Guy" class="film-item__thumb-img">
              </div>

              <div class="film-item__label">
              <div class="film-item__label-item">HD</div>
              <div class="film-item__label-item">Thuyết minh</div>
              </div>

              <div class="film-item__bookmark" title="Bookmark">
              <span class="film-item__bookmark-icon"><i class="fa-regular fa-bookmark"></i></span>
              </div>

              <div class="film-item__rating ${i % 2 === 0 ? '' : 'film-item__rating--not-available'}">
              <span class="film-item__rating-icon"><i class="fa-regular fa-star"></i></span>
              <span class="film-item__rating-rate">
                <span class="film-item__rating-num">7.5</span>/<span class="film-item__rating-total">10</span>
              </span>
              <span class="film-item__rating-NA">N/A</span>
              </div>

              <div class="film-item__play-btn" title="Xem phim">
              <span class="film-item__play-btn-icon"><i class="fa-solid fa-play"></i></span>
              </div>
            </div>
            <div class="film-item__desc">
              <div class="film-item__title">Giải cứu 'GUY' ${i}</div>
              <div class="film-item__subtitle">
              <span class="film-item__subtitle-item">Free Guy (2021)</span>
              <span class="film-item__subtitle-item">Phim hài</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    root.innerHTML += child;
  }
}

renderChildren($('.main-section__carousel-wrapper'));

const swiper = new Swiper('.main-section__carousel', {
  autoplay: {
      delay: 4500,
      disableOnInteraction: false
  },
  loop: true,
  slidesPerView: 'auto',
  loopedSlides: 5,
  spaceBetween: "2%",
  slidesPerGroup: 5,
  speed: 1000,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
