/* Shared header & footer injection — keeps every page in sync */

const HEADER = `
<div class="utility-bar">
  <div class="container">
    <span>Free shipping on orders over $999</span>
    <span><a href="https://skipthewarehouse.com/" target="_blank" rel="noopener">Now selling on Skip the Warehouse →</a></span>
  </div>
</div>
<header class="site-header">
  <div class="container header-inner">
    <a href="index.html" class="brand">NAPOLEON<span>.</span></a>
    <nav class="main-nav">
      <ul>
        <li><a href="gas-fireplaces.html" data-nav="gas">Gas</a></li>
        <li><a href="electric-fireplaces.html" data-nav="electric">Electric</a></li>
        <li><a href="wood-fireplaces.html" data-nav="wood">Wood</a></li>
        <li><a href="outdoor-fireplaces.html" data-nav="outdoor">Outdoor</a></li>
        <li><a href="heating.html" data-nav="heating">Heating &amp; Cooling</a></li>
      </ul>
    </nav>
    <a href="https://skipthewarehouse.com/" class="cta-pill" target="_blank" rel="noopener">Shop on STW</a>
  </div>
</header>
`;

const FOOTER = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">NAPOLEON<span>.</span></div>
        <p>Premium fireplaces and heating, available now through our trusted retail partner Skip the Warehouse.</p>
      </div>
      <div>
        <h5>Fireplaces</h5>
        <ul>
          <li><a href="gas-fireplaces.html">Gas Fireplaces</a></li>
          <li><a href="electric-fireplaces.html">Electric Fireplaces</a></li>
          <li><a href="wood-fireplaces.html">Wood Fireplaces</a></li>
          <li><a href="outdoor-fireplaces.html">Outdoor Fireplaces</a></li>
        </ul>
      </div>
      <div>
        <h5>Heating &amp; Cooling</h5>
        <ul>
          <li><a href="heating.html#furnaces">Gas Furnaces</a></li>
          <li><a href="heating.html#ac">Air Conditioners</a></li>
          <li><a href="heating.html#heatpumps">Cold Climate Heat Pumps</a></li>
          <li><a href="heating.html#minisplits">Mini-Splits</a></li>
          <li><a href="heating.html#thermostat">EQ Hub Thermostat</a></li>
          <li><a href="heating.html#condopack">Condo Pack</a></li>
          <li><a href="quote-tool.html">Sales Quote Tool</a></li>
        </ul>
      </div>
      <div>
        <h5>Purchase</h5>
        <ul>
          <li><a href="https://skipthewarehouse.com/" target="_blank" rel="noopener">Skip the Warehouse</a></li>
          <li><a href="https://skipthewarehouse.com/contact/" target="_blank" rel="noopener">Contact STW</a></li>
          <li><a href="https://skipthewarehouse.com/delivery-information/" target="_blank" rel="noopener">Delivery Info</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 Napolean.shop &middot; All purchases fulfilled by Skip the Warehouse</span>
      <span><a href="https://skipthewarehouse.com/" target="_blank" rel="noopener">skipthewarehouse.com</a></span>
    </div>
  </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  const headerSlot = document.getElementById("header-slot");
  const footerSlot = document.getElementById("footer-slot");
  if (headerSlot) headerSlot.innerHTML = HEADER;
  if (footerSlot) footerSlot.innerHTML = FOOTER;

  const active = document.body.dataset.nav;
  if (active) {
    const link = document.querySelector(`.main-nav a[data-nav="${active}"]`);
    if (link) link.classList.add("active");
  }
});
