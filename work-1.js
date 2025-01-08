salary = prompt("Enter your salary:");
yearsOfService = prompt("Enter your years of service:");

if (yearsOfService > 5) {
     bonus =salary * 0.05;
    alert(`Your bonus is: ${bonus}`);
} else {
    alert("you are not eligible for a bonus");
}