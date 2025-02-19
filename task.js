let element=document.getElementById('name')
let element1=document.getElementById('email')
let element2=document.getElementById('number')
let element3=document.getElementsByClassName('btn')
let div=document.createElement('div')
    div.innerHTML=`<p>${element.value}</p>`
    div.innerHTML=`<P>${element1.value}</p>`
    div.innerHTML=`<p>${element2.value}</p>`
    console.log(div.textContent)

    
    

