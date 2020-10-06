import { config } from './wdio.conf'

const browserOptions: WebDriver.FirefoxOptions = {
    args: [...(process.argv.includes('--headless') ? ['--headless'] : []), '--width=1920', '--height=1080'],
    binary: process.env.CI ? 'firefox' : undefined,
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
