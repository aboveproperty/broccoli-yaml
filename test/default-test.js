var expect = require("chai").expect;
var YamlFilter = require("../index");

var fs = require('fs');

describe("YamlFilter", function(){
  describe('constructor', function(){
    it('should return a new instance', function(){
      var yaml2json = YamlFilter('fixtures');
      expect(yaml2json).to.be.instanceOf(YamlFilter);
    });

    it('should default options ', function(){
      var yaml2json = YamlFilter('fixtures');
      expect(yaml2json.options).to.eql({space: 4});
    })
  });

  describe('#processString', function(){
    it('should convert YAML into a JSON string', function(){

      var yaml2json = YamlFilter('fixtures');
      var expected = require("./expected/default");

      var yamlString = fs.readFileSync("test/fixtures/default.yaml");
      var jsonString = yaml2json.processString(yamlString);

      expect(jsonString).to.eql(JSON.stringify(expected, null, 4));
    })

    it('should convert YAML into a JSON string with options', function(){

      var yaml2json = YamlFilter('fixtures', {space: 2});
      var expected = require("./expected/default");

      var yamlString = fs.readFileSync("test/fixtures/default.yaml");
      var jsonString = yaml2json.processString(yamlString);

      expect(jsonString).to.eql(JSON.stringify(expected, null, 2));
    })
  });
});