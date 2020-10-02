class DocPage {
    get rootElement() {
        return $('.container.mainContainer')
    }

    public $getPostHeader() {
        return this.rootElement.$('.postHeaderTitle')
    }

    public getAnchorHeaderById(id: string) {
        return this.rootElement.$(`.//a[@class="anchor" and @id="${id}"]/..`)
    }
}
export const docPage = new DocPage()
