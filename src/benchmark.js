'use strict';

var _ = require('underscore'),
    prison = require('./prison.js');

module.exports = function (options) {
    var algorithms = _(options.algorithms),
        numberOfRuns = options.numberOfRuns || 10,
        numberOfPrisoners = options.numberOfPrisoners || 100;

    printBenchmarkParameters(numberOfRuns, numberOfPrisoners);

    algorithms.each(function (algorithm, algorithmName) {
        var score = 0,
            i;

        for (i = 0; i < numberOfRuns; ++i) {
            score += prison({
                numberOfPrisoners: numberOfPrisoners,
                algorithm: options.algorithms[algorithmName]
            });
        }

        printAverageScore(algorithmName, score, numberOfRuns);
    });
};

function printBenchmarkParameters(numberOfRuns, numberOfPrisoners) {
    console.log('Launching benchmark with ' + numberOfRuns + ' runs & ' + numberOfPrisoners + ' prisoners');
}

function printAverageScore(algorithmName, score, numberOfRuns) {
    var averageScore = Math.round(score / numberOfRuns);
    console.log(algorithmName + ' solves puzzle in ' + averageScore + ' days on average');
}
