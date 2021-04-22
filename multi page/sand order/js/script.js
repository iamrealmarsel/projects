
ymaps.ready(function () {
  var myMap = new ymaps.Map('ya-map', {
          center: [50.864596, 30.565245],
          zoom: 16
      }, {
          searchControlProvider: 'yandex#search'
      }),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Декоратор событий',
          balloonContent: 'г. Москва, Дубнинская улица, д. 29-1'
      });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
});
