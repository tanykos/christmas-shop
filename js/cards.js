import { transformStringToKebab } from './utils.js';

export default function appendCards(cardsContainer, data) {
  data.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.modal = 'card-item';

    cardsContainer.appendChild(cardElement);

    const categoryName = transformStringToKebab(card.category);
    const imgSrc = `./images/gift-${categoryName}.png`;

    cardElement.innerHTML = `
      <div class="card-img">
        <img class="prodact-img" src=${imgSrc} alt=${card.name}>
      </div>
      <div class="card-text">
        <div class="card-category ${categoryName}">${card.category}</div>
        <h3 class="heading-3 card-name">${card.name}</h3>
      </div>`;
  })
}
