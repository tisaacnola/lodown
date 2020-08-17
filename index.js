'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Takes a value and returns that input value unchanged
 * 
 * @param {*} value: A single value that can be any datatype.
 * 
 * @return {*} value: The input value unchanged.
 * 
 */
 
 function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Takes a value and returns a string of its "type"
 * 
 * @param {*} value: A single value that can be any datatype.
 * 
 * @return {*} value: A string of the value's 'type'.
 * 
 */
 
 function typeOf (value) {
     return typeof(value) !== 'object' 
        ? typeof(value)
        :Array.isArray(value)  
        ? 'array'
        : value === null 
        ? 'null'
        : value instanceof Date 
        ? 'date'
        : 'object'; 
}

module.exports.typeOf = typeOf;

/**
 * first: Designed to remove any number of items from the front of an array.
 * 
 * @param {Array} array: The array from which items will be removed
 * @param {Number} number: The number of items to be removed from the front of the array
 * 
 * @return {Array} array: Will include the first 'number' of items, an empty array, or the first item.
 */
 
 function first (array, number) {
    return !Array.isArray(array) ? [] : !number ? array[0] : array.splice(0, number); 
} 

module.exports.first = first;

/**
 * last: Designed to remove any number of items from the back of an array.
 * 
 * @param {Array} array: The array from which items will be removed
 * @param {Number} number: The number of items to be removed from the back of the array
 * 
 * @return {Array} array: Will include the last 'number' of items, an empty array, or the last item.
 */
 
 function last (array, number) {
   return !Array.isArray(array) ? [] : number > array.length ? array : number ? array.splice(array.length - number, number) : array.pop(); 
} 

module.exports.last = last;

/**
 * indexOf: Designed to take any value and return the index of the value, 
 * if the value is present or a -1 if the value is absent within the array.
 * 
 * @param {Array} array: The array over which to iterate
 * @param {*} value: The value for which the array will be searched
 * 
 * @return {Number} index: The index of the value or -1 due to it's absence.
 */
 
 
function indexOf (array, value) {
    if (array.includes(value)) {
        for (var i = 0; i < array.length; i++) {
            if (value === array[i]) { 
                return i; 
        }
     }
    } else {
        return -1;
    }
}

module.exports.indexOf = indexOf;

/**
 * contains: Designed to take a value and return a boolean based on it's presence in the array.
 * 
 * @param {Array} array: The array over which to iterate
 * @param {*} value: The value for which the array will be searched
 * 
 * @return {Boolean} boolean: Due to it's presence or absence.
 */
 
 function contains (array, value) {
         return array.includes(value) ? true : false; 

 }
 
 module.exports.contains = contains;
 
 /**
 * unique: Designed to loop over an array and return a new array of only the unique elements from the array.
 * 
 * @param {Array} array: The array over which to iterate
 * 
 * @return {Array} array: A new array of with only unique values
 */
 
function unique (array){
  let noDup = [];
  for(let i = 0; i < array.length; i++){
    if(indexOf(noDup,array[i]) === -1){
        noDup.push(array[i]);
    }
}
    return noDup;
}

module.exports.unique = unique;

/**
 * filter: Designed to loop over an array and apply the 
 * Function to each value in the array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * array
 * 
 * @return {Array} array: A new array with values that return true.
 */
 
function filter (array, func){
     let filterArray = [];
     each(array, function(e, i , a) {
        if (func(e, i, a)) { 
        filterArray.push(e); 
        }
     });
     return filterArray; 
 }
 
 module.exports.filter = filter;
 
 /**
 * reject: Designed to loop over an array and apply the 
 * Function to each value in the collection.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * array
 * 
 * @return {Array} array: A new array with values that return false
 */

 function reject (array, func){
     let rejectArray = [];
     filter(array, function(e, i , a) {
        if (!func(e, i, a)) { 
        rejectArray.push(e); 
        }
     });
     return rejectArray; 
 }
 
 module.exports.reject = reject;
 
 /**
 * partition: Designed to loop over an array and apply the 
 * Function to each value in the array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * array
 * 
 * @return {Array} array: A new array with two sub-arrays containing truty and falsy values.
 */
 
 
function partition (array, func){
   return [filter(array, func), reject(array, func)];
}

module.exports.partition = partition;

/**
 * map: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * @return {Array}: The saved values of the function call
 */

function map (collection, func) {
    let mapArray= [];
     each(collection, function(e, i , c) {
        mapArray.push(func(e, i, c)); 
     });
    return mapArray; 
}

module.exports.map = map;

/**
 * pluck: Designed to loop over an array of objects, and apply the 
 * action Function to each value in the collection.
 * 
 * @param {Array} collection: The array over which to iterate
 * @param {String} property: The key that be accessed in each object
 * 
 * @return {Array}: The values from each element in the array that matches the property will be 
 * pushed into a new array.
 */
 
 function pluck (array, prop) {
    let pluckArray= [];
    for (var i = 0; i < array.length; i++)  {
     map(array[i], function(v, k, c) {
      if (prop === k) {
        pluckArray.push(v); 
      }    
     });
    }
    return pluckArray; 
}

module.exports.pluck = pluck;

/**
 * every: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * @return {Boolean}; Will return true if EVERY elment passes, false otherwise
 */
 
 function every (collection, func) {
    const allTrutys = [];
    if(!func) {
        each(collection, function(e){ 
            return allTrutys.push(!!e);
      });
    } else {
     each(collection, function(e, i, c){
         allTrutys.push(!!func(e, i, c));
     });
  }
   return allTrutys.includes(false) ? false : true;
 }


module.exports.every = every;

/**
 * some: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * @return {Boolean}; Will return true if at least One elment passes, false otherwise
 */
 
 function some(collection, func) {
    const allTrutys = [];
    if(!func) {
        each(collection, function(e){ 
            return allTrutys.push(!!e);
      });
    } else {
     each(collection, function(e, i, c){
         allTrutys.push(!!func(e, i, c));
     });
  }
   return allTrutys.includes(true) ? true : false;
 }

module.exports.some = some;

/**
 * reduce: Designed to loop over array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Collection} collection: The array or object  over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @param {seed} value: The value used from a intial or previous cycle
 * 
 * @return {Value}: The value of the last function call.
 */
 
function reduce (collection, func, seed) {
    let seedUndefined = arguments.length < 3;
    let colArray = collection;
    if(typeOf(collection) === 'object'){
        colArray = Object.values(collection);
    }
    each(colArray, function(e, i, c){
    if(seedUndefined) {
      seedUndefined = false;
      seed = e;
    } else seed = func(seed, e, i, c);
  });
  return seed;
}

module.exports.reduce = reduce;

/**
 * extend: Designed to loop over an object and add the properties of other objects
 * 
 * @param {Object} collection: The object which will be added to
 * @param {...Object} collection: The objects which will be iterated through. 
 * 
 * @return {Object}; Will return object1 with all the properties of the following objects.
 */
 
 function extend (obj1, ...otherObjs){
    each(otherObjs, function(e, i, a){
        for (let key in e){
            obj1[key] = e[key];
        }
        });
        return obj1;
    }
    
module.exports.extend = extend;
