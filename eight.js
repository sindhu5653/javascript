// // num=prompt('Enter the number')
// for(i=1;i<=num;i++){
//     for(j=1;j<=10;j++){
//         console.log(`${i}x${j}=${i*j}`)
//     }
// } 

//     // console.log(`${i}x${num}=${i*num} \n`)


function mul(){
    text=document.getElementById('inp')
    let num=text.value
    for(i=1;i<=10;i++){
        console.log(`${i}x${num}=${i*num}`)
    }
    console.log(text.value)
}