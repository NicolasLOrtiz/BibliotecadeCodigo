import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  
  <h1>
  Buttons
</h1>
<div class="buttons">
<a href="/components/buttons/magic-line-fill/">Magic Line Fill</a>
<a href="/components/buttons/ellipsis-hover-effect/">Ellipsis Hover Effect</a>
</div>

<h1>Cards</h1>
<div class="cards">
<a href="/components/cards/dark-neumorphism/">Dark neumorphism</a>
<a href="/components/cards/ProductCard_Descr/">Product Card with description</a>
<a href="/components/cards/ProductCard_Detail/">Product Card with details</a>
<a href="/components/cards/ProductCard_UI/">Product Card with new UI</a>
</div>

  <h1>
  Forms
</h1>
<h3>Autentication</h3>
<div class="buttons">
<a href="/components/forms/autentication/responsive-vanilla-slide/">Responsive Vanilla Slide</a>
</div>

<h3>Contact</h3>
<div class="buttons">
<a href="/components/forms/contact/responsive-floating-placeholder/">Responsive Floating PlaceHolder</a>
</div>

<h1>
  Menus
</h1>
<div class="buttons">
<a href="/components/menus/dashboard-sidebar-menu/">Dashboard Sidebar Menu</a>
</div>

<h1>
  Pages
</h1>
<div class="buttons">
<a href="/pages/css-cv/">CSS CV</a>
<a href="/pages/css-running-animation/">CSS Running Animation</a>
<a href="/pages/html-css-js-portifolio/">HTML/CSS/JS Portifolio</a>
<a href="/pages/html-meaningful-html/">Meaningful HTML</a>
<a href="/pages/html-responsive-fallback/">HTML Responsive Fallback</a>
<a href="/pages/html-responsive-image/">HTML Responsive Image</a>
<a href="/pages/html-responsive-picture/">HTML Responsive Picture</a>
<a href="/pages/html-sss/">HTML SSS</a>
<a href="/pages/js-analog-clock/">JS Analog Clock</a>
<a href="/pages/js-responsive-resolution/">JS Responsive Resolution</a>
<a href="/pages/js-speed-test/">JS Speed Test</a>
<a href="/pages/site-simples-responsivo/">Responsive</a>
<a href="/pages/starbucks-landing-page/">Starbucks Landing Page</a>
<a href="/pages/woodland/">Woodland</a>
</div>
`

setupCounter(document.querySelector('#counter'))
