$(document).ready(function(){
  	$('.menu-btn').on('click', function(e) {
  		e.preventDefault();
	$(this).toggleClass('menu-btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');
	});
});
$(function(){
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top -50;
		$('body, html').animate({scrollTop: bl_top}, 800);
		return false;
	  	})
});

	function backToTop() {
	let button = $('.back-to-top');

	$(window).on('scroll', () =>{

		if ($(this).scrollTop() >= 100) {
			button.fadeIn(); 
		} else {
			button.fadeOut();
		}
	});

	button.on('click', (e) => {
		e.preventDefault();
		$('html').animate({scrollTop: 0}, 800);
	})
}
backToTop();

const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav__active');
};
		$(document).ready(function(){
		$(".content .tab_content").hide();
		$(".content .tab_content:first-child").show();
		$("ul li").click(function(){
			$("ul li").removeClass("active");
			$(this).addClass("active");
			var current_tab_value = $(this).attr("data-list");
			$(".content .tab_content").hide();
			$("."+current_tab_value).show();
			$(".content").show();
		});
	});