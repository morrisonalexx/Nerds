let popup = document.querySelector('.modal');
let openPopupButton = document.querySelector('.write-us');
let closePopupButton = popup.querySelector('.modal-close');
let userName = popup.querySelector(".user-name");
let feedbackForm = popup.querySelector(".feedback-form");
let userEmail= popup.querySelector(".user-email");

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});

closePopupButton.addEventListener('click', function (evt) {
  popup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal-show');
  }
});
