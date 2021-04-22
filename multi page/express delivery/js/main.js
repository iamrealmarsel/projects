
$(function(){
    // / выбор города /
    $('.delivery_list').click(function(){
        $(this).parents('.delivery_block').find(".cities_list").slideToggle('fast');
    });
    $('ul.cities_list li').click(function(){
        var tx = $(this).html();
        var tv = $(this).attr('alt');
        $(this).parents('.delivery_block').find(".cities_list").slideUp('fast');
        $(this).parents('.delivery_block').find(".delivery_list input").val(tx).addClass('active');
        $(this).parents('.delivery_block').find(".delivery_text").html(tv);
    });
});


$(function(){

    // модалка
    $('[data-modal]').on('click', function(e) {

      e.preventDefault();

      var target = $(this).data('target');
      $('.overlay').fadeIn();
      $('#'+target).fadeIn();

    });

    $('.js-close, .overlay').on('click', function(e) {

      e.preventDefault();

      $('.modal').fadeOut();
      $('.overlay').fadeOut();

    });

    $('.modal').click(function(e) {
        e.stopPropagation();
    });


    fixBtn();

    function fixBtn() {

      $(window).on('scroll', function() {

        var bl3 = $('.block3').offset().top;
        if ($(window).scrollTop() < bl3) {
          $('.call_fix').fadeOut(200);
        } else {
          $('.call_fix').fadeIn(200);
        }
        
      });

    }



});



$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        paginationClickable: true,
        paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    });
});

$(document).ready(function(e) {
    $('.tabbing').mTab({
        navigation: ".tabNav"
        ,container: ".tabContainer"
        ,activeTab: 1
        ,activeClass: "active"
        ,scrollOffset: true
        ,accordScreen: 768
        ,toggleClose: true
        ,animation: false
        ,openWithUrl: true
        ,callbackonclick:  function() {  }
        ,callback: function() {  }
    });

});



$(document).ready(function(e) {
var rangeSlider2 = document.getElementById('slider-range2');
noUiSlider.create(rangeSlider2, {
    start: [ 10 ],
    connect: [true, false],
    range: {
        'min': [  1 ],
        'max': [ 100 ]
    }
});


var rangeSliderValueElement2 = document.getElementById('slider-range-value2');
rangeSlider2.noUiSlider.on('update', function( values, handle ) {
    rangeSliderValueElement2.innerHTML = values[handle];
});
});


// гугл карта
function initMap() {
    var uluru = {lat: 44.64, lng: 37.85};
    var uluru2 = {lat: 44.712, lng: 37.764};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru2,
      map: map
    });
}

