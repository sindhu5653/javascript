// let arr=[1,2,3,4,5,6]
// let evenArr=arr.filter(value=>value%2==0)
// console.log(evenArr)

// let arr=['apple','banana','kiwi','orange','grapes']
// let newArr=arr.filter(value=>value.length>5)
// console.log(newArr)

let arr=[{id:1,name:'Alice',age:12},
         {id:2,name:'Jhon',age:19},
         {id:3,name:'Doe',age:22}]
let newArr=arr.filter(value=>value.age>18)
console.log(newArr)