// check even or odd number
// var num = 58;
// if (num%2 == 0){
//     console.log("This is even number");
// }
// else{
//     console.log("This is odd number");
// }

// let array value 1-20 numbers in unsorted ,, you can solve this problem sorted way using sort function and loops

var array = [
  3, 4, 13, 5, 1, 6, 17, 2, 7, 15, 18, 16, 12, 9, 8, 14, 11, 10, 20, 19,
];
// console.log(
//   array.sort(function (a, b) {
//     return a - b;
//   })
// );
// var temp = 0;
// for (i = 0; i < array.length - 1; i++) {
//   for (j = 0; j < array.length - i - 1; j++) {
//     if (array[j] > array[j + 1]) {
//       temp = array[j];
//       array[j] = array[j + 1];
//       array[j + 1] = temp;
//     }
//   }
// }

// console.log("Sorted array is : ",array);

// given an array with value is name how to check which name length is grater 
var friends = ["rahim", "karim", "jobbar", "salam", "borkot","waliullah"];

var largerstName = friends[0];

for(var i=0;i<friends.length;i++){
    elements = friends[i];
    if(elements.length >largerstName.length){
        largerstName = elements
    }
}
console.log(largerstName);

