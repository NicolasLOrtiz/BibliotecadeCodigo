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
<ul class="buttons">
<li><a href="/components/buttons/magic-line-fill/">Magic Line Fill</a></li>
<li><a href="/components/buttons/ellipsis-hover-effect/">Ellipsis Hover Effect</a></li>
<li><a href="/components/buttons/advanced-css-button-hover-animation-effects/">Advanced CSS Button Hover Animation Effects</a></li>
</ul>

<h1>Cards</h1>
<ul class="cards">
<li><a href="/components/cards/dark-neumorphism/">Dark neumorphism</a></li>
<li><a href="/components/cards/ProductCard_Descr/">Product Card with description</a></li>
<li><a href="/components/cards/ProductCard_Detail/">Product Card with details</a></li>
<li><a href="/components/cards/ProductCard_UI/">Product Card with new UI</a></li>
<li><a href="/components/cards/animated-service-section-card-ui-design/">Animated Service Section Card UI Design</a></li>
</ul>

<h1>
  Forms
</h1>
<h3>Autentication</h3>
<ul class="buttons">
<li><a href="/components/forms/autentication/responsive-vanilla-slide/">Responsive Vanilla Slide</a></li>
</ul>

<h3>Contact</h3>
<ul class="buttons">
<li><a href="/components/forms/contact/responsive-floating-placeholder/">Responsive Floating PlaceHolder</a></li>
</ul>

<h1>
  Menus
</h1>
<ul class="buttons">
<li><a href="/components/menus/dashboard-sidebar-menu/">Dashboard Sidebar Menu</a></li>
<li><a href="/components/menus/responsive-navigation-bar/">Responsive Navigation Bar</a></li>
</ul>

<h1>
  Loader
</h1>
<ul class="buttons">
<li><a href="/components/loader/neumorphism-gradient-loader-ring-animation/">Neumorphism Gradient Loader Ring Animation</a></li>
<li><a href="/components/loader/text-typing-loading-animation/">Text Typing Loading Animation</a></li>
</ul>

<h1>
  Pages
</h1>
<ul class="buttons">
<li><a href="/pages/css-cv/">CSS CV</a></li>
<li><a href="/pages/css-running-animation/">CSS Running Animation</a></li>
<li><a href="/pages/html-css-js-portifolio/">HTML/CSS/JS Portifolio</a></li>
<li><a href="/pages/html-meaningful-html/">Meaningful HTML</a></li>
<li><a href="/pages/html-responsive-fallback/">HTML Responsive Fallback</a></li>
<li><a href="/pages/html-responsive-image/">HTML Responsive Image</a></li>
<li><a href="/pages/html-responsive-picture/">HTML Responsive Picture</a></li>
<li><a href="/pages/html-sss/">HTML SSS</a></li>
<li><a href="/pages/js-analog-clock/">JS Analog Clock</a></li>
<li><a href="/pages/js-responsive-resolution/">JS Responsive Resolution</a></li>
<li><a href="/pages/js-speed-test/">JS Speed Test</a></li>
<li><a href="/pages/site-simples-responsivo/">Responsive</a></li>
<li><a href="/pages/starbucks-landing-page/">Starbucks Landing Page</a></li>
<li><a href="/pages/woodland/">Woodland</a></li>
</ul>
`

setupCounter(document.querySelector('#counter'))
