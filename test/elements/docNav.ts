class DocumentNavigation {
    get rootElement () { return $('#docsNav') }

    public openByName (name: string) {
        const link = this.rootElement.$(`.//li/a[normalize-space() = "${name}"]`)
        link.scrollIntoView(false)
        link.click()
    }

    public getActive () {
        return this.rootElement.$('.navListItemActive a').getText()
    }
}
export const documentNavigation = new DocumentNavigation()
