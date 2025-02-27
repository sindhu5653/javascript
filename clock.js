// function time() {
//     let time = new Date();
//     document.getElementById("hr").textContent = time.toLocaleTimeString()
// }
// setInterval(time, 1000);

setInterval(()=>{
    const today=new Date();
    document.querySelector("#hr").innerHTML=today.getHours();
    document.querySelector("#min").innerHTML=today.getMinutes();
    document.querySelector("#sec").innerHTML=today.getSeconds();
}) 