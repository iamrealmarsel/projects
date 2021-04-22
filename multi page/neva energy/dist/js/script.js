$(function () {
// начала документа


// загрузка файла

$('.js_file').on('change', function() {

  var x = $(this).val().replace(/.*\\/, "");
  $(this).closest('.reqForm__item').find('.reqForm__upload').hide();
  $(this).closest('.reqForm__item').find('.reqForm__file').show();
  $(this).closest('.reqForm__item').find('.reqForm__filetxt').text(x);

});

$('.js_trash').on('click', function(e) {

  e.preventDefault()
  $(this).closest('.reqForm__item').find('.js_file').val("");
  $(this).closest('.reqForm__item').find('.reqForm__file').hide();
  $(this).closest('.reqForm__item').find('.reqForm__upload').show();

});


// селект меню

$('.reqForm__select').on('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).find($('.reqForm__selectmenu')).toggle();
});

$('.reqForm__selectmenu li').on('click', function(e) {

  var x = $(this).text();
  $(this).closest('.reqForm__item').find('.reqForm__selecttxt').addClass('active').text(x);
  $(this).closest('.reqForm__item').find('.js_select').val(x);

});

$(document).on('click', function() {
  $('.reqForm__selectmenu').hide();
});



// бургер

$('.burger').click(function() {
  $('.menu').addClass('active');
  $('.layout__overlay').fadeIn();
});

$('.menu .fa-close, .layout__overlay, .layout__ovlModal').click(function() {
  close();
});

function close() {
  $('.menu').removeClass('active');
  $('.modal').removeClass('open');
  $('.layout__overlay').fadeOut();
  $('.layout__ovlModal').fadeOut();
}


// навигация

if ($(window).width() <= 575) {

  $('.navigation .btn_city').on('click', function() {
    $('.menuCity').slideToggle(400);
    $(this).toggleClass('active');
  });

  $('.menuCity li').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).find('> ul').slideToggle(400);
    $(this).toggleClass('rotate');
  });

}


// слайдер

if ($('.window').length) {

  $('.window').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

}


// модалка

$('[data-modal]').on('click', function(e) {
  e.preventDefault();
  var target = $(this).data('target');
  $('.layout__ovlModal').fadeIn();
  $('#'+target).fadeIn().addClass('open');
});

$('.modal').on('click', function(e) {
  e.stopPropagation()
});

$('.js-close').on('click', function(e) {
  e.preventDefault();
  $('.modal').fadeOut().removeClass('open');
  $('.overlay').fadeOut();
});



// подписка

// $(".js-submit").submit(function(e) {
//   e.preventDefault();
//   $.ajax({
//     type: "POST",
//     url: "mail.php",
//     data: $(this).serialize(),
//     success: function() {
//       document.location.href = 'typ.html';
//     }
//   });
//   return false;
// });


// валидация формы
// $( ".js_validate" ).each( function() {
//   $(this).validate({

//     rules: {
//       name: 'required',
//       tel: 'required',
//       email: {
//         required: true,
//         email: true
//       }
//     },
//     messages: {
//       name: "Необходимо заполнить",
//       tel: "Необходимо заполнить",
//       email: {
//         required: "Необходимо заполнить",
//         email: "Неверный формат"
//       }
//     },
//     submitHandler: function(form) {

//       // $(form).submit(function(e) {
//         // e.preventDefault();
//         $.ajax({
//           type: "POST",
//           url: "mail.php",
//           data: $(form).serialize(),
//           success: function() {
//             document.location.href = 'typ.html';
//           }
//         });
//         // return false;
//       // });

//     }
  
//   });
// });



// маска телефона
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(a.length<o.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a)},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){vara=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

$('.telMask').mask("+7 (999) 999-99-99"); 

// конец документа
});


// карта

if ($('#map').length) {
  ymaps.ready(init);
}

