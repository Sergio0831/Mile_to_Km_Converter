document
  .getElementById("convert-form")
  .addEventListener("submit", calculateResult);

// calculateResult function
function calculateResult(e) {
  // UI var
  const milesInput = document.getElementById("miles");
  const convertBtn = document.getElementById("convert");
  const result = document.getElementById("result");

  const calculatedKm = parseFloat(milesInput.value) * 1.609;

  result.innerHTML = calculatedKm.toFixed(1);

  if (milesInput.value.length == 0) {
    alert("Add numbers");
  }

  e.preventDefault();
}
