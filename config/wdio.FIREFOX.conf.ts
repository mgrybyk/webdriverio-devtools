import type { Capabilities, Options } from '@wdio/types'
import { config } from './wdio.conf.js'

const browserOptions: Capabilities.FirefoxOptions & { headless: boolean } = {
    args: ['--width=1920', '--height=1080'],
    binary: process.env.CI ? 'firefox' : undefined,
    headless: process.argv.includes('--headless'),
}

export const browserConfig: Options.Testrunner = {
    ...config,
    capabilities: [
        {
            browserName: 'firefox',
            'moz:firefoxOptions': browserOptions,
        },
    ],
}
