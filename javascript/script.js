 $(document).ready( function() { 
    $(window).scroll( function() { 
    	if($(this).scrollTop() < 300) {
    		$('.scrollToTop').fadeOut(300);
    }
    	else {
    		$('.scrollToTop').fadeIn(300);
    	}
    });

    $('.scrollToTop').click( function(){ 
        $('html, body').animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
}); 



