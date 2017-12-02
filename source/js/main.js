(function() {

    var button = document.querySelector('.header__toggle');
    var nav = document.querySelector('.nav');
    var form = document.querySelector('.form__form-section');

//Mobile-Menu
   if (button) {
       button.addEventListener('click', tajam.collapse.collapseClickHandler, false);
   }


//Navigation

    if (nav) {
        nav.addEventListener('click', function(event) {
            var target = event.target;

            if (target.tagName.toLowerCase() !== 'a') {
                return;
            }

            tajam.navigation.toggleToActiveLink(target);
        });
    }


//Validation-Form

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (tajam.form.isValid()) {
                console.log('All good');
            } else {
                console.log('Is not valid');
            }

        })
    }
//Carousel-Hero

    $('.hero__main-text').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplayHoverPause: true
    });

//Carousel-Testimonials

    $('.testimonials__main').owlCarousel({
        responsiveClass: true,
        autoplay: true,
        smartSpeed:1000,
        autoplayTimeout:2000,
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: [
            "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
            "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"
        ],
        autoplayHoverPause: false
    });
})();