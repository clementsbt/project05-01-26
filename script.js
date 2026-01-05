const image = document.getElementById("animalImage");
const text = document.getElementById("animalText");

const btnPerroquet = document.getElementById("btnPerroquet");
const btnRenard = document.getElementById("btnRenard");

const searchInput = document.getElementById("searchInput");
const btnReverse = document.getElementById("btnReverse");
const resultText = document.getElementById("resultText");

btnPerroquet.addEventListener("click", () => {
  image.src = "image.jpg";
  text.textContent = "Perroquet";
});

btnRenard.addEventListener("click", () => {
  image.src = "renard.jpg";
  text.textContent = "Renard";
});

function inverserOrdreMots(phrase) {
  return phrase
    .trim()
    .split(/\s+/)
    .reverse()
    .join(" ");
}

btnReverse.addEventListener("click", () => {
  resultText.textContent = inverserOrdreMots(searchInput.value);
});