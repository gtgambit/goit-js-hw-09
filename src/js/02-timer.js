import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const dateInputEL = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtnEl.setAttribute('disabled', '');

let deadlines = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    isValidDate = selectedDates[0] > options.defaultDate;
    deadlines = selectedDates[0].getTime();
    if (isValidDate) {
      return startBtnEl.removeAttribute('disabled');
    }
    Notiflix.Notify.failure('Please choose a date in the future');
  },
};

flatpickr(dateInputEL, options);
let intervalID = null;
startBtnEl.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  startBtnEl.disabled = true;
  dateInputEL.disabled = true;
  intervalID = setInterval(() => {
    const diff = deadlines - Date.now();
    const timeCalc = convertMs(diff);
    if (diff <= 0) {
      dateInputEL.disabled = false;
      clearInterval(intervalID);
      return;
    }
    daysEl.textContent = addLeadingZero(timeCalc['days']);
    hoursEl.textContent = addLeadingZero(timeCalc['hours']);
    minutesEl.textContent = addLeadingZero(timeCalc['minutes']);
    secondsEl.textContent = addLeadingZero(timeCalc['seconds']);
  }, 1000);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
