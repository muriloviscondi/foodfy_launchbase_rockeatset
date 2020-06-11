const cards = document.querySelectorAll('.card__content');
const modalOverlay = document.querySelector('.modal-overlay');

for (let card of cards) {
  card.querySelector('.card-image').addEventListener('click', function() {
    const cardId = card.getAttribute('id');
    const cardDescription = card.querySelector('.card__description').textContent
    const cardAuthor = card.querySelector('.author').textContent

    modalOverlay.classList.add('active');

    document.querySelector('.modal__image').src = `../assets/${cardId}.png`
    document.querySelector('.modal__description').innerHTML = cardDescription
    document.querySelector('.modal__author').innerHTML = cardAuthor
    
  })
}

document.querySelector('.close').addEventListener('click', function() {
  modalOverlay.classList.remove('active');
  document.querySelector('.modal__image').src = '';
  document.querySelector('.modal__description').innerHTML = '';
  document.querySelector('.modal__author').innerHTML = '';
})