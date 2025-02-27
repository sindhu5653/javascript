setInterval(()=>{
    const today=new Date();
    document.querySelector("#hr").innerHTML=today.getHours();
    document.querySelector("#min").innerHTML=today.getMinutes();
    document.querySelector("#sec").innerHTML=today.getSeconds();
}) 