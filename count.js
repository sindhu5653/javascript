count=prompt('Enter the number')
even=0
odd=0
natural=0
for(i=1;i<=count;i++){
    if(i>0){
        natural++
    }
    if(i%2==0){
        even++
    }
    else{
        odd++
    }
}
console.log('Even numbers are',even)
console.log('Odd numbers are',odd)
console.log('Natural numbers are',natural)