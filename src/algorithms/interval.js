(function () {
    'use strict';

    var _ = require('underscore');

    module.exports = function (numberOfPrisoners) {
        var prisoners = [
            new CountingPrisoner(numberOfPrisoners)
        ];

        while (prisoners.length < numberOfPrisoners) {
            prisoners.push(new Prisoner(prisoners.length - 1, numberOfPrisoners));
        }

        return prisoners;
    };

    function CountingPrisoner(numberOfPrisoners) {
        var visitorsHistory = _([]);

        this.onRoomEntered = function (room, day) {
            var prisonerIndex = indexOfPrisonerInCurrentInterval(day, numberOfPrisoners),
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
    }

    function Prisoner(index, numberOfPrisoners) {
        var hasTurnedLightOn = false;

        this.onRoomEntered = function (room, day) {
            var isItMyInterval = (index === indexOfPrisonerInCurrentInterval(day, numberOfPrisoners));

            if (isFirstDayInInterval(day, numberOfPrisoners) && room.isLightOn()) {
                room.switchLightOff();
            }

            if (isItMyInterval && !room.isLightOn()) {
                room.switchLightOn();
            }
        };
    }

    function indexOfPrisonerInCurrentInterval(day, numberOfPrisoners) {
        return Math.floor(day / (numberOfPrisoners - 1)) % (numberOfPrisoners - 1);
    }

    function isFirstDayInInterval(day, numberOfPrisoners) {
        return day % (numberOfPrisoners - 1) === 0;
    }
})();
