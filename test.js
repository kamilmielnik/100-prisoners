var prison = require('./index.js'),
    simpleAlgorithm = require('./src/algorithms/simple.js'),
    intervalAlgorithm = require('./src/algorithms/interval.js');

prison.benchmark({
    algorithms: {
        "Simple": simpleAlgorithm,
        "Interval": intervalAlgorithm
    }
});
