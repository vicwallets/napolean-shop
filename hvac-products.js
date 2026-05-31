/* Napoleon HVAC product catalog - source of truth
   Pulled from 2026 US MSRP Price Book (effective May 8 2026)
   and R-454B/R-410A Heat Pump Tech Sheet.
*/

// STW URL builder. Live inventory check from stw-inventory.js.
// Returns null when a SKU is not in stock (renders as red OUT OF STOCK card).
function stwLink(model) {
  if (typeof window !== "undefined" && typeof window.stwUrl === "function") {
    return window.stwUrl(model);  // returns null when OOS
  }
  return null;
}

const FURNACES_9700 = [
  { model:"WUV035T2AA-N", name:"35K Ultimate 9700",  btu:35000,  specs:"97% AFUE - Two Stage - Variable Speed", price:3935 },
  { model:"WUV050T3AA-N", name:"52.5K Ultimate 9700",btu:52500,  specs:"97% AFUE - Two Stage - Variable Speed", price:4260 },
  { model:"WUV070T3AA-N", name:"70K Ultimate 9700",  btu:70000,  specs:"97% AFUE - Two Stage - 14in Cabinet",  price:4510 },
  { model:"WUV070T4BA-N", name:"70K Wide Ultimate 9700",btu:70000,specs:"97% AFUE - Two Stage - 22.5in Cabinet",price:4800 },
  { model:"WUV090T5BA-N", name:"87.5K Ultimate 9700",btu:87500,  specs:"97% AFUE - Two Stage - Variable Speed", price:4870 },
  { model:"WUV105T5BA-N", name:"105K Ultimate 9700", btu:105000, specs:"97% AFUE - Two Stage - Variable Speed", price:5065 },
];

const FURNACES_9600 = [
  { model:"WPV035T2AA-N", name:"35K Premium 9600",  btu:35000, specs:"96% AFUE - Two Stage - Variable Speed", price:2770 },
  { model:"WPV050T3AA-N", name:"53K Premium 9600",  btu:53000, specs:"96% AFUE - Two Stage - Variable Speed", price:3040 },
  { model:"WPV070T3AA-N", name:"70K Premium 9600",  btu:70000, specs:"96% AFUE - Two Stage - 14in Cabinet",  price:3160 },
  { model:"WPV070T4BA-N", name:"70K Wide Premium 9600",btu:70000,specs:"96% AFUE - Two Stage - 22.5in Cabinet",price:3335 },
  { model:"WPV090T5BA-N", name:"88K Premium 9600",  btu:88000, specs:"96% AFUE - Two Stage - Variable Speed", price:3495 },
  { model:"WPV105T5BA-N", name:"105K Premium 9600", btu:105000,specs:"96% AFUE - Two Stage - Variable Speed", price:3585 },
  { model:"WPV120T5BA-N", name:"120K Premium 9600", btu:120000,specs:"96% AFUE - Two Stage - Variable Speed", price:3675 },
];

const FURNACES_9600Q = [
  { model:"WSX040T2AB-N", name:"40K Essential 9600Q", btu:40000, specs:"96% AFUE - Two Stage - Multi-Speed", price:2260 },
  { model:"WSX060T3AB-N", name:"60K Essential 9600Q", btu:60000, specs:"96% AFUE - Two Stage - Multi-Speed", price:2450 },
  { model:"WSX080T3AB-N", name:"80K Essential 9600Q", btu:80000, specs:"96% AFUE - Two Stage - Multi-Speed", price:2615 },
];

const FURNACES_9500 = [
  { model:"WPX030S2AA-N", name:"30K Essential 9500",  btu:30000, specs:"95% AFUE - Single Stage - Multi-Speed", price:2225 },
  { model:"WPX040S2AA-N", name:"40K Essential 9500",  btu:40000, specs:"95% AFUE - Single Stage - Multi-Speed", price:2295 },
  { model:"WPX060S3AA-N", name:"60K Essential 9500",  btu:60000, specs:"95% AFUE - Single Stage - Multi-Speed", price:2420 },
  { model:"WPX080S3AA-N", name:"80K Essential 9500",  btu:80000, specs:"95% AFUE - Single Stage - Multi-Speed", price:2515 },
  { model:"WPX100S5BA-N", name:"100K Essential 9500", btu:100000,specs:"95% AFUE - Single Stage - Multi-Speed", price:3000 },
];

