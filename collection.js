'use strict';

const _ = require("lodash"),
  loadJson = require('load-json-file'),
  util = require('util'),
  d3 = require("d3");
_.mixin(require("lodash-deep"));

let data = './data.json';

let json = loadJson.sync(data);


function mapMyObj () {
  _.forEach(json, function (value, key) {
    console.log(value, key);
  })
}


function deepMap(obj) {
  return _.deepMapValues(obj, function (value, path) {
    return value;
    });
}

function turnIntoArray(obj) {
  return _.map(obj, function (currentArray) {
    console.log(currentArray[0][26][1]);
  })
}

mapMyObj(turnIntoArray(deepMap(json)));