function init() {

  var myMap = new ymaps.Map("map", {
    center: [59.971159, 30.338155], 
    zoom: 16
  });

  myMap.controls.remove('zoomControl');
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');

  myPiter = new ymaps.Placemark([59.971159, 30.338155], { 
    // balloonContent: '194044, г. Санкт-Петербург, Зеленков переулок, д. 7А, литер Б',
    iconCaption: 'Зеленков переулок, д. 7A'
  });
  mySlanci = new ymaps.Placemark([59.112885, 28.090094], { 
    // balloonContent: '188560, Ленинградская область, г. Сланцы, ул. Кирова, д. 48А',
    iconCaption: 'ул. Кирова, д. 48А'

  });
  myPushkin = new ymaps.Placemark([57.025395, 28.934538], { 
    // balloonContent: '181370, Псковская область, Пушкиногорский район, РП Пушкинские горы, ул. Лермонтова, д. 14',
    iconCaption: 'ул. Лермонтова, д. 14'

  });
  myGdov = new ymaps.Placemark([58.752115, 27.825648], { 
    // balloonContent: '181600, Псковская область, Гдовский район, г. Гдов, Поличенский переулок, д. 1А',
    iconCaption: 'Поличенский переулок, д. 1А'

  });

  myMap.geoObjects
    .add(myPiter)
    .add(myGdov)
    .add(myPushkin)
    .add(mySlanci);


  $('.js_piter').on('click', function(e) {
    e.preventDefault();
    $('.map__address').removeClass('active');
    $(this).addClass('active');
    myMap.setCenter([59.971159, 30.338155], 16);
    var x = "194044, <span class='nowrap'>г. Санкт-Петербург, </span> <span class='nowrap'>Зеленков переулок,</span> <span class='nowrap'>д. 7А</span>";
    $('.js_address').html(x);
    var y = "+7 (812) 542-91-92";
    $('.js_tel').html(y);
    var z = "spb@nevaenergia.com";
    $('.js_email').html(z);
  });
  $('.js_slanci').on('click', function(e) {
    e.preventDefault();
    $('.map__address').removeClass('active');
    $(this).addClass('active');
    myMap.setCenter([59.112885, 28.090094], 16);
    var x = "188560, Ленинградская область, <span class='nowrap'>г. Сланцы,</span> <span class='nowrap'>ул. Кирова,</span> <span class='nowrap'>д. 48А</span>";
    $('.js_address').html(x);
    var y = "+7 (81374) 2-27-84";
    $('.js_tel').html(y);
    var z = "slantsy@nevaenergia.com";
    $('.js_email').html(z);
  });
  $('.js_pushkin').on('click', function(e) {
    e.preventDefault();
    $('.map__address').removeClass('active');
    $(this).addClass('active');
    myMap.setCenter([57.025395, 28.934538], 16);
    var x = "181370, Псковская область, Пушкиногорский район, <span class='nowrap'>РП Пушкинские</span> горы, <span class='nowrap'>ул. Лермонтова,</span> <span class='nowrap'>д. 14</span>";
    $('.js_address').html(x);
    var y = "+7 (81146) 2-10-50";
    $('.js_tel').html(y);
    var z = "pushgory@nevaenergia.com";
    $('.js_email').html(z);
  });
  $('.js_gdov').on('click', function(e) {
    e.preventDefault();
    $('.map__address').removeClass('active');
    $(this).addClass('active');
    myMap.setCenter([58.752115, 27.825648], 16);
    var x = "181600, Псковская область, Гдовский район, <span class='nowrap'>г. Гдов,</span> Поличенский переулок, <span class='nowrap'>д. 1А</span>";
    $('.js_address').html(x);
    var y = "+7 (81131) 2-17-53";
    $('.js_tel').html(y);
    var z = "gdov@nevaenergia.com";
    $('.js_email').html(z);
  });

}

// питер
// 59.971159, 30.338155
// сланцы
// 59.112885, 28.090094
// гдов
// 58.752115, 27.825648
// пушкинский район
// 57.025395, 28.934538








