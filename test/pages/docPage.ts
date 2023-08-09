class DocPage {
    get rootElement() {
        return $('article')
    }

    public getAnchorHeaderById(id: string) {
        return this.rootElement.$(`h2.anchor[id="${id}"]`)
    }
}
export const docPage = new DocPage()
