
(function($) {
	"use strict";
	
$(document).ready(function(){

	/*preloader*/
	/*
	$(window).load(function() { 
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow'); 
	}); */
	/*custom*/
	$(window).load(function() {
    $(".preloader").fadeOut("slow", function(){
      	$(".preloader-left").addClass("slide-left");
      	$(".preloader-right").addClass("slide-right");
      	$("#portfolio-case").addClass("full-portfolio");
    });
});
/*custom end*/
	/*End preloader*/


	/*Menu js*/
		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1500);
			e.preventDefault();
		});

		
		$(window).scroll(function() {
		  if ($(this).scrollTop() > 100) {
			$('.menu-top').addClass('menu-shrink');
			$('.logoimg').css({'width':'60px','transition':'1s'});
			$('.logo').css("bottom","30%");
		  } else {
			$('.menu-top').removeClass('menu-shrink');
		  }
		});
	/*End Menu js*/
	
	
	
	/*wow animation*/
		new WOW().init();	
	/*End wow animation*/
	
	
	
	/*testimonial carousel*/
	$('.carousel').carousel({
		interval:5000,
		pause:"false",
	});
	/*testimonial carousel*/
	

	/* COUNTDOWN JS */
	$('#counter_item').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.time_counter').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
	/* END COUNTDOWN JS */



	
  /*progress-bar*/
  $('.progress-bar > span').each(function(){
		var $this = $(this);
		var width = $(this).data('percent');
		$this.css({
			'transition' : 'width 2s'
		});
		
		setTimeout(function() {
			$this.appear(function() {
					$this.css('width', width + '%');
			});
		}, 500);
	});
	/*End progress-bar*/
  
});



})(jQuery);