const AC_143 = [
  { model:"WTBCS0018BA1-N", name:"1.5 Ton AC 14.3 SEER2", tonnage:1.5, specs:"R-454B - 18,900 BTU - Scroll Compressor", price:2595 },
  { model:"WTBCS0024BA1-N", name:"2 Ton AC 14.3 SEER2",  tonnage:2,   specs:"R-454B - 23,800 BTU - Scroll Compressor", price:2725 },
  { model:"WTBCS0030BA1-N", name:"2.5 Ton AC 14.3 SEER2",tonnage:2.5, specs:"R-454B - 29,200 BTU - Scroll Compressor", price:3080 },
  { model:"WTBCS0036BA1-N", name:"3 Ton AC 14.3 SEER2",  tonnage:3,   specs:"R-454B - 35,200 BTU - Scroll Compressor", price:3195 },
  { model:"WTBCS0042BA1-N", name:"3.5 Ton AC 14.3 SEER2",tonnage:3.5, specs:"R-454B - 41,000 BTU - Scroll Compressor", price:3720 },
  { model:"WTBCS0048BA1-N", name:"4 Ton AC 13.8 SEER2",  tonnage:4,   specs:"R-454B - 45,000 BTU - Scroll Compressor", price:3930 },
  { model:"WTBCS0060BA1-N", name:"5 Ton AC 13.8 SEER2",  tonnage:5,   specs:"R-454B - 56,000 BTU - Scroll Compressor", price:4515 },
];

const AC_134 = [
  { model:"WTACS0018BA1-N", name:"1.5 Ton AC 13.4 SEER2", tonnage:1.5, specs:"R-454B - 18,600 BTU - Scroll Compressor", price:2270 },
  { model:"WTACS0024BA1-N", name:"2 Ton AC 13.4 SEER2",  tonnage:2,   specs:"R-454B - 23,200 BTU - Scroll Compressor", price:2410 },
  { model:"WTACS0030BA1-N", name:"2.5 Ton AC 13.4 SEER2",tonnage:2.5, specs:"R-454B - 28,400 BTU - Scroll Compressor", price:2750 },
  { model:"WTACS0036BA1-N", name:"3 Ton AC 13.4 SEER2",  tonnage:3,   specs:"R-454B - 33,800 BTU - Scroll Compressor", price:2910 },
  { model:"WTACS0042BA1-N", name:"3.5 Ton AC 13.4 SEER2",tonnage:3.5, specs:"R-454B - 37,600 BTU - Scroll Compressor", price:3385 },
  { model:"WTACS0048BA1-N", name:"4 Ton AC 13.4 SEER2",  tonnage:4,   specs:"R-454B - 43,500 BTU - Scroll Compressor", price:3600 },
  { model:"WTACS0060BA1-N", name:"5 Ton AC 13.4 SEER2",  tonnage:5,   specs:"R-454B - 53,000 BTU - Scroll Compressor", price:4185 },
];

const HP_R454B = [
  { model:"WSEHV2436BA1-N", name:"2-3 Ton Cold Climate HP", tonnage:3, specs:"R-454B - 18-18.5 SEER2 - 10 HSPF2", price:4090 },
  { model:"WSEHV4860BA1-N", name:"4-5 Ton Cold Climate HP", tonnage:5, specs:"R-454B - 18.5-19 SEER2 - 9.5 HSPF2", price:5200 },
];

const HP_R410A = [
  { model:"WSEHV2436RA1-N", name:"2-3 Ton Cold Climate HP (R-410A)", tonnage:3, specs:"R-410A - 16-17 SEER2 - 9 HSPF2", price:null },
  { model:"WSEHV4860RA1-N", name:"4-5 Ton Cold Climate HP (R-410A)", tonnage:5, specs:"R-410A - 15.8-17 SEER2 - 9 HSPF2", price:null },
];

const AHU = [
  { model:"WPFX24A-N", name:"2 Ton EEV Air Handler", tonnage:2, specs:"Electronic Expansion Valve - 18 SEER", price:2835 },
  { model:"WPFX36A-N", name:"3 Ton EEV Air Handler", tonnage:3, specs:"Electronic Expansion Valve - 18 SEER", price:2970 },
  { model:"WPFX48A-N", name:"4 Ton EEV Air Handler", tonnage:4, specs:"Electronic Expansion Valve - 18 SEER", price:3555 },
  { model:"WPFX60A-N", name:"5 Ton EEV Air Handler", tonnage:5, specs:"Electronic Expansion Valve - 18 SEER", price:3715 },
];

