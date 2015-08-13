(function () {
    'use strict';

    var Room = require('./room.js'),
        RoomVisitorsHistory = require('./room-visitors-history.js'),
        randomPrisoner,
        haveAllPrisonersVisitedTheRoom,
        onWin,
        onLose;

    module.exports = function (options) {
        var generatePrisoners = options.algorithm,
            numberOfPrisoners = options.numberOfPrisoners || 100,
            prisoners = generatePrisoners(numberOfPrisoners),
            room = new Room(),
            roomVisitorsHistory = new RoomVisitorsHistory(),
            dayNumber = 0,
            prisoner;

        while (true) {
            prisoner = randomPrisoner(prisoners);
            prisoner.onRoomEntered(room, dayNumber);
            roomVisitorsHistory.visit(prisoner);
            if (room.hasGuardBeenCalled()) {
                if (haveAllPrisonersVisitedTheRoom(prisoners, roomVisitorsHistory)) {
                    onWin(dayNumber);
                } else {
                    onLose(dayNumber);
                }
                break;
            }
            ++dayNumber;
        }

        return dayNumber;
    };


    randomPrisoner = function (prisoners) {
        var randomPrisonerIndex = Math.floor(Math.random() * prisoners.length),
            prisoner = prisoners[randomPrisonerIndex];

        return prisoner;
    };

    haveAllPrisonersVisitedTheRoom = function (prisoners, roomVisitorsHistory) {
        return prisoners.length === roomVisitorsHistory.numberOfUniqueVisitors();
    };

    onWin = function (dayNumber) {
        console.log('You win after ' + dayNumber + ' days!');
    };

    onLose = function (dayNumber) {
        console.log('You lose after ' + dayNumber + ' days.');
    };
}());
