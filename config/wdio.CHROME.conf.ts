import type { Capabilities, Options } from '@wdio/types'
import { config } from './wdio.conf.js'

const browserOptions: Capabilities.ChromeOptions & { headless: boolean } = {
    args: ['--window-size=1920,1080'],
    headless: process.argv.includes('--headless'),
}

export const browserConfig: Options.Testrunner = {
    ...config,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': browserOptions,
        },
    ],
}
