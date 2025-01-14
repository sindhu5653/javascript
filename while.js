// num=prompt('Enter the number')
// i=0
// while(i<=num){
//     console.log(i)
//     i++
// }


// i=6
// while(i>=1){
//     console.log(i)
//     i--
// }


// num=prompt('Enter the number')
// i=1
// while(i<=num){
//     if(i%2==0)
//     {
//     console.log(i)
//     }
//     i++
// }

// num1=prompt('Enter the first number')
// num2=prompt('Enter the second number')
// i=num1
// while(i<=num2){
//     console.log(i)
//     i++
// }


// sum=0
// i=1
// while(i<=10){
//     sum=sum+i}
// {
// console.log(sum)   
// i++
// }

// num=prompt('Enter the number')
// even=0
// odd=0
// natural=0
// i=1
// while(i<=num){
//     natural=natural+i
//     if(i%2==0){
//         even=even+i
//     }
//     else{
//         odd=odd+i
//     }
//     i++
// }
// console.log('Sum of even numbers', even)
// console.log('Sum of odd numbers',odd)
// console.log('Sum of natural numbers',natural)

count=prompt('Enter the number')
even=0
odd=0
natural=0
i=1
while(i<=count){
    if(i>0){
        natural++
    }
    if(i%2==0){
        even++
    }
    else{
        odd++
    }
    i++
}
console.log('Even numbers are',even)
console.log('Odd numbers are',odd)
console.log('Natyral numbers are',natural)