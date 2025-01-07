const monuments = {
    Delhi: "Red Fort",
    Agra: "Taj Mahal",
    Jaipur: "Jal Mahal"
  };
  const city = prompt("Enter the name of a city (e.g., Delhi, Agra, Jaipur):").trim();
  if (monuments[city]) {
    alert(`The monument of ${city} is ${monuments[city]}`);
  } else {
    alert("Sorry, no monument found for the entered city.");
  }