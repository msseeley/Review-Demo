/*
Without using the native “Array.prototype.includes” method of JavaScript, compose a function titled “myIncludes” that will take in an array of elements and indicates whether or not a target element is contained within the input array. This returns a boolean.
*/

function myIncludes(array, search) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === search) return true;
  }
  return false;
}



/*
Without using the native “Array.prototype.reduce” method of JavaScript, compose a function titled “myReduce” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.
*/



function myReduce(array, cb, initialState) {
  let result = initialState;
  for (let i = 0; i < array.length; i++) {
    result = cb(result, array[i]);
  }
  return result;
}


/*

Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that will take in an object and return all of the keys of the key:value pairs of that object. Modify the Object class, appending a static method to the Object class., appending a static method to the Object class. Leverage the “for...in” loop.

*/

function myKeys(obj) {
  const results = [];
  let idx = 0;
  for (const key in obj) {
    results[idx] = key;
    idx++;
  }
  return results;
}

/*
Without using the native “Object.values()” method of JavaScript, compose a function titled “grabValues” that will take in an object and return all of the values of the key:value pairs of that object. Modify the Object class, appending a static method to the Object class. Leverage the “for...in” loop.
*/

function myValues(obj) {
  const results = [];
  let idx = 0;
  for (const k in obj) {
    console.log('This is my key!', k);
    const value = obj[k];
    results[idx] = value;
    idx++;
  }
  return results;
}
