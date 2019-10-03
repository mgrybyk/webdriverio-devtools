const config: WebdriverIO.Config = {
    specs: ['./test/specs/**/*.ts'],
    baseUrl: 'https://webdriver.io/',
    waitforTimeout: 10000,
    maxInstances: 5,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000,
        require: []
    },
    logLevel: 'info',
    outputDir: 'logs',
    // hooks
    before (capabilities, specs) {
        const chai = require('chai')

        global.expect = chai.expect
        global.assert = chai.assert
        global.should = chai.should()
    },
}

exports.config = config
