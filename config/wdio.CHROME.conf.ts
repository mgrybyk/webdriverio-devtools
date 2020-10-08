import { config } from './wdio.conf'

const browserOptions: WebDriver.ChromeOptions & { args: Array<string> } = {
    args: ['--window-size=1920,1080'],
    headless: process.argv.includes('--headless'),
}

const browserConfig: WebdriverIO.Config = {
    ...config,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': browserOptions,
        },
    ],
}

exports.config = browserConfig
