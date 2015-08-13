(function () {
    'use strict';

    var CountingPrisoner = require('./simple/counting-prisoner.js'),
        Prisoner = require('./simple/prisoner.js');

    module.exports = function (numberOfPrisoners) {
        var prisoners = [
            new CountingPrisoner(numberOfPrisoners)
        ];

        while (prisoners.length < numberOfPrisoners) {
            prisoners.push(new Prisoner(prisoners.length - 1, numberOfPrisoners));
        }

        return prisoners;
    };
}());
