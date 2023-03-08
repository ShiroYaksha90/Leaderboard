const data = [{ name: 'Name', score: 100 },
  { name: 'Name', score: 20 },
  { name: 'Name', score: 50 },
  { name: 'Name', score: 78 },
  { name: 'Name', score: 125 },
  { name: 'Name', score: 77 },
  { name: 'Name', score: 24 }];

const bourd = document.querySelector('.scores');

let itemElements = '';

export default class UI {
    static display = () => {
      data.map((scores) => {
        itemElements += `<li class="item"> ${scores.name}:${scores.score} </li>`;
        return itemElements;
      });
      bourd.innerHTML = itemElements;
      return itemElements;
    }
}