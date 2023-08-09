class TopNavigation {
    get $origin() {
        return $('.navbar__items')
    }

    public async openByName(name: string) {
        await this.$origin.$(`=${name}`).click()
    }

    public $getActive() {
        return this.$origin.$('.navbar__link--active')
    }
}
export const topNavigation = new TopNavigation()
