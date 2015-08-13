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
                    predef: [
                        'require',
                        'module'
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
