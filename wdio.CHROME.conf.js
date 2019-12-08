require('ts-node').register({ transpileOnly: true })
require('tsconfig-paths/register')
module.exports = require('./config/wdio.CHROME.conf.ts')
