(function(){
    var me ={};

    var triggerElement = document.querySelector('.header__toggle');
    var targetElement = document.querySelector('.nav');

    me.collapseClickHandler = function() {
        triggerElement.classList.toggle('header__toggle--active');
        targetElement.classList.toggle('nav--active');
    };

    tajam.collapse = me;
}());