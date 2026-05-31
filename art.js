/* Reusable SVG art for product cards and category panels */

const FIRE_GRADIENT = `
<defs>
  <radialGradient id="flame" cx="50%" cy="80%" r="70%">
    <stop offset="0%" stop-color="#ffd56b"/>
    <stop offset="40%" stop-color="#ff8a2a"/>
    <stop offset="80%" stop-color="#c43e0a"/>
    <stop offset="100%" stop-color="#3d0a02"/>
  </radialGradient>
  <radialGradient id="flameElec" cx="50%" cy="80%" r="70%">
    <stop offset="0%" stop-color="#a8d8ff"/>
    <stop offset="50%" stop-color="#3d8fd1"/>
    <stop offset="100%" stop-color="#0a1a2d"/>
  </radialGradient>
  <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3a3a3a"/>
    <stop offset="100%" stop-color="#0a0a0a"/>
  </linearGradient>
  <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#1a1a1a"/>
    <stop offset="100%" stop-color="#000"/>
  </linearGradient>
</defs>
`;

function fireplaceLinear(grad = "flame") {
  return `
<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  ${FIRE_GRADIENT}
  <rect x="40" y="60" width="320" height="180" rx="2" fill="url(#metal)"/>
  <rect x="60" y="80" width="280" height="140" fill="url(#glass)"/>
  <rect x="60" y="80" width="280" height="140" fill="url(#${grad})" opacity="0.9"/>
  <g opacity="0.8">
    <ellipse cx="120" cy="190" rx="14" ry="22" fill="#ffd56b" opacity="0.55"/>
    <ellipse cx="200" cy="180" rx="18" ry="32" fill="#ffb347" opacity="0.7"/>
    <ellipse cx="280" cy="195" rx="12" ry="20" fill="#ffd56b" opacity="0.5"/>
  </g>
  <rect x="60" y="210" width="280" height="14" fill="#1a1a1a"/>
  <g fill="#222">
    <rect x="80" y="212" width="20" height="10"/>
    <rect x="120" y="212" width="20" height="10"/>
    <rect x="160" y="212" width="20" height="10"/>
    <rect x="220" y="212" width="20" height="10"/>
    <rect x="260" y="212" width="20" height="10"/>
    <rect x="300" y="212" width="20" height="10"/>
  </g>
</svg>`;
}

function fireplaceTraditional() {
  return `
<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  ${FIRE_GRADIENT}
  <rect x="80" y="50" width="240" height="220" rx="3" fill="url(#metal)"/>
  <path d="M120 90 L120 240 L280 240 L280 90 Q280 80 270 80 L130 80 Q120 80 120 90 Z" fill="url(#glass)"/>
  <path d="M120 90 L120 240 L280 240 L280 90 Q280 80 270 80 L130 80 Q120 80 120 90 Z" fill="url(#flame)" opacity="0.9"/>
  <g opacity="0.85">
    <path d="M180 230 Q175 200 195 180 Q210 195 200 220 Q215 200 220 230 Z" fill="#ffd56b"/>
    <path d="M160 235 Q155 215 170 200 Q180 215 175 235 Z" fill="#ffb347" opacity="0.8"/>
    <path d="M225 235 Q220 218 235 205 Q245 220 240 235 Z" fill="#ffb347" opacity="0.8"/>
  </g>
  <g fill="#1a1a1a">
    <rect x="140" y="220" width="50" height="20" rx="2"/>
    <rect x="200" y="225" width="60" height="15" rx="2"/>
  </g>
</svg>`;
}

function fireplaceElectric() {
  return `
<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  ${FIRE_GRADIENT}
  <rect x="30" y="90" width="340" height="120" rx="2" fill="url(#metal)"/>
  <rect x="50" y="105" width="300" height="90" fill="url(#glass)"/>
  <rect x="50" y="105" width="300" height="90" fill="url(#flameElec)" opacity="0.85"/>
  <g opacity="0.9">
    <ellipse cx="120" cy="170" rx="20" ry="28" fill="#a8d8ff" opacity="0.6"/>
    <ellipse cx="200" cy="160" rx="24" ry="38" fill="#c0e0ff" opacity="0.7"/>
    <ellipse cx="280" cy="170" rx="20" ry="28" fill="#a8d8ff" opacity="0.6"/>
  </g>
  <g fill="#0a0a0a">
    <rect x="60" y="180" width="280" height="12"/>
  </g>
</svg>`;
}

