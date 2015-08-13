/* Simple O(N^2) algorithm by Kamil Mielnik */

'use strict';

module.exports = function (numberOfPrisoners) {
    var prisoners = [
        new CountingPrisoner(numberOfPrisoners)
    ];

    while (prisoners.length < numberOfPrisoners) {
        prisoners.push(new Prisoner());
    }

    return prisoners;
};

function CountingPrisoner(numberOfPrisoners) {
    var prisonersCounter = 0;

    this.onRoomEntered = function (room, day) {
        if (room.isLightOn()) {
            ++prisonersCounter;
            room.switchLightOff();
            if (prisonersCounter === numberOfPrisoners - 1) {
                room.callGuard();
            }
        }
    };
}

function Prisoner() {
    var hasTurnedLightOn = false;

    this.onRoomEntered = function (room, day) {
        if (!hasTurnedLightOn && !room.isLightOn()) {
            room.switchLightOn();
            hasTurnedLightOn = true;
        }
    };
}
