import { config } from './wdio.conf'

const browserOptions: WebDriver.FirefoxOptions = {
    args: [...(process.argv.includes('--headless') ? ['--headless', '--no-sandbox'] : []), '--window-size=1920,1080'],
}

const browserConfig: WebdriverIO.Config = {
    ...config,
    automationProtocol: 'devtools',
    capabilities: [
        {
            browserName: 'firefox',
            'moz:firefoxOptions': browserOptions,
        },
    ],
}

exports.config = browserConfig
