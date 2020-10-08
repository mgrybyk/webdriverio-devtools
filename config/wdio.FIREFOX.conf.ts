import { config } from './wdio.conf'

const browserOptions: WebDriver.FirefoxOptions = {
    args: ['--width=1920', '--height=1080'],
    binary: process.env.CI ? 'firefox' : undefined,
    headless: process.argv.includes('--headless'),
}

const browserConfig: WebdriverIO.Config = {
    ...config,
    capabilities: [
        {
            browserName: 'firefox',
            'moz:firefoxOptions': browserOptions,
        },
    ],
}

exports.config = browserConfig
