# broccoli-yaml [![Build Status](https://travis-ci.org/aboveproperty/broccoli-yaml.svg?branch=master)](https://travis-ci.org/aboveproperty/broccoli-yaml)

> A Broccoli filter that converts YAML to JSON using [js-yaml](https://github.com/nodeca/js-yaml)

## Install

```bash
$ npm install --save broccoli-yaml
```

## Usage

```js
var yaml2json = require('broccoli-yaml');
var locales = yaml2json('config/locales', { space: 2});
```

## API

### yaml(tree, opts)

Transpile a YAML 1.2 document into a corresponding JSON document. Optionally supply
an object with options as the last argument.

## Options

### space

Type: `Number`  
Default: `4`

Accepts a number that defines the indentation level for JSON pretty print.

## License

MIT © [Above Property](https://github.com/aboveproperty)
