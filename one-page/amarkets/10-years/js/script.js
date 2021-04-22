$(function() {
// начало документа


// переменные
var $ww = $(window).width();
var $wh = $(window).height();
var $balloonFront = $('.section3 .balloonFront');
var $balloonBack1 = $('.section3 .balloonBack1');
var $balloonBack2 = $('.section3 .balloonBack2');
var $numbers1 = $('.section4 .numbers');
var $numbers2 = $('.section5 .numbers');
var $numberDefault1 = 1600;
var $numberDefault2 = 150000;


if ($ww < 767) {

// слайдер в мобильнике
// $('.awardList').slick({


// });

  $(window).resize(function() {
    var $wwn = $(window).width();
    if ($wwn >= 768) {
      location.href = location.href;
    }
  });
  
}

if ($ww >= 768) {

$(window).resize(function() {
  location.href = location.href;
});


// контроллер
var controller = new ScrollMagic.Controller();


// параллакс гор
var $mountainBack = $('.section1 .bcg_back');
var $num10 = $('.section1 .num10');
var mountainTl = new TimelineMax()
  .to($mountainBack, 1, {y: '20%'})
  .to($num10, 0.7, {y: '50%', ease: Power0.easeIn}, 0)
  ;
// параллакс гор
var mountainPx = new ScrollMagic.Scene({
  triggerElement: '.section1',
  triggerHook: 0,
  // offset: 50,
  duration: '80%'
})
.setTween(mountainTl)
// .addIndicators()
.addTo(controller)
;

// var headline1 = $('.section2 .title');
// var headline2 = $('.section2 .text1');
// var headline3 = $('.section2 .text2');
// var headlineTl = new TimelineMax()
// .from(headline1, 1, {autoAlpha: 0, y: 100, ease: Circ.easeOut})
// .from(headline2, 1, {autoAlpha: 0, y: 100, ease: Circ.easeOut})
// .from(headline3, 1, {autoAlpha: 0, y: 100, ease: Circ.easeOut})
// ;

// new ScrollMagic.Scene({
//   triggerElement: ".section2",
//   triggerHook: 0.7,
//   // offset: 200,
//   duration: 500
// })
// .setTween(headlineTl)
// // .addIndicators()
// .addTo(controller);



// горизонтальная прокрутка
var $SlideLeftMove = '-' + (15800 - $ww) + 'px';
var pause = $('.pause');
var slideHz = new TimelineMax()
  .to(".slideContainer", 1,   {x: $SlideLeftMove, ease: Power0.easeNone})
  .to(pause, 0.4,   {autoAlpha: 0})  
  ;

// горизонтальная прокрутка
new ScrollMagic.Scene({
    triggerElement: ".pinContainer",
    triggerHook: 0,
    duration: 25000
  })
  .setPin(".pinContainer")
  .setTween(slideHz)
  // .addIndicators({name: 'main1'})
  .addTo(controller);


// пауза
// var pause = $('.slideContainer');
// var pauseTw = new TweenMax.to(".slideContainer", 1, {autoAlpha:0})

// new ScrollMagic.Scene({
//     triggerElement: ".pinContainer",
//     triggerHook: 0,
//     duration: 1000,
//     offset: 15399
//   })
//   .setPin(".pinContainer")
//   .setTween(pauseTw)
//   .addIndicators({name: 'main2'})
//   .addTo(controller);

  // // горизонтальная прокрутка
  // new ScrollMagic.Scene({
  //     triggerElement: ".pinContainer",
  //     triggerHook: 0,
  //     duration: $wh,
  //     offset: 15400
  //   })
  //   .setPin(".pinContainer")
  //   .addIndicators({name: 'main'})
  //   .addTo(controller);



// шарики
var balloons = new TimelineMax()
  .to($balloonFront, 1,   {top: -200, ease: Power1.easeOut})
  .to($balloonBack1, 1,   {top: '35%', ease: Power2.easeOut}, 0)
  .to($balloonBack2, 1,   {top: '50%', ease: Circ.easeOut}, 0)
  ;
// шарики
new ScrollMagic.Scene({
    triggerElement: ".balloonTrigger",
    triggerHook: 0.5,
    duration: 1200
  })
  .setTween(balloons)
  // .addIndicators()
  .addTo(controller)
  ;




// растущий график
var graphic = $('.section3 .graphic');
var path = $('.section3 .path');
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: 2000,
    offset: 250
  })
  .setTween(TweenMax.from(path, 1, {drawSVG:0}))
  // .addIndicators()
  .addTo(controller)


// учеличение числа
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: 3500,
    offset: 500
  })
  // .addIndicators()
  .addTo(controller)
  .on("progress", function(){
    var nnum = $numbers1.text();
    nnum++;
    $numbers1.text(nnum);
  })
  .on("enter", function(){
    $numbers1.text('1600');
  })
  .on("leave", function(){
    $numbers1.text('1600');
  })
  ;


