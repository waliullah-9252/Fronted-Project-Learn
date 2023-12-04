//find same value in this two arrays
function findSameValue(array1, array2) {
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        newArray.push(array1[i]);
      }
    }
  }
  return newArray;
}

//main function
var array1 = [1, 2, 3, 4, 5, 9, 20, 33];
var array2 = [1, 3, 5, 4, 6, 9, 21, 35];

var result = findSameValue(array1, array2);
console.log(result);
