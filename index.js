import SPWMini from 'spwmini/client';

// Вставь сюда свой ID приложения СПм (пример)
const APP_ID = 'твой-id-приложения-от-spworlds';

// Создаём экземпляр миниаппа
const spm = new SPWMini(APP_ID);

// Инициализируем миниприложение
spm.initialize();

// Слушаем когда будет готово
spm.on('ready', () => {
  console.log('Миниприложение СПм готово');

  // Здесь пишем остальную логику, чтобы элементы были доступны
  const clickBtn = document.getElementById('clickBtn');
  const countDisplay = document.getElementById('count');
  let clicks = 0;

  clickBtn.addEventListener('click', () => {
    clicks++;
    countDisplay.textContent = clicks;

    // Пример: отправить сообщение игроку (если нужно)
    if (spm.user) {
      spm.sendMessage(`Ты кликнул ${clicks} раз!`);
    }
  });
});
