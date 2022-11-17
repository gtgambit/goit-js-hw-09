const refs = {
  startBt: document.querySelector('[data-start]'),
  stopBt: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body'),
};

let timeOutId = null;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const colorChange = () => {
  timeOutId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBt.setAttribute('disabled', '');
  refs.startBt.removeAttribute('disabled');
};

const colorChangeStop = () => {
  clearInterval(timeOutId);
  refs.stopBt.setAttribute('disabled', '');
  refs.startBt.removeAttribute('disabled');
};

refs.startBt.addEventListener('click', colorChange);
refs.stopBt.addEventListener('click', colorChangeStop);
