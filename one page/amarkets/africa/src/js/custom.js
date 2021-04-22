$(function () {
// начала документа

  $('.slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  var mixBlendModeSupport = Modernizr.testProp('mixBlendMode');

  if (!mixBlendModeSupport) {
    $('html').addClass('no-blend'); 
  }

// конец документа
});





