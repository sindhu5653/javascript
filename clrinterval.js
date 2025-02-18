let i=1;
let display=setInterval(()=>{

    console.log(i);
    i++;
    },1000);
let btn=document.getElementById('mybtn')
btn.addEventListener('click',()=>{
    clearInterval(display)
    console.log('Stopped')
})


// let i=10;
// let display=setInterval(()=>{
//     while(i<1);
//     console.log(i);
//     i--;
//     },1000);
// let btn=document.getElementById('mybtn')
// btn.addEventListener('click',()=>{
//     clearInterval(display)
//     console.log('Stopped')
// })