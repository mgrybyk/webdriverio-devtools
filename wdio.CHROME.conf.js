const config = require('./wdio.conf.js').config;

exports.config = {
    ...config,
    automationProtocol: 'devtools',
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            headless: process.env.CHROME_HEADLESS === 'true'
        }
    }],
}
