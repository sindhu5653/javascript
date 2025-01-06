let salary = parseFloat(prompt("Enter your salary:"));
let yearsOfService = parseInt(prompt("Enter your years of service:"));

if (yearsOfService > 5) {
    let bonus = salary+(salary * 0.05);
    alert(`Congratulations! Your bonus is: ${bonus}`);
} else {
    alert("Sorry, you are not eligible for a bonus.");
}