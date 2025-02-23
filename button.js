function Click() {
    let messageElement = document.getElementById("message");
    let count = 3;
    
    let interval = setInterval(() => {
        if (count > 0) {
            messageElement.textContent = `Your button will disappear in ${count}s`;
            count--;
        } else {
            clearInterval(interval);
            messageElement.textContent = "Button gone";
            document.getElementById("myButton").style.display = "none";
        }
    }, 1000);
}