const INTERVAL_MS = 1000 / 60;
let timerID;
let lastTimerStartTime = 0;
let millisElapsedBeforeLastStart = 0;

const timer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// Creating functions

// 1. Start Timer
function startTimer() {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;

  lastTimerStartTime = Date.now();
  timerID = setInterval(updateTimer, INTERVAL_MS);
}
// 2 Stop Timer

function stopTimer() {
  resetButton.disabled = false;
  stopButton.disabled = true;
  startButton.disabled = false;

  millisElapsedBeforeLastStart += Date.now() - lastTimerStartTime;
  clearInterval(timerID);
}
// 3. ResetTimer

function resetTimer() {
  resetButton.disabled = true;
  timer.textContent = "00:00:00";
  millisElapsedBeforeLastStart = 0;
}
// 4. Update Timer

function updateTimer() {
  const millisElapsed =
    Date.now() - lastTimerStartTime + millisElapsedBeforeLastStart;
  const secondsElapsed = millisElapsed / 1000;
  const minutesElapsed = secondsElapsed / 60;

  const millisText = formatNumber(millisElapsed % 1000, 3);
  const secondsText = formatNumber(Math.floor(secondsElapsed) % 60, 2);
  const minutesText = formatNumber(Math.floor(minutesElapsed), 2);
  timer.textContent = `${minutesText}:${secondsText}:${millisText}`;
}
// 5. Format Timer
function formatNumber(number, desireLength) {
  const stringNumber = String(number);
  if (stringNumber.length > desireLength) {
    return stringNumber.slice(0, desireLength);
  }

  return stringNumber.padStart(desireLength, "0");
}
