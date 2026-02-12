let number1 = "";
let number2 = "";
let operator = "";
let numbers = "1234567890";
let operators = "+-*/";
let operatorAppeared = false;
let isStored = false;
let evaluate = "=";

const primaryDisplay = document.querySelector("#displayText");
const secDisplay = document.querySelector("#secondaryDisplay");

function buttonClicked(){
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) =>{
      button.addEventListener("click",(event) =>{
        if(isNumber(event.target.id) && operatorAppeared === false){
          number1 += event.target.id;
          console.log(number1);
          overwriteDisplay(number1);
        }else if(isOperator(event.target.id) && operatorAppeared === false){
          operator = event.target.id;
          updateDisplay(operator);
          console.log(operator);
          operatorAppeared = true;
        }else if(isNumber(event.target.id) && operatorAppeared === true){
          number2 += event.target.id;
          if(isStored === false){
          const prevExpression = primaryDisplay.textContent;
          secDisplay.textContent = prevExpression;
          isStored = true;
          }
          overwriteDisplay(number2);
          console.log(number2);
        }else if(isCharEquals(event.target.id) && operatorAppeared === true){
          number1 = +number1;
          number2 = +number2;
          let result = operate(number1,number2,operator);
          overwriteDisplay(result);
          console.log(result);
          operatorAppeared = false;
          isStored = false;
          number1 = result.toString();
          number2 = "";
        }
      })
    })
}

function clear(){
    number1 = "";
    number2 = "";
    operator = "";
    operatorAppeared = false;
    isStored = false;
}

function isNumber(char){
  return numbers.includes(char);
}

function isOperator(char){
  return operators.includes(char);
}

function isCharEquals(char){
  return char === "=";
}

function updateDisplay(text){
      primaryDisplay.textContent += text;
}
function overwriteDisplay(text){
      primaryDisplay.textContent = text;
}


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

buttonClicked();