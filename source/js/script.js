const headerNav = document.querySelector('.header-nav');
const navToggle = document.querySelector('.page-header__nav-toggle');
const header = document.querySelector('.page-header');

headerNav.classList.remove('header-nav--nojs');

navToggle.addEventListener('click', function () {
  if (headerNav.classList.contains('header-nav--opened')) {
    headerNav.classList.remove('header-nav--opened');
    headerNav.classList.add('header-nav--closed');
    header.classList.remove('is-open');
  } else {
    headerNav.classList.add('header-nav--opened');
    headerNav.classList.remove('header-nav--closed');
    header.classList.add('is-open');
  }
})
