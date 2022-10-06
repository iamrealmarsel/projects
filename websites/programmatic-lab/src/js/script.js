$(function () {
  // начала документа


$('body').on('touchmove', function(e) {
  e.preventDefault();
});


// слайдер отзывов
if ($('.swiper-container').length) {

// увеличение
  $('.swiper-slide').magnificPopup({

    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    },
    gallery: {
      enabled: true
    }

  });

// карусель
  var mySwiper = new Swiper ('.swiper-container', {

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 30,

    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1,
        // spaceBetween: 20
      }
    }

  })

}

// бургер - меню

$('.navigation a').hover(function() {
  $('.navigation a').not(this).css('color','#B3B3B3');
},
function() {
  $('.navigation a').css('color','#000');
});


$('.burger').click(function() {
  $('.pagemenu').slideDown().css('display', 'flex');
});

$('.burger_close').click(function() {
  $('.pagemenu').slideUp();
});


// размер экрана

var winHeight = $(window).height();
var winWidth = $(window).width();

// цвета

var colors = [
// синий
['#97ABFF', '#123597'],
// зеленый
['#81FBB8', '#28C76F'],
// фиолетовый
['#CE9FFC', '#7367F0'],
// оранжево-красный
['#FEB692', '#EA5455'],
// голубой
['#65FDF0', '#1D6FA3'],
// оранжевый
['#FFE985', '#FA742B']
]


// мобильное вертикальное

if (winWidth <= 767) {

$(window).resize(function() {

  winWidth = $(window).width();  
  if (winWidth > 767) {
    location.reload();
  }

});


var slideIndex = 1;

$(".slider").onepage_scroll({
  sectionContainer: ".slide",
  easing: "ease",
  animationTime: 1000,
  pagination: true,
  updateURL: false,
  beforeMove: function(index) {
    $('#bgGradient_mob stop').eq(0).attr('stop-color', colors[index-1][0]);
    $('#bgGradient_mob stop').eq(1).attr('stop-color', colors[index-1][1]);
    $('#btnGradient stop').eq(0).attr('stop-color', colors[index-1][0]);
    $('#btnGradient stop').eq(1).attr('stop-color', colors[index-1][1]);
  },
  afterMove: function(index) {},
  loop: false,
  keyboard: true,
  responsiveFallback: false,
  // direction: "horizontal"         
  direction: "vertical"
});


// декстопное

} else {

$(window).resize(function() {

  winWidth = $(window).width();  
  if (winWidth <= 767) {
    location.reload();
  }

});

var slideIndex = 1;

$(".slider").onepage_scroll({
  sectionContainer: ".slide",
  easing: "ease",
  animationTime: 1000,
  pagination: true,
  updateURL: false,
  beforeMove: function(index) {
    colorChange(index);
  },
  afterMove: function(index) {

    // console.log(index)

  },
  loop: false,
  keyboard: true,
  responsiveFallback: false,
  direction: "horizontal"
  // direction: "vertical"
});


function colorChange(index) {

  $('#bgGradient stop').eq(0).attr('stop-color', colors[index-1][0]);
  $('#bgGradient stop').eq(1).attr('stop-color', colors[index-1][1]);
  $('#btnGradient stop').eq(0).attr('stop-color', colors[index-1][0]);
  $('#btnGradient stop').eq(1).attr('stop-color', colors[index-1][1]);
  if (index == 6) {
    $('.onepage-pagination').addClass('white');
    $('.footer__contacts').addClass('footer_slideDown');
    $('.bgSvg').fadeOut();
    $('.page_bg').fadeIn();
  } else {
    $('.onepage-pagination').removeClass('white');
    $('.footer__contacts').removeClass('footer_slideDown');
    $('.bgSvg').fadeIn();
    $('.page_bg').fadeOut();
  }

}

}


var pagIndex;
var pagActive;

// ховер пагинации

$('.onepage-pagination li a').mouseenter(function() {

  pagActive = $(this).parents('.onepage-pagination').find('li a.active');
  pagIndex = pagActive.removeClass('active').data('index');
  $(this).addClass('active');

})
.mouseleave(function() {

  if (!$(this).data('click')) {

    $(this).removeClass('active');
    $(this).parents('.onepage-pagination').find('a[data-index='+pagIndex+']').addClass('active');

  }

});


$('.onepage-pagination li a').click(function() {

  $('.onepage-pagination li a').data('click', 0);
  $(this).data('click', 1);

  console.log($(this));

});


$('[data-slide]').click(function(e) {

  e.preventDefault();
  $(".slider").moveTo($(this).data('slide'));

});



// модалка

$('[data-modal]').on('click', function(e) {
  e.preventDefault();
  var target = $(this).data('target');
  $('.overlay').fadeIn();
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
$( ".js_validate" ).each( function() {
  $(this).validate({

    rules: {
      name: 'required',
      tel: 'required',
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: "Необходимо заполнить",
      tel: "Необходимо заполнить",
      email: {
        required: "Необходимо заполнить",
        email: "Неверный формат"
      }
    },
    submitHandler: function(form) {

      // $(form).submit(function(e) {
        // e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(form).serialize(),
          success: function() {
            document.location.href = 'typ.html';
          }
        });
        // return false;
      // });

    }
  
  });
});


$('.inp').change(function() {
  if($(this).val())
    $(this).addClass('filled');
  else
    $(this).removeClass('filled');
});








// маска телефона
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(a.length<o.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a)},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){vara=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

$('.telMask').mask("+9 (999) 999-99-99"); 


  // конец документа
});