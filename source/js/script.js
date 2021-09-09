const header = document.querySelector('.page-header');
const navToggle = document.querySelector('.page-header__nav-toggle');

header.classList.remove('page-header--no-js');
navToggle.addEventListener('click', function () {
  header.classList.toggle('is-open');
});

const initMap = () => {
  const mapElement = document.querySelector('#map');
  if (mapElement) {
    ymaps.ready(() =>{
      const myMap = new ymaps.Map('map', {
        center: [59.93863506417266, 30.323117499999945],
        zoom: 16,
        controls: [],
      });

      const myPlaceMark = new window.ymaps.Placemark([59.93863506417266, 30.323117499999945], null, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/map-marker.svg',
        iconImageSize: [36, 36],
        iconImageOffset: [-18, -18],
      });
      myMap.geoObjects.add(myPlaceMark);
    });
  }
};

initMap();
