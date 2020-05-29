import { config } from './wdio.conf'

const chromeConfig: WebdriverIO.Config = {
    ...config,
    automationProtocol: 'devtools',
    capabilities: [{
        // @ts-ignore
        'browserName': 'chrome',
        'goog:chromeOptions': {
            headless: process.env.CHROME_HEADLESS === 'true'
        }
    }],
}

exports.config = chromeConfig
