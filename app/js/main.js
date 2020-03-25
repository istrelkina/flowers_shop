$(function(){

	$('.slider__items').slick({
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000
	});

	$('.catalog__item').mouseenter(
		function(){
			$(this).children('.catalog__item-info').css('background-color', '#fff');
			$(this).children('.catalog__item-info').children('.item-info-price').css('background-color', '#f7f7f7');
		})
	$('.catalog__item').mouseleave(
		function(){
			$(this).children('.catalog__item-info').css('background-color', '#f7f7f7');
			$(this).children('.catalog__item-info').children('.item-info-price').css('background-color', '#fff');
		})
});