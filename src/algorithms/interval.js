(function () {
    'use strict';

    var CountingPrisoner = require('./interval/counting-prisoner.js'),
        Prisoner = require('./interval/prisoner.js');

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
