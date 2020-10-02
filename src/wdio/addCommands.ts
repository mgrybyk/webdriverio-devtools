browser.addCommand(
    'getLink',
    function () {
        return this.getAttribute('href')
    },
    true
)
