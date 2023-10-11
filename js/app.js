const fireworkContainer = document.querySelector('.fireworks-container')
const daysSpan = document.querySelector('#days')
const hoursSpan = document.querySelector('#hours')
const minutesSpan = document.querySelector('#minutes')
const secondsSpan = document.querySelector('#seconds')
const newYear = document.querySelector('#new-year')
const before = document.getElementById('before');
const after = document.getElementById('after');
const timer = document.getElementById('timer');

const now = new Date()

newYear.innerHTML = now.getFullYear() + 1;

//MANUAL
//const countToDate = new Date("2023-10-10 00:53:00").getTime()

//OTOMATIS
const countToDate = new Date(now.getFullYear() + 1, 0, 1).getTime()


const countdown = () => {
    const now = new Date().getTime()

    const distance = countToDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    daysSpan.innerHTML = days
    hoursSpan.innerHTML = hours
    minutesSpan.innerHTML = minutes
    secondsSpan.innerHTML = seconds

    if (distance < 0) {
		clearInterval(countdownInterval);
		fireworks.start();
		timer.style.display = 'none';
		after.style.display = 'initial';
		before.style.display = 'none';
    } else {		
		before.style.display = 'initial';
		after.style.display = 'none';
	}
}

countdown()

const countdownInterval = setInterval(countdown, 1000)

const fireworks = new Fireworks(fireworkContainer, {
    speed: 4,
    acceleration: 1.05,
    friction: 1,
    gravity: 4,
    particles: 400,
    explosion: 10
})

