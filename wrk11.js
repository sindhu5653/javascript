let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let evenNumbers = [];
let oddNumbers = [];
 
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenNumbers.push(arr[i]);
  } else {
    oddNumbers.push(arr[i]);
  }
}
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);