const COILS_HP = [
  { model:"WPCC24ABA1-N", name:"2 Ton Cased Coil for Heat Pump", tonnage:2, specs:"Pairs with WSEHV2436BA1-N - 16 SEER2", price:1700 },
  { model:"WPCC36ABA1-N", name:"3 Ton Cased Coil for Heat Pump", tonnage:3, specs:"Pairs with WSEHV2436BA1-N - 16 SEER2", price:1750 },
  { model:"WPCC48ABA1-N", name:"4 Ton Cased Coil for Heat Pump", tonnage:4, specs:"Pairs with WSEHV4860BA1-N - 16 SEER2", price:2320 },
  { model:"WPCC60ABA1-N", name:"5 Ton Cased Coil for Heat Pump", tonnage:5, specs:"Pairs with WSEHV4860BA1-N - 16 SEER2", price:2370 },
];

const COILS_AC_134 = [
  { model:"CE24B3J-175L-000", name:"1.5 Ton Cased Evap Coil", tonnage:1.5, specs:"Pairs with WTACS0018BA1-N - 13.4 SEER2", price:1185 },
  { model:"CE24B3J-175L-000", name:"2 Ton Cased Evap Coil",   tonnage:2,   specs:"Pairs with WTACS0024BA1-N - 13.4 SEER2", price:1185 },
  { model:"CE36B3J-175L-000", name:"2.5 Ton Cased Evap Coil", tonnage:2.5, specs:"Pairs with WTACS0030BA1-N - 13.4 SEER2", price:1290 },
  { model:"CE36B3J-175L-000", name:"3 Ton Cased Evap Coil",   tonnage:3,   specs:"Pairs with WTACS0036BA1-N - 13.4 SEER2", price:1290 },
  { model:"CE42C3J-225L-000", name:"3.5 Ton Cased Evap Coil", tonnage:3.5, specs:"Pairs with WTACS0042BA1-N - 13.8 SEER2", price:1440 },
  { model:"CE48C3J-225L-000", name:"4 Ton Cased Evap Coil",   tonnage:4,   specs:"Pairs with WTACS0048BA1-N - 13.4 SEER2", price:1545 },
  { model:"DE61B4J-225L-000", name:"5 Ton Cased Evap Coil",   tonnage:5,   specs:"Pairs with WTACS0060BA1-N - 13.4 SEER2", price:1600 },
];

const COILS_AC_143 = [
  { model:"CE24B3J-175L-000", name:"1.5 Ton Cased Evap Coil", tonnage:1.5, specs:"Pairs with WTBCS0018BA1-N - 14.3 SEER2", price:1185 },
  { model:"CE24B3J-175L-000", name:"2 Ton Cased Evap Coil",   tonnage:2,   specs:"Pairs with WTBCS0024BA1-N - 14.3 SEER2", price:1185 },
  { model:"CE36B3J-175L-000", name:"2.5 Ton Cased Evap Coil", tonnage:2.5, specs:"Pairs with WTBCS0030BA1-N - 14.3 SEER2", price:1290 },
  { model:"CE36B3J-175L-000", name:"3 Ton Cased Evap Coil",   tonnage:3,   specs:"Pairs with WTBCS0036BA1-N - 14.3 SEER2", price:1290 },
  { model:"CE42C3J-225L-000", name:"3.5 Ton Cased Evap Coil", tonnage:3.5, specs:"Pairs with WTBCS0042BA1-N - 14.3 SEER2", price:1440 },
  { model:"DE61B4J-225L-000", name:"4 Ton Cased Evap Coil",   tonnage:4,   specs:"Pairs with WTBCS0048BA1-N - 13.8 SEER2", price:1600 },
  { model:"DE61B4J-225L-000", name:"5 Ton Cased Evap Coil",   tonnage:5,   specs:"Pairs with WTBCS0060BA1-N - 13.8 SEER2", price:1600 },
];

const A2L_SENSOR = { model:"A2L4SA", name:"A2L Leak Detection Sensor", specs:"Required with every ASPEN cased evap coil", price:310 };

