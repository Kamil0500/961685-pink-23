const header = document.querySelector('.page-header');
const navToggle = document.querySelector('.page-header__nav-toggle');

header.classList.remove('page-header--no-js');
navToggle.addEventListener('click', function () {
  header.classList.toggle('is-open');
});
