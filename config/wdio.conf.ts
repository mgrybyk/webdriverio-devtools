export const config: WebdriverIO.Config = {
    specs: ['./test/specs/**/*.ts'],
    baseUrl: 'https://webdriver.io/',
    waitforTimeout: 10000,
    maxInstances: 5,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000,
    },
    logLevel: 'info',
    outputDir: 'logs',
    // hooks
    before() {
        require('../src/wdio/addCommands')
    },
}
