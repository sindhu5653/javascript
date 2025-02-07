function btn(){
    let text=document.getElementById('text')
    let main=document.getElementById('display')
    let div=document.createElement('div')
    div.innerHTML=`<p>${text.value}</p>`
    main.appendChild(div)
}