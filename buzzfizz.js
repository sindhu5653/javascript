function temp(){
text=document.getElementById('seq')
let num=text.value
let sequence=[]
for(i=1;i<=num;i++){
    if(i%3==0 && i%5==0){
        sequence.push('FizzBuzz')
    }
    else if(i%3==0){
        sequence.push('Fizz')
    }
    else if(i%5==0){
        sequence.push('Buzz')
    }
    else{
        sequence.push(i)
    }
}
console.log(sequence)
}