// спидометр
var speedTl = new TimelineMax()
.to($('.section4 .speed1'), 1, { x: 33, y: -53, rotation: 45, autoAlpha: 0, ease: Power0.easeNone})
.to($('.section4 .speed2'), 1, { autoAlpha: 1 , ease: Power0.easeNone}, '-=0.7')
.to($('.section4 .speed2'), 1, { x: 51, y: -34, rotation: 40, autoAlpha: 0, ease: Power0.easeNone})
.to($('.section4 .speed3'), 1, { autoAlpha: 1 , ease: Power0.easeNone}, '-=0.7')
.to($('.section4 .speed3'), 1, { x: 60, y: -8, rotation: 28, autoAlpha: 0, ease: Power0.easeNone})
.to($('.section4 .speed4'), 1, { autoAlpha: 1 , ease: Power0.easeNone}, '-=0.7')
.to($('.section4 .speed4'), 1, { x: 55, y: 25, rotation: 25, autoAlpha: 0, ease: Power0.easeNone})
.to($('.section4 .speed5'), 1, { autoAlpha: 1 , ease: Power0.easeNone}, '-=0.7')
.to($('.section4 .speed5'), 1, { x: 45, y: 80, rotation: 35, autoAlpha: 0, ease: Power0.easeNone})
.to($('.section4 .speed6'), 1, { autoAlpha: 1 , ease: Power0.easeNone}, '-=0.7')
.to($('.section4 .speed6'), 1, { x: 10, y: 70, rotation: 24, autoAlpha: 0, ease: Power0.easeNone})
.to($('.section4 .speed7'), 1, { autoAlpha: 1 , ease: Power0.easeNone}, '-=0.7')
.to($('.section4 .speed7'), 1, { x: 10, y: 60, rotation: 20})
;

new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: 1300,
    offset: 3000 - $ww
  })
  .setTween(speedTl)
  // .addIndicators()
  .addTo(controller)
  ;


// увеличение числа
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: 4400,
    offset: 4300 - $ww
  })
  // .addIndicators()
  .addTo(controller)
  .on("progress", function(){
    var nnum = $numbers2.text();
    nnum++;
    $numbers2.text(nnum);
  })
  .on("enter", function(){
    $numbers2.text('150000');
  })
  .on("leave", function(){
    $numbers2.text('150000');
  })
  ;

// ey
var ey = $('.section5 .ey');
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww,
    offset: 4900 - $ww
  })
  .setTween(TweenMax.from(ey, 1, {scale: 0, ease: Power1.easeOut}))
  // .addIndicators()
  .addTo(controller)
  ;


// опускаются макбук, планшет, часы
var mac = $('.section5-1 .macbook');
var ipad = $('.section5-1 .ipad');
var watch = $('.section5-1 .watch');
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww - 400,
    offset: 6100 - $ww
  })
  .setTween(TweenMax.from(mac, 1, {y: -700, ease: Power4.easeOut}))
  // .addIndicators()
  .addTo(controller)
  ;
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww - 400,
    offset: 6300 - $ww
  })
  .setTween(TweenMax.from(ipad, 1, {y: -700, ease: Power1.easeOut}))
  // .addIndicators()
  .addTo(controller)
  ;
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww - 400,
    offset: 6700 - $ww
  })
  .setTween(TweenMax.from(watch, 1, {y: -700, ease: Power3.easeOut}))
  // .addIndicators()
  .addTo(controller)
  ;

