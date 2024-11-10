let countriesGuessed = 0;
const totalCountries = document.querySelectorAll(".allPaths").length;
const countryNames = {}; // Lưu tên quốc gia theo ID
let selectedCountry = null;

document.querySelectorAll(".allPaths").forEach(e => {
  e.setAttribute('class', `allPaths ${e.id}`);
  countryNames[e.id] = e.id; // Lưu tên quốc gia vào đối tượng
});

// Chọn ngẫu nhiên một quốc gia
function selectRandomCountry() {
  const allCountries = document.querySelectorAll(".allPaths");
  const randomIndex = Math.floor(Math.random() * allCountries.length);
  selectedCountry = allCountries[randomIndex];

  // Lấy tất cả các phần của quốc gia có cùng id
  const countryId = selectedCountry.id;
  const countryParts = document.querySelectorAll(`#${countryId}`);

  // Highlight tất cả các phần của quốc gia đã chọn
  countryParts.forEach(part => {
    part.style.fill = "pink"; // Đổi màu để highlight
  });
  document.getElementById("name").style.visibility = "hidden";
  document.getElementById("namep").innerText = countryId; // Hiển thị tên quốc gia cần đoán
  document.getElementById("name").style.opacity = 1;
}

// Gọi hàm chọn ngẫu nhiên khi trò chơi bắt đầu
selectRandomCountry();

function checkAnswer() {
  const userInput = document.getElementById("countryInput").value.trim().toLowerCase();
  const countryId = selectedCountry.id.toLowerCase(); // Tên quốc gia đang hiển thị

  if (userInput === countryId) {
    countriesGuessed++;

    // Lấy tất cả các phần của quốc gia có cùng id và đổi màu khi đúng
    const countryId = selectedCountry.id;
    const countryParts = document.querySelectorAll(`#${countryId}`);

    // Highlight tất cả các phần của quốc gia đã chọn
    countryParts.forEach(part => {
      part.style.fill = "green"; // Đổi màu để highlight
    });

    document.getElementById("countryInput").value = ''; // Xóa ô nhập liệu

    // Kiểm tra nếu người chơi hoàn thành
    if (countriesGuessed === 3) {
      document.getElementById("resultMessage").style.visibility = 'visible';
      document.getElementById("resultMessage").classList.add("show"); // Hiển thị thông báo
      document.getElementById("resultText").innerHTML = "Congratulations!<br>You completed the game!";
    } else {
      // Tiến hành chọn quốc gia tiếp theo
      setTimeout(() => {
        selectRandomCountry(); // Chọn quốc gia tiếp theo
      }, 10); // Delay trước khi chọn quốc gia mới
    }

  } else {
    alert("Wrong! Try again.");
  }
}

function playAgain() {
  // Reset lại các biến và trạng thái trò chơi
  countriesGuessed = 0;
  
  // Ẩn thông báo kết quả
  document.getElementById("resultMessage").classList.remove("show");
  
  // Reset màu sắc của các quốc gia
  document.querySelectorAll(".allPaths").forEach(e => {
    e.style.fill = "#ececec"; // Đặt lại màu cho các quốc gia
  });

  // Xóa ô nhập liệu
  document.getElementById("countryInput").value = '';

  // Chọn lại quốc gia ngẫu nhiên
  selectRandomCountry();
  
  // Ẩn tên quốc gia
  document.getElementById("name").style.opacity = 0;
}
