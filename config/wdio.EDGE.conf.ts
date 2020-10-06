import { config } from './wdio.conf'

const browserOptions: WebDriver.ChromeOptions & { args: Array<string> } = {
    args: [...(process.argv.includes('--headless') ? ['--headless', '--no-sandbox'] : []), '--window-size=1920,1080'],
}

const browserConfig: WebdriverIO.Config = {
    ...config,
    automationProtocol: 'devtools',
    capabilities: [
        {
            browserName: 'edge',
            'goog:chromeOptions': browserOptions,
        },
    ],
}

exports.config = browserConfig
