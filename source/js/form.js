(function() {
    var me = {};

    me.isValid = function() {
        var requiredFields = document.querySelectorAll('[data-valid="required"]');
        var emailValue = document.querySelector('[data-email]').value;

        if (!me.isAllCompleted(requiredFields)) {
            console.log('Заполните, пожалуйста, все необходимые поля!');
            return false;
        } else if (!tajam.validation.isEmail(emailValue)) {
            console.log('Неверный email!');
            return false;
        }
        return true;
    };

    me.isAllCompleted = function(data) {
        var result = true;

        for (var i = 0; i < data.length; i++) {
            if (!tajam.validation.isNotEmpty(data[i].value)) {
                result = false;
                break;
            }
        }
        return result;
    };

    tajam.form = me;
})();