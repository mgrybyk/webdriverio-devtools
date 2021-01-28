import { topNavigation } from '../elements/topNav'
import { documentNavigation } from '../elements/docNav'
import { onPageNavigation } from '../elements/pageNav'
import { docPage } from '../pages/docPage'

describe('Navigation', () => {
    before(() => {
        browser.url('/')
    })

    it('should open page from top nav', () => {
        topNavigation.openByName('Docs')
        expect(topNavigation.$getActive()).toHaveText('Docs')
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

    it('custom matcher test', () => {
        expect('foo').myMatcher('foo')
    })
})
