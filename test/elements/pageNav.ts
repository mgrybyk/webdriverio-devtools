class OnPageNavigation {
    get $origin () { return $('nav.onPageNav ul') }

    public openByName (name: string) {
        const link = this.$origin.$(`=${name}`)
        link.waitForClickable()
        link.click()
        browser.waitUntil(() => this.$getActive().getText() === name)
    }

    public $getActive () {
        return this.$origin.$('a.active')
    }
}
export const onPageNavigation = new OnPageNavigation()
