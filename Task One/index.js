const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let intervals = 0;

const timeCounting = (seconds) => {
  const hoursRemaining = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  const minutesRemaining = Math.floor(seconds / 60);
  const secondsRemaining = Math.floor(seconds % 60);

  timerEl.textContent = `${hoursRemaining
      .toString()
      .padStart(2, "0")}:${minutesRemaining
      .toString()
      .padStart(2, "0")}:${secondsRemaining
      .toString()
      .padStart(2, "0")}`;
}

const createTimerAnimator = () => {
  return (seconds) => {
    intervals++;

    timeCounting(seconds);

     setInterval(() => {
       if (!seconds) {
         this.clearInterval();

         return;
       }

       seconds--;
       timeCounting(seconds);
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

let value = null;

inputEl.addEventListener('input', (e) => {
  value = e.target.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/[^0-9, ]/g,'').replace(/\s+/g, ' ').trim();
});

buttonEl.addEventListener('click', () => {
  if (!value) {
    timerEl.textContent = 'Введите время';

    return;
  }

  if (intervals) {
    clearInterval(intervals);
  }

  value = value.split(' ');

  switch (value.length) {
    case 1: {
      inputEl.value = value[0];

      break;
    }
    case 2: {
      inputEl.value = String(value[0] * 60 + Number(value[1]));

      break;
    }
    case 3: {
      inputEl.value = String(value[0] * 60 ** 2 + value[1] * 60 + Number(value[2]));

      break;
    }
    default: {
      timerEl.textContent = 'Таймер не поддерживает более трех параметров';

      return;
    }
  }

  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
  value = '';
});
