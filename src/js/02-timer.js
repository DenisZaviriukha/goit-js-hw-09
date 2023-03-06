import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const timerInput = document.querySelector("input#datetime-picker");

const startBtn = document.querySelector('button[data-start]')

const timerDays = document.querySelector('span[data-days]')

const timerHours = document.querySelector('span[data-hours]')

const timerMinutes = document.querySelector('span[data-minutes]')

const timerSeconds = document.querySelector('span[data-seconds]')

startBtn.setAttribute('disabled', '')

let fff = 0

let aaa = null
 
let timerTimerTime = null

let array = []

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


startBtn.addEventListener('click', () => {
    startBtn.setAttribute('disabled', '')
    setInterval(() => {
        timerTimerTime = convertMs(fff - Number(new Date()), 1000)
    },
        aaa = setInterval(() => {
            if (fff - Number(new Date()) < 0) {
                clearInterval(timerTimerTime)
                clearInterval(aaa)
            }
            else {
                timerDays.textContent = timerTimerTime.days,
                timerHours.textContent = timerTimerTime.hours,
                timerMinutes.textContent = timerTimerTime.minutes,
                timerSeconds.textContent = timerTimerTime.seconds
            console.log((fff - Number(new Date())))    
            }
            
        }, 1000))
})

// addLeadingZero(padStart(0))

// startBtn.addEventListener('click', () => { setInterval(() => {console.log(convertMs())}, 1000) })

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(Number(options.defaultDate));
function pad(value) {
  return String(value).padStart(2, "0");
}


// console.log('я могу закончить?')

