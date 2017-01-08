$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('.scrollToTop').fadeIn(200); 
        } else { 
            $('.scrollToTop').fadeOut(200); 
        } 
    });

    $(.scrollToTop).click(function(){ 
        $('html, body').animate({ scrollTop: 0 }, 600); 
        return false; 
    });
});



