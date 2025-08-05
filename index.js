let count = 0;
const button = document.getElementById('click');
const counter = document.getElementById('counter');

button.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});
