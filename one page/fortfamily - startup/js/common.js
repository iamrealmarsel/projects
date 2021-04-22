// $(function(){
// 	$('.header .form button').click(function() {
// 		$('.header .form input[type=text]').show();
// 	});
// 	$('.webinar .list').slick({
// 		arrows: false,
// 		dots: true
// 	});
// });


$(function() {

	/**
	 * Variables
	 */

	var headerBottomText = $('.header-bottom__text-wrap p').text();
	var sliderSpeed = 300;
	var section4SliderSpeed = 80;
	var headerSliderAniSpeed = 200;

	/**
	 * Верхнее Меню
	 */

	$('.header-top__menu-btn').click(function(e) {
		$(this).toggleClass('active');
		$('.header-top__menu').toggleClass('active');
	});
	$('.header-top__menu a').click(function(e) {
		if ( $('.header-top__menu').hasClass('active') ) {
			$('.header-top__menu-btn').removeClass('active');
			$('.header-top__menu').removeClass('active');
		}
	});
	$(window).click(function(e) {
		if( !$(e.target).closest('.header-top__menu-btn').length && !$(e.target).closest('.header-top__menu').length ) {
			if ( $('.header-top__menu').hasClass('active') ) {
				$('.header-top__menu-btn').removeClass('active');
				$('.header-top__menu').removeClass('active');
			}
		}
	});

	/**
	 * Выбор города
	 */

	$('.modal-cities-list li').click(function() {
		$('#cities-link').text( $(this).text() );
		$.magnificPopup.close();
		$('.modal-cities-list li').removeClass('active');
		$(this).addClass('active');
	});

	/**
	 * Переключение слайдов в хедере
	 */

	$('.header-bottom__controls button:eq(0)').click(function(e) {
		// e.stopPropagation();
		e.preventDefault();

		$('.header').removeClass('header--dark');
		$('.header').removeClass('header--slide-2');
		$('.header').removeClass('header--dark');
		$('.header').removeClass('header--slide-3');
		$('.header-bottom__text-wrap').removeClass('header-bottom__text-wrap--slide-2');
		$('.header-bottom__text-wrap').removeClass('header-bottom__text-wrap--slide-3');

		$('.header-bottom__controls button').removeClass('active');
		$(this).addClass('active');

		$('.header-bottom__text-wrap p').text(headerBottomText);

		$('.header-bottom__text-btns .popup-player').attr('href', $(this).data('video-link'));

		if (window.matchMedia("(max-width: 440px)").matches) {
			var el = document.querySelector('.header-bottom__controls');

			$(el).animate({
				scrollLeft: 0
			}, headerSliderAniSpeed);
		}
	});
	$('.header-bottom__controls button:eq(1)').click(function(e) {
		// e.stopPropagation();
		e.preventDefault();

		$('.header').removeClass('header--dark');
		$('.header').removeClass('header--slide-3');
		$('.header-bottom__text-wrap').removeClass('header-bottom__text-wrap--slide-3');

		$('.header').addClass('header--dark');
		$('.header').addClass('header--slide-2');
		$('.header-bottom__text-wrap').addClass('header-bottom__text-wrap--slide-2');

		$('.header-bottom__controls button').removeClass('active');
		$(this).addClass('active');

		$('.header-bottom__text-wrap p').text('Вы отправитесь на Дикий запад в поисках золота. Погрузитесь во времена американских переселенцев и ковбоев. Лишь самые смелые пройдут испытания и получат свое золото.');

		$('.header-bottom__text-btns .popup-player').attr('href', $(this).data('video-link'));

		if (window.matchMedia("(max-width: 440px)").matches) {
			/**
			 * References
			 * https://codeburst.io/how-to-create-horizontal-scrolling-containers-d8069651e9c6
			 * https://plainjs.com/javascript/styles/get-and-set-scroll-position-of-an-element-26/
			 * https://www.tutorialspoint.com/How-to-animate-scrollLeft-using-jQuery
			 * https://stackoverflow.com/questions/14275304/how-to-get-margin-value-of-a-div-in-plain-javascript
			 */
			var el = document.querySelector('.header-bottom__controls');
			var elStyle = window.getComputedStyle(el);
			var elPadingRight = parseInt(elStyle.paddingRight);
			// var style = window.getComputedStyle(this);
			// var marginRight = parseInt(style.marginRight);

			$(el).animate({
				scrollLeft: el.scrollWidth/2 - this.offsetWidth/2 - elPadingRight + 4 - 3
			}, headerSliderAniSpeed);
			// console.log(el.scrollWidth);
			// console.log(el.scrollWidth/2);
			// console.log(this.getBoundingClientRect().left);
			// console.log(elPadingRight+4);
		}
	});
	$('.header-bottom__controls button:eq(2)').click(function(e) {
		// e.stopPropagation();
		e.preventDefault();

		$('.header').removeClass('header--dark');
		$('.header').removeClass('header--slide-2');
		$('.header-bottom__text-wrap').removeClass('header-bottom__text-wrap--slide-2');

		$('.header').addClass('header--dark');
		$('.header').addClass('header--slide-3');
		$('.header-bottom__text-wrap').addClass('header-bottom__text-wrap--slide-3');

		$('.header-bottom__controls button').removeClass('active');
		$(this).addClass('active');

		$('.header-bottom__text-wrap p').text('Таинственные джунгли, загадочные животные и нечто сверхъестественное повстречается вам на пути. Проявите свою смекалку и сможете разгадать великую тайну.');

		$('.header-bottom__text-btns .popup-player').attr('href', $(this).data('video-link'));

		if (window.matchMedia("(max-width: 440px)").matches) {
			var el = document.querySelector('.header-bottom__controls');

			$(el).animate({
				scrollLeft: el.scrollWidth
			}, headerSliderAniSpeed);
		}
	});


	/**
	 * JQuery Selectric
	 * http://selectric.js.org/
	 */

	$(function() {
		$('.phone-input select').selectric();
	});

	/**
	 * JQuery Mask Plugin
	 * https://igorescobar.github.io/jQuery-Mask-Plugin/
	 */

	$('input.mask').mask('(000) 000-00-00');

	/**
	 * Magnific Popups
	 */

	$('.popup-player').magnificPopup({
		// disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		fixedContentPos: true,
		// focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				// Нужно для календарика
				this.wrap.removeAttr('tabindex');
				// if($(window).width() < 700) {
				// 	this.st.focus = false;
				// } else {
				// 	this.st.focus = '#name';
				// }
			}
		}
	});

	$('.popup-with-terms').magnificPopup({
			type: 'inline',
			preloader: false,
			fixedContentPos: true,
	});

	/**
	 * Проверка на время в модалке
	 * Нажитие на кнопки "Позвонить сейчас" и "по времени" в модалке "Заказать звонок"
	 */

	var d = new Date();
	var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
	var nd = new Date(utc + (3600000*+3));
	var timeNow = nd.getHours()*60 + nd.getMinutes();
	var dayOfWeek = nd.getDay();
	// console.log(nd.getDay());
	// console.log(nd.getHours()*60 + nd.getMinutes());

	// Если время по Москве больше 10 часов (600 минут) и меньше 20 (1200 минут) и дунь недели не суббота или воскресенье
	if (timeNow >= 600 && timeNow <= 1200 && dayOfWeek != 6 && dayOfWeek != 7) {
		$('.js-call-me-input').parent().hide();
	} else {
		$('label[for="call-me-now"]').hide();
		$('.js-call-me').prop('checked', true);
		$('.js-call-me-input').prop('required', true).prop('disabled', false);
	}

	$('.modal-callback__when label').click(function(e) {
		if( $(this).prev().hasClass('js-call-me') ) {
			$('.js-call-me-input').parent().show();
			$('.js-call-me-input').prop('required', true).prop('disabled', false);
			// $('.js-call-me-input[type="datetime-local"]').trigger('click');
		} else {
			$('.js-call-me-input').parent().hide();
			$('.js-call-me-input').prop('required', false).prop('disabled', true);
		}
	});

	/**
	 * DateTime picker
	 * https://flatpickr.js.org
	 */

	$("#datetimepicker").flatpickr({
		enableTime: true,
		altInput: true,
		altFormat: "j F в H:i",
		dateFormat: "Y-m-d H:i",
		time_24hr: true,
		minDate: "today",
		shorthandCurrentMonth: true,
		"locale": "ru"  // locale for this instance only
	});

	/**
	 * Таймер для опроса
	 * https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer


	function CountDownTimer(duration, granularity) {
		this.duration = duration;
		this.granularity = granularity || 1000;
		this.tickFtns = [];
		this.running = false;
	}
	CountDownTimer.prototype.start = function() {
		if (this.running) {
			return;
		}
		this.running = true;
		var start = Date.now(),
				that = this,
				diff, obj;
		(function timer() {
			diff = that.duration - (((Date.now() - start) / 1000) | 0);
			if (diff > 0) {
				setTimeout(timer, that.granularity);
			} else {
				diff = 0;
				that.running = false;
			}
			obj = CountDownTimer.parse(diff);
			that.tickFtns.forEach(function(ftn) {
				ftn.call(this, obj.minutes, obj.seconds);
			}, that);
		}());
	};
	CountDownTimer.prototype.onTick = function(ftn) {
		if (typeof ftn === 'function') {
			this.tickFtns.push(ftn);
		}
		return this;
	};
	CountDownTimer.prototype.expired = function() {
		return !this.running;
	};
	CountDownTimer.parse = function(seconds) {
		return {
			'minutes': (seconds / 60) | 0,
			'seconds': (seconds % 60) | 0
		};
	};

	// Первый таймер
	var display = document.querySelector('#timer span'),
			sec = 180, // Время таймера в секундах
			timer = new CountDownTimer(sec),
			timeObj = CountDownTimer.parse(sec);

	format(timeObj.minutes, timeObj.seconds);

	timer.onTick(format);

	function format(minutes, seconds) {
		// minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		display.textContent = minutes + ':' + seconds;
	}

	// Второй таймер
	var display2 = document.querySelector('#timer-2 span'),
			sec2 = 180, // Время таймера в секундах
			timer2 = new CountDownTimer(sec),
			timeObj2 = CountDownTimer.parse(sec);

	format2(timeObj2.minutes, timeObj2.seconds);

	timer2.onTick(format2);

	function format2(minutes, seconds) {
		// minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		display2.textContent = minutes + ':' + seconds;
	}
	// Старт таймера
	// $('').click(function() {
		// timer.start();
	// });*/

	/**
	 * Smooth scroll
	 */

	$('.header-top__menu a[href*="#"]:not([href="#"]), .header-content .btn, .sliderbox-item .btn').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 120
				}, 600);
				return false;
			}
		}
	});

	

    // new Vue({
    //     el: '#phone-input-1',
    //     ...options
    // });

    // new Vue({
    //     el: '#phone-input-2',
    //     ...options
    // });

    // new Vue({
    //     el: '#phone-input-3',
    //     ...options
    // });

    // new Vue({
    //     el: '#phone-input-4',
    //     ...options
    // });

    // new Vue({
    //     el: '#phone-input-5',
    //     ...options
    // });

    // new Vue({
    //     el: '#phone-input-6',
    //     ...options
    // });
});
