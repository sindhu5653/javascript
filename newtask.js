function btn(){
let text=document.getElementById('text')
let element=document.getElementById('main')
let div=document.createElement('div')
div.innerHTML=`<p>${text.value}</p>`
element.appendChild(div)
}
function button(){
let element1=document.getElementById('main2')
let div=document.createElement('div')
div.innerHTML=`<p>${text.value}</p>`
element1.appendChild(div)
}
