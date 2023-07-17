function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const controlsDiv = document.getElementById('controls');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');
const fragment = document.createDocumentFragment();

createButton.addEventListener('click', () => {
  const amount = parseInt(document.querySelector('input').value, 10);
  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxesDiv.appendChild(fragment);
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

