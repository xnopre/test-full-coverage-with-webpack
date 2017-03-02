'use strict'

//const webpackConfig = require('./webpack.config')('test');

module.exports = function karmaConfig(config) {

    config.set({

        browsers: ['PhantomJS'],
        port: 8080,
        captureTimeout: 60000,
        frameworks: [
            'mocha',
            'chai'
        ],
        client: {
            mocha: {}
        },
        singleRun: true,
        mochaReporter: {
            output: 'autowatch'
        },

        // Files

        files: [
            'test/loadtests.js'
        ],
        preprocessors: {
            'test/loadtests.js': ['webpack', 'sourcemap']
        },

        // Webpack

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                        // loader: 'istanbul-instrumenter-loader!babel-loader'
                    }
                ],
            }
        },
        webpackServer: {
            noInfo: true
        },

        // Reporters

        reporters: ['mocha', 'coverage', 'junit'],
        junitReporter: {
            outputDir: 'coverage',
            outputFile: 'junit-result.xml',
            useBrowserName: false
        },
        coverageReporter: {
            dir: 'coverage/',
            watermarks: {
                statements: [70, 80],
                functions: [70, 80],
                branches: [70, 80],
                lines: [70, 80]
            },
            reporters: [
                {type: 'text'},
                {
                    type: 'html',
                    subdir: 'html'
                }/*,
                 {
                 type: 'cobertura',
                 subdir: 'cobertura'
                 },
                 {
                 type: 'lcovonly',
                 subdir: 'lcov'
                 }*/
            ]
        },
        coverageIstanbulReporter: {
            reports: ['text-summary'],
            fixWebpackSourcePaths: true
        }
    })
}
