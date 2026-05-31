/* Napoleon HVAC Product Specs
   ----------------------------------------------------------------
   Per-SKU dimensions, weight, SEER2, AHRI ratings, etc.
   Pulled from the Napoleon HVAC Product Reference Book (Sep 2025 rev).
   Used by the Quote Tool to populate line-item detail on both
   the customer printout and the internal printout.
*/

// dims = "H x W x D in." | weight = lbs
const HVAC_SPECS = {
  // FURNACES - Ultimate 9700 Two Stage
  "WUV035T2AA-N": { dims:"34 x 17.5 x 31",     weight:137, afue:97, btu:35000  },
  "WUV050T3AA-N": { dims:"34 x 17.5 x 31",     weight:142, afue:97, btu:52500  },
  "WUV070T3AA-N": { dims:"34 x 17.5 x 31",     weight:149, afue:97, btu:70000  },
  "WUV070T4BA-N": { dims:"34 x 22.5 x 31",     weight:169, afue:97, btu:70000  },
  "WUV090T5BA-N": { dims:"34 x 22.5 x 31",     weight:174, afue:97, btu:87500  },
  "WUV105T5BA-N": { dims:"34 x 22.5 x 31",     weight:187, afue:97, btu:105000 },

  // FURNACES - Premium 9600 Two Stage
  "WPV035T2AA-N": { dims:"34 x 17.5 x 29.5",   weight:126, afue:96, btu:35000  },
  "WPV050T3AA-N": { dims:"34 x 17.5 x 29.5",   weight:133, afue:96, btu:53000  },
  "WPV070T3AA-N": { dims:"34 x 17.5 x 29.5",   weight:140, afue:96, btu:70000  },
  "WPV070T4BA-N": { dims:"34 x 22.5 x 29.5",   weight:158, afue:96, btu:70000  },
  "WPV090T5BA-N": { dims:"34 x 22.5 x 29.5",   weight:166, afue:96, btu:88000  },
  "WPV105T5BA-N": { dims:"34 x 22.5 x 29.5",   weight:170, afue:96, btu:105000 },
  "WPV120T5BA-N": { dims:"34 x 22.5 x 29.5",   weight:170, afue:96, btu:120000 },

  // FURNACES - Essential 9600Q Two Stage
  "WSX040T2AB-N": { dims:"34 x 17.5 x 29.5",   weight:127, afue:96, btu:40000  },
  "WSX060T3AB-N": { dims:"34 x 17.5 x 29.5",   weight:131, afue:96, btu:60000  },
  "WSX080T3AB-N": { dims:"34 x 17.5 x 29.5",   weight:141, afue:96, btu:80000  },

  // FURNACES - Essential 9500 Single Stage
  "WPX030S2AA-N": { dims:"34 x 17.5 x 29.5",   weight:121, afue:95, btu:30000  },
  "WPX040S2AA-N": { dims:"34 x 17.5 x 29.5",   weight:120, afue:95, btu:40000  },
  "WPX060S3AA-N": { dims:"34 x 17.5 x 29.5",   weight:128, afue:95, btu:60000  },
  "WPX080S3AA-N": { dims:"34 x 17.5 x 29.5",   weight:134, afue:95, btu:80000  },
  "WPX100S5BA-N": { dims:"34 x 22.5 x 29.5",   weight:163, afue:95, btu:100000 },

  // 13.4 SEER2 AC
  "WTACS0018BA1-N": { dims:"27 x 24 x 24",         weight:150, seer2:13.4, tons:1.5 },
  "WTACS0024BA1-N": { dims:"27 x 24 x 24",         weight:150, seer2:13.4, tons:2.0 },
  "WTACS0030BA1-N": { dims:"27 x 29.5 x 29.5",     weight:180, seer2:13.4, tons:2.5 },
  "WTACS0036BA1-N": { dims:"27 x 29.5 x 29.5",     weight:180, seer2:13.4, tons:3.0 },
  "WTACS0042BA1-N": { dims:"38.875 x 29.5 x 29.5", weight:180, seer2:13.4, tons:3.5 },
  "WTACS0048BA1-N": { dims:"38.875 x 29.5 x 29.5", weight:230, seer2:13.4, tons:4.0 },
  "WTACS0060BA1-N": { dims:"47.875 x 29.5 x 29.5", weight:250, seer2:13.4, tons:5.0 },

  // 14.3 SEER2 AC
  "WTBCS0018BA1-N": { dims:"27 x 29.5 x 29.5",     weight:180, seer2:14.3, tons:1.5 },
  "WTBCS0024BA1-N": { dims:"27 x 29.5 x 29.5",     weight:180, seer2:14.3, tons:2.0 },
  "WTBCS0030BA1-N": { dims:"27 x 29.5 x 29.5",     weight:180, seer2:14.3, tons:2.5 },
  "WTBCS0036BA1-N": { dims:"38.875 x 29.5 x 29.5", weight:230, seer2:14.3, tons:3.0 },
  "WTBCS0042BA1-N": { dims:"38.875 x 29.5 x 29.5", weight:230, seer2:14.3, tons:3.5 },
  "WTBCS0048BA1-N": { dims:"47.875 x 29.5 x 29.5", weight:250, seer2:13.8, tons:4.0 },
  "WTBCS0060BA1-N": { dims:"47.875 x 29.5 x 29.5", weight:250, seer2:13.8, tons:5.0 },

  // HEAT PUMPS
  "WSEHV2436BA1-N": { dims:"37.8 x 39 x 14.6",       weight:187.4, seer2:18.5, hspf2:10,  tons:"2-3" },
  "WSEHV4860BA1-N": { dims:"49.61 x 35.43 x 13.39",  weight:241.4, seer2:19,   hspf2:9.5, tons:"4-5" },

  // AIR HANDLERS (EEV)
  "WPFX24A-N": { dims:"43.5 x 18.11 x 21.26", weight:135.6, seer2:18, tons:2 },
  "WPFX36A-N": { dims:"48.19 x 21.26 x 21.26", weight:163.1, seer2:18, tons:3 },
  "WPFX48A-N": { dims:"52 x 24.8 x 21.26",   weight:199.5, seer2:18, tons:4 },
  "WPFX60A-N": { dims:"52 x 24.8 x 21.26",   weight:199.5, seer2:18, tons:5 },

  // HEAT PUMP CASED COILS
  "WPCC24ABA1-N": { dims:"23 x 17.5 x 21.25",   weight:75,  seer2:16, tons:2 },
  "WPCC36ABA1-N": { dims:"23 x 17.5 x 21.25",   weight:75,  seer2:16, tons:3 },
  "WPCC48ABA1-N": { dims:"28.5 x 24.5 x 21.25", weight:110, seer2:16, tons:4 },
  "WPCC60ABA1-N": { dims:"28.5 x 24.5 x 21.25", weight:110, seer2:16, tons:5 },

  // AC CASED COILS (ASPEN)
  "CE24B3J-175L-000": { dims:"19 x 17.5 x 21.5", weight:46, tons:"1.5-2" },
  "CE36B3J-175L-000": { dims:"23 x 17.5 x 21.5", weight:50, tons:"2.5-3" },
  "CE36B3J-225L-000": { dims:"23 x 22.5 x 21.5", weight:50, tons:3 },
  "CE42C3J-225L-000": { dims:"27 x 22.5 x 21.5", weight:60, tons:3.5 },
  "CE48C3J-225L-000": { dims:"30 x 22.5 x 21.5", weight:65, tons:"3-4" },
  "DE61B4J-225L-000": { dims:"30 x 22.5 x 21.5", weight:77, tons:5 },

  // THERMOSTATS
  "WSC43BB-KT": { dims:"4.3 x 4.3 x 1",   weight:1.45 },
  "NT151HCPV":  { dims:"5 x 3 x 1",       weight:1 },

  // HEAT KITS (accessories)
  "WHS8KW":     { dims:"compact",  weight:5, kw:8 },
  "WHS10KW":    { dims:"compact",  weight:5, kw:10 },
  "WHS15KW":    { dims:"compact",  weight:6, kw:15 },
  "WHS20KW-KT": { dims:"compact",  weight:6, kw:20 },

  // OTHER ACCESSORIES (in stock)
  "A2L4SA":     { dims:"sensor",   weight:0.5 },
  "W370-0018":  { dims:"kit",      weight:2 },
  "W370-0258":  { dims:"kit",      weight:2 },

  // WINTER AC COVERS (special order)
  "NCR-2927":   { dims:"27 x 29", weight:2.1, fits:"AC up to 3 ton (29.5\" wide)" },
  "NCR-2939":   { dims:"39 x 29", weight:2.7, fits:"3.5-4 ton AC (29.5\" wide)" },
  "NCR-2948":   { dims:"48 x 29", weight:3.3, fits:"5 ton AC (29.5\" wide)" },
};

