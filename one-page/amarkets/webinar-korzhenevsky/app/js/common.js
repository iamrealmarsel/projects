$(function () {

  $('.scrollTo').on('click', function(e) {

    e.preventDefault();
    var x = $(this).attr('href');
    $('html, body').stop().animate({ scrollTop: $(x).offset().top }, 800);

  });



	// Custom JS

	$("#tell").mask("+7 (999) 999-99-99");

});