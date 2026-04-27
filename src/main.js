import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import dLineLogo from './assets/D.svg'
import { setupCounter } from './counter.js'
import { startCountdown } from './timer.js'
document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${dLineLogo}" class="icon" alt="dline">
  </div>
  <div>
    <h1>On May 8th 2026 the Metro D Line extension will open</h1>
  </div>
  <h2 id="counter" class="counter"></h2>
</section>

`
const targetDate = new Date("May 8, 2026 00:00:00").getTime();
startCountdown(document.querySelector('#counter'), targetDate);