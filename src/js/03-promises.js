import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
//const delayEl = document.querySelector('input[name="delay"]');
//const stepEl = document.querySelector('input[name="step"]');
//const amountEl = document.querySelector('input[name="amount"]');

let { delay, step, amount } = formEl;
formEl.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(event) {
  event.preventDefault();
  //let { delay, step, amount } = event.currentTarget;
  delay = Number(delay.value);
  step = Number(step.value);
  amount = Number(amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ i, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ i, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${i} in ${delay}ms`);
      });
    delay += step;
  }
}
function createPromise(i, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ i, delay });
      } else {
        reject({ i, delay });
      }
    }, delay);
  });
}
