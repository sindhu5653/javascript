console.log('linked');

let value=document.getElementById('number').innerText
console.log(value);

const addBtn=document.getElementById('add-btn');
addBtn.addEventListener('click',function(){
    let newValue=Number(++value);
    console.log('new value',newValue);
    document.getElementById('number').innerText=newValue;

})

const minus=document.getElementById('sub-btn');
minus.addEventListener('click',function(){
    let newValue=Number(value--);
    console.log('new value',newValue);
    document.getElementById('number').innerText=newValue;

})
