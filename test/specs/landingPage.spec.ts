/**
 * `should` assertion example
 */

describe('Landing Page', () => {
    before(() => {
        browser.url('/')
    })

    it('should have proper title', () => {
        browser.getTitle().should.equal('WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})
