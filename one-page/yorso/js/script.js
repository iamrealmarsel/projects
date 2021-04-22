$(function() {

  // $(window).on('scroll', menuFixed);
  // function menuFixed() {
  //   var top = $(window).scrollTop();
  //   var hedearLine = $('.header__line').height();
  //   if (top >= hedearLine) {
  //     $('.header__line').addClass('header__line--fixed')
  //   } else 
  //     $('.header__line').removeClass('header__line--fixed')
  // }

$('.header__lang').on('click', function() {

  $('.headerRu-Eng').toggleClass('headerRu-Eng--open');

});



$(document).on('click', function(e) {
  if ($(e.target).closest('.header__lang').length) {
    return;
  }
  $('.headerRu-Eng').removeClass('headerRu-Eng--open');

});




});