exports.config = {
    specs: ['./test/specs/**/*.ts'],
    baseUrl: 'https://webdriver.io/',
    pageLoad: 30000,
    waitforTimeout: 10000,
    maxInstances: 5,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000,
        require: [
            'tsconfig-paths/register',
        ]
    },
    logLevel: 'info',
    outputDir: 'logs',
    // hooks
    before: function (capabilities, specs) {
        require('ts-node').register({ files: true, transpileOnly: true })

        const chai = require('chai')

        global.expect = chai.expect
        global.assert = chai.assert
        global.should = chai.should()
    },
}
