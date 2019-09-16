class TopNavigation {
    get rootElement () { return $('nav.slidingNav ul.nav-site') }

    public openByName (name: string) {
        this.rootElement.$(`=${name}`).click()
    }

    public getActive () {
        return this.rootElement.$('.siteNavItemActive a').getText()
    }
}
export const topNavigation = new TopNavigation()
