const modal = document.getElementById("options-modal");
const optionsLink = document.getElementById("options-link");
const closeButton = document.querySelector(".close-button");


optionsLink.addEventListener("click", function(event) {
  event.preventDefault();  
  modal.style.display = "flex";  
});


closeButton.addEventListener("click", function() {
  modal.style.display = "none";  
});


window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});