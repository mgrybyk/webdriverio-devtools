const firefox = process.argv.includes('--firefox') ? 'FIREFOX' : ''
const edge = process.argv.includes('--edge') ? 'EDGE' : ''
const browser = firefox || edge || 'CHROME'

require('ts-node').register({ transpileOnly: true })
module.exports = require(`./config/wdio.${browser}.conf.ts`)
