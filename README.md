# Napolean.shop

Napoleon HVAC dealer site fulfilled by Skip The Warehouse.

## Pages
- `index.html` - storefront homepage
- `heating.html` - heating & cooling category hub
- `quote-tool.html` - sales rep system quote tool (password-gated internal print)
- `gas-fireplaces.html`, `electric-fireplaces.html`, `wood-fireplaces.html`, `outdoor-fireplaces.html`

## Stack
Static HTML/CSS/JS. No build step. Hosted on GitHub Pages with a custom domain.

## Data layer
- `stw-inventory.js` - in-stock SKU snapshot with cost, retail, qty, and special-order flags.
  Auto-refreshed from the STW quote tool every Tuesday, Thursday, and Sunday at 6 PM ET.
- `hvac-products.js` - the full Napoleon HVAC catalog from the 2026 MSRP price book.
- `hvac-specs.js` - dimensions, weight, SEER2, AHRI references per SKU.
- `quote-tool.js` - Manual J climate-zone math + system matchup logic + markup/discount + printable quote.

## Local development
Open any HTML file directly in a browser. No server required.

## Deployment
Pushes to `main` trigger GitHub Pages to rebuild automatically (60 seconds).
