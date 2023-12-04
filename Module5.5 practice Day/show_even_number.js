//show even number function
function evenNumber(array){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        element = array[i];
        if(element % 2 == 0){
            newArray.push(element)
        }
    }
    return newArray;
}



// main function here 
var array = [1,2,3,4,5,6,7,8,9,10];
var result = evenNumber(array);
console.log(result);