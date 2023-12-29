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

if (distance <= 59000) {
document.getElementById('full').style.display = 'none';
document.getElementById('half').style.display = 'block';

  if (distance <= 0) {
    clearInterval(interval);
    fireworks.start();
    playAnimation();
    document.getElementById('half').style.display = 'none';
  }
}
  document.getElementById('last').getElementsByClassName('new_digit')[0].innerHTML = new_pad(parseInt((distance % minute) / second));
  document.getElementById('day').getElementsByClassName('digit')[0].innerHTML = pad(parseInt(distance / day));
  document.getElementById('hour').getElementsByClassName('digit')[0].innerHTML = pad(parseInt((distance % day)/ hour));
  document.getElementById('min').getElementsByClassName('digit')[0].innerHTML = pad(parseInt((distance % hour) / minute));
  document.getElementById('sec').getElementsByClassName('digit')[0].innerHTML = pad(parseInt((distance % minute) / second));
  current += second;
}, second);

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}

function new_pad(x) {
  return (x < 10 ? '' : '') + x;
}

// Animation script
function playAnimation() {
  let tl = gsap.timeline();
  tl
    .to('.timer', {duration: 1, opacity: 0})
    .to('#new-year-text path', { duration: 2, css: { fill: 'rgba(255,255,255,1)' }, ease: 'power4.outs', delay: '-2' })
 }

const fireworks = new Fireworks(fireworkContainer, {
  speed: 10,
  acceleration: 1,
  friction: 1,
  gravity: 4,
  particles: 400,
  explosion: 10
})