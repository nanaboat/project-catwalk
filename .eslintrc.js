module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
    'react/no-array-index-key': 'off',
    'react/button-has-type': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-filename-extension': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'space-infix-ops': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'import/named': 'off',
    'import/no-named-as-default': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-undef': 'off',
    radix: 'off',
  },
};
