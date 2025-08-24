const popup = document.querySelector(".popup");
const openButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-icon");

const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const profileNameInput = document.querySelector(".popup__input-name");
const profileOccupationInput = document.querySelector(
  ".popup__input-occupation"
);
const editProfileName = document.querySelector(".popup__form");
const editProfileOccupation = document.querySelector(".popup__form");
const likeButton = document.querySelector(".elements__card-like");

openButton.addEventListener("click", openpopup);
function openpopup() {
  popup.classList.add("popup_opened");
  profileNameInput.value = profileName.textContent;
  profileOccupationInput.value = profileOccupation.textContent;
}

closeButton.addEventListener("click", closePopup);
function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleEditProfileName(event) {
  // não entendi essa linha aqui
  event.preventDefault();
  profileName.textContent = profileNameInput.value;
  closePopup();
}

function handleditProfileOccupation(event) {
  event.preventDefault();
  profileOccupation.textContent = profileOccupationInput.value;
}

editProfileName.addEventListener("submit", handleEditProfileName);

editProfileOccupation.addEventListener("submit", handleditProfileOccupation);
