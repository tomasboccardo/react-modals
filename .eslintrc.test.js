module.exports = {
  extends: 'airbnb',
  plugins: [
    'no-only-tests',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    browser: true,
    jest: true,
    shallow: true,
    render: true,
    mount: true,
  },
  rules: {
    // https://github.com/levibuzolic/eslint-plugin-no-only-tests
    // Forbid use describe.only or it.only in test specs
    'no-only-tests/no-only-tests': 2,
    'import/no-unresolved': [2, { ignore: ['react.*', '@m/atom/.*'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
    ],
  },
};
