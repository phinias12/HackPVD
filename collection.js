'use strict';

const _ = require("lodash"),
  loadJson = require('load-json-file'),
  util = require('util'),
  jsonfile = require('jsonfile'),
  Immutable = require('immutable');

_.mixin(require("lodash-deep"));



/* Dealing with a 2 dimensional array; ie
 *
 *
 * Learn a little bit about Immutable data and for manipulation.
 * https://facebook.github.io/immutable-js/
 *
 *
 * * https://www.cs.cmu.edu/~mrmiller/15-110/Handouts/arrays2D.pdf
 *{
 *   [ riData: [
 *   data
 *     ]
 *   ]
 * }
 * super helpful because the data was a multi dimensional array.  http://stackoverflow.com/questions/10865025/merge-flatten-a-multidimensional-array-in-javascript
 * */

//Break this out into seperate files

//config.json
const data = './data.json';

//synchronous call to load json and store it as a variable.
const json = loadJson.sync(data);

//filtered pins will display on map.
const filteredPins = mergeDimensionalArr(turnIntoArray(deepMap(json)));

//adopted this idea from a popular framework.

const store = {
  riData: filteredPins
};


const storeObj = store;

//not immutable yet.
let immutableArray = [];


function removeUnwantedChar(arrayFilter) {

}

//Currently the only thing that was ACTUALLY needed was a simple forEach loop.

function getLMapRequired (array, pushArr) {
  return array.forEach((element, index, value) => {
    return array.filter(function (element) {

    });
    pushArr.push(element[26]);
  });
}

function getLMapLatLng (immuteArray, pushArr) {
  return immuteArrayArray.forEach((element, index, value) => {
  })
}

getLMapRequired(store.riData, immutableArray);

var removeZeros = function (arr) {
  return arr.filter(function(element){
    if(element!==0){
      return element;
    }
  });
}

console.log(removeZeros(immutableArray));


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

function mergeDimensionalArr (obj) {
  return [].concat.apply([], obj);
}

//Should break this up into files and have an structure with es6 imports.

//console.log(store.riData[0][26]);

//Break this out into structures next please.


let immutableCollection = Immutable.Map(json);
let immutableToJS = immutableCollection.toArray();
let immutableFrom = Immutable.fromJS(json);


const filePathImmutableJSON = '/Users/jcurtis/Desktop/immutableJSON';
const objForImmutale = immutableFrom;

//Add in tests to assert this.

console.log(Immutable.Map.isMap(immutableFrom));
console.log(immutableFrom.getIn(["data", 0, 26, 1]));

//Logs the latitude 41.787652

writeSyncJsonFile(filePathImmutableJSON, objForImmutale);

function mergeImmutableDeep (coll) {

  let forJS = Immutable.fromJS(coll);
  let getNested = forJS.mergeDeep(forJS);

}

/* My settings would be.  const filePathRIJSON = '/Users/jcurtis/Desktop/newJson.json';
 * refactor this
 */

const filePathRIJSON = '/Users/jcurtis/Desktop/newJson.json';

function writeSyncJsonFile (file, obj) {
  return jsonfile.writeFileSync(file, obj, {spaces: 2});
}

//Write sync to disk, see the progress and iterate.
writeSyncJsonFile(filePathRIJSON, storeObj);
