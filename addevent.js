console.log('Javascript Linked')
document.getElementById('paragraph')
.addEventListener('click',function(){
    console.log('Mouse over the paragraph')
})
document.getElementsByClassName('btn')[1].addEventListener('click',function(){
    console.log('Button Cicked')
})
document.getElementById('btn3').addEventListener('click',function(){
    alert('welcome')
})