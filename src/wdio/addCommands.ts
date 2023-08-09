browser.addCommand(
    'getLink',
    async function (this: WebdriverIO.Element) {
        return this.getAttribute('href')
    },
    true
)
