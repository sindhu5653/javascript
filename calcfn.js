let num1=parseInt(prompt('Enter the first number:'))
let operator=prompt('Choose an operation (+, -, *, /):')
let num2=parseInt(prompt('Enter the second number:'))
let result

switch (operator) {
  case "+":
    res=sum(num1,num2)
    break;
  case "-":
    res=subtract(num1,num2)
    break;
  case "*":
    res=multiply(num1,num2)
    break;
  case "/":
    res=division(num1,num2)
    break;
  default:
    result = 'Invalid operator'
}
alert(res)



function sum(num1,num2){
    result=num1+num2
    return result
}

function subtract(num1,num2){
    result=num1-num2
    return result
}

function multiply(num1,num2){
    result=num1*num2
    return result
}

function division(num1,num2){
    result=num1/num2
    return result
}
    