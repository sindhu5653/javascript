let display=setTimeout(()=>{
    console.log('Hai');
    },2000);
let btn=document.getElementById('mybtn')
btn.addEventListener('click',()=>{
    clearTimeout(display)
    console.log('Stopped')
})