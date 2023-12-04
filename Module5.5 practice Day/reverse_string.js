//reverse string function 

function reverseString(array){
    var newArray = [];
    for(var i=array.length-1; i>=0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

// main function here 

var array = ["rahim", "karim", "rasel", "firoz", "tarek"];
var result = reverseString(array);
console.log(result);