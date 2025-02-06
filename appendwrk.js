function btn(){
    text=document.getElementById('inp')
    let container=document.createElement('div')
    container.innerHTML='<p></p>'
    document.body.appendChild(container)
    console.log(container.textContent)

}
