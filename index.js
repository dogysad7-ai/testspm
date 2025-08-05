// Переменная для подсчёта кликов
let clicks = 0;

// Получаем элементы кнопки и счетчика
const clickBtn = document.getElementById('clickBtn');
const countDisplay = document.getElementById('count');

// Обработчик клика
clickBtn.addEventListener('click', () => {
  clicks++;
  countDisplay.textContent = clicks;

  // Если хочешь работать с игроком через API СПм, пример ниже:
  // let player = spwmini.getPlayer(); // получить объект игрока
  // player.sendMessage(`Ты кликнул ${clicks} раз!`);
});
