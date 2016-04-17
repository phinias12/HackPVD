'use strict';

const _ = require("lodash"),
  loadJson = require('load-json-file'),
  util = require('util'),
  jsonfile = require('jsonfile');

_.mixin(require("lodash-deep"));

/* Dealing with a 2 dimensional array; ie
*
* https://www.cs.cmu.edu/~mrmiller/15-110/Handouts/arrays2D.pdf
*{
*   [ riData: [
*   data
*     ]
*   ]
* }
*
* */

//Break this out into seperate files

//config.json
const data = './data.json';

//synchronous call to load json and store it as a variable.
const json = loadJson.sync(data);

//filtered pins will display on map.
const filteredPins = turnIntoArray(deepMap(json));

//adopted this idea from a popular framework.

const store = {
  riData: filteredPins
};


const storeObj = store;

//Currently not in use, atm, change.
function mapMyObj () {
  _.forEach(json, function (value, key) {
    console.log(value, key);
  })
}


/* From the deepMap library https://www.npmjs.com/package/lodash-deep
deepMap
 */

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



//Break this out into structures next please.



/* My settings would be.  const filePathRIJSON = '/Users/jcurtis/Desktop/newJson.json';
 * refactor this
  * */
const filePathRIJSON = '/Users/jcurtis/Desktop/newJson.json';

function writeSyncJsonFile (file, obj) {
  return jsonfile.writeFileSync(file, obj, {spaces: 2});
}

//Write sync to disk, see the progress and iterate.
writeSyncJsonFile(filePathRIJSON, storeObj);