const MS_HW_ULT = [
  { model:"NDHAS26BA-06", name:"6K Ultimate High Wall", specs:"25.5 SEER2 - 14.8 HSPF2 - Hyper Heat to -22F", price:2495 },
  { model:"NDHAS26BA-09", name:"9K Ultimate High Wall", specs:"27.4 SEER2 - 12.5 HSPF2 - Hyper Heat to -22F", price:2840 },
  { model:"NDHAS26BA-12", name:"12K Ultimate High Wall", specs:"25.4 SEER2 - 10.5 HSPF2 - Hyper Heat to -22F", price:2985 },
  { model:"NDHAS26BA-18", name:"18K Ultimate High Wall", specs:"21.4 SEER2 - 11 HSPF2 - Hyper Heat to -22F", price:3655 },
  { model:"NDHAS26BA-24", name:"24K Ultimate High Wall", specs:"21 SEER2 - 13 HSPF2 - Hyper Heat to -22F", price:5180 },
  { model:"NDHAS26BA-33", name:"33K Ultimate High Wall", specs:"19.5 SEER2 - 10.5 HSPF2 - Hyper Heat to -22F", price:5935 },
];

const MS_HW_PREM = [
  { model:"NDHAS22BA-12", name:"12K Premium High Wall", specs:"23.1 SEER2 - 11.5 HSPF2 - Operates to -13F", price:2495 },
  { model:"NDHAS22BA-18", name:"18K Premium High Wall", specs:"24 SEER2 - 11.1 HSPF2 - Operates to -13F", price:3235 },
  { model:"NDHAS22BA-24", name:"24K Premium High Wall", specs:"23.5 SEER2 - 10 HSPF2 - Operates to -13F", price:4270 },
];

const MS_OTHER = [
  { model:"NDHAS4CBB-12", name:"12K 4-Way Cassette Indoor", specs:"Pair with 9K/12K outdoor unit", price:900 },
  { model:"NDHAS4CBB-18", name:"18K 4-Way Cassette Indoor", specs:"Pair with 18K outdoor unit", price:1000 },
  { model:"NDHASCBB-09", name:"9K Floor Console Indoor", specs:"Floor or wall mounted", price:930 },
  { model:"NDHASCBB-12", name:"12K Floor Console Indoor", specs:"Floor or wall mounted", price:980 },
  { model:"NDHASCBB-18", name:"18K Floor Console Indoor", specs:"Floor or wall mounted", price:1030 },
  { model:"NDHASHDBB-09", name:"9K High Static Slim Duct", specs:"Built-in drain pump", price:1135 },
  { model:"NDHASHDBB-12", name:"12K High Static Slim Duct", specs:"Built-in drain pump", price:1290 },
  { model:"NDHASHDBB-18", name:"18K High Static Slim Duct", specs:"Built-in drain pump", price:1440 },
  { model:"NDHASHDBB-24", name:"24K High Static Slim Duct", specs:"Built-in drain pump", price:1600 },
  { model:"NDHAMBB-18-O", name:"Multi Zone Outdoor 18K", specs:"Supports 3 indoor units - 25 SEER2", price:3300 },
  { model:"NDHAMBB-27-O", name:"Multi Zone Outdoor 27K", specs:"Supports 4 indoor units - 23 SEER2", price:4065 },
  { model:"NDHAMBB-36-O", name:"Multi Zone Outdoor 36K", specs:"Supports 5 indoor units - 23 SEER2", price:5600 },
  { model:"NDHAMBB-48-O", name:"Multi Zone Outdoor 48K", specs:"Supports 6 indoor units - 23 SEER2 - Dual fan", price:6080 },
];

const TSTAT = [
  { model:"WSC43BB-KT", name:"EQ Hub Smart Thermostat", specs:"Hybrid heating control, no subscription", price:390 },
  { model:"NT151HCPV", name:"Essential Programmable Thermostat", specs:"1H/1C 5/2 day vertical", price:105 },
];

const UVC = [
  { model:"UVHFS120WB", name:"UV Mod & Lance Hi Output", specs:"120W with Ballast - Medical Grade", price:1115 },
  { model:"UVHMS120WB", name:"UV Module Hi Output", specs:"120W with Ballast - Medical Grade", price:855 },
  { model:"UVLFS036WB", name:"UV Lance Hi Output Standard", specs:"60W without Ballast", price:705 },
  { model:"UVLMS036WB", name:"UV Module Low Output", specs:"36W with Ballast - Standard Grade", price:650 },
  { model:"W010-2785", name:"UV-C Technology Furnace Kit", specs:"Standard Grade for 9600/9500 furnaces", price:345 },
  { model:"UVB18", name:"18W UV-C Replacement Lamp", specs:"For Standard Grade kits", price:90 },
];

