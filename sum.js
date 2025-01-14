num=prompt('Enter the number')
even=0
odd=0
natural=0
for(i=1;i<=num;i++){
    natural=natural+i
    if(i%2==0){
        even=even+i
    }
    else{
        odd=odd+i
    }
}
console.log(`Even numbers are: ${even}`)
console.log(`Odd numbers are, ${odd}`)
console.log(`Natural numbers are: ${natural}`)