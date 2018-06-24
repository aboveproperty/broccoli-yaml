'use strict';

var Filter = require('broccoli-persistent-filter');
var Yaml = require('js-yaml');
var merge = require('lodash.merge');

function YamlFilter(inputNode, options) {

  if (!(this instanceof YamlFilter)) {
    return new YamlFilter(inputNode, options);
  }

  options = merge({}, {
    space: 4
  }, options);

  Filter.call(this, inputNode, {
    annotation: options.annotation
  });

  this.options = options;
}

YamlFilter.prototype = Object.create(Filter.prototype);
YamlFilter.prototype.constructor = YamlFilter;

YamlFilter.prototype.extensions = ['yaml', 'yml'];
YamlFilter.prototype.targetExtension = 'json';

YamlFilter.prototype.processString = function (contents/*, relativePath*/) {
  return JSON.stringify(Yaml.safeLoad(contents), null, this.options.space);
};

module.exports = YamlFilter;