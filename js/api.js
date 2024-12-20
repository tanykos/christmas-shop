import getRandomSet from './utils.js'

const BEST_GIFTS_AMOUNT = 4;

export async function getGifts() {
  try {
    const response = await fetch('./gifts.json');
    const gifts = await response.json();
    
    return gifts;
  } catch (error) {
    console.error("Error: ", error);
  }
}

export default async function getRandomGifts() {
  const gifts = await getGifts();
  const randomGifts = getRandomSet(gifts, BEST_GIFTS_AMOUNT);
  
  return Array.from(randomGifts);
}

export async function getGiftByName(name) {
  try {
    const gifts = await getGifts();

    const gift = gifts.find(gift => gift.name.toLowerCase() === name.toLowerCase());

    return gift;
  } catch (error) {
    console.error("Error: ", error);
  }
}
