# eslint-config
A custom eslint config for all react projects

## Installation

```bash
npm install --save-dev eslint github:jwkellyiii/eslint-config
```

## Usage

Create an `.eslintrc` file that extends this config. For more configuration options, check out the [ESLint docs](https://eslint.org/docs/user-guide/configuring).

```json
{
  "extends": "@jwkellyiii"
}
```

If you're using React, extend `@jwkellyiii/eslint-config/react`.

```json
{
  "extends": "@jwkellyiii/eslint-config/react"
}
```
