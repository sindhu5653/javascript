function time() {
    let time = new Date();
    document.getElementById("clock").textContent = time.toLocaleString();
}
setInterval(time, 1000);