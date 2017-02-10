# input-verifier [![Build Status](https://travis-ci.org/joseluisq/input-verifier.svg?branch=master)](https://travis-ci.org/joseluisq/input-verifier) [![Coverage Status](https://coveralls.io/repos/github/joseluisq/input-verifier/badge.svg?branch=master)](https://coveralls.io/github/joseluisq/input-verifier?branch=master) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Some useful functions to validate common data input.

## Prerequisites

[NodeJS](https://nodejs.org) v4.0 or greater.

## Install

```sh
npm install input-verifier --save-dev
```

## Usage

```js
const verifier = require('input-verifier')

console.log(verifier.empty(' '))
// true

console.log(verifier.url('https://company.com'))
// true

console.log(verifier.email('info@company.com'))
// true

```

## API

All verification functions return a boolean value.

#### empty(x)

#### email(x)

#### url(x)

#### number(x)

#### digits(x)

#### decimal(x)

#### negative(x)

#### alphanumeric(x)

#### alphabetic(x)

#### major(x1, x2)

#### minor(x1, x2)

#### max(x, limit)

#### min(x, limit)

#### equalTo(x1, x2)

#### maxlength(x, len)

#### minlength(x, len)

## License
MIT license

© 2017 [José Luis Quintana](http://quintana.io)
