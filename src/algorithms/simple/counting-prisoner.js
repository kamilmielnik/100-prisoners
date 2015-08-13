(function () {
    'use strict';

    module.exports = function (numberOfPrisoners) {
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
    };
}());
