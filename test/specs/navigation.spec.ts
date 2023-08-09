import { topNavigation } from '../elements/topNav.js'
import { docPage } from '../pages/docPage.js'

describe('Navigation', async () => {
    beforeEach(async () => {
        await browser.url('/')
    })

    it('should open page from top nav', async () => {
        await topNavigation.openByName('Docs')
        await expect(topNavigation.$getActive()).toHaveText('Docs')
    })

    it('should scroll to anchor on page', async () => {
        await browser.url('/docs/automationProtocols#devtools-protocol')

        const subHeader = docPage.getAnchorHeaderById('devtools-protocol')
        await expect(subHeader).toHaveText('DevTools Protocol​')
        await expect(subHeader).toBeDisplayedInViewport()
    })
})
