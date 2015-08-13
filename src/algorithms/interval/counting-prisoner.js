(function () {
    'use strict';

    var _ = require('underscore'),
        intervalCalculator = require('./interval-calculator.js');

    module.exports = function (numberOfPrisoners) {
        var visitorsHistory = _([]);

        this.onRoomEntered = function (room, day) {
            var prisonerIndex = intervalCalculator.indexOfPrisonerInCurrentInterval(day, numberOfPrisoners),
                hasPrisonerVisitedTheRoom;

            if (room.isLightOn()) {
                room.switchLightOff();
                hasPrisonerVisitedTheRoom = visitorsHistory.contains(prisonerIndex);
                if (!hasPrisonerVisitedTheRoom) {
                    visitorsHistory.push(prisonerIndex);
                    if (visitorsHistory.size() === numberOfPrisoners - 1) {
                        room.callGuard();
                    }
                }
            }
        };
    };
}());
