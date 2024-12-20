const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const calcTime = () => {
  const currentDate = new Date();
  const nextYear = currentDate.getUTCFullYear() + 1;
  const firstDate = new Date(Date.UTC(nextYear, 0, 1, 0, 0, 0));

  const datesDiff = firstDate - currentDate;

  const seconds = Math.floor((datesDiff / 1000) % 60);
  const minutes = Math.floor((datesDiff / 1000 / 60) % 60);
  const hours = Math.floor((datesDiff / 1000 / 60 / 60) % 24);
  const days = Math.floor(datesDiff / 1000 / 60 / 60 / 24);

  return { days, hours, minutes, seconds };
};

const updateTimer = () => {
  const { days, hours, minutes, seconds } = calcTime();

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
};

if (daysElement) {
  updateTimer();
  setInterval(updateTimer, 1000);
}
