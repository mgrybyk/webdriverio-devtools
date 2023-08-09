const firefox = process.argv.includes('--firefox') ? 'FIREFOX' : ''
const browser = firefox || 'CHROME'

const { browserConfig } = await import(`./config/wdio.${browser}.conf.js`)

export const config = browserConfig
