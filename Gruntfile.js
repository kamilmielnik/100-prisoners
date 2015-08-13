module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            options: {
                sub: true
            },
            all: [
                'index.js',
                'test.js',
                'src/**/*.js'
            ]
        },
        jslint: {
            client: {
                src: [
                    'index.js',
                    'test.js',
                    'src/**/*.js'
                ],
                directives: {
                    unparam: true,
                    plusplus: true,
                    nomen: true,
                    predef: [
                        'require',
                        'module',
                        'console'
                    ]
                }
            }
        }
    });

    grunt.registerTask('lint', [
        'jshint',
        'jslint'
    ]);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jslint');
};
