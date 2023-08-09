describe('Landing Page', () => {
    beforeEach(async () => {
        await browser.url('/')
    })

    it('should have proper title', async () => {
        await expect(browser).toHaveTitle('WebdriverIO', { containing: true })
        // custom matcher usage example
        await expect('foo').myMatcher('foo')
    })
})
