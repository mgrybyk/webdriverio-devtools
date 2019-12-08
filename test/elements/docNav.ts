class DocumentNavigation {
    get $origin () { return $('#docsNav') }

    public openByName (name: string) {
        const link = this.$origin.$(`.//li/a[normalize-space() = "${name}"]`)
        link.waitForClickable()
        link.click()
    }

    public $getActive () {
        return this.$origin.$('.navListItemActive a')
    }
}
export const documentNavigation = new DocumentNavigation()
