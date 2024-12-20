export default function getRandomSet(arr, amount) {
  const setRes = new Set;
  const uniqueItems = new Set(arr);
  if (amount > uniqueItems.size) {
    throw new Error('Requested amount exceeds the number of unique elements in the array');
  }

  while (setRes.size < amount) {
    const index = Math.floor(Math.random() * arr.length);
    setRes.add(arr[index]);
  }

  return setRes;
}

export function transformStringToKebab(str) {
  return str.toLowerCase().split(' ').join('-');
}

//TODO 
// export function appendEl(parentElement, childElement, childAttributes) {
//   Object.entries(childAttributes).forEach(([attr, value]) => {
//     childElement.setAttribute(attr, value);
//   })

//   parentElement.appendChild(childElement);
// }
