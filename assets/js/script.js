$(document).ready(function () {
	'use strict';

	// product varient js start--
	$(".label-accordion-btn").click(function (event) {
		event.stopPropagation();
		$(this).next().slideDown();
		$(this).parent().parent().siblings().find(".label-content-bottom").slideUp();
	});
	// product varient js end--

	// **..product-accordion js start..**
	$('.product-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.product-accordion-item-content').slideUp();
	});
	// **..product-accordion js end..**

	// **..faq-accordion js start..**
	$('.faq-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.faq-accordion-item-content').slideUp();
	});
	// **..faq-accordion js end..**
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
			slidesPerView: 5,
		},
		// when window width is >= 576px
		576: {
			spaceBetween: 10,
			slidesPerView: 5,
		},
		// when window width is >= 768px
		768: {
			spaceBetween: 16,
			slidesPerView: 5,
		},
		// when window width is >= 768px
		1151: {
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