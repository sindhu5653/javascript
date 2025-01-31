function person(name){
    return function greet(){
        console.log(`Helo ${name}`)
    }
}
let val=person('Manu')
val()


// function person(name){
//     function greet(){
//         console.log(`Hai ${name}`)
//     }
//     return greet()
// }