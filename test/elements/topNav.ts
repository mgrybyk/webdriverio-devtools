class TopNavigation {
    get $origin() {
        return $('nav.slidingNav ul.nav-site')
    }

    public openByName(name: string) {
        this.$origin.$(`=${name}`).click()
    }

    public $getActive() {
        return this.$origin.$('.siteNavItemActive a')
    }
}
export const topNavigation = new TopNavigation()
