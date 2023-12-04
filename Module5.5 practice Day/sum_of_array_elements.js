//sum array function 
function sumArray(array){
    result = 0;
    for(var i = 0; i < array.length; i++){
        result += array[i];
    }
    return result;
}


//main function start here
var array = [3,4,5,6,7];
var result = sumArray(array);

console.log(result);