// 3. In your JavaScript, put an event listener on each of the buttons.
// 5. When the user performs one of the operations, output the result to another DOM element of your choice.

var addButton = document.getElementById("add");
var subButton = document.getElementById("subtract");
var mulButton = document.getElementById("multiply");
var divButton = document.getElementById("divide");
var output = document.getElementById("output");


addButton.addEventListener("click", () => {
  var num1 = document.getElementById("numOne").value;
  var num2 = document.getElementById("numTwo").value;
  var sum = action(num1, num2, add);
  // console.log(sum);
  output.innerHTML = sum;
});

subButton.addEventListener("click", () => {
  var num1 = document.getElementById("numOne").value;
  var num2 = document.getElementById("numTwo").value;
  var sub = action(num1, num2, subtract);
  output.innerHTML = sub;
});

mulButton.addEventListener("click", () => {
  var num1 = document.getElementById("numOne").value;
  var num2 = document.getElementById("numTwo").value;
  var mult = action(num1, num2, multiply);
  output.innerHTML = mult;
});

divButton.addEventListener("click", () => {
  var num1 = document.getElementById("numOne").value;
  var num2 = document.getElementById("numTwo").value;
  var div = action(num1, num2, divide);
  output.innerHTML = div;
});



/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiply(num1, num2){
  return num1 * num2;
 };


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add(num1, num2){
  return parseFloat(num1) + parseFloat(num2);
  
};

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract(num1, num2){
  return num1 - num2;
};

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divide(num1, num2){
  return num1 / num2;
};


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

 function action(num1, num2, func){
  var problem = func(num1, num2);
  return problem;
 };
