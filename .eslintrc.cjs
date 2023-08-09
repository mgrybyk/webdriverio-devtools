module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2022,
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    env: {
        node: true,
        mocha: true,
    },
    rules: {
        '@typescript-eslint/no-floating-promises': 'error',
        // '@typescript-eslint/explicit-function-return-type': 'off',
        // '@typescript-eslint/member-delimiter-style': 'off',
        // '@typescript-eslint/ban-ts-comment': 'off',
    },
}
