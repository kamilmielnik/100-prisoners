(function () {
    'use strict';

    module.exports = function () {
        var hasTurnedLightOn = false;

        this.onRoomEntered = function (room, day) {
            if (!hasTurnedLightOn && !room.isLightOn()) {
                room.switchLightOn();
                hasTurnedLightOn = true;
            }
        };
    };
}());
