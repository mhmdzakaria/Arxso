(function ($) {
    "use strict";

    let originalHTML;

    function getNavText() {
        const rtl = $("html").attr("dir") === "rtl";
        return rtl
            ? [
                '<i class="bi bi-chevron-right"></i>', // prev (on right)
                '<i class="bi bi-chevron-left"></i>'   // next (on left)
            ]
            : [
                '<i class="bi bi-chevron-left"></i>',  // prev (on left)
                '<i class="bi bi-chevron-right"></i>'  // next (on right)
            ];
    }

    function initCarousel() {
        const $carousel = $(".testimonial-carousel");

        if (!originalHTML) {
            originalHTML = $carousel.html();
        }

        if ($carousel.hasClass("owl-loaded")) {
            $carousel.trigger("destroy.owl.carousel");
            $carousel.html(originalHTML);
        }

        $carousel.owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            rtl: $("html").attr("dir") === "rtl",
            navText: getNavText()
        });
    }

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // WOW.js
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000,
    });

    // Initial Carousel
    initCarousel();

    // Language Switcher
    $('#lang-ar').on('click', function () {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.lang = 'ar';
        initCarousel();
    });

    $('#lang-en').on('click', function () {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.lang = 'en';
        initCarousel();
    });

})(jQuery);
