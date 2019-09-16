class OnPageNavigation {
    get rootElement () { return $('nav.onPageNav ul') }

    public openByName (name: string) {
        const link = this.rootElement.$(`=${name}`)
        link.scrollIntoView(false)
        link.click()
        browser.waitUntil(() => this.getActive() === name)
    }

    public getActive () {
        return this.rootElement.$('a.active').getText()
    }
}
export const onPageNavigation = new OnPageNavigation()
