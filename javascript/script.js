 $(document).ready( function() { 
   
    //////scroll button//////
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
    
   //////portfolio image effects//////
   $('.target1').mouseenter( function() {
       $('<h2>Tribute Page</h2>').appendTo(this);
       $('img').css('opacity',0.3);
    });
    
   $('.target1').mouseleave( function() {
       $('h2').fadeOut('fast');
       $('img').css('opacity',1);
    });
}); 

