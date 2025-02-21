// let obj={name:'Anu',age:20}
// const {name,age}=obj
// console.log(name)
// console.log(age)

// let obj={name:'Anu',age:20}
// const {name:username,age:userage}=obj
// console.log(username)
// console.log(userage)

// let obj={name:'Anu',age:20,address:{city:'Kochi',state:'Kerala'}}
// const {name,age,address:{city,state}}=obj
// console.log(name)
// console.log(age)
// console.log(city)
// console.log(state)


let obj={name:'Anu',age:20,address:{city:'Kochi',state:'Kerala'}}
const {name,age,...rest}=obj
console.log(name)
console.log(age)
console.log(rest)
