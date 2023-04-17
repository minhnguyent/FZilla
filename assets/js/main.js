'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// renderPopularMovies($('main-section--same-topic .main-section__carousel-wrapper'), moviesByCategory.popularMovies);

// renderMovieList($('.main-section--hot-movies-all .main-section__body .row'), moviesByCategory.hotMovies, ["col-2"]);
// renderMovieList($('.main-section--recommendation .main-section__body .row'), moviesByCategory.hotMovies, ["col-3"]);

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
