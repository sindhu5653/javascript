const heading=document.getElementById('head')
heading.addEventListener('mouseenter',function(){
    heading.style.color='red'
});
heading.addEventListener('mouseover',function(){
    heading.style.backgroundColor='blue'
});
heading.addEventListener('mouseout',function(){
    heading.style.backgroundColor='green'
});
document.getElementsByClassName('btn')[0].addEventListener('click',callMe);

function callMe(){
    console.log('This is call from me function');
}
callMe();
let newHeading=document.createElement('h2') //created a new element using createElment
newHeading.innerText='Welcome to synnefo' //new content created element

let newDiv=document.getElementById('newDiv')
newDiv.appendChild(newHeading)

document.body.appendChild(newHeading);//added the newly craeted element to somewhere of the body 