let string='malayalam'
let len=string.length
let rev=''
for(let i=len-1;i>=0;i--){
    rev+=string[i]
}
if(rev==string){
    console.log(`${string} is palindrome`)
}
else{
    console.log(`${string} is not palindrome`)
}