const CP_GAS = [
  { model:"P-C15A1-B12A-A", name:"15K BTU Condo Pack Gas", specs:"96.8% AFUE - 12,300 BTU Cooling", price:7605 },
  { model:"P-C30A1-B12A-A", name:"30K BTU Condo Pack Gas", specs:"93% AFUE - 12,300 BTU Cooling", price:7690 },
  { model:"P-C30A1-B18A-A", name:"30K BTU Condo Pack Gas", specs:"93% AFUE - 16,900 BTU Cooling", price:7780 },
  { model:"P-C30A1-B24A-A", name:"30K BTU Condo Pack Gas", specs:"93% AFUE - 21,200 BTU Cooling", price:7865 },
  { model:"P-C40A1-B18A-A", name:"40K BTU Condo Pack Gas", specs:"91.7% AFUE - 17,000 BTU Cooling", price:7865 },
  { model:"P-C40A1-B24A-A", name:"40K BTU Condo Pack Gas", specs:"91.7% AFUE - 21,200 BTU Cooling", price:7950 },
  { model:"P-C40A2-B30A-A", name:"40K BTU Condo Pack Gas", specs:"91.7% AFUE - 26,400 BTU Cooling", price:8190 },
  { model:"P-C50A1-B18A-A", name:"50K BTU Condo Pack Gas", specs:"90.6% AFUE - 17,000 BTU Cooling", price:7950 },
  { model:"P-C50A1-B24A-A", name:"50K BTU Condo Pack Gas", specs:"90.6% AFUE - 21,200 BTU Cooling", price:8035 },
  { model:"P-C50A2-B30A-A", name:"50K BTU Condo Pack Gas", specs:"90.6% AFUE - 26,400 BTU Cooling", price:8240 },
];

const CP_ELEC = [
  { model:"P-E05B1-B12A-A", name:"5kW Condo Pack Electric", specs:"4.8/3.6 kW Heat - 12,300 BTU Cooling", price:7095 },
  { model:"P-E05B1-B18A-A", name:"5kW Condo Pack Electric", specs:"4.8/3.6 kW Heat - 17,000 BTU Cooling", price:7180 },
  { model:"P-E07B1-B12A-A", name:"7.5kW Condo Pack Electric", specs:"7.3/5.5 kW Heat - 12,300 BTU Cooling", price:7265 },
  { model:"P-E07B1-B18A-A", name:"7.5kW Condo Pack Electric", specs:"7.3/5.5 kW Heat - 17,000 BTU Cooling", price:7350 },
  { model:"P-E07B1-B24A-A", name:"7.5kW Condo Pack Electric", specs:"7.3/5.5 kW Heat - 21,200 BTU Cooling", price:7435 },
  { model:"P-E10B1-B18A-A", name:"10kW Condo Pack Electric", specs:"9.6/7.2 kW Heat - 17,000 BTU Cooling", price:7435 },
  { model:"P-E10B1-B24A-A", name:"10kW Condo Pack Electric", specs:"9.6/7.2 kW Heat - 21,200 BTU Cooling", price:7520 },
  { model:"P-E10B2-B30A-A", name:"10kW Condo Pack Electric", specs:"9.6/7.2 kW Heat - 26,400 BTU Cooling", price:7725 },
  { model:"P-E15B1-B24A-A", name:"15kW Condo Pack Electric", specs:"14.4/10.8 kW Heat - 21,200 BTU Cooling", price:7605 },
  { model:"P-E15B2-B30A-A", name:"15kW Condo Pack Electric", specs:"14.4/10.8 kW Heat - 26,400 BTU Cooling", price:7930 },
];

const CP_MID = [
  { model:"P-S26A1-B12A-A", name:"26K BTU Mid-Eff Gas", specs:"80% AFUE - 12,300 BTU Cooling", price:6925 },
  { model:"P-S26A1-B18A-A", name:"26K BTU Mid-Eff Gas", specs:"80% AFUE - 17,000 BTU Cooling", price:7010 },
  { model:"P-S38A1-B12A-A", name:"38K BTU Mid-Eff Gas", specs:"80% AFUE - 12,300 BTU Cooling", price:6925 },
  { model:"P-S38A1-B18A-A", name:"38K BTU Mid-Eff Gas", specs:"80% AFUE - 17,000 BTU Cooling", price:7010 },
  { model:"P-S38A1-B24A-A", name:"38K BTU Mid-Eff Gas", specs:"80% AFUE - 21,200 BTU Cooling", price:7090 },
  { model:"P-S51A1-B18A-A", name:"51K BTU Mid-Eff Gas", specs:"80% AFUE - 17,000 BTU Cooling", price:7090 },
  { model:"P-S51A1-B24A-A", name:"51K BTU Mid-Eff Gas", specs:"80% AFUE - 21,200 BTU Cooling", price:7180 },
  { model:"P-S51A2-B30A-A", name:"51K BTU Mid-Eff Gas", specs:"80% AFUE - 26,400 BTU Cooling", price:7625 },
  { model:"P-S64A1-B18A-A", name:"64K BTU Mid-Eff Gas", specs:"80% AFUE - 17,000 BTU Cooling", price:7350 },
  { model:"P-S64A1-B24A-A", name:"64K BTU Mid-Eff Gas", specs:"80% AFUE - 21,200 BTU Cooling", price:7520 },
  { model:"P-S64A2-B30A-A", name:"64K BTU Mid-Eff Gas", specs:"80% AFUE - 26,400 BTU Cooling", price:7725 },
];

