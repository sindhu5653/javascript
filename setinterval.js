// setInterval(function(){
//     console.log('This is a callback function');
//     },2000);
   
let i=1;
setInterval(()=>{
    console.log(i)
    i++
    },1000);
   

// let display=setTimeout(()=>{
//     console.log('Hai');
//     },2000);
// let btn=document.getElementById('mybtn')
// btn.addEventListener('click',()=>{
//     clearTimeout(display)
//     console.log('Stopped')
// })