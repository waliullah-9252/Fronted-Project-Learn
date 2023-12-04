//maximum value an array function
function maximumValue(array){
    largestValue = array[0];
    for(var i=0;i<array.length;i++){
        elements = array[i];
        if(elements > largestValue){
            largestValue = elements;
        }
    }
    return largestValue;
}

// main fuction start here 

var array = [4,5,6,7,34,23,54,67];
var result = maximumValue(array);
console.log(result);