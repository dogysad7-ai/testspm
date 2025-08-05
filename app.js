
import { SpmApi } from "https://cdn.jsdelivr.net/npm/spwmini@latest/spwmini.min.js";

const api = new SpmApi();

async function getPlayerInfo(name) {
  try {
    const player = await api.getPlayer(name);
    alert(`Игрок ${name} найден! UUID: ${player.uuid}`);
  } catch (e) {
    alert('Ошибка: игрок не найден');
  }
}

document.getElementById('checkBtn').addEventListener('click', () => {
  const playerName = document.getElementById('playerName').value.trim();
  if (playerName) {
    getPlayerInfo(playerName);
  } else {
    alert('Введите имя игрока');
  }
});
