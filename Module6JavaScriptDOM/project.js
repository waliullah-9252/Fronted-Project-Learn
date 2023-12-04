// deposite on click button to add balance
function depositeHandel() {
  var convertedInputValue = getConvertValue("deposite-input", "value");
  var convertedInputDepositeValue = getConvertValue(
    "deposit-amount",
    "innerText"
  );
  var sum = convertedInputValue + convertedInputDepositeValue;
  setInnerText("deposit-amount", sum);
  var convertedtotalbBalance = getConvertValue("total-balance", "innerText");
  totalSum = convertedtotalbBalance + convertedInputValue;
  setInnerText("total-balance", totalSum);
  document.getElementById("deposite-input").value = "";
}

function getConvertValue(id, element) {
  if (element == "innerText") {
    var value = document.getElementById(id).innerText;
    return parseFloat(value);
  } else {
    var value = document.getElementById(id).value;
    return parseFloat(value);
  }
}

//withdraw on click button active to add withdraw balance
function withdrawHandle() {
  var convertedinputWithdrawValue = getConvertValue("withdraw-input", "value");
  var convertedwithdrawAmountValue = getConvertValue(
    "withdraw-amount",
    "innerText"
  );
  var sum = convertedinputWithdrawValue + convertedwithdrawAmountValue;
  setInnerText("withdraw-amount", sum);
  var convertedtotalbBalance = getConvertValue("total-balance", "innerText");
  var totalSum = convertedtotalbBalance - convertedinputWithdrawValue;
  setInnerText("total-balance", totalSum);
  document.getElementById("withdraw-input").value = "";
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// deposite on click button to add balance
// function depositeHandel() {
//     var inputValue = document.getElementById("deposite-input").value;
//     var convertedInputValue = convertToNumber(inputValue);
//     var inputDepositeValue = document.getElementById("deposit-amount").innerText;
//     var convertedInputDepositeValue = convertToNumber(inputDepositeValue);
//     var sum = convertedInputValue + convertedInputDepositeValue;
//     document.getElementById("deposit-amount").innerText = sum;

//     var totalBalance = document.getElementById("total-balance").innerText;
//     var convertedtotalbBalance = convertToNumber(totalBalance);
//     totalSum = convertedtotalbBalance + convertedInputValue;
//     document.getElementById("total-balance").innerText = totalSum;

//     document.getElementById("deposite-input").value = "";
//   }

//   function convertToNumber(value) {
//     return parseFloat(value);
//   }

//withdraw on click button active to add withdraw balance

//   function withdrawHandle() {
//     var inputWithdrawValue = document.getElementById("withdraw-input").value;
//     var convertedinputWithdrawValue = convertToNumber(inputWithdrawValue);
//     var withdrawAmountValue =
//       document.getElementById("withdraw-amount").innerText;
//     var convertedwithdrawAmountValue = convertToNumber(withdrawAmountValue);
//     var sum = convertedinputWithdrawValue + convertedwithdrawAmountValue;
//     document.getElementById("withdraw-amount").innerText = sum;

//     var totalBalance = document.getElementById("total-balance").innerText;
//     var convertedtotalbBalance = convertToNumber(totalBalance);
//     var totalSum = convertedtotalbBalance - convertedinputWithdrawValue;
//     document.getElementById("total-balance").innerText = totalSum;

//     document.getElementById("withdraw-input").value = "";
//   }
