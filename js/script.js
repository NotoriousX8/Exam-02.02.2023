"use strict";

const button = document.querySelector(".myButton");
const modal = document.querySelector(".modal__content");

function showClick(e) {
  modal.style.display = "block";
}
button.addEventListener("click", (e) => showClick(e.target.value));

// При клике ВНЕ окна - закрываем его
function closeClick(e) {
  if (e === modal) {
    modal.style.display = "none";
  }
}
modal.addEventListener("click", (e) => closeClick(e.target));

// Закрытие модального - Клик на ESC
function closeEsc(e) {
  if (e.code === "Escape") {
    modal.style.display = "none";
  }
}
document.addEventListener("keydown", (e) => closeEsc(e));
