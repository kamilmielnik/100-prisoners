(function () {
    'use strict';

    var intervalCalculator = require('./interval-calculator.js');

    module.exports = function (index, numberOfPrisoners) {
        this.onRoomEntered = function (room, day) {
            var isItMyInterval = (index === intervalCalculator.indexOfPrisonerInCurrentInterval(day, numberOfPrisoners));

            if (intervalCalculator.isFirstDayInInterval(day, numberOfPrisoners) && room.isLightOn()) {
                room.switchLightOff();
            }

            if (isItMyInterval && !room.isLightOn()) {
                room.switchLightOn();
            }
        };
    };
}());
