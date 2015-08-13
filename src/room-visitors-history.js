'use strict';

var _ = require('underscore');

module.exports = function () {
    var roomVisitorsHistory = _([]);

    return {
        visit: function (visitor) {
            if (!roomVisitorsHistory.contains(visitor)) {
                roomVisitorsHistory.push(visitor)
            }
        },

        numberOfUniqueVisitors: function () {
            return roomVisitorsHistory.size();
        }
    };
};
