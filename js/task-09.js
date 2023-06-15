function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonElColor = document.querySelector('.change-color');
const spanElColor = document.querySelector('.color');
const bodyEl = document.querySelector("body");

buttonElColor.addEventListener('click', () => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanElColor.textContent = getRandomHexColor();

});