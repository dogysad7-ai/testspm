let clicks = 0;
const clickBtn = document.getElementById('clickBtn');
const countDisplay = document.getElementById('count');

clickBtn.addEventListener('click', () => {
  clicks++;
  countDisplay.textContent = clicks;

  // Попробуем отправить сообщение игроку через spwmini
  try {
    const player = spwmini.getPlayer();
    player.sendMessage(`Ты кликнул ${clicks} раз!`);
  } catch (e) {
    console.warn("spwmini не загружен или ты не в СПм: ", e);
  }
});
