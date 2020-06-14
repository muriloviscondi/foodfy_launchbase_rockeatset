const cards = document.querySelectorAll('.card__content');
const modalOverlay = document.querySelector('.modal-overlay');
const hidden = document.querySelectorAll('.hidden')

for (let card of cards) {
  card.querySelector('.card-image').addEventListener('click', function() {
    const cardId = card.getAttribute('id');
    
    window.location.href = `/details?id=${cardId}`

  })
}

for (let hid of hidden) {
  hid.addEventListener('click', function() {
    const hiddenId = hid.getAttribute('id');
    
    if (hid.textContent === 'ESCONDER') {
      document.querySelector(`.${hiddenId}.div-hidden`).classList.add('hidden-active')

      hid.innerHTML = 'EXPANDIR'
    } else {
      document.querySelector(`.${hiddenId}.div-hidden`).classList.remove('hidden-active')
      
      hid.innerHTML = 'ESCONDER'
    }
    
  })
}
