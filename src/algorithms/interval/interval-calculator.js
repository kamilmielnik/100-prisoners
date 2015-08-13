(function () {
    'use strict';

    module.exports = {
        indexOfPrisonerInCurrentInterval: function (day, numberOfPrisoners) {
            return Math.floor(day / (numberOfPrisoners - 1)) % (numberOfPrisoners - 1);
        },

        isFirstDayInInterval: function (day, numberOfPrisoners) {
            return day % (numberOfPrisoners - 1) === 0;
        }
    };
}());
