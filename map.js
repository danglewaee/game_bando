let countriesGuessed = 0;
const totalCountries = document.querySelectorAll(".allPaths").length;
const countryNames = {}; 
let selectedCountry = null;

document.querySelectorAll(".allPaths").forEach(e => {
  e.setAttribute('class', `allPaths ${e.id}`);
  countryNames[e.id] = e.id; 
});

function moveArrowToLeftBorder() {
  if (selectedCountry) {
    const boundingBox = selectedCountry.getBoundingClientRect();

    const leftBorder = boundingBox.left;
    const topBorder = boundingBox.top
    const arrow = document.getElementById("arrow");
    arrow.style.left = `${leftBorder}px`; 
    arrow.style.top = `${topBorder + window.scrollY-9}px`; 
    arrow.style.display = "block"; 
  }
}

function selectRandomCountry() {
  const allCountries = document.querySelectorAll(".allPaths");
  const randomIndex = Math.floor(Math.random() * allCountries.length);
  selectedCountry = allCountries[randomIndex];
  selectedCountry.style.fill = "pink";

  const boundingBox = selectedCountry.getBoundingClientRect();

  const countryId = selectedCountry.id;
  const countryParts = document.querySelectorAll(`#${countryId}`);
  countryParts.forEach(part => part.style.fill = "pink");

  document.getElementById("namep").innerText = countryId;
  document.getElementById("name").style.opacity = 1;
  moveArrowToLeftBorder();
}

selectRandomCountry();

function checkAnswer() {
  const userInput = document.getElementById("countryInput").value.trim().toLowerCase();
  const countryId = selectedCountry.id.toLowerCase(); // Tên quốc gia đang hiển thị

  if (userInput === countryId) {
    countriesGuessed++;
    const countryId = selectedCountry.id;
    const countryParts = document.querySelectorAll(`#${countryId}`);

    countryParts.forEach(part => {
      part.style.fill = "green"; // Đổi màu để highlight
    });
    
    document.getElementById("countryInput").value = ''; // Xóa ô nhập liệu

    if (countriesGuessed === 10) {
      document.getElementById("resultMessage").style.visibility = 'visible';
      document.getElementById("resultMessage").classList.add("show"); // Hiển thị thông báo
      document.getElementById("resultText").innerHTML = "Congratulations!<br>You completed the game!";
      document.getElementById("playAgainButton").style.display = 'block'; // Hiển thị nút play again
    } else {
      setTimeout(() => {
        selectRandomCountry(); // Chọn quốc gia tiếp theo
      }, 1000); 
    }
  } else {
    alert("Wrong! Try again.");
  }
}
document.getElementById("playAgainButton").addEventListener("click", function () {
  resetGame(); 
});

function resetGame() {
  document.getElementById("resultMessage").style.visibility = 'hidden';
  document.getElementById("playAgainButton").style.display = 'none'; // Ẩn nút Play Again
  
  
  countriesGuessed = 0; 
  selectRandomCountry(); 
  
  document.querySelectorAll(".allPaths").forEach(path => {
    path.style.fill = "#ececec"; // Đặt lại màu mặc định cho tất cả các phần
  });
}













