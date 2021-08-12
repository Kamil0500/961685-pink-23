let headerNav = document.querySelector('.header-nav');
let navToggle = document.querySelector('.page-header__nav-toggle');

headerNav.classList.remove('header-nav--nojs');

navToggle.addEventListener('click', function () {
  if (headerNav.classList.contains('header-nav--closed')) {
    headerNav.classList.remove('header-nav--closed');
    headerNav.classList.add('header-nav--opened');
  } else {
    headerNav.classList.add('header-nav--closed');
    headerNav.classList.remove('header-nav--opened');
  }
})
