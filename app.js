$(window).bind("load resize scroll",function(e){
	    var scrollPosition = jQuery(window).scrollTop();
	    var scrollBottom = $(window).scrollTop() + $(window).height();
	    var nearBottom = jQuery('.footer').offset().top;

      //animate words in
	    if (scrollBottom > nearBottom ){
	    jQuery('.section.pre-animation').removeClass('pre-animation');
		  }

	});