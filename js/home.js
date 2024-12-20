import appendCards from './cards.js';
import getRandomGifts from './api.js';
import showModal from './modal.js';


const cardsContainer = document.querySelector("#cards-container");

async function initBestSection() {
  const cardsData = await getRandomGifts();
  appendCards(cardsContainer, cardsData);
};

if (cardsContainer) {
  initBestSection();
  cardsContainer.addEventListener('click', onClickCard);
}

function onClickCard(event) {
  const card = event.target.closest('.card');

  if (card.dataset.modal === 'card-item') {
    showModal(card);
  }
}
