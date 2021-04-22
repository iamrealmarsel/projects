$(document).ready(function() {

// ---== глобальные переменные ==---
var indexClick = 0;
var tablo = 0;
var topIconTablo = 0;


// ---== модальные окна, выпадашки ==---

// desktop
if ($(window).width() > 767 ) {

  if ($('.header__userFull').hasClass('visible')) {
    $('.header__searchWrap').addClass('header__searchWrap--logged');
  }
// открываем top icons
$('.header__userEmpty .fa-user').on('click', function(e) {
  e.preventDefault();
  if (topIconTablo === 0) {  
    $('.header__userEmptyDrop').addClass('visible');
    $('.header__userEmpty .fa-user').css('z-index', '15');
    topIconTablo = 1;
    if ($('.account__head').hasClass('visible')) {
      $('.account__head').removeClass('visible');
      $('.overlay').removeClass('visible');
      $('.header').css('z-index','auto');
    }
    e.stopPropagation();
  }
});
$('.header__userFull .fa-user').on('click', function(e) {
  e.preventDefault();
  if (topIconTablo === 0) {  
    $('.header__userFullDrop').addClass('visible');
    $('.header__userFull .fa-user').css('z-index', '15');
    topIconTablo = 1;
    if ($('.account__head').hasClass('visible')) {
      $('.account__head').removeClass('visible');
      $('.overlay').removeClass('visible');
      $('.header').css('z-index','auto');
    }
    e.stopPropagation();
  }
});
$('.header__userFull .fa-heart').on('click', function(e) {
  e.preventDefault();
  if (topIconTablo === 0) {  
    $('.header__likedFullDrop').addClass('visible');
    $('.header__userFull .fa-heart').css('z-index', '15');
    topIconTablo = 1;
    if ($('.account__head').hasClass('visible')) {
      $('.account__head').removeClass('visible');
      $('.overlay').removeClass('visible');
      $('.header').css('z-index','auto');
    }
    e.stopPropagation();
  }
});
$('.header__userFull .fa-shopping-basket').on('click', function(e) {
  e.preventDefault();
  if (topIconTablo === 0) {  
    $('.header__cartFullDrop').addClass('visible');
    $('.header__userFull .fa-shopping-basket').css('z-index', '15');
    topIconTablo = 1;
    if ($('.account__head').hasClass('visible')) {
      $('.account__head').removeClass('visible');
      $('.overlay').removeClass('visible');
      $('.header').css('z-index','auto');
    }
    e.stopPropagation();
  }
});

// закрываем top icons по клику мышкой на любое место
$(document).on('click', function(e) {
  console.log(e.target);
  if ($(e.target).closest('.header__userEmptyDrop').length) {
    return;
  }
  else if ($(e.target).closest('.header__userFullDrop').length) {
    return;
  }
  else if ($(e.target).closest('.header__cartFullDrop').length) {
    return;
  }
  else if ($(e.target).closest('.header__likedFullDrop').length) {
    return;
  }
  if ($('.header__userEmptyDrop').hasClass('visible')) {
    $('.header__userEmptyDrop').removeClass('visible');
    $('.header__userEmpty .fa-user').css('z-index', 'auto');
    topIconTablo = 0;
  } 
  else if ($('.header__userFullDrop').hasClass('visible')) {
    $('.header__userFullDrop').removeClass('visible');
    $('.header__userFull .fa-user').css('z-index', 'auto');
    topIconTablo = 0;
  } 
  else if ($('.header__likedFullDrop').hasClass('visible')) {
    $('.header__likedFullDrop').removeClass('visible');
    $('.header__userFull .fa-heart').css('z-index', 'auto');
    topIconTablo = 0;
  }
  else if ($('.header__cartFullDrop').hasClass('visible')) {
    $('.header__cartFullDrop').removeClass('visible');
    $('.header__userFull .fa-shopping-basket').css('z-index', 'auto');
    topIconTablo = 0;
  }
});


// mobile
} else if ($(window).width() <= 767 ) {

// открываем top icons
$('.header__userEmpty .fa-user').on('click', function(e) {
  e.preventDefault();
  if ($('.header__userEmptyDrop').hasClass('visible')){
    $('.header__userEmptyDrop').removeClass('visible');
    $('.overlayTrans').removeClass('visible');
    $('.header__userEmpty .fa-user').css('z-index', 'auto');
  } 
  else {
    $('.header__userEmptyDrop').addClass('visible');
    $('.overlayTrans').addClass('visible');
    $('.header__userEmpty .fa-user').css('z-index', '15');
    if ($('.account__head').hasClass('visible')) {
      $('.account__head').removeClass('visible');
      $('.overlay').removeClass('visible');
      $('.header').css('z-index','auto');
    }
  }
});
$('.header__userFull .fa-user').on('click', function(e) {
  e.preventDefault();
  if ($('.header__userFullDrop').hasClass('visible')) {
    $('.header__userFullDrop').removeClass('visible');
    $('.overlayTrans').removeClass('visible');
    $('.header__userFull .fa-user').css('z-index', 'auto');
  }
  else {
    $('.header__userFullDrop').addClass('visible');
    $('.overlayTrans').addClass('visible');
    $('.header__userFull .fa-user').css('z-index', '15');
    if ($('.account__head').hasClass('visible')) {
      $('.account__head').removeClass('visible');
      $('.overlay').removeClass('visible');
      $('.header').css('z-index','auto');
    }
  }
});
$('.header__userFull .fa-heart').on('click', function(e) {
  e.preventDefault();
  if ($('.header__likedFullDrop').hasClass('visible')) {
    $('.header__likedFullDrop').removeClass('visible');
    $('.overlayTrans').removeClass('visible');
    $('.header__userFull .fa-heart').css('z-index', 'auto');
  }
  else {
    $('.header__likedFullDrop').addClass('visible');
    $('.overlayTrans').addClass('visible');
    $('.header__userFull .fa-heart').css('z-index', '15');
    if ($('.account__head').hasClass('visible')) {
      $('.account__head').removeClass('visible');
      $('.overlay').removeClass('visible');
      $('.header').css('z-index','auto');
    }
  }
});
$('.header__userFull .fa-shopping-basket').on('click', function(e) {
  e.preventDefault();
  if ($('.header__cartFullDrop').hasClass('visible')) {
    $('.header__cartFullDrop').removeClass('visible');
    $('.overlayTrans').removeClass('visible');
    $('.header__userFull .fa-shopping-basket').css('z-index', 'auto');
  }
  else {
    $('.header__cartFullDrop').addClass('visible');
    $('.overlayTrans').addClass('visible');
    $('.header__userFull .fa-shopping-basket').css('z-index', '15');
    if ($('.account__head').hasClass('visible')) {
      $('.account__head').removeClass('visible');
      $('.overlay').removeClass('visible');
      $('.header').css('z-index','auto');
    }
  }
});

// закрываем top icons по клику мышкой на оверлей
$('.overlayTrans').on('click', function(e) {
  e.preventDefault();
  if ($('.header__userEmptyDrop').hasClass('visible')) {
    $('.header__userEmptyDrop').removeClass('visible');
    $('.overlayTrans').removeClass('visible');
    $('.header__userEmpty .fa-user').css('z-index', 'auto');
  } 
  else if ($('.header__userFullDrop').hasClass('visible')) {
    $('.header__userFullDrop').removeClass('visible');
    $('.overlayTrans').removeClass('visible');
    $('.header__userFull .fa-user').css('z-index', 'auto');
  } 
  else if ($('.header__likedFullDrop').hasClass('visible')) {
    $('.header__likedFullDrop').removeClass('visible');
    $('.overlayTrans').removeClass('visible');
    $('.header__userFull .fa-heart').css('z-index', 'auto');
  }
  else if ($('.header__cartFullDrop').hasClass('visible')) {
    $('.header__cartFullDrop').removeClass('visible');
    $('.overlayTrans').removeClass('visible');
    $('.header__userFull .fa-shopping-basket').css('z-index', 'auto');
  }
});


}


// открываем попАпы
$('.header__login').on('click', function(e) {
  e.preventDefault();
  $('.form__login').addClass('visible');
  $('.overlay').addClass('visible');
  // закрываем top icon profile
  $('.header__userEmptyDrop').removeClass('visible');
  $('.overlayTrans').removeClass('visible');
  $('.header__userEmpty .fa-user').css('z-index', 'auto');
  topIconTablo = 0;
});
$('.header__signup').on('click', function(e) {
  e.preventDefault();
  $('.form__signup').addClass('visible');
  $('.overlay').addClass('visible');
  // закрываем top icon profile
  $('.header__userEmptyDrop').removeClass('visible');
  $('.overlayTrans').removeClass('visible');
  $('.header__userEmpty .fa-user').css('z-index', 'auto');
  topIconTablo = 0;
});
if ($(window).width() >= 1100 ) {
  $('.sidebar .fa-comments-o').on('click', function(e) {
    e.preventDefault();
    $('.form__message').addClass('visible');
    $('.overlay').addClass('visible');
  });
}
$('.cart__costDelivery').on('click', function(e) {
  e.preventDefault();
  $('.form__costDelivery').addClass('visible');
  $('.overlay').addClass('visible');
});

// закрываем попАпы по клику мышкой на оверлей
$('.overlay').on('click', function(e) {
  e.preventDefault();
    if ($('.form__login').hasClass('visible')) {
      $('.form__login').removeClass('visible');
      $('.overlay').removeClass('visible');
    }    
    else if ($('.form__signup').hasClass('visible')) {
      $('.form__signup').removeClass('visible');
      $('.overlay').removeClass('visible');
      topIconTablo = 0;
    }
    else if ($('.form__message').hasClass('visible')) {
      $('.form__message').removeClass('visible');
      $('.overlay').removeClass('visible');
    }
    else if ($('.form__costDelivery').hasClass('visible')) {
      $('.form__costDelivery').removeClass('visible');
      $('.overlay').removeClass('visible');
    }
    else if ($('.account__head').hasClass('visible')) {
      $('.account__head').removeClass('visible');
      $('.overlay').removeClass('visible');
      $('.header').css('z-index','auto');
    }
});

// закрываем все по клику на esc
$(window).on('keydown', function(e) {
  if (e.keyCode === 27) {
    if ($('.form__login').hasClass('visible')) {
      $('.form__login').removeClass('visible');
      $('.overlay').removeClass('visible');
    }    
    else if ($('.form__signup').hasClass('visible')) {
      $('.form__signup').removeClass('visible');
      $('.overlay').removeClass('visible');
    }
    else if ($('.form__message').hasClass('visible')) {
      $('.form__message').removeClass('visible');
      $('.overlay').removeClass('visible');
    }
    else if ($('.form__costDelivery').hasClass('visible')) {
      $('.form__costDelivery').removeClass('visible');
      $('.overlay').removeClass('visible');
    }
    else if ($('.header__userEmptyDrop').hasClass('visible')) {
      $('.header__userEmptyDrop').removeClass('visible');
      $('.overlayTrans').removeClass('visible');
      $('.header__userEmpty .fa-user').css('z-index', 'auto');
      topIconTablo = 0;
    }
    else if ($('.header__userFullDrop').hasClass('visible')) {
      $('.header__userFullDrop').removeClass('visible');
      $('.overlayTrans').removeClass('visible');
      $('.header__userFull .fa-user').css('z-index', 'auto');
      topIconTablo = 0;
    }
    else if ($('.header__likedFullDrop').hasClass('visible')) {
      $('.header__likedFullDrop').removeClass('visible');
      $('.overlayTrans').removeClass('visible');
      $('.header__userFull .fa-heart').css('z-index', 'auto');
      topIconTablo = 0;
    }
    else if ($('.header__cartFullDrop').hasClass('visible')) {
      $('.header__cartFullDrop').removeClass('visible');
      $('.overlayTrans').removeClass('visible');
      $('.header__userFull .fa-shopping-basket').css('z-index', 'auto');
      topIconTablo = 0;
    }
    else if ($('.account__head').hasClass('visible')) {
      $('.account__head').removeClass('visible');
      $('.overlay').removeClass('visible');
      $('.header').css('z-index','auto');
      topIconTablo = 0;
    }
  }
});

// кнопка на форме рассчитать доставку
$('.form__costDelivery .form__countBtn').on('click', function(e) {
  e.preventDefault(); // временно
  $('.form__costDelivery .form__countBtn').addClass('hidden');
  $('.form__costDelivery .form__countRes').addClass('visible');

  // наверно это должно быть уже после возврата верстки от сервера
  var x = $('.form__costResult').html();
  $('.cart__costDelivery').html('<span style="padding-right: 20px">Доставка</span>+<span style="padding-right: 3px; padding-left: 5px">'+x+'</span>р.');
  
});

$('.form__costDelivery .form__countBtn2').on('click', function(e) {
  e.preventDefault(); // временно
  var x = $('.form__costResult').html();
  $('.cart__costDelivery').html('<span style="padding-right: 20px">Доставка</span>+<span style="padding-right: 3px; padding-left: 5px">'+x+'</span>р.');
});

// личный кабинет, переключение страниц, имитация селекта
  // открываем селект
$('.m-accountHead').on('click', function() {
  $('.header').css('z-index','35');
  $('.account__head').addClass('visible');
  $('.overlay').addClass('visible');
});
  // выбираем нужный пункт
$('.account__head a').on('click', function(e) {
  e.preventDefault();
  var headTitleInner = $(this).html();
  var amountElem = $(this).next().clone();
  var arrayLink = $('.account__head').find('a');
  $('.m-accountHead').html(headTitleInner);
  $('.m-accountHead').append(amountElem);
  arrayLink.each(function(index, elem) {
    $(elem).removeClass('active');
  });
  $(this).addClass('active');
  // закрываем селект
  $('.account__head').removeClass('visible');
  $('.overlay').removeClass('visible');
  $('.header').css('z-index','auto');
});



// ---== сайдбар ==---

// desktop десктопная версия ==---
if ($(window).width() > 767 ) {

// подстраиваем высоту сайдбара под вьюпорт
var hView = $(window).height();
var hSidebar = $('.sidebar__fixed').height();
var marginTopPx = $('.sidebar .menu__phoneItem').css('margin-top');
var marginBottomPx = $('.sidebar .menu__phoneItem').css('margin-bottom');
var marginTop = parseInt(marginTopPx);
var marginBottom = parseInt(marginBottomPx);

if (hView < hSidebar) {
  var x = (hSidebar - hView)/2;
  var newMarginTop = marginTop - x;
  var newMarginBottom = marginBottom - x;
  $('.sidebar .menu__phoneItem').css('margin-top', newMarginTop);
  $('.sidebar .menu__phoneItem').css('margin-bottom', newMarginBottom);
}

// var arrayMenu = $('.submenuWrap > .submenuScrollHidden > .submenuScroll > .submenu > li > .submenuWrap');
// $(arrayMenu).each(function(i, elem) {
// });

// console.log(arrayMenu);


// фиксация меню при прокрутки
$(window).on('scroll', menuFixed);

function menuFixed() {
  var top = $(window).scrollTop();
  var view = $(window).height();
  var page = $('body').height();
  var footer = $('.footer').height();
  var header = $('.header').height();
  var sidebarFixed = $('.sidebar__fixed').height();
  var sidebarBottom = page - (view + (footer - (view - sidebarFixed)));
  if (top <= header) {
    $('.sidebar__fixed').css({
      'position': 'absolute',
      'top': '0',
      'bottom': 'auto'
    });
  } else if ((top > header) && (top < sidebarBottom)) {
    $('.sidebar__fixed').css({
      'position': 'fixed',
      'top': '0',
      'bottom': 'auto'
    });
  } else if (top >= sidebarBottom) {
    $('.sidebar__fixed').css({
      'position': 'absolute',
      'top': 'auto',
      'bottom': '0'
    });
  }
} 



// начало - только для дескотопов, не для планшетов
if ($(window).width() >= 1100 ) {

// ховер на сайдбар
$('.sidebar').hover(function(e) {
  $(this).toggleClass('sidebar__hover');
  $('.sidebar__fixed').toggleClass('sidebar__hover');
});
  

//ховер на меню первого уровня
$('.sidebar .menu__catalog').hover(function() {

  function rec(obj) {
    var w = $('.sidebar__fixed').width();
    // console.log(w);
    if (w === 200) {
      $('.sidebar__fixed').css('overflow', 'visible');
      obj.find('> .submenuWrap').addClass('visible');

      // нужна ли скролл-стрелка?
      var h = obj.find('.submenu').height();
      var hScroll = obj.find('.submenuScroll').height();
      if (h > hScroll) {
        obj.find('.submenuWrap__arrDown').last().addClass('visible');
        if (!(obj.find('.submenu').first().has('.emptyLi').length)) {
          // console.log('не имеет, добавил пустой ли');
          obj.find('.submenu').first().append('<li class="emptyLi" style="height:40px"></li>');
        }
      }
      clearInterval(watchSidebar);
    }
  }

  watchSidebar = setInterval(rec, 50, $(this));

  $('.sidebar').addClass('sidebar__hover2');
  $('.sidebar__fixed').addClass('sidebar__hover2');

  // e.stopPropagation();

}, function() {

  clearInterval(watchSidebar);

  $('.sidebar__fixed').css('overflow', 'hidden');  
  $('.submenuWrap').removeClass('visible');
  $('.sidebar').removeClass('sidebar__hover2');
  $('.sidebar__fixed').removeClass('sidebar__hover2');

});

// ховер меню после первого уровня
$('.sidebar .submenuWrap li').hover(
  // наводим мышь
  function() {
    $(this).find('> .submenuWrap').addClass('visible');
    // нужна скролл-стрелка?
    var h = $(this).find('.submenu').height();
    var hScroll = $(this).find('.submenuScroll').height();
    if (h > hScroll) {
      $(this).find('.submenuWrap__arrDown').last().addClass('visible');
      if (!($(this).find('.submenu').first().has('.emptyLi').length)) {
        // console.log('не имеет, добавил пустой ли');
        $(this).find('.submenu').first().append('<li class="emptyLi" style="height:40px"></li>');
      }
    }
  },
  // уводим мышь
  function() {
    $(this).find('> .submenuWrap').removeClass('visible');
  }
);

// конец (только для дескотопов, не для планшетов)
}

// только для планшета, не для десктопа, иммитируем ховер
else if ($(window).width() < 1100 ) {

$('.sidebar li').data('clickIndex', 0);

// ховер на сайдбар пункты
$('.sidebar .menu > li').click(function(e) {
  if ($(this).is('.menu__catalog')) return;
  if ($(this).data('clickIndex') === 0) {
    e.preventDefault();
    $('.sidebar').addClass('sidebar__hover2');
    $('.sidebar__fixed').addClass('sidebar__hover2');
    $('.sidebar .menu > li').data('clickIndex', 1);
    e.stopPropagation();
  }
});


$('.sidebar .fa-comments-o').on('click', function(e) {
  // console.log($(this).closest('li').data('clickIndex'));
  if ($(this).closest('li').data('clickIndex') === 1) {
    e.preventDefault();
    $('.form__message').addClass('visible');
    $('.overlay').addClass('visible');
    e.stopPropagation();
  }
});


//ховер на меню первого уровня
$('.sidebar .menu__catalog').click(function(e) {

  $(this).find('> .submenuWrap').removeClass('visible');

  // сколько раз нажимали сюда?
  if ($(this).data('clickIndex') === 0) {
    e.preventDefault();

    function rec(obj) {
      var w = $('.sidebar__fixed').width();
      console.log(w);
      if (w === 200) {
        $('.sidebar__fixed').css('overflow', 'visible');
        obj.find('> .submenuWrap').addClass('visible');

        // нужна ли скролл-стрелка?
        var h = obj.find('.submenu').height();
        var hScroll = obj.find('.submenuScroll').height();
        if (h > hScroll) {
          obj.find('.submenuWrap__arrDown').last().addClass('visible');
          if (!(obj.find('.submenu').first().has('.emptyLi').length)) {
            // console.log('не имеет, добавил пустой ли');
            obj.find('.submenu').first().append('<li class="emptyLi" style="height:40px"></li>');
          }
        }
        clearInterval(watchSidebar);
      }
    }
    watchSidebar = setInterval(rec, 50, $(this));
    $('.sidebar').addClass('sidebar__hover2');
    $('.sidebar__fixed').addClass('sidebar__hover2');

    // один раз кликнули
    $('.sidebar .menu > li').data('clickIndex', 1);
    // $(this).data('clickIndex', 1);
  }

  e.stopPropagation();
});


// ховер меню после первого уровня
$('.sidebar .submenuWrap li').click(function(e) {
  $(this).siblings().find('> .submenuWrap').removeClass('visible');

  // сколько раз нажимали сюда?
  if ($(this).data('clickIndex') === 0) {
    e.preventDefault();
      $(this).find('> .submenuWrap').addClass('visible');
      // нужна скролл-стрелка?
      var h = $(this).find('.submenu').height();
      var hScroll = $(this).find('.submenuScroll').height();
      if (h > hScroll) {
        $(this).find('.submenuWrap__arrDown').last().addClass('visible');
        if (!($(this).find('.submenu').first().has('.emptyLi').length)) {
          // console.log('не имеет, добавил пустой ли');
          $(this).find('.submenu').first().append('<li class="emptyLi" style="height:40px"></li>');
        }
      }
    // один раз кликнули
    $(this).data('clickIndex', 1);
  }

  e.stopPropagation();
});


$(document).click(function(e) {

    if ($(e.target).closest('.sidebar .menu__catalog').length) return;
    $('.sidebar__fixed').css('overflow', 'hidden');  
    $('.submenuWrap').removeClass('visible');
    $('.sidebar').removeClass('sidebar__hover2');
    $('.sidebar__fixed').removeClass('sidebar__hover2');
    // обнуляем счетчик кликов
    $('.sidebar li').data('clickIndex', 0);
    e.stopPropagation();

});

// конец (только для планшета, не для десктопа, иммитируем ховер)
}



// переворачиваем стрелку при промотки до конца (событие на скролл)
$('.sidebar .submenuScroll').on('scroll', function() {

  var arr = $(this).closest('.submenuScrollHidden').next('.submenuWrap__arrDown');
  var top = $(this).scrollTop();
  var h1 = $(this).height();
  var h2 = $(this).find('> .submenu').height();
  var topMax = h2 - h1;

  // console.log(topMax+' '+top);

  if (top < topMax) {
    if (arr.hasClass('arrUp')) {
      arr.removeClass('arrUp');
    }
  } else {
    // console.log('поменялась стрелка');
    arr.addClass('arrUp');
  }

});


// ховер на скролл-стрелку
$('.submenuWrap__arrDown').on('mouseenter', function() {

  var x = $(this).prev('.submenuScrollHidden').children('.submenuScroll');

  function scroll() {
    x.animate({
      scrollTop: '+=40'
    }, 
    { 
      duration: 400,
      done: scroll
    });
  }

  scroll();

}).on('mouseleave', function() {
    var x = $(this).prev('.submenuScrollHidden').children('.submenuScroll');
    x.stop();

});



// mobile мобильная версия ==---
} else if ($(window).width() <= 767 ) {

// открываем меню
$('.menuMobileBtn').click(function(e) {
  
  if (tablo === 0) {
    $('.sidebar').addClass('visible');
    $(this).addClass('open');
    tablo = 1;

    e.stopPropagation();
  }

});

// закрываем меню
$(document).click(function(e) {

  if ($(e.target).closest('.sidebar').length) {
    return;
  }
  $('.sidebar .submenuWrap__text').html('');
  $('.sidebar .submenuWrap').removeClass('visible');
  $('.sidebar').removeClass('visible');
  $('.menuMobileBtn').removeClass('open');
  tablo = 0;

});


// клик на меню первого уровня
$('.sidebar .menu__catalog').on('click', function(e) {
  
  e.preventDefault();
  // проверяем на тот ли li мы нажали
  if (!($(this).find('> .submenuWrap').hasClass('visible'))) {

    $(this).find('> .submenuWrap').addClass('visible');

    // хлебные крошки
    $('.submenuWrap__text > span').removeClass('del');
    var html = $(this).find('> a').html();
    var crumbs = $(this).find('.submenuWrap__text').first();
    crumbs.append(html);
    $('.submenuWrap__text > span').last().addClass('del');

    // скролл-стрелки
    var h = $(this).find('.submenu').height();
    var hS = $(this).find('.submenuScroll').height();
    if (h > hS) {
      $(this).find('.submenuWrap__arrDown').last().addClass('fa');
      // $(this).find('.submenuWrap__arrUp').first().addClass('fa');
    }
    e.stopPropagation();

  }
});

// клик на последующие уровни
$('.sidebar .menu__catalog li').on('click', function(e) {
  e.preventDefault();

  // проверяем на тот ли li мы нажали
  if (!($(this).find('> .submenuWrap').hasClass('visible'))) {

    $(this).find('> .submenuWrap').addClass('visible');

    // хлебные крошки
    $('.submenuWrap__text > span').removeClass('del');
    var prevHtml = $(this).closest('.submenuWrap').find('.submenuWrap__text').html();
    var nextHtml = $(this).find('> a').html();
    var crumbs = $(this).find('.submenuWrap__text').first();
    crumbs.append(prevHtml+'<span>'+nextHtml+'</span>');
    $('.submenuWrap__text > span').last().addClass('del');

   // скролл-стрелки
    var h = $(this).find('.submenu').height();
    var hS = $(this).find('.submenuScroll').height();
    // console.log(h+' '+hS)
    if (h > hS) {
      $(this).find('.submenuWrap__arrDown').last().addClass('fa');
      // $(this).find('.submenuWrap__arrUp').first().addClass('fa');
    }
    e.stopPropagation();
  }
});

// клик Назад
$('.submenuWrap__arrLeft').click(function(e) {

  $(this).closest('.submenuWrap').removeClass('visible');
  $(this).siblings('.submenuWrap__crumbs').find('.submenuWrap__text').html('');
  $(this).parents('.submenuWrap').eq(1).find('.submenuWrap__text > span').last().addClass('del');
  e.stopPropagation();

});


// появление и исчезание стрелки
$('.sidebar .submenuScroll').on('scroll', function() {

  var arrDown = $(this).closest('.submenuScrollHidden').next('.submenuWrap__arrDown');
  var arrUp = $(this).closest('.submenuScrollHidden').prev('.submenuWrap__arrUp');
  var top = $(this).scrollTop();
  var h1 = $(this).height();
  var h2 = $(this).find('> .submenu').height();
  var topMax = h2 - h1;

  if (top === 0) {
    arrUp.removeClass('fa');

  }
  else if (top < topMax) {
    arrUp.addClass('fa');
    arrDown.addClass('fa');

  }
  else if (top === topMax) {
    arrDown.removeClass('fa');

  }
});


}




// ---== фильтр цен ==---

var sliderRange = $(".sliderUI").slider({
  range: true,
  min: 0,
  max: 150000,
  step: 100,
  values: [ 0, 100000 ],
  slide: function (event, ui) {
    $('.sliderRange__min').val(ui.values[0]);
    $('.sliderRange__max').val(ui.values[1]);
  }
});

$(".sliderRange__min").val(sliderRange.slider("values", 0));
$(".sliderRange__max").val(sliderRange.slider("values", 1));

$('.sliderRange__min').change(function() {
  var val1 = $('.sliderRange__min').val();
  var val2 = $('.sliderRange__max').val();
  if(parseInt(val1) > parseInt(val2)){
    val1 = val2;
    $('.sliderRange__min').val(val1);
  }
  sliderRange.slider("values", 0, val1);  
});

$('.sliderRange__max').change(function() {
  var val1 = $('.sliderRange__min').val();
  var val2 = $('.sliderRange__max').val();
  if (val2 > 300) { 
    val2 = 300;
    $('.sliderRange__max').val(300);
  }
  if (parseInt(val1) > parseInt(val2)) {
    val2 = val1;
    $('.sliderRange__max').val(val2);
  }
  sliderRange.slider("values", 1, val2);  
});

$('.sliderRange__min, .sliderRange__max').keypress(function(event) {
  var key, keyChar;
  if (!event) var event = window.event;  
  if (event.keyCode) key = event.keyCode;
  else if (event.which) key = event.which;
  if (key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
  keyChar=String.fromCharCode(key);
  if (!/\d/.test(keyChar)) return false;
});




// ---== слайдеры ==---

// на главной ==---

// инициализируем слайдер (создается новая разметка для слайдера)
$('.slider').slick({
  // initialSlide: 1
  // arrows: false,
  // mobileFirst: true,
  // prevArrow: '',
  // nextArrow: '',
  autoplay: true,
  autoplaySpeed: 10000,
  pauseOnHover: false,
  appendArrows: $('.slideArrows'),
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 2200,
    settings: {
      slidesToShow: 1
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1
  }
}]

});


// в карточке товара ==---

// инициализируем два слайдера (основной и сабнаил)
$('.productCard__sliderFor').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.productCard__sliderNav'
});

