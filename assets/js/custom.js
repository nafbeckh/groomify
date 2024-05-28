(function ($) {

	"use strict";

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var header = $('header').height();

		if (scroll >= 200 - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	})

	var width = $(window).width();

	$(window).resize(function () {
		if (width > 767 && $(window).width() < 767) {
			location.reload();
		}
		else if (width < 767 && $(window).width() > 767) {
			location.reload();
		}
	})

	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}

	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				var width = $(window).width();
				if (width < 767) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);
				}

				$('html,body').animate({
					scrollTop: target.offset().top - 120
				}, 300);

				return false;
			}
		}
	});

	// Swiper
	var swiper = Swiper;
	var init = false;

	function swiperMode() {
		let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
		let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
		let desktop = window.matchMedia('(min-width: 1025px)');

		if (mobile.matches) {
			if (!init) {
				init = true;
				swiper = new Swiper('.swiper', {
					loop: true,
					direction: 'horizontal',
				});
			}
		}

		else if (tablet.matches) {
			swiper.destroy();
			init = false;
		}

		else if (desktop.matches) {
			swiper.destroy();
			init = false;
		}
	}

	window.addEventListener('load', function () {
		swiperMode();
	});

	window.addEventListener('resize', function () {
		swiperMode();
	});

})(window.jQuery);