// микрофоны
var microBack = $('.section6 .microphone_back');
var microFront = $('.section6 .microphone_front');
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww - 400,
    offset: 7000 - $ww
  })
  .setTween(TweenMax.from(microBack, 1, {y: 500, ease: Power2.easeOut}))
  // .addIndicators()
  .addTo(controller)
  ;
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww - 300,
    offset: 7400 - $ww
  })
  .setTween(TweenMax.from(microFront, 1, {y: 500, ease: Power1.easeIn}))
  // .addIndicators()
  .addTo(controller)
  ;


// города
var cityTl = new TimelineMax()
.from($('.section6 .city1'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city1'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut})
.from($('.section6 .city2'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city2'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut})
.from($('.section6 .city3'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city3'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut})
.from($('.section6 .city4'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city4'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut})
.from($('.section6 .city5'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city5'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut})
.from($('.section6 .city6'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city6'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut})
.from($('.section6 .city7'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city7'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut})
.from($('.section6 .city8'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city8'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut})
.from($('.section6 .city9'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city9'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut})
.from($('.section6 .city10'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city10'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut})
.from($('.section6 .city11'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city11'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut})
.from($('.section6 .city12'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city12'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut})
.from($('.section6 .city13'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city13'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut})
.from($('.section6 .city14'), 1, {scale: 0, autoAlpha: 0, ease: Power2.easeOut}, "-=1")
.to($('.section6 .city14'), 1, {scale: 0, autoAlpha: 0, ease: Power0.easeNone})
;
cityTl.repeat(-1);

new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    offset: 7800 - $ww
  })
  .setTween(cityTl)
  // .addIndicators()
  .addTo(controller)
  ;


// иконки яркость
var icon1 = $('.section7 .icon1');
var icon2 = $('.section7 .icon2');
var icon3 = $('.section7 .icon3');
var icon4 = $('.section7 .icon4');
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww - 200,
    offset: 9400 - $ww
  })
  .setTween(TweenMax.from(icon1, 1, {autoAlpha: 0.3, ease: Power1.easeInOut}))
  // .addIndicators()
  .addTo(controller)
  ;
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww - 200,
    offset: 9500 - $ww
  })
  .setTween(TweenMax.from(icon2, 1, {autoAlpha: 0.1, ease: Power1.easeInOut}))
  // .addIndicators()
  .addTo(controller)
  ;
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww - 200,
    offset: 9600 - $ww
  })
  .setTween(TweenMax.from(icon3, 1, {autoAlpha: 0.1, ease: Power1.easeInOut}))
  // .addIndicators()
  .addTo(controller)
  ;
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww - 200,
    offset: 9700 - $ww
  })
  .setTween(TweenMax.from(icon4, 1, {autoAlpha: 0.1, ease: Power1.easeInOut}))
  // .addIndicators()
  .addTo(controller)
  ;

// tfc
var tfc = $('.section7 .tfc');
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww,
    offset: 10000 - $ww
  })
  .setTween(TweenMax.from(tfc, 1, {scale: 0, ease: Power1.easeOut}))
  // .addIndicators()
  .addTo(controller)
  ;

// значок из пачки денег
var election = $('.section8 .money_election');

new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww,
    offset: 11000 - $ww
  })
  .setTween(TweenMax.from(election, 1, {y: 100, ease: Power1.easeIn}))
  // .addIndicators()
  .addTo(controller)
  ;


// портфель
var bag = $('.section8 .bag');
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww,
    offset: 12000 - $ww
  })
  .setTween(TweenMax.from(bag, 1, {y: '-100%', ease: Power2.easeOut}))
  // .addIndicators()
  .addTo(controller)
  ;


// рука график
var hand = $('.section9 .hands_right');
var handTl = new TimelineMax()
  .to(hand, 0.4, {x: 10, y: -60, ease: Power0.easeNone})
  .to(hand, 0.4, {x: 60, y: 20, ease: Power0.easeNone})
  .to(hand, 0.4, {x: 70, y: -90, ease: Power0.easeNone})
  .to(hand, 0.4, {x: 100, y: -10, ease: Power0.easeNone})
  .to(hand, 0.4, {x: 100, y: -60, ease: Power0.easeNone})
  .to(hand, 0.4, {x: 130, y: -5, ease: Power0.easeNone})
  .to(hand, 0.4, {x: 140, y: -40, ease: Power0.easeNone})
  .to(hand, 0.4, {x: 190, y: 0, ease: Power0.easeNone})
  ;
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    // duration: $ww,
    offset: 13500 - $ww
  })
  .setTween(handTl)
  // .addIndicators()
  .addTo(controller)
  ;


// иконки меняют цвет
var icon91 = $('.section9 .icon1');
var icon92 = $('.section9 .icon2');
var icon93 = $('.section9 .icon3');
var icon9Tl = new TimelineMax()
  .to(icon91[0], 1, {autoAlpha: 0})
  .from(icon91[1], 1, {autoAlpha: 0}, '-=1')
  .to(icon92[0], 1, {autoAlpha: 0})
  .from(icon92[1], 1, {autoAlpha: 0}, '-=1')
  .to(icon93[0], 1, {autoAlpha: 0})
  .from(icon93[1], 1, {autoAlpha: 0}, '-=1')
  ;
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww,
    offset: 14400 - $ww
  })
  .setTween(icon9Tl)
  // .addIndicators({name: '111'})
  .addTo(controller)
  ;


// доллар
var dollar = $('.section10 .dollar1');
new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: $ww,
    offset: 15500 - $ww
  })
  .setTween(TweenMax.to(dollar, 0.5, {rotation: -30, ease: Power3.easeIn}))
  // .addIndicators()
  .addTo(controller)
  ;



// .to(".section11End", 1,   {x: 1, ease: Power0.easeNone})

// горизонтальная прокрутка
// new ScrollMagic.Scene({
//     triggerElement: ".test",
//     triggerHook: 0,
//     // duration: 14400
//     duration: 500,
//     offset: 15400
//   })
//   .setPin(".test")
//   .addIndicators({name: 'new'})
//   .addTo(controller);


// награды
var awardItem = $('.awardItem');
var awardItemTl = new TimelineMax()
.to(awardItem[0], 1, {x: -400, autoAlpha: 1})
.to(awardItem[0], 1, {x: -820, autoAlpha: 0})
.to(awardItem[1], 1, {x: -400, autoAlpha: 1})
.to(awardItem[1], 1, {x: -820, autoAlpha: 0})
.to(awardItem[2], 1, {x: -400, autoAlpha: 1})
.to(awardItem[2], 1, {x: -820, autoAlpha: 0})
.to(awardItem[3], 1, {x: -400, autoAlpha: 1})
.to(awardItem[3], 1, {x: -820, autoAlpha: 0})
.to(awardItem[4], 1, {x: -400, autoAlpha: 1})
.to(awardItem[4], 1, {x: -820, autoAlpha: 0})
.to(awardItem[5], 1, {x: -400, autoAlpha: 1})
.to(awardItem[5], 1, {x: -820, autoAlpha: 0})
.to(awardItem[6], 1, {x: -400, autoAlpha: 1})
.to(awardItem[6], 1, {x: -820, autoAlpha: 0})
.to(awardItem[7], 1, {x: -400, autoAlpha: 1})
.to(awardItem[7], 1, {x: -820, autoAlpha: 0})
;
// awardItemTl.repeat(-1);

new ScrollMagic.Scene({
    triggerElement: ".sceneTrigger",
    triggerHook: 0,
    duration: 8500,
    offset: 17000
  })
  .setTween(awardItemTl)
  // .addIndicators()
  .addTo(controller)
  ;




}



// конец документа
});