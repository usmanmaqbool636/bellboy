(function($) {

    var navbar = $('.navbar');
    var lastScrollTop = 0;

    $(window).scroll(function() {
        var st = $(this).scrollTop();
        // Scroll down
        if (st > lastScrollTop) {
            // console.log("if")

            // navbar.fadeOut();
            navbar.addClass('navbar-light nav-bg-transparent');
        }
        // Scroll up but still lower than 200 (change that to whatever suits your need)
        else if (st < lastScrollTop && st > 0) {
            // console.log("else if")

            // navbar.fadeIn();
            // navbar.removeClass('navbar-light nav-bg-transparent').addClass('');
            navbar.addClass('navbar-light nav-bg-transparent');

        }
        // Reached top
        else {
            // console.log("else")
            navbar.removeClass("nav-bg-transparent").addClass('navbar-light');


            // navbar.addClass('navbar-light nav-bg-transparent');
        }
        lastScrollTop = st;
    });



})(jQuery);

var mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}