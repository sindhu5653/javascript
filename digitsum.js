num=prompt("Enter the number")
    numString = num.toString()   
sum = 0
  for (i = 0; i < numString.length; i++) {
    sum=sum+ parseInt(numString[i]) 
}
console.log("The sum of the digits is: " ,sum)