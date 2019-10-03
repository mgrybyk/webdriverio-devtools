require('ts-node').register({ transpileOnly: true })
require('tsconfig-paths/register')
module.exports = require('./wdio.conf.typed.ts')
