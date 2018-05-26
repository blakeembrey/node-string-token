# String Token

[![NPM version](https://img.shields.io/npm/v/string-token.svg?style=flat)](https://npmjs.org/package/string-token)
[![NPM downloads](https://img.shields.io/npm/dm/string-token.svg?style=flat)](https://npmjs.org/package/string-token)
[![Build status](https://img.shields.io/travis/blakeembrey/node-string-token.svg?style=flat)](https://travis-ci.org/blakeembrey/node-string-token)
[![Test coverage](https://img.shields.io/coveralls/blakeembrey/node-string-token.svg?style=flat)](https://coveralls.io/r/blakeembrey/node-string-token?branch=master)

> Generate a random token of any length.

## Installation

```
npm install string-token --save
```

## Usage

```ts
import { stringToken } from 'string-token'

const token = await stringToken(25) //=> "faJ~iDAh_Eawd7fgXL_~UfnkV"
```

**Tip:** The number of possible characters must be a power of 2 (e.g. `32`, `64`, `128`) to ensure the token contains no bias. By default, the library uses `_`, `~` and alphanumeric characters (making it 64 in total), which ensures the token is also URL-safe by default. You can create your own `stringToken` with different characters by using `createStringToken(chars)`.

## TypeScript

This project is written using [TypeScript](https://github.com/Microsoft/TypeScript) and publishes the definitions directly to NPM.

## License

Apache 2.0
