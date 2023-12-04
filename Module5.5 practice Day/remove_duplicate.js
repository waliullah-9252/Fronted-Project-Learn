//duplicate remove function
function removeDuplicate(array) {
  return [new Set(array)];
}

// main function here
var array = [1, 2, 3, 2, 4, 5, 5, 6, 7, 6, 8, 9, 10, 8, 11, 12];
var result = removeDuplicate(array);
console.log(result);
