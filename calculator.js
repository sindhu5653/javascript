a=prompt('Enter the first number')
operator = prompt('Enter an operator (+, -, *, /)')
b=prompt('Enter the second number')
switch(a,b){
    case '+':
        console.log('a+b')
        break;
    case '-':
        console.log('a-b')
        break;
    case '*':
        console.log('a*b')
        break;
    case '/':
        console.log('a/b')
        break;
    default:
        console.log('Invalid output')
        break;
}