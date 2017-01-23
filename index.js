'use strict';

var Filter = require('broccoli-filter');
var Yaml = require('js-yaml');
var merge = require('lodash.merge');

function YamlFilter(inputTree, options) {
  if (!(this instanceof YamlFilter)) {
    return new YamlFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = merge({}, {
    space: 4
  }, options);

}

YamlFilter.prototype = Object.create(Filter.prototype);
YamlFilter.prototype.constructor = YamlFilter;

YamlFilter.prototype.extensions = ['yaml', 'yml'];
YamlFilter.prototype.targetExtension = 'json';

YamlFilter.prototype.processString = function (str) {

  try {
    return JSON.stringify(Yaml.safeLoad(str), null, this.options.space);

  } catch (e) {
    console.warn(e);
  }
};

module.exports = YamlFilter;
