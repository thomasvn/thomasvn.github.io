// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 150) {
        $('.navbar').fadeOut();
    }
    else {
        $('.navbar').fadeIn();
    }
},false);