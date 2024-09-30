let count = 0;
const counterDisplay = document.querySelector('#counter');
const mainArea = document.querySelector('#mainArea');
const resetButton = document.querySelector('#resetButton');

function updateCounter() {
  count++;
  counterDisplay.textContent = count;
  updateMainBackground();
}

function resetCounter() {
  count = 0;
  counterDisplay.textContent = count;
  updateMainBackground();
}

function updateMainBackground() {
  const percent = count % 100;  
  mainArea.style.background = `linear-gradient(to right, rgb(253, 198, 0) 0%, ${percent}%, white ${percent}%, white 100%)`;
}

mainArea.addEventListener('click', updateCounter);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    updateCounter();
  }
});

resetButton.addEventListener('click', resetCounter);
