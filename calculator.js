a=parseInt(prompt('Enter the first number'))
operator = prompt('Enter an operator (+, -, *, /)')
b=parseInt(prompt('Enter the second number'))
switch(operator){
    case '+':
        console.log(a+b)
        break;
    case '-':
        console.log(a-b)
        break;
    case '*':
        console.log(a*b)
        break;
    case '/':
        console.log(a/b)
        break;
    default:
        console.log('Invalid output')
        break;
}