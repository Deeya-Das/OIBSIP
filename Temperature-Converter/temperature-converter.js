function convertTemp() {
  const input = parseFloat(document.getElementById("tempInput").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  let result;

  if (isNaN(input)) {
    result = "Please enter a valid number.";
  } else {
    if (from === to) {
      result = input;
    } else {
      // Convert input to Celsius first
      let celsius;
      if (from === "C") celsius = input;
      else if (from === "F") celsius = (input - 32) * (5 / 9);
      else if (from === "K") celsius = input - 273.15;

      // Convert Celsius to target unit
      if (to === "C") result = celsius;
      else if (to === "F") result = (celsius * 9 / 5) + 32;
      else if (to === "K") result = celsius + 273.15;

      result = `${result.toFixed(2)} °${to}`;
    }
  }

  document.getElementById("result").textContent = result;
}