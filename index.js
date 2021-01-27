module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': true
    }],
    "max-len": [2, 100, {
      "ignoreTemplateLiterals": false,
      "ignoreUrls": true
    }],
    "prettier/prettier": [
      "error", {
        singleQuote: true,
        // printWidth: 100,
        trailingComma: "es5",
      }
    ]
  },
};
