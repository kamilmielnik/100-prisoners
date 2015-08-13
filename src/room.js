(function () {
    'use strict';

    module.exports = function () {
        var isLightOn = false,
            hasGuardBeenCalled = false;

        return {
            isLightOn: function () {
                return isLightOn;
            },

            switchLightOn: function () {
                isLightOn = true;
            },

            switchLightOff: function () {
                isLightOn = false;
            },

            hasGuardBeenCalled: function () {
                return hasGuardBeenCalled;
            },

            callGuard: function () {
                hasGuardBeenCalled = true;
            }
        };
    };
}());
