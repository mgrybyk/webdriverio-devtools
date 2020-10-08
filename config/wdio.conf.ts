export const config: WebdriverIO.Config = {
    specs: ['./test/specs/**/*.ts'],
    baseUrl: 'https://webdriver.io/',
    waitforTimeout: 10000,
    maxInstances: 5,
    automationProtocol: 'devtools',
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000,
    },
    specFileRetries: 1,
    logLevel: 'info',
    outputDir: 'logs',
    // hooks
    before() {
        require('../src/wdio/addCommands')
    },
}
