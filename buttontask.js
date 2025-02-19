let display=setTimeout(()=>{
    console.log('Your button will be disappear in 3s');
    },1000);
let btn=document.getElementById('mybtn')
btn.addEventListener('click',()=>{
    clearTimeout(display)
    console.log('Stopped')
})