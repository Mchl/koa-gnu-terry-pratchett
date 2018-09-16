# koa-gnu-terry-pratchett [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
Koa.js middleware to [commemorate Terry Pratchett](http://www.gnuterrypratchett.com/)

## What does it do

Simply adds a `X-Clacks-Overhead: GNU Terry Pratchett` header to response

## Prerequisites

This middleware uses async/await middleware format and as such is meant to be used with Koa 2. This also means Node 7.6+.


## Install

With npm: 

```
npm i koa-gnu-terry-pratchett --save
```

With yarn:

```
yarn add koa-gnu-terry-pratchett
```

## Usage

```js
const Koa = require('koa')
const app = new Koa()

app.use(require('koa-gnu-terry-pratchett'))

app.use(async ctx => {
  ctx.body = 'Hello World'
})

app.listen(3000)
```