function fireplaceOutdoor() {
  return `
<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  ${FIRE_GRADIENT}
  <rect x="60" y="100" width="280" height="130" rx="2" fill="url(#metal)" stroke="#444" stroke-width="2"/>
  <rect x="80" y="115" width="240" height="100" fill="url(#glass)"/>
  <rect x="80" y="115" width="240" height="100" fill="url(#flame)" opacity="0.9"/>
  <g opacity="0.8">
    <path d="M150 200 Q145 175 160 158 Q175 175 168 200 Z" fill="#ffd56b"/>
    <path d="M200 205 Q195 175 215 155 Q230 178 220 205 Z" fill="#ffb347"/>
    <path d="M250 200 Q245 178 260 162 Q275 178 268 200 Z" fill="#ffd56b" opacity="0.85"/>
  </g>
  <rect x="60" y="225" width="280" height="20" fill="#2a2a2a"/>
  <rect x="40" y="240" width="320" height="8" fill="#1a1a1a"/>
  <g fill="#5a4030" opacity="0.4">
    <rect x="80" y="55" width="50" height="50" rx="3"/>
    <rect x="140" y="40" width="50" height="65" rx="3"/>
    <rect x="200" y="50" width="50" height="55" rx="3"/>
    <rect x="260" y="45" width="50" height="60" rx="3"/>
  </g>
</svg>`;
}

function fireplaceWood() {
  return `
<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  ${FIRE_GRADIENT}
  <rect x="70" y="40" width="260" height="240" rx="3" fill="url(#metal)"/>
  <rect x="90" y="60" width="220" height="200" fill="url(#glass)"/>
  <rect x="90" y="60" width="220" height="200" fill="url(#flame)" opacity="0.95"/>
  <g fill="#5a3820" opacity="0.85">
    <rect x="115" y="225" width="40" height="14" rx="2"/>
    <rect x="155" y="218" width="50" height="14" rx="2" transform="rotate(-8 180 225)"/>
    <rect x="200" y="222" width="55" height="14" rx="2" transform="rotate(5 227 229)"/>
    <rect x="250" y="225" width="35" height="14" rx="2"/>
  </g>
  <g opacity="0.9">
    <path d="M170 220 Q160 180 195 150 Q210 180 200 220 Q220 185 230 220 Z" fill="#ffd56b"/>
    <path d="M150 230 Q145 200 165 175 Q175 200 170 230 Z" fill="#ffb347" opacity="0.8"/>
    <path d="M225 230 Q220 200 245 180 Q255 200 245 230 Z" fill="#ffb347" opacity="0.8"/>
  </g>
</svg>`;
}

function hvacUnit() {
  return `
<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  ${FIRE_GRADIENT}
  <rect x="80" y="60" width="240" height="220" rx="6" fill="url(#metal)" stroke="#444" stroke-width="2"/>
  <rect x="100" y="80" width="200" height="160" rx="4" fill="#0a0a0a"/>
  <g fill="none" stroke="#2a2a2a" stroke-width="1.5">
    ${Array.from({length: 12}).map((_, i) => `<line x1="110" y1="${95 + i * 12}" x2="290" y2="${95 + i * 12}"/>`).join("")}
  </g>
  <circle cx="200" cy="160" r="48" fill="none" stroke="#c8a063" stroke-width="2"/>
  <g fill="#c8a063" opacity="0.85" transform="translate(200 160)">
    <path d="M0 -45 Q15 -25 0 -10 Q-15 -25 0 -45"/>
    <path d="M45 0 Q25 15 10 0 Q25 -15 45 0"/>
    <path d="M0 45 Q-15 25 0 10 Q15 25 0 45"/>
    <path d="M-45 0 Q-25 -15 -10 0 Q-25 15 -45 0"/>
  </g>
  <circle cx="200" cy="160" r="8" fill="#c8a063"/>
  <rect x="100" y="250" width="200" height="20" fill="#1a1a1a"/>
</svg>`;
}

window.NAP_ART = {
  linear: () => fireplaceLinear("flame"),
  traditional: fireplaceTraditional,
  electric: fireplaceElectric,
  outdoor: fireplaceOutdoor,
  wood: fireplaceWood,
  hvac: hvacUnit
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-art]").forEach(el => {
    const kind = el.dataset.art;
    if (window.NAP_ART[kind]) el.innerHTML = window.NAP_ART[kind]();
  });
});
