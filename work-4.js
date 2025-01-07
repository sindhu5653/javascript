
costPrice =prompt("Enter the cost price of the bike in Rs:");

taxAmount = 0;

if (costPrice > 100000) {
    taxAmount = costPrice * 0.15;
} 
else if (costPrice > 50000 && costPrice <= 100000) {
    taxAmount = costPrice * 0.10;
} 
else if (costPrice <= 50000) {
    taxAmount = costPrice * 0.05;
}

alert("The road tax to be paid is: Rs " + taxAmount);

