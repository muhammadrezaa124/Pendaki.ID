// Fungsi untuk menampilkan popup modal
function showPopup(title, imgSrc, description) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupImg = document.getElementById("popup-img");
  const popupDesc = document.getElementById("popup-description");

  popupTitle.textContent = title;
  popupImg.src = imgSrc;
  popupImg.alt = title;
  popupDesc.textContent = description;

  popup.style.display = "flex";
}

// Fungsi untuk menutup popup modal
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
