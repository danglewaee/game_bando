const modal = document.getElementById("options-modal");
const optionsLink = document.getElementById("options-link");
const closeButton = document.querySelector(".close-button");
const saveButton = document.querySelector(".modal-content button");

// Open modal
optionsLink.addEventListener("click", function(event) {
  event.preventDefault();  
  modal.style.display = "flex";  
  setTimeout(() => document.querySelector('.modal-content').classList.add('show'), 10); // Adding show class with delay
});

// Close modal
closeButton.addEventListener("click", function() {
  modal.style.display = "none";  
  document.querySelector('.modal-content').classList.remove('show');
});

// Close modal if click outside modal content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.querySelector('.modal-content').classList.remove('show');
  }
});

saveButton.addEventListener("click", function() {
  const numCountries = document.querySelector('.modal-content input').value;
  alert(`You selected ${numCountries} countries.`);
  modal.style.display = "none"; 
  document.querySelector('.modal-content').classList.remove('show');
});
