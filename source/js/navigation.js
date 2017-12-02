(function() {
    var me = {};

    me.toggleToActiveLink = function(target) {
        var showedSection = target.dataset.link;
        scrollToActiveSection(showedSection);
    };

    function scrollToActiveSection(showedSection) {
        var section = document.querySelector('.' + showedSection);
        var coords = section.getBoundingClientRect();
        var animateTime = 0.4;

        var timerId = setInterval(function() {
            if (window.pageYOffset < coords.top) {
                window.scrollBy(0, 10)
            } else {
                clearInterval(timerId);
            }
        }, animateTime)
    }

    tajam.navigation = me;
})();