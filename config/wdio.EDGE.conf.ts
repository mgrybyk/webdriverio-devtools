import { config } from './wdio.conf'

const browserOptions: WebDriver.MicrosoftEdgeOptions & { args: Array<string> } = {
    args: ['--window-size=1920,1080'],
    headless: process.argv.includes('--headless'),
}

const browserConfig: WebdriverIO.Config = {
    ...config,
    capabilities: [
        {
            browserName: 'MicrosoftEdge',
            'ms:edgeOptions': browserOptions,
        },
    ],
}

exports.config = browserConfig
