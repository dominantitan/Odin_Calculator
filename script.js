let number1 = "";
let number2 = "";
let operator = "";
let numbers = "1234567890";
let operators = "+-*/";
let operatorAppeared = false;
let isStored = false;
let evaluate = "=";
let lastThing = "";
let resultDisplayed = false;

const primaryDisplay = document.querySelector("#displayText");
const secDisplay = document.querySelector("#secondaryDisplay");

function buttonClicked(){

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) =>{
      button.addEventListener("click",(event) =>{
        console.log("operatorAppeared: " + operatorAppeared);

        if(event.target.id === "clr"){
          console.log("clear button clicked")
          clear();
        }

        if(isNumber(event.target.id) && operatorAppeared === false){
          number1 += event.target.id;
          console.log("num1 : " + number1);
          if(resultDisplayed === true){
            clear();
          }
          overwriteDisplay(number1);
        }else if(isOperator(event.target.id) && operatorAppeared === false){
          operator = event.target.id;
          updateDisplay(operator);
          console.log(operator);
          operatorAppeared = true;

        }else if(isOperator(event.target.id) && operatorAppeared === true){//for chaining if another operator is pressed after any expression
          if(number2 === ""){
            operator = event.target.id;
          }else {
            
          number1 = +number1;
          number2 = +number2;
          let result = operate(number1, number2, operator);
          
          // Set up for next operation
          number1 = result.toString();
          number2 = "";
          operator = event.target.id;
          
          // Update displays
          secDisplay.textContent = result + operator;
          overwriteDisplay(result);
          resultDisplayed = true;
          
          console.log("Chained result: " + result);
          }
        }else if(isNumber(event.target.id) && operatorAppeared === true){
          number2 += event.target.id;
          if(isStored === false){
          const prevExpression = primaryDisplay.textContent;
          secDisplay.textContent = prevExpression;
          isStored = true;
          }
          if(resultDisplayed === true){
            clear();
          }
          overwriteDisplay(number2);
          console.log("num2 : " +number2);
          
        }else if(isCharEquals(event.target.id) && operatorAppeared === true && number2 !== ""){
          number1 = +number1;
          number2 = +number2;
          let result = operate(number1,number2,operator);
          overwriteDisplay(result);
          resultDisplayed = true;
          console.log(result);
          operatorAppeared = false;
          isStored = false;
          number1 = result.toString();
          number2 = "";
        }else if(event.target.id === "del"){
          console.log("delete button clicked");
          del();
        }
      })
    })
}

function clear(){
    number1 = "";
    number2 = "";
    operator = "";
    operatorAppeared = false;
    resultDisplayed = false;
    isStored = false;
    secDisplay.textContent = "";
    overwriteDisplay("0");
}

function del(){
  const originalString = primaryDisplay.textContent;
  const removed = originalString.slice(-1);
  const newString = originalString.slice(0, -1);
  if(isOperator(removed)){
    operator = "";
  }else if(isNumber(removed) && operatorAppeared === false){
    number1 = newString;
  }else if(isNumber(removed) && operatorAppeared === true){
    number2 = newString;
  }
  if(newString !== ""){
    overwriteDisplay(newString);
  }else{
    overwriteDisplay("0");
  }
  console.log(`${removed} was deleted`)
  console.log("num1 : " + number1);
  console.log("num2 : " + number2);
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
  if(b === 0){
    alert("Math Error");
    clear();
    return;
  }if(a%b !== 0){
    let quotient = a/b;
    return Math.round(quotient* 100)/100;
  }
  return a / b;
}

buttonClicked();