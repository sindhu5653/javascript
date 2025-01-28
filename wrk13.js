let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let naturalsum=0
let evensum =0
let oddsum =0
 
for (let i = 0; i < array.length; i++) {
    naturalsum=naturalsum+array[i]
  if (array[i] % 2 === 0) {
    evensum=evensum+array[i]
  } else {
    oddsum=oddsum+array[i]
  }
}
console.log("Even sum:", evensum);
console.log("Odd sum:", oddsum);
console.log("Natural sum:", naturalsum);