// Render a product list into a grid. Live inventory check happens per-card.
function renderGrid(gridId, list, eyebrow) {
  const el = document.getElementById(gridId);
  if (!el) return;
  el.innerHTML = list.map(p => {
    const liveUrl = stwLink(p.model);
    const inStock = liveUrl !== null;
    const qty = (typeof window !== "undefined" && window.stockQty) ? window.stockQty(p.model) : 0;
    const url = inStock ? liveUrl : "#";
    const price = p.price ? "$" + p.price.toLocaleString() : "-";
    const cls = inStock ? "" : "out-of-stock";
    const btnText = inStock ? "View on STW" : "Out of Stock";
    const stockBadge = inStock && qty > 0 ? '<div class="sku-stock">' + qty + ' in stock</div>' : "";
    return (
      '<article class="sku-card ' + cls + '">' +
        '<div class="sku-tag">' + (eyebrow || "Napoleon") + '</div>' +
        '<h4>' + p.name + '</h4>' +
        '<div class="sku-model">' + p.model + '</div>' +
        '<div class="sku-specs">' + p.specs + '</div>' +
        '<div class="sku-price">' + price + '</div>' +
        stockBadge +
        '<a class="sku-btn" href="' + url + '" ' + (inStock ? 'target="_blank" rel="noopener"' : '') + '>' + btnText + '</a>' +
      '</article>'
    );
  }).join("");
}

// Expose the catalog for the quote tool
const _CATALOG = {
  FURNACES_9700, FURNACES_9600, FURNACES_9600Q, FURNACES_9500,
  AC_143, AC_134, HP_R454B, HP_R410A, AHU, COILS_HP,
  COILS_AC_134, COILS_AC_143, A2L_SENSOR,
  MS_HW_ULT, MS_HW_PREM, MS_OTHER,
  TSTAT, UVC, CP_GAS, CP_ELEC, CP_MID,
  stwLink
};
if (typeof window !== "undefined") window.NAPOLEON_HVAC = _CATALOG;
if (typeof module !== "undefined" && module.exports) module.exports = _CATALOG;

if (typeof document !== "undefined" && document.addEventListener) {
  document.addEventListener("DOMContentLoaded", () => {
    renderGrid("grid-9700",      FURNACES_9700,  "Ultimate 9700");
    renderGrid("grid-9600",      FURNACES_9600,  "Premium 9600");
    renderGrid("grid-9600q",     FURNACES_9600Q, "Essential 9600Q");
    renderGrid("grid-9500",      FURNACES_9500,  "Essential 9500");
    renderGrid("grid-ac143",     AC_143,         "14.3 SEER2");
    renderGrid("grid-ac134",     AC_134,         "13.4 SEER2");
    renderGrid("grid-hp-r454b",  HP_R454B,       "Ultimate HP");
    renderGrid("grid-hp-r410a",  HP_R410A,       "Premium HP");
    renderGrid("grid-ahu",       AHU,            "Air Handler");
    renderGrid("grid-coils-hp",  COILS_HP,       "Heat Pump Coil");
    renderGrid("grid-ms-hw-ult", MS_HW_ULT,      "Ultimate Mini-Split");
    renderGrid("grid-ms-hw-prem",MS_HW_PREM,     "Premium Mini-Split");
    renderGrid("grid-ms-other",  MS_OTHER,       "Mini-Split");
    renderGrid("grid-tstat",     TSTAT,          "Smart Control");
    renderGrid("grid-uvc",       UVC,            "UV-C Tech");
    renderGrid("grid-cp-gas",    CP_GAS,         "Condo Pack Gas");
    renderGrid("grid-cp-elec",   CP_ELEC,        "Condo Pack Electric");
    renderGrid("grid-cp-mid",    CP_MID,         "Mid-Eff Condo Pack");
  });
}
   