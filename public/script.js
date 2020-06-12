const cards = document.querySelectorAll('.card__content');
const modalOverlay = document.querySelector('.modal-overlay');

for (let card of cards) {
  card.querySelector('.card-image').addEventListener('click', function() {
    const cardId = card.getAttribute('id');
    
    window.location.href = `/details?id=${cardId}`
    
  })
}

document.querySelector('.close').addEventListener('click', function() {
  modalOverlay.classList.remove('active');
  document.querySelector('.modal__image').src = '';
  document.querySelector('.modal__description').innerHTML = '';
  document.querySelector('.modal__author').innerHTML = '';
})