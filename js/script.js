let popup = document.querySelector('.modal');
let openPopupButton = document.querySelector('.write-us');
let closePopupButton = popup.querySelector('.modal-close');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});

closePopupButton.addEventListener('click', function (evt) {
  popup.classList.remove('modal-show');
});

closePopupButton.addEventListener('click', function (evt) {
  popup.classList.remove('modal-show');
});
