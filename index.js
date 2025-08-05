import SPWMini from 'https://cdn.jsdelivr.net/npm/spwmini/client/index.js';

const APP_ID = '5b3b611d-5405-4656-bcf0-855751db7619'; // сюда вставь свой ID приложения из СПм

const spm = new SPWMini(APP_ID);

spm.on('initResponse', user => {
  console.log(`Пользователь вошёл: ${user.username}`);
});

spm.on('initError', err => {
  console.error('Ошибка инициализации СПм:', err);
});

spm.initialize();

let clicks = 0;
const button = document.getElementById('clickBtn');
const counter = document.getElementById('count');

button.addEventListener('click', () => {
  clicks++;
  counter.textContent = clicks;

  // Пример отправки сообщения игроку через СПм API
  if (spm.user) {
    spm.user.sendMessage(`Ты кликнул ${clicks} раз!`);
  }
});
