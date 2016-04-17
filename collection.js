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

//Break this out into separate files

//config.json
const data = './data.json';

//synchronous call to load json and store it as a variable.
const json = loadJson.sync(data);

//filtered pins will display on map.
const filteredPins = mergeDimensionalArr(turnIntoArray(deepMap(json)));

const store = {
  riData: filteredPins
};

//not immutable yet.
let immutableArray = [];

//Currently the only thing that was ACTUALLY needed was a simple forEach loop.

function getLMapRequired (array, pushArr) {
  return array.forEach((element, index, value) => {
    //I'm at [array with some null and undefined], [array with some null and undefined], should I concat and flatten?
    //return [].concat.apply([], array);
    pushArr.push(element[26])
  });
}

//Run function and push to immutableArray.
getLMapRequired(store.riData, immutableArray);


//Flatten function
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

//Remove zeros
function removeZeros (arr) {
  return arr.filter(function(element){
    if(element!==0){
      return element;
    }
  });
}

//Write to JSON to see what I should filter for final view.

const filePathForVals = '/Users/jcurtis/Desktop/newVal.json';
const finalProduct = removeZeros(flatten(immutableArray));

writeSyncJsonFile(filePathForVals, finalProduct);

//See where I am at.
//console.log(removeZeros(immutableArray));


/* Lodash */

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


//ImmutableJS

let immutableCollection = Immutable.Map(json);
let immutableToJS = immutableCollection.toArray();
let immutableFrom = Immutable.fromJS(json);


const filePathImmutableJSON = '/Users/jcurtis/Desktop/immutableJSON';
const objForImmutale = immutableFrom;

//Add in tests to assert this, but for now just console.log values for iteration.

//console.log(Immutable.Map.isMap(immutableFrom));
//console.log(immutableFrom.getIn(["data", 0, 26, 1])); Reaches inside data structure and pulls out the 0 element and the 26th index and the first value.


writeSyncJsonFile(filePathImmutableJSON, objForImmutale);

// Write to JSON to see what I should filter for final view.
const filePathRIJSON = '/Users/jcurtis/Desktop/newJson.json';
const storeObj = store;


//Write to sync json file and store as variable.
function writeSyncJsonFile (file, obj) {
  return jsonfile.writeFileSync(file, obj, {spaces: 2});
}

//Write to JSON to see what I should filter for final view.

writeSyncJsonFile(filePathRIJSON, storeObj);
