// let a,b,rest;
// let array=[1,2,3,4];

// [a,b,...rest]=[1,2,3,4];
// console.log(a,b,rest);

const originalArray=[1,2,3]
const newArray= [...originalArray];
console.log(newArray.map((item)=>{
    console.log(item)
}));  

// rest operator
// let a,b,c,rest
// let array=[1,2,3,4,5,6,7,8,9];
// [a,b,c,...rest]=[1,2,3,4,5,6,7,8];
// console.log(a,b,c);
// console.log(rest);  


// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9,10];
// letcombinedArray=[...arr1,...arr2] //spread operator
// console.log('combinedArray');
// console.log(arr1); // [1,2,3,4,5]

// function check(a,b,...rest){
//     console.log(a,b,rest);
// }
// let numbers=[9,7,5,3,1,123,456,789]
// check(...numbers)


