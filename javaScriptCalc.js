"use strict";
var num = "";
var n3 = 0;
var arrNum = [];

//Event handeler
function myEvt(e) {
  var n1 = document.getElementById(e).innerHTML;
  var c1 = document.getElementById(e).classList[1];
  var d = document.getElementById("calcText").value;
  console.log(c1);
  //When the user clicks on the decimal point button
  if (c1 == "decimalPt") {
    //Making sure the string does not heve more than one decimal point
    if (num.includes(".")) {
      document.getElementById("calcText").value = num;
    } else {
      num = n3 + ".";
      //Converting the string into a floating point number
      n3 = parseFloat(num);
      document.getElementById("calcText").value = num;
    }
  }
  //When the user clicks on the delete button on the calculator
  if (c1 == "delete") {
    num = d.substring(0, d.length - 1);
    document.getElementById("calcText").value = num;
  }
  //When the user clicks on a number button on the calculator
  if (c1 == "calcNum") {
    num = num + parseFloat(n1);
    n3 = parseFloat(num);
    document.getElementById("calcText").value = num;
  }
  //When the user clicks on any of the operation buttons, i.e 'plus', 'minus', 'divide' or 'multiply'.
  else if (c1 == "operator") {
    arrNum.push(n3);
    nextDisplay();
    numOpp(arrNum);
    arrNum.push(e);
    n3 = 0;
  }
  //When the user clicks on '=' or 'AC'
  else if (c1 == "equalsTo") {
    //Adding the number that was last entered, before the user clicked on 'equals' to the array.
    arrNum.push(n3);
    //Calling the function that will run operations on the numbers that were entered by the user.
    arrNum = numOpp(arrNum);

    console.log(arrNum + " okay");
    clearArray(arrNum);
    arrNum.push(e);
    console.log(arrNum + " okay");
  } else if (c1 == "clearAll") {
    nextDisplay();
    clearArray(arrNum);
    n3 = 0;
  }
}

//Function to display the result of the operations
function numOpp(arr) {
  if (arr[arr.length - 2] == "plus") {
    document.getElementById("calcText").value = plusThis();
  } else if (arr[arr.length - 2] == "subtract") {
    document.getElementById("calcText").value = subtractThis();
  } else if (arr[arr.length - 2] == "multiply") {
    document.getElementById("calcText").value = multiplyThis();
  } else if (arr[arr.length - 2] == "divide") {
    document.getElementById("calcText").value = divideThis();
  }
  num = "";
  return arr;
}
//Function to clear the array
function clearArray(arr) {
  for (var i = 0; i < arrNum.length; i++) {
    arr.pop();
  }
}
//Function to clear the display and reset num to an empty string
function nextDisplay() {
  document.getElementById("calcText").value = " ";
  num = "";
}

//Adding the last number entered with the number that was entered before it.
function plusThis() {
  var sumNum = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i - 1] == "plus") {
      console.log(false);
      if (arrNum[i - 2] < 1 && arrNum[i] < 1) {
        n3 = (arrNum[i - 2] * 10 + arrNum[i] * 10) / 10;
      } else {
        n3 = arrNum[i - 2] + arrNum[i];
      }

      arrNum.splice(0, i + 1, n3);
      console.log(arrNum);
      console.log("a");
    }
  }
  num = "";

  return n3;
  console.log(arrNum);
}
//Subtracting the last number entered from the number that was entered before it.
function subtractThis() {
  var sumNum = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i - 1] == "subtract") {
      console.log(false);
      n3 = arrNum[i - 2] - arrNum[i];
      arrNum.splice(0, i + 1, n3);
      console.log(arrNum);
      console.log("a");
    }
  }
  num = "";
  return n3;
  console.log(arrNum);
}
//Multiplying the last number entered and the number that was entered before it.
function multiplyThis() {
  var sumNum = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i - 1] == "multiply") {
      console.log(false);
      n3 = arrNum[i - 2] * arrNum[i];
      n3 = n3.toFixed(6);
      arrNum.splice(0, i + 1, n3);
      console.log(arrNum);
      console.log("a");
    }
  }
  num = "";
  return n3;
  console.log(arrNum);
}
//dividing the first number that was entered by the last number entered by.
function divideThis() {
  var sumNum = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i - 1] == "divide") {
      console.log(false);
      n3 = arrNum[i - 2] / arrNum[i];
      n3 = n3.toFixed(6);
      arrNum.splice(0, i + 1, n3);
      console.log(arrNum);
      console.log("a");
    }
  }
  num = "";
  return n3;
  console.log(arrNum);
}
//JavaScript written by Sneha D Seshadri
