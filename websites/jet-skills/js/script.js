$(function() {
// начало документа


$('.experts__slider').owlCarousel({

  center: false,
  loop: false,
  margin: 0,
  dots: false,
  nav: false,
  mouseDrag: false,
  autoWidth: true,
  responsive:{
      768: {
        autoWidth: false,
        center: true,
        loop: true,
        items: 1,
        margin: 50,
        stagePadding: 200,
        nav: true
      },
      992: {
        autoWidth: false,
        center: true,
        loop: true,
        items: 3,
        margin: 30,
        stagePadding: 100,
        nav: true
      },
      1180: {
        autoWidth: false,
        center: true,
        loop: true,
        items: 3,
        margin: 30,
        stagePadding: 145,
        nav: true
      },
     1440:{
      autoWidth: false,
      margin: 30,
      nav: true,
      items: 4,
      stagePadding: 0,
      center: false
     }
   }


});


var winH = $(window).height();
var winW = $(window).width();

if ((winH > 700) & (winW > 767)) {

  $('.header').height(winH - 60);

}


$(window).on('resize', function(){

    var winW = $(this).width();
    var winH = $(this).height();

    if ((winH > 700) & (winW > 767)) {

      $('.header').height(winH - 60);

    }

    if (winW < 768) { 
      $('.experts__slider').trigger('destroy.owl.carousel');
    }

});

if ($(window).width() < 768) { 
  $('.experts__slider').trigger('destroy.owl.carousel');
}


// подписка
$(".js-submit").submit(function() {
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: $(this).serialize(),
    success: function() {
      document.location.href = 'typ.html';
    }
  });
  return false;
});


$('.js-btn').on('click', function() {

  $('html, body').stop().animate({ scrollTop: $('.join__shape').offset().top }, 500);
  e.preventDefault();

});

$('.header__arrow').on('click', function() {

  $('html, body').stop().animate({ scrollTop: $('.welcome').offset().top }, 800);
  e.preventDefault();

});





// конец документа
});