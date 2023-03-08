
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.body
}

let rainbow 

refs.startBtn.addEventListener('click', onStartBtn) 
refs.stopBtn.addEventListener('click', onStopBtn)

refs.stopBtn.setAttribute('disabled', '')


function onStartBtn(e) {
    rainbow = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, 1000)  
    refs.startBtn.setAttribute('disabled', '')
    refs.stopBtn.removeAttribute('disabled')
}

function onStopBtn(e) {
    refs.startBtn.removeAttribute('disabled')
    clearInterval(rainbow)
    refs.stopBtn.setAttribute('disabled', '')

}