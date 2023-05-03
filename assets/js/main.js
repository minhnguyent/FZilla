'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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

window.addEventListener('scroll', function() {
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
});

function getFilmInfoFromSearchParams() {
  const searchString = window.location.search;
  const searchParams = new URLSearchParams(searchString);
  const category = searchParams.get('film_category');
  const filmId = Number(searchParams.get('film_id'));
  return {
    category,
    filmId
  }
}

window.addEventListener('storage', function() {
  if (typeof updateBookmark === 'function') updateBookmark();
  if (typeof setBookmarkButtonStatus === 'function') setBookmarkButtonStatus();
}); 

/*******************************************************************
 * Xử lý dropdown trên mobile and pc
 *******************************************************************/
function setDropdownType(dropdownElement) {
  if ('ontouchstart' in window) {
      // Mobile and tablet - touch = click
      const dropdownListElement = dropdownElement.querySelector('.dropdown__list');
      dropdownElement.addEventListener('click',  function() {
          dropdownListElement.classList.toggle('dropdown__list--show');
      });
  } else {
      // PC = hover
      const dropdownListElement = dropdownElement.querySelector('.dropdown__list');
      dropdownElement.addEventListener('mouseout',  function() {
          dropdownListElement.classList.add('can-hover');
      });
  }
};