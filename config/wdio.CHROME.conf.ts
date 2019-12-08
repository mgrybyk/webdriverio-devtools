import { config } from './wdio.conf'

const chromeConfig: WebdriverIO.Config = {
    ...config,
    automationProtocol: 'devtools',
    capabilities: [{
        'browserName': 'chrome',
        'goog:chromeOptions': {
            // @ts-ignore
            headless: process.env.CHROME_HEADLESS === 'true'
        }
    }],
}

exports.config = chromeConfig
