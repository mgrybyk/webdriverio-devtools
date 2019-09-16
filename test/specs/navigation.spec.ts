/**
 * `expect` assertion example
 */

import { topNavigation } from 'test/elements/topNav'
import { documentNavigation } from 'test/elements/docNav'
import { onPageNavigation } from 'test/elements/pageNav'
import { docPage } from 'test/pages/docPage'

describe('Navigation', () => {
    before(() => {
        browser.url('/')
    })

    it('should open page from top nav', () => {
        topNavigation.openByName('Guide')
        expect(topNavigation.getActive()).eq('Guide')
    })

    it('should open document from docs navigation', () => {
        documentNavigation.openByName('Automation Protocols')
        expect(documentNavigation.getActive()).eq('Automation Protocols')
        expect(docPage.getPostHeader()).eq('Automation Protocols')
    })

    it('should scroll to anchor on page', () => {
        onPageNavigation.openByName('DevTools Protocol')
        expect(browser.getUrl()).contain('devtools-protocol')

        const subHeader = docPage.getAnchorHeaderById('devtools-protocol')
        expect(subHeader.getText()).eq('DevTools Protocol')
        expect(subHeader.isDisplayedInViewport()).eq(true)
    })
})
