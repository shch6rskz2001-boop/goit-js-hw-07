const changeColorBtn = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});


