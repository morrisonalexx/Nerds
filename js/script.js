let popup = document.querySelector(".modal");
let openPopupButton = document.querySelector(".write-us");
let closePopupButton = popup.querySelector(".modal-close");
let userName = popup.querySelector(".user-name");
let feedbackForm = popup.querySelector(".feedback-form");
let userEmail= popup.querySelector(".user-email");

openPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  userName.focus({preventScroll:true});
});

closePopupButton.addEventListener("click", function (evt) {
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove("modal-show");
  }
});


/* MAP */


function initMap() {
  let coordinates = {lat: 59.938655, lng: 30.323206};
  let markerImage = "img/map-marker.png";
  let centerMap = {lat: 59.939107, lng: 30.321275};
  let map = new google.maps.Map(
      document.getElementById("map"), {
        zoom: 17,
        center: centerMap,
        disableDefaultUI: true,
        scrollwheel: false
      });

      let marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage
      });
};