// AHRI lookups exposed so quote tool can pull them per system
// (Same data as quote-tool.js but separated here for the catalog page)
const AHRI_REFERENCE = {
  // Heat pump + cased coil
  "WSEHV2436BA1-N|WPCC24ABA1-N":"217463583",
  "WSEHV2436BA1-N|WPCC36ABA1-N":"217463581",
  "WSEHV4860BA1-N|WPCC48ABA1-N":"217463584",
  "WSEHV4860BA1-N|WPCC60ABA1-N":"217463582",
  // Heat pump + air handler
  "WSEHV2436BA1-N|WPFX24A-N":"216626012",
  "WSEHV2436BA1-N|WPFX36A-N":"216025738",
  "WSEHV4860BA1-N|WPFX48A-N":"216626013",
  "WSEHV4860BA1-N|WPFX60A-N":"216025739",
  // 13.4 AC + coil
  "WTACS0018BA1-N|CE24B3J-175L-000":"216778918",
  "WTACS0024BA1-N|CE24B3J-175L-000":"216778919",
  "WTACS0030BA1-N|CE36B3J-175L-000":"216778920",
  "WTACS0036BA1-N|CE36B3J-175L-000":"216778921",
  "WTACS0042BA1-N|CE42C3J-225L-000":"216778926",
  "WTACS0048BA1-N|CE48C3J-225L-000":"216778930",
  "WTACS0060BA1-N|DE61B4J-225L-000":"217598686",
  // 14.3 AC + coil
  "WTBCS0018BA1-N|CE24B3J-175L-000":"216778935",
  "WTBCS0024BA1-N|CE24B3J-175L-000":"216778936",
  "WTBCS0030BA1-N|CE36B3J-175L-000":"216778937",
  "WTBCS0036BA1-N|CE36B3J-175L-000":"216778938",
  "WTBCS0042BA1-N|CE42C3J-225L-000":"216778942",
  "WTBCS0048BA1-N|DE61B4J-225L-000":"217619763",
  "WTBCS0060BA1-N|DE61B4J-225L-000":"217598687",
};

function getSpec(model) {
  return HVAC_SPECS[(model || "").toUpperCase()] || null;
}

function dimsLine(model) {
  const s = getSpec(model);
  if (!s) return "";
  let parts = [];
  if (s.dims && s.dims !== "compact" && s.dims !== "sensor" && s.dims !== "kit") parts.push(s.dims + " in.");
  if (s.weight) parts.push(s.weight + " lbs");
  if (s.seer2)  parts.push(s.seer2 + " SEER2");
  if (s.hspf2)  parts.push(s.hspf2 + " HSPF2");
  if (s.afue)   parts.push(s.afue + "% AFUE");
  if (s.btu)    parts.push(s.btu.toLocaleString() + " BTU/h");
  if (s.kw)     parts.push(s.kw + " kW");
  return parts.join(" · ");
}

if (typeof window !== "undefined") {
  window.HVAC_SPECS     = HVAC_SPECS;
  window.AHRI_REFERENCE = AHRI_REFERENCE;
  window.getSpec        = getSpec;
  window.dimsLine       = dimsLine;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { HVAC_SPECS, AHRI_REFERENCE, getSpec, dimsLine };
}
