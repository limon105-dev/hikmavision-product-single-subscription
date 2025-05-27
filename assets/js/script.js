$(document).ready(function () {
	'use strict';

	// product varient js start--
	$(".label-accordion-btn").click(function (event) {
		event.stopPropagation();
		$(".label-content-bottom").slideUp();
		$(this).next().slideDown();
	});
	// product varient js end--
})

// product-slider js start---
var swiper = new Swiper(".single-product-slider-thumb", {
	loop: false,
	spaceBetween: 10,
	slidesPerView: 7,
	grabCursor: true,
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 10,
			slidesPerView: 4,
		},
		// when window width is >= 576px
		576: {
			spaceBetween: 10,
			slidesPerView: 5,
		},
		// when window width is >= 768px
		768: {
			spaceBetween: 16,
			slidesPerView: 7,
		},
	}
});
var swiper2 = new Swiper(".single-product-slider", {
	loop: false,
	autoHeight: true,
	grabCursor: true,
	autoHeight: true,
	spaceBetween: 0,
	effect: "fade",
	thumbs: {
		swiper: swiper,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
// product-slider js end---