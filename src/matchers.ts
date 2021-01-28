module.exports = {
    addCustomMatchers: () => {
        expect.extend({
            myMatcher(actual: unknown, expected: unknown) {
                return { pass: actual === expected, message: () => 'some message' }
            },
        })
    },
}
