'use strict';

const _ = require("lodash"),
  loadJson = require('load-json-file'),
  util = require('util'),
  d3 = require("d3"),
  jsonfile = require('jsonfile');

_.mixin(require("lodash-deep"));


const storeObj = store;
const data = './data.json';

//synchronous call
const json = loadJson.sync(data);

//Currently not in use, atm.
function mapMyObj () {
  _.forEach(json, function (value, key) {
    console.log(value, key);
  })
}


// From the deepMap library https://www.npmjs.com/package/lodash-deep

function deepMap(obj) {
  return _.deepMapValues(obj, function (value, path) {
    return value;
    });
}

function turnIntoArray(obj) {
  return _.map(obj, function (currentArray) {
    return currentArray;
  })
}

//Should break this up into files and have an structure with es6 imports.

const filteredPins = turnIntoArray(deepMap(json));

/* My settings would be.  const filePathRIJSON = '/Users/jcurtis/Desktop/newJson.json';
 * refactor this
  * */
const filePathRIJSON = '/Users/jcurtis/Desktop/newJson.json';
const storeObj = store;

const store = {
  riData: filteredPins
};


function writeSyncJsonFile (file, obj) {
  return jsonfile.writeFileSync(file, obj, {spaces: 2});
}

//Write sync to disk, see the progress and iterate.
writeSyncJsonFile(filePathRIJSON, storeObj);
