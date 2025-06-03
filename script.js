const inputBox = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");

inputBox.addEventListener("input", () => {
  // Count all characters including spaces and special characters
  letterCount.textContent = inputBox.value.length;
});
