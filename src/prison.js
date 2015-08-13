'use strict';

var _ = require('underscore'),
    Room = require('./room.js'),
    RoomVisitorsHistory = require('./room-visitors-history.js');

module.exports = function (options) {
    var generatePrisoners = options.algorithm,
        numberOfPrisoners = options.numberOfPrisoners || 100,
        prisoners = generatePrisoners(numberOfPrisoners),
        room = new Room(),
        roomVisitorsHistory = new RoomVisitorsHistory(),
        dayNumber = 0;

    while (true) {
        var prisoner = randomPrisoner(prisoners);
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


function randomPrisoner(prisoners) {
    var randomPrisonerIndex = Math.floor(Math.random() * prisoners.length),
        prisoner = prisoners[randomPrisonerIndex];

    return prisoner;
}

function haveAllPrisonersVisitedTheRoom(prisoners, roomVisitorsHistory) {
    return prisoners.length === roomVisitorsHistory.numberOfUniqueVisitors();
}

function onWin(dayNumber) {
    console.log('You win after ' + dayNumber + ' days!');
}

function onLose(dayNumber) {
    console.log('You lose after ' + dayNumber + ' days.');
}
