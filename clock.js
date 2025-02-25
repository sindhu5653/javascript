function time() {
    let time = new Date();
    document.getElementById("hr").textContent = time.toLocaleTimeString()
}
setInterval(time, 1000);