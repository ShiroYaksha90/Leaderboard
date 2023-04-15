import './style.css';
import ApiOp from './modules/display.js';

const refreshButton = document.getElementById('refresh');
const form = document.querySelector('#form');

document.addEventListener('DOMContentLoaded', () => {
  ApiOp.render();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  ApiOp.newScore();
  ApiOp.clearFormInput();
});
refreshButton.addEventListener('click', () => {
  ApiOp.render();
});
