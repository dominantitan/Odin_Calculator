let number1 = 0;
let number2 = 0;
let operator = "";

function operate(num1,num2,op){
    let value;
    switch(op){
        case "+":
            value = add(num1,num2);
            break;
        case "-":
            value = sub(num1,num2);
            break;
        case "*":
            value = multiply(num1,num2);
            break;
        case "/":
            value = divide(num1,num2);
            break;
        default:
            value = 0;
    }

    return value;
}

function add(a,b){
    return a + b;
}


function sub(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}