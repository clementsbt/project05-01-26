const image = document.getElementById("animalImage");
const text = document.getElementById("animalText");

const btnPerroquet = document.getElementById("btnPerroquet");
const btnRenard = document.getElementById("btnRenard");

btnPerroquet.addEventListener("click", () => {
  image.src = "image.jpg";
  text.textContent = "Perroquet";
});

btnRenard.addEventListener("click", () => {
  image.src = "renard.jpg";
  text.textContent = "Renard";
});