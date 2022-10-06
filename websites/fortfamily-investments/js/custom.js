$(function() {

	$('.section2__txt').hover( function() {

	  var num = $(this).data("number");
	  $(this).addClass('hover');
		$( ".section2__year[data-number='"+num+"']" ).addClass('hover');

	}, function() {

		var num = $(this).data("number");
	  $(this).removeClass('hover');
		$( ".section2__year[data-number='"+num+"']" ).removeClass('hover');

	});




	/**
	 * JQuery Selectric
	 * http://selectric.js.org/
	 */

	$('.phone-input select').selectric();

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
		// $('.js-call-me-input-2').prop('required', true).prop('disabled', false);

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


	$('.modal-callback__when #call-me-at').click(function(e) {

		console.log('click');

		$(this).parent().next().toggleClass('open');

		if($(this).parent().next().hasClass('open')) {
			$('.js-call-me-input').parent().show();
			$('.js-call-me-input').prop('required', true).prop('disabled', false);
			// $('.js-call-me-input[type="datetime-local"]').trigger('click');
			$(this).next().text('Убрать время звонка')
		} else {
			$('.js-call-me-input').parent().hide();
			$('.js-call-me-input').prop('required', false).prop('disabled', true);
			$(this).next().text('Когда Вам позвонить?')
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

	$("#datetimepicker2").flatpickr({
		enableTime: true,
		altInput: true,
		altFormat: "j F в H:i",
		dateFormat: "Y-m-d H:i",
		time_24hr: true,
		minDate: "today",
		shorthandCurrentMonth: true,
		"locale": "ru"  // locale for this instance only
	});

	$("#datetimepicker3").flatpickr({
		enableTime: true,
		altInput: true,
		altFormat: "j F в H:i",
		dateFormat: "Y-m-d H:i",
		time_24hr: true,
		minDate: "today",
		shorthandCurrentMonth: true,
		"locale": "ru"  // locale for this instance only
	});

	$("#datetimepicker4").flatpickr({
		enableTime: true,
		altInput: true,
		altFormat: "j F в H:i",
		dateFormat: "Y-m-d H:i",
		time_24hr: true,
		minDate: "today",
		shorthandCurrentMonth: true,
		"locale": "ru"  // locale for this instance only
	});

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

	var mySwiper = new Swiper ('.swiper-container-authors', {

		loop: true,
		autoHeight: true,
		// centeredSlides: true,
		slidesPerView: 1,

		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true
		}


	});

	var mySwiper = new Swiper ('.swiper-container-years', {

	  loop: false,
	  autoHeight: true,
	  centeredSlides: true,
	  slidesPerView: 1.6,

	  // If we need pagination
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true
	  },

	  breakpoints: {
	    767: {
	      slidesPerView: 1.3,
	    }
	  }

	});

	$('.section1__caption_mob').on('click', function() {
	  $(this).closest('.section1__wrap').toggleClass('active');
	});

	$('.js-btn').on('click', function(e) {

	  e.preventDefault();
	  var x = $(this).attr('href');
	  var y = x.substring(1);
	  $('html, body').stop().animate({ scrollTop: $('#'+y).offset().top }, 800);

	});


	
});
