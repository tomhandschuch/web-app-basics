const redSlider = document.querySelector('#redRange');
const greenSlider = document.querySelector('#greenRange');
const blueSlider = document.querySelector('#blueRange');
const mainArea = document.querySelector('#mainArea');
const colorValueDisplay = document.querySelector('#colorValue');

let red = 255;
let green = 105;
let blue = 180;

function componentToHex(c) {
  const hex = parseInt(c, 10).toString(16); 
  return hex.length === 1 ? "0" + hex : hex; 
}

function rgbToHex(r, g, b) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`.toLowerCase();
}

function updateBackgroundColor() {
  const hexColor = rgbToHex(parseInt(red), parseInt(green), parseInt(blue)); 
  mainArea.style.backgroundColor = hexColor; 
  colorValueDisplay.textContent = hexColor; 
  
  updateSliderBackground(redSlider, red, 'red');
  updateSliderBackground(greenSlider, green, 'green');
  updateSliderBackground(blueSlider, blue, 'blue');
}

function updateSliderBackground(slider, value, color) {
  const percentage = (value / 255) * 100;
  slider.style.background = `linear-gradient(to right, ${color} ${percentage}%, #ddd ${percentage}%)`;
}

redSlider.addEventListener('input', (event) => {
  red = event.target.value;
  updateBackgroundColor();
});

greenSlider.addEventListener('input', (event) => {
  green = event.target.value;
  updateBackgroundColor();
});

blueSlider.addEventListener('input', (event) => {
  blue = event.target.value;
  updateBackgroundColor();
});

updateBackgroundColor();
