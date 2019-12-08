describe('Landing Page', () => {
    before(() => {
        browser.url('/')
    })

    it('should have proper title', () => {
        expect(browser).toHaveTitle('WebdriverIO', { containing: true })
    })
})
