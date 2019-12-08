import { topNavigation } from '@test/elements/topNav'
import { documentNavigation } from '@test/elements/docNav'
import { onPageNavigation } from '@test/elements/pageNav'
import { docPage } from '@test/pages/docPage'

describe('Navigation', () => {
    before(() => {
        browser.url('/')
    })

    it('should open page from top nav', () => {
        topNavigation.openByName('Guide')
        expect(topNavigation.$getActive()).toHaveText('Guide')
    })

    it('should open document from docs navigation', () => {
        documentNavigation.openByName('Automation Protocols')
        expect(documentNavigation.$getActive()).toHaveText('Automation Protocols')
        expect(docPage.$getPostHeader()).toHaveText('Automation Protocols')
    })

    it('should scroll to anchor on page', () => {
        onPageNavigation.openByName('DevTools Protocol')
        expect(browser).toHaveUrl('devtools-protocol', { containing: true })

        const subHeader = docPage.getAnchorHeaderById('devtools-protocol')
        expect(subHeader).toHaveText('DevTools Protocol')
        expect(subHeader).toBeDisplayedInViewport()
    })
})
