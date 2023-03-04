import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const timerInput = document.querySelector("input#datetime-picker");

const startBtn = document.querySelector('button[data-start]')

startBtn.setAttribute('disabled', '')

let fff = 0
let ccc = 0

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (Number(selectedDates[0]) > Number(new Date())) {
            if (startBtn.hasAttribute('disabled')) {
            startBtn.removeAttribute('disabled')
            }
            fff = Number(selectedDates[0]) 
            console.log(Number(selectedDates[0]) )
            // setInterval(() => { console.log(setInterval(new Date(), 1000)) }, 1000)
        }

        else {
            if (!startBtn.hasAttribute('disabled')) {
                startBtn.setAttribute('disabled', '')
            }
            window.alert('Please choose a date in the future')
        }
    },    
}

flatpickr(timerInput, options)



startBtn.addEventListener('click', () => { setInterval(() => {console.log(convertMs())}, 1000) })

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


// console.log(Number(options.defaultDate));




