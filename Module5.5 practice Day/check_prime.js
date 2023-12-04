//prime chekc function
function primeCheck(num) {
  var flag = true;
  for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      flag = false;
    }
  }
  return flag;
}

// main function here
var num = 100;
var result = primeCheck(num);
if (result) {
  console.log("It is prime numebr");
} else {
  console.log("Not a prime number");
}
