import appendCards from './cards.js';
import  { getGifts } from './api.js';
import { transformStringToKebab } from './utils.js';
import showModal from './modal.js';

const giftsContainer = document.querySelector('#gifts-container');
const toTopButton = document.getElementById('to-top');
let navCategory;
let cardsData;

async function initGiftsPage() {
  cardsData = await getGifts();

  appendCards(giftsContainer, cardsData);

  navCategory = document.querySelector('#nav-category');
  navCategory.addEventListener('click', onClickCategory);

  if (window.scrollY < 300) {
    toTopButton.style.display = 'none';
  }

  window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768) {
      if (window.scrollY > 300) {
        toTopButton.style.display = 'block';
      } else {
        toTopButton.style.display = 'none';
      }
    }
  });

  window.addEventListener('resize', () => {
    if (window.scrollY < 300) {
      toTopButton.style.display = 'none';
    }
  });

  toTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};

if (giftsContainer) {
  initGiftsPage();
  giftsContainer.addEventListener('click', onClickCard);
}

function onClickCard(event) {
  const card = event.target.closest('.card');
  if (card.dataset.modal === 'card-item') {
    showModal(card);
  }
}

const onClickCategory = (event) => {
  const clickedElement = event.target;

  if (clickedElement.tagName !== 'LI') return;

  const categoryId = clickedElement.id;

  const filteredData = categoryId === 'all' 
    ? cardsData
    : cardsData.filter(item => transformStringToKebab(item.category) === categoryId);

  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  clickedElement.classList.add('active');

  giftsContainer.innerHTML = '';
  appendCards(giftsContainer, filteredData);
};
