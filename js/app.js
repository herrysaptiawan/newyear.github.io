// Countdown script
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const fireworkContainer = document.querySelector('.fireworks-container')

let current = new Date().getTime();
let countdown = new Date('2024-01-01 00:00:00').getTime();

let interval = setInterval(function() {
let distance = countdown - current;

  if (distance <= 0) {
    clearInterval(interval);
	fireworks.start();
    playAnimation();	
  }

  document.getElementById('days').getElementsByClassName('number')[0].innerHTML = pad(parseInt(distance / day));
  document.getElementById('hours').getElementsByClassName('number')[0].innerHTML = pad(parseInt((distance % day)/ hour));
  document.getElementById('minutes').getElementsByClassName('number')[0].innerHTML = pad(parseInt((distance % hour) / minute));
  document.getElementById('seconds').getElementsByClassName('number')[0].innerHTML = pad(parseInt((distance % minute) / second));
  current += second;
}, second);

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}

// Animation script

function playAnimation() {
  let tl = gsap.timeline();
  tl.to('.time-counter', {duration: 2, opacity: 0})
    .to('#new-year-text path', { duration: 2, css: { fill: 'rgba(255,255,255,1)' }, ease: 'power4.outs', delay: '-2' })
}

const fireworks = new Fireworks(fireworkContainer, {
    speed: 4,
    acceleration: 1.05,
    friction: 1,
    gravity: 4,
    particles: 400,
    explosion: 10
})


