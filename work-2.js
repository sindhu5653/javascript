    let units = parseInt(prompt("Enter the number of units consumed:"));

    let billAmount = 0;

    if (units <= 100) {
        billAmount = 0;
    } else if (units <= 200) {
        billAmount = (units - 100) * 5;
    } else {
        billAmount = 100 * 5;
        billAmount += (units - 200) * 10;
    }

    alert("Your total electricity bill is: Rs " + billAmount);
