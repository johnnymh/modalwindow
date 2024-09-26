'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const modalHeading = document.querySelector('.modal h1');

// Array of messages
const messages = [
  'Press the X to close the modal 👉🏻',
  'Press on the overlay to close the modal 🫨 (Press outside the modal)',
  'Press Esc on your keyboard to close the modal 🙂',
];

// Open the Modal
const openModal = function (z) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  modalHeading.textContent = messages[z];
};

// Clossing the Modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Capturing the loop function in a function by setting up as modal openner
const setupModalOpener = function (index) {
  return function () {
    openModal(index);
  };
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', setupModalOpener(i));
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Key press event
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
