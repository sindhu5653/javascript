// let arr=['apple','orange','grape']
// arr.forEach((value,index,array)=>{
//     console.log(`${index}:${value}`)
// })

let arr=[3,4,5,6,7]
arr.forEach((value,index,array)=>{
    array[index]=value*value
})
console.log(arr)