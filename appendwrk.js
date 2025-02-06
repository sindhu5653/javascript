function btn(){
    text=document.getElementById('inp').value
    display=document.getElementById('display')
    div=document.createElement('div')
    div.textContent=text
    display.appendchild(div)
     document.getElementById('inp').value=''
}

