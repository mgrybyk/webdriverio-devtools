/* eslint-disable @typescript-eslint/no-var-requires */
const allureResultsDir = 'report/allure-results'

export const config: WebdriverIO.Config = {
    specs: ['./test/specs/**/*.ts'],
    baseUrl: 'https://webdriver.io/',
    waitforTimeout: 10000,
    maxInstances: 5,
    automationProtocol: 'devtools',
    framework: 'mocha',
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: allureResultsDir,
                disableMochaHooks: true,
                disableWebdriverStepsReporting: true,
            },
        ],
    ],
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
    afterTest(test, context, { passed }) {
        if (!passed) {
            browser.takeScreenshot()
        }
    },
    afterHook(test, context, { passed }) {
        if (!passed) {
            browser.takeScreenshot()
        }
    },
    async onPrepare() {
        require('rimraf').sync(allureResultsDir)
    },
}
