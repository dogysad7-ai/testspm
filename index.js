let clicks = 0;
const clickBtn = document.getElementById('clickBtn');
const countDisplay = document.getElementById('count');

clickBtn.addEventListener('click', () => {
  clicks++;
  countDisplay.textContent = clicks;
});