$('.productCard__sliderNav').slick({
  // variableWidth: true,
  // initialSlide: 2,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  focusOnSelect: true,
  // centerMode: true,
  // centerPadding: '0px',
  asNavFor: '.productCard__sliderFor',
  // vertical: true
  responsive: [{
    breakpoint: 768,
    settings: {
  //     // variableWidth: true,
  //     // adaptiveHeight: true,
      vertical: true,
      verticalSwiping: true
    }
  }]

});


// ---== селект ==---

// инициализируем
$('.selectMenu').selectmenu({
  // width: 200
});


// ---== кнопка выбрать файл ==---

$(".accountProfileForm__fileUpload input[type='file']").change(function() {

  var fileName = $(this).val().replace(/.*\\/, "");
  $(".accountProfileForm__fileName").html(fileName);
  $('.accountProfileForm__choose').css('display', 'none');
  $('.accountProfileForm__upload').css('display', 'inline-block');

});

$('.accountProfileForm__upload').click(function() {

  $(".accountProfileForm__fileName").html('');
  $('.accountProfileForm__choose').css('display', 'inline-block');
  $('.accountProfileForm__upload').css('display', 'none');

});


// ---== кнопка удалить товар из сравнения ==---

$('.accountCompare__del').click(function() {

  var tdBtn = $(this).closest('td');
  var tdBtnIndex = $('.accountCompare__btnList > td').index(tdBtn);

  // console.log(tdBtnIndex);

  $('.accountCompare tr').each(function(index) {

    $(this).find('> td').eq(tdBtnIndex).remove();

  });

});


// ---== активируем лайк [like] ==----

$('.productItem .productItem__like').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('active');

});


$('.productCard .btn--favorite').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('active');

});

// ---== шаблон для телфона ==----
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(a.length<o.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a)},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){vara=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

$('.phoneMask').mask("+7 (999) 999-99-99"); 


// конец
});

