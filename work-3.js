let number = parseInt(prompt("Enter a number:"));

let Digit = number % 10;

if (Digit % 3 === 0) {
    alert("The last digit of the number is divisible by 3.");
} else {
    alert("The last digit of the number is not divisible by 3.");
}
