# String Token


[![NPM version](https://img.shields.io/npm/v/string-token.svg?style=flat)](https://npmjs.org/package/string-token)
[![NPM downloads](https://img.shields.io/npm/dm/string-token.svg?style=flat)](https://npmjs.org/package/string-token)
[![Build status](https://img.shields.io/travis/blakeembrey/node-string-token.svg?style=flat)](https://travis-ci.org/blakeembrey/node-string-token)
[![Test coverage](https://img.shields.io/coveralls/blakeembrey/node-string-token.svg?style=flat)](https://coveralls.io/r/blakeembrey/node-string-token?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/blakeembrey/node-string-token.svg)](https://greenkeeper.io/)

> Generate a random token of length and characters.

## Installation

```
npm install string-token --save
```

## Usage

```ts
import { stringToken } from 'string-token'

const token = await stringToken(32) //=> "4HY7FbAmTg0Lv3S5qA7AqjeGNqRibqce"
```

## TypeScript

This project is written using [TypeScript](https://github.com/Microsoft/TypeScript) and publishes the definitions directly to NPM.

## License

Apache 2.0
