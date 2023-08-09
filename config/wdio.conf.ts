import type { Options } from '@wdio/types'
import { rimraf } from 'rimraf'

const allureResultsDir = 'report/allure-results'

export const config: Omit<Options.Testrunner, 'capabilities'> = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true,
        },
    },
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
    specFileRetries: process.env.CI ? 1 : 0,
    logLevel: 'info',
    outputDir: 'logs',
    // hooks
    async before() {
        await import('../src/wdio/addCommands.js')
        const { addCustomMatchers } = await import('../src/matchers.js')
        addCustomMatchers()
    },
    async afterTest(test, context, { passed }) {
        if (!passed) {
            await browser.takeScreenshot()
        }
    },
    async afterHook(test, context, { passed }) {
        if (!passed) {
            await browser.takeScreenshot()
        }
    },
    async onPrepare() {
        await rimraf(allureResultsDir)
    },
}
