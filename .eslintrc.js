module.exports = {
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
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
    "import/extensions": {
      jsx: "always",
    },
    "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
    "no-console": 0,
    "arrow-body-style": ["error", "always"],
  },
};
