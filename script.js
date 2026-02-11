let number1;
let number2;
let tempNum1;
let operator = "";
let numbers = "1234567890";
let operators = "+-*/.";
let evaluate = "=";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (number1 === undefined) {
      if (numbers.includes(event.target.id)) {
        number1 = +event.target.id;
        console.log(number1);
      }else if(operators.includes(event.target.id)){
        operator = event.target.id;
        console.log(operator);
      }else if(event.target.id = evaluate){
        number1 = operate(tempNum1,number2,operator);
        console.log(number1);
      }
    }else {
        if (numbers.includes(event.target.id)) {
        number2 = +event.target.id;
        tempNum1 = number1;
        number1 = undefined;
        console.log(number2);
      }else if(operators.includes(event.target.id)){
        operator = event.target.id;
        console.log(operator);
      }else if(event.target.id === evaluate){
        number1 = operate(tempNum1,number2,operator);
        console.log(number1);
      }
    }
  });
});


function operate(num1, num2, op) {
  let value;
  switch (op) {
    case "+":
      value = add(num1, num2);
      break;
    case "-":
      value = sub(num1, num2);
      break;
    case "*":
      value = multiply(num1, num2);
      break;
    case "/":
      value = divide(num1, num2);
      break;
    default:
      value = 0;
  }

  return value;
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
