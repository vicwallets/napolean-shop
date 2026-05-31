/* Napoleon HVAC System Quote Tool
   Inputs:  ZIP, sqft, customer info, markup, discount
   Output:  4 matched system proposals with cost/retail math + printable quote
   ---
   Four system types:
     1. Heat Pump + Air Handler (optional electric heat kit)
     2. Heat Pump + Furnace (dual fuel hybrid)
     3. AC Condenser + Furnace + Coil
     4. AC + Coil only
   ---
   Pricing: retail = cost * (1 + markup); customer = retail * (1 - discount)
*/

const ZIP3_TO_ZONE = {
  "010":[5,"N"],"011":[5,"N"],"012":[5,"N"],"013":[5,"N"],"014":[5,"N"],"015":[5,"N"],"016":[5,"N"],"017":[5,"N"],"018":[5,"N"],"019":[5,"N"],
  "020":[5,"N"],"021":[5,"N"],"022":[5,"N"],"023":[5,"N"],"024":[5,"N"],"025":[5,"N"],"026":[5,"N"],"027":[5,"N"],"028":[5,"N"],"029":[5,"N"],
  "030":[6,"N"],"031":[6,"N"],"032":[6,"N"],"033":[6,"N"],"034":[5,"N"],"035":[5,"N"],"036":[5,"N"],"037":[5,"N"],"038":[5,"N"],"039":[6,"N"],
  "040":[6,"N"],"041":[6,"N"],"042":[6,"N"],"043":[6,"N"],"044":[6,"N"],"045":[6,"N"],"046":[6,"N"],"047":[7,"N"],"048":[6,"N"],"049":[6,"N"],
  "050":[6,"N"],"051":[6,"N"],"052":[6,"N"],"053":[6,"N"],"054":[6,"N"],"055":[5,"N"],"056":[6,"N"],"057":[6,"N"],"058":[6,"N"],"059":[6,"N"],
  "070":[4,"N"],"071":[4,"N"],"072":[4,"N"],"073":[4,"N"],"074":[4,"N"],"075":[4,"N"],"076":[4,"N"],"077":[4,"N"],"078":[4,"N"],"079":[4,"N"],
  "080":[4,"N"],"081":[4,"N"],"082":[4,"N"],"083":[4,"N"],"084":[4,"N"],"085":[5,"N"],"086":[5,"N"],"087":[5,"N"],"088":[4,"N"],"089":[4,"N"],
  "100":[4,"N"],"101":[4,"N"],"102":[4,"N"],"103":[4,"N"],"104":[4,"N"],"105":[4,"N"],"106":[4,"N"],"107":[4,"N"],"108":[4,"N"],"109":[4,"N"],
  "110":[4,"N"],"111":[4,"N"],"112":[4,"N"],"113":[4,"N"],"114":[4,"N"],"115":[4,"N"],"116":[4,"N"],"117":[4,"N"],"118":[4,"N"],"119":[4,"N"],
  "120":[5,"N"],"121":[5,"N"],"122":[5,"N"],"123":[5,"N"],"124":[5,"N"],"125":[5,"N"],"126":[5,"N"],"127":[5,"N"],"128":[6,"N"],"129":[6,"N"],
  "130":[5,"N"],"131":[5,"N"],"132":[5,"N"],"133":[5,"N"],"134":[5,"N"],"135":[5,"N"],"136":[6,"N"],"137":[5,"N"],"138":[5,"N"],"139":[5,"N"],
  "140":[5,"N"],"141":[5,"N"],"142":[5,"N"],"143":[5,"N"],"144":[5,"N"],"145":[5,"N"],"146":[5,"N"],"147":[5,"N"],"148":[5,"N"],"149":[5,"N"],
  "150":[5,"N"],"151":[5,"N"],"152":[5,"N"],"153":[5,"N"],"154":[5,"N"],"155":[5,"N"],"156":[5,"N"],"157":[5,"N"],"158":[5,"N"],"159":[5,"N"],
  "160":[5,"N"],"161":[5,"N"],"162":[5,"N"],"163":[5,"N"],"164":[5,"N"],"165":[5,"N"],"166":[5,"N"],"167":[5,"N"],"168":[5,"N"],"169":[5,"N"],
  "170":[4,"N"],"171":[4,"N"],"172":[4,"N"],"173":[4,"N"],"174":[4,"N"],"175":[4,"N"],"176":[4,"N"],"177":[4,"N"],"178":[4,"N"],"179":[4,"N"],
  "180":[5,"N"],"181":[5,"N"],"182":[5,"N"],"183":[5,"N"],"184":[5,"N"],"185":[5,"N"],"186":[5,"N"],"187":[5,"N"],"188":[5,"N"],"189":[5,"N"],
  "190":[4,"N"],"191":[4,"N"],"192":[4,"N"],"193":[4,"N"],"194":[4,"N"],"195":[4,"N"],"196":[4,"N"],"197":[4,"N"],"198":[4,"N"],"199":[4,"N"],
  "200":[4,"SE"],"201":[4,"SE"],"202":[4,"SE"],"203":[4,"SE"],"204":[4,"SE"],"205":[4,"SE"],"206":[4,"SE"],"207":[4,"SE"],"208":[4,"SE"],"209":[4,"SE"],
  "210":[4,"SE"],"211":[4,"SE"],"212":[4,"SE"],"214":[4,"SE"],"215":[4,"SE"],"216":[4,"SE"],"217":[4,"SE"],"218":[4,"SE"],"219":[4,"SE"],
  "220":[4,"SE"],"221":[4,"SE"],"222":[4,"SE"],"223":[4,"SE"],"224":[4,"SE"],"225":[4,"SE"],"226":[4,"SE"],"227":[4,"SE"],"228":[4,"SE"],"229":[4,"SE"],
  "230":[4,"SE"],"231":[4,"SE"],"232":[4,"SE"],"233":[4,"SE"],"234":[4,"SE"],"235":[3,"SE"],"236":[3,"SE"],"237":[4,"SE"],"238":[4,"SE"],"239":[4,"SE"],
  "240":[4,"SE"],"241":[4,"SE"],"242":[4,"SE"],"243":[4,"SE"],"244":[4,"SE"],"245":[4,"SE"],"246":[4,"SE"],
  "247":[5,"N"],"248":[5,"N"],"249":[5,"N"],"250":[5,"N"],"251":[5,"N"],"252":[5,"N"],"253":[5,"N"],"254":[4,"N"],"255":[4,"N"],"256":[4,"N"],
  "257":[4,"N"],"258":[4,"N"],"259":[4,"N"],"260":[5,"N"],"261":[5,"N"],"262":[5,"N"],"263":[5,"N"],"264":[5,"N"],"265":[5,"N"],"266":[5,"N"],
  "267":[5,"N"],"268":[5,"N"],
  "270":[4,"SE"],"271":[4,"SE"],"272":[4,"SE"],"273":[4,"SE"],"274":[4,"SE"],"275":[3,"SE"],"276":[3,"SE"],"277":[4,"SE"],"278":[3,"SE"],"279":[3,"SE"],
  "280":[3,"SE"],"281":[3,"SE"],"282":[3,"SE"],"283":[3,"SE"],"284":[3,"SE"],"285":[4,"SE"],"286":[4,"SE"],"287":[4,"SE"],"288":[4,"SE"],"289":[4,"SE"],
  "290":[3,"SE"],"291":[3,"SE"],"292":[3,"SE"],"293":[3,"SE"],"294":[3,"SE"],"295":[3,"SE"],"296":[3,"SE"],"297":[3,"SE"],"298":[3,"SE"],"299":[3,"SE"],
  "300":[3,"SE"],"301":[3,"SE"],"302":[3,"SE"],"303":[3,"SE"],"304":[3,"SE"],"305":[3,"SE"],"306":[3,"SE"],"307":[3,"SE"],"308":[3,"SE"],"309":[3,"SE"],
  "310":[3,"SE"],"311":[2,"SE"],"312":[3,"SE"],"313":[2,"SE"],"314":[2,"SE"],"315":[2,"SE"],"316":[2,"SE"],"317":[2,"SE"],"318":[2,"SE"],"319":[2,"SE"],
  "320":[2,"SE"],"321":[2,"SE"],"322":[2,"SE"],"323":[2,"SE"],"324":[2,"SE"],"325":[2,"SE"],"326":[2,"SE"],"327":[2,"SE"],"328":[2,"SE"],"329":[2,"SE"],
  "330":[1,"SE"],"331":[1,"SE"],"332":[1,"SE"],"333":[1,"SE"],"334":[1,"SE"],"335":[2,"SE"],"336":[2,"SE"],"337":[2,"SE"],"338":[2,"SE"],"339":[1,"SE"],
  "342":[2,"SE"],"344":[2,"SE"],"346":[2,"SE"],"347":[2,"SE"],"349":[1,"SE"],
  "350":[3,"SE"],"351":[3,"SE"],"352":[3,"SE"],"353":[3,"SE"],"354":[3,"SE"],"355":[3,"SE"],"356":[3,"SE"],"357":[3,"SE"],"358":[3,"SE"],"359":[3,"SE"],
  "360":[3,"SE"],"361":[3,"SE"],"362":[3,"SE"],"363":[3,"SE"],"364":[3,"SE"],"365":[3,"SE"],"366":[2,"SE"],"367":[3,"SE"],"368":[3,"SE"],"369":[3,"SE"],
  "370":[4,"SE"],"371":[4,"SE"],"372":[4,"SE"],"373":[4,"SE"],"374":[4,"SE"],"375":[4,"SE"],"376":[4,"SE"],"377":[4,"SE"],"378":[4,"SE"],"379":[4,"SE"],
  "380":[3,"SE"],"381":[3,"SE"],"382":[3,"SE"],"383":[3,"SE"],"384":[3,"SE"],"385":[3,"SE"],
  "386":[3,"SE"],"387":[3,"SE"],"388":[3,"SE"],"389":[3,"SE"],
  "390":[3,"SE"],"391":[3,"SE"],"392":[3,"SE"],"393":[3,"SE"],"394":[2,"SE"],"395":[2,"SE"],"396":[3,"SE"],"397":[3,"SE"],
  "400":[4,"N"],"401":[4,"N"],"402":[4,"N"],"403":[4,"N"],"404":[4,"N"],"405":[4,"N"],"406":[4,"N"],"407":[4,"N"],"408":[4,"N"],"409":[4,"N"],
  "410":[4,"N"],"411":[4,"N"],"412":[4,"N"],"413":[4,"N"],"414":[4,"N"],"415":[4,"N"],"416":[4,"N"],"417":[4,"N"],"418":[4,"N"],
  "420":[4,"N"],"421":[4,"N"],"422":[4,"N"],"423":[4,"N"],"424":[4,"N"],"425":[4,"N"],"426":[4,"N"],"427":[4,"N"],
  "430":[5,"N"],"431":[5,"N"],"432":[5,"N"],"433":[5,"N"],"434":[5,"N"],"435":[5,"N"],"436":[5,"N"],"437":[5,"N"],"438":[5,"N"],"439":[5,"N"],
  "440":[5,"N"],"441":[5,"N"],"442":[5,"N"],"443":[5,"N"],"444":[5,"N"],"445":[5,"N"],"446":[5,"N"],"447":[5,"N"],"448":[5,"N"],"449":[5,"N"],
  "450":[5,"N"],"451":[5,"N"],"452":[5,"N"],"453":[5,"N"],"454":[5,"N"],"455":[5,"N"],"456":[5,"N"],"457":[5,"N"],"458":[5,"N"],
  "700":[2,"SE"],"701":[2,"SE"],"703":[2,"SE"],"704":[2,"SE"],"705":[2,"SE"],"706":[2,"SE"],"707":[2,"SE"],"708":[2,"SE"],
  "710":[2,"SE"],"711":[2,"SE"],"712":[3,"SE"],"713":[2,"SE"],"714":[2,"SE"],
  "716":[3,"SE"],"717":[3,"SE"],"718":[3,"SE"],"719":[3,"SE"],"720":[3,"SE"],"721":[3,"SE"],"722":[3,"SE"],"723":[3,"SE"],"724":[3,"SE"],"725":[3,"SE"],
  "726":[3,"SE"],"727":[3,"SE"],"728":[3,"SE"],"729":[3,"SE"],
  "730":[3,"SW"],"731":[3,"SW"],"734":[3,"SW"],"735":[3,"SW"],"736":[3,"SW"],"737":[3,"SW"],"738":[3,"SW"],"739":[4,"SW"],
  "740":[3,"SW"],"741":[3,"SW"],"743":[3,"SW"],"744":[3,"SW"],"745":[3,"SW"],"746":[3,"SW"],"747":[3,"SW"],"748":[3,"SW"],"749":[3,"SW"],
  "750":[3,"SW"],"751":[3,"SW"],"752":[3,"SW"],"753":[3,"SW"],"754":[3,"SW"],"755":[3,"SW"],"756":[3,"SW"],"757":[3,"SW"],"758":[3,"SW"],"759":[2,"SW"],
  "760":[3,"SW"],"761":[3,"SW"],"762":[3,"SW"],"763":[3,"SW"],"764":[3,"SW"],"765":[3,"SW"],"766":[2,"SW"],"767":[2,"SW"],"768":[3,"SW"],"769":[3,"SW"],
  "770":[2,"SW"],"771":[2,"SW"],"772":[2,"SW"],"773":[2,"SW"],"774":[2,"SW"],"775":[2,"SW"],"776":[2,"SW"],"777":[2,"SW"],"778":[2,"SW"],"779":[2,"SW"],
  "780":[2,"SW"],"781":[2,"SW"],"782":[2,"SW"],"783":[2,"SW"],"784":[2,"SW"],"785":[2,"SW"],"786":[2,"SW"],"787":[2,"SW"],"788":[2,"SW"],"789":[2,"SW"],
  "790":[3,"SW"],"791":[3,"SW"],"792":[3,"SW"],"793":[3,"SW"],"794":[3,"SW"],"795":[3,"SW"],"796":[3,"SW"],"797":[3,"SW"],"798":[3,"SW"],"799":[3,"SW"],
  "885":[3,"SW"],
  "800":[5,"N"],"801":[5,"N"],"802":[5,"N"],"803":[5,"N"],"804":[5,"N"],"805":[5,"N"],"806":[5,"N"],"807":[5,"N"],"808":[5,"N"],"809":[5,"N"],
  "810":[5,"N"],"811":[5,"N"],"812":[5,"N"],"813":[6,"N"],"814":[6,"N"],"815":[5,"N"],"816":[5,"N"],
  "870":[5,"SW"],"871":[5,"SW"],"873":[4,"SW"],"874":[5,"SW"],"875":[4,"SW"],"877":[5,"SW"],"878":[4,"SW"],"879":[4,"SW"],
  "880":[3,"SW"],"881":[4,"SW"],"882":[3,"SW"],"883":[3,"SW"],"884":[3,"SW"],
  "850":[2,"SW"],"852":[2,"SW"],"853":[2,"SW"],"855":[3,"SW"],"856":[3,"SW"],"857":[2,"SW"],"859":[5,"SW"],"860":[5,"SW"],"863":[3,"SW"],"864":[3,"SW"],"865":[3,"SW"],
  "889":[3,"SW"],"890":[3,"SW"],"891":[3,"SW"],"893":[5,"N"],"894":[5,"N"],"895":[5,"N"],"897":[5,"N"],"898":[5,"N"],
  "900":[3,"SW"],"901":[3,"SW"],"902":[3,"SW"],"903":[3,"SW"],"904":[3,"SW"],"905":[3,"SW"],"906":[3,"SW"],"907":[3,"SW"],"908":[3,"SW"],
  "910":[3,"SW"],"911":[3,"SW"],"912":[3,"SW"],"913":[3,"SW"],"914":[3,"SW"],"915":[3,"SW"],"916":[3,"SW"],"917":[3,"SW"],"918":[3,"SW"],"919":[3,"SW"],
  "920":[3,"SW"],"921":[3,"SW"],"922":[3,"SW"],"923":[3,"SW"],"924":[3,"SW"],"925":[3,"SW"],"926":[3,"SW"],"927":[3,"SW"],"928":[3,"SW"],"929":[3,"SW"],
  "930":[3,"SW"],"931":[3,"SW"],"932":[3,"SW"],"933":[3,"SW"],"934":[3,"SW"],"935":[3,"SW"],"936":[3,"SW"],"937":[3,"SW"],"938":[3,"SW"],"939":[3,"SW"],
  "940":[3,"SW"],"941":[3,"SW"],"942":[3,"SW"],"943":[3,"SW"],"944":[3,"SW"],"945":[3,"SW"],"946":[3,"SW"],"947":[3,"SW"],"948":[3,"SW"],"949":[3,"SW"],
  "950":[3,"SW"],"951":[3,"SW"],"952":[3,"SW"],"953":[3,"SW"],"954":[3,"SW"],"955":[4,"SW"],"956":[3,"SW"],"957":[3,"SW"],"958":[3,"SW"],"959":[3,"SW"],
  "960":[3,"SW"],"961":[3,"SW"],
  "970":[4,"N"],"971":[4,"N"],"972":[4,"N"],"973":[4,"N"],"974":[5,"N"],"975":[5,"N"],"976":[5,"N"],"977":[5,"N"],"978":[5,"N"],
  "980":[4,"N"],"981":[4,"N"],"982":[4,"N"],"983":[4,"N"],"984":[4,"N"],"985":[4,"N"],"986":[5,"N"],"988":[5,"N"],"989":[5,"N"],
  "990":[5,"N"],"991":[5,"N"],"992":[5,"N"],"993":[5,"N"],"994":[5,"N"],
  "832":[6,"N"],"833":[6,"N"],"834":[6,"N"],"835":[5,"N"],"836":[5,"N"],"837":[6,"N"],"838":[5,"N"],
  "840":[5,"N"],"841":[5,"N"],"842":[5,"N"],"843":[6,"N"],"844":[6,"N"],"845":[5,"N"],"846":[5,"N"],"847":[5,"N"],
  "820":[6,"N"],"821":[6,"N"],"822":[6,"N"],"823":[6,"N"],"824":[6,"N"],"825":[6,"N"],"826":[6,"N"],"827":[6,"N"],"828":[6,"N"],"829":[6,"N"],
  "830":[6,"N"],"831":[6,"N"],
  "590":[6,"N"],"591":[6,"N"],"592":[6,"N"],"593":[6,"N"],"594":[6,"N"],"595":[6,"N"],"596":[6,"N"],"597":[6,"N"],"598":[6,"N"],"599":[6,"N"],
};

const SQFT_PER_TON_BY_ZONE = { 1:400, 2:450, 3:500, 4:550, 5:600, 6:650, 7:700, 8:750 };
const NAPOLEON_TONS = [1.5, 2, 2.5, 3, 3.5, 4, 5];

function lookupZip(zip) {
  const z3 = zip.toString().padStart(5, "0").slice(0, 3);
  if (ZIP3_TO_ZONE[z3]) return { zone: ZIP3_TO_ZONE[z3][0], region: ZIP3_TO_ZONE[z3][1] };
  return { zone: 4, region: "N" };
}

function snapToTon(t) {
  let best = NAPOLEON_TONS[0], diff = Infinity;
  for (const s of NAPOLEON_TONS) {
    if (s >= t && (s - t) < diff) { best = s; diff = s - t; }
  }
  if (t > 5) best = 5;
  return best;
}

function inStock(model) {
  return typeof window !== "undefined" && window.isInStock && window.isInStock(model);
}

function inStockOnly(list) {
  return list.filter(p => inStock(p.model));
}

function attachStockPrice(part) {
  if (!part) return null;
  const cost = window.stockCost ? window.stockCost(part.model) : 0;
  const retail = window.stockRetail ? window.stockRetail(part.model) : 0;
  return Object.assign({}, part, { cost: cost, retail: retail });
}

// Furnace selector: prefer Ultimate 9700, then Premium 9600, then 9500
function pickFurnace(sqft, zone) {
  const btuPerSqft = zone <= 2 ? 30 : zone <= 4 ? 40 : zone <= 6 ? 50 : 60;
  const target = sqft * btuPerSqft;
  const tiers = [
    window.NAPOLEON_HVAC.FURNACES_9700,
    window.NAPOLEON_HVAC.FURNACES_9600,
    window.NAPOLEON_HVAC.FURNACES_9500,
    window.NAPOLEON_HVAC.FURNACES_9600Q,
  ];
  for (const tier of tiers) {
    const stocked = inStockOnly(tier);
    if (!stocked.length) continue;
    let best = null, diff = Infinity;
    for (const f of stocked) {
      if (f.btu >= target * 0.9) {
        const d = Math.abs(f.btu - target);
        if (d < diff) { diff = d; best = f; }
      }
    }
    if (best) return best;
    return stocked.reduce((a, b) => (a.btu > b.btu ? a : b));
  }
  return null;
}

function pickAC(tonnage, tier) {
  const fullList = tier === "14.3" ? window.NAPOLEON_HVAC.AC_143 : window.NAPOLEON_HVAC.AC_134;
  const stocked = inStockOnly(fullList);
  if (!stocked.length) return null;
  let match = stocked.find(ac => ac.tonnage === tonnage);
  if (match) return match;
  match = stocked.filter(ac => ac.tonnage > tonnage).sort((a, b) => a.tonnage - b.tonnage)[0];
  return match || stocked.reduce((a, b) => (a.tonnage > b.tonnage ? a : b));
}

function pickACCoil(tonnage, tier) {
  const fullList = tier === "14.3" ? window.NAPOLEON_HVAC.COILS_AC_143 : window.NAPOLEON_HVAC.COILS_AC_134;
  const stocked = inStockOnly(fullList);
  if (!stocked.length) return null;
  let match = stocked.find(c => c.tonnage === tonnage);
  if (match) return match;
  match = stocked.filter(c => c.tonnage > tonnage).sort((a, b) => a.tonnage - b.tonnage)[0];
  return match || stocked.reduce((a, b) => (a.tonnage > b.tonnage ? a : b));
}

function pickHeatPump(tonnage) {
  const stocked = inStockOnly(window.NAPOLEON_HVAC.HP_R454B);
  if (!stocked.length) return null;
  if (tonnage <= 3) return stocked.find(hp => hp.model.indexOf("2436") >= 0) || stocked[0];
  return stocked.find(hp => hp.model.indexOf("4860") >= 0) || stocked[stocked.length - 1];
}

function pickHPCoil(tonnage) {
  const stocked = inStockOnly(window.NAPOLEON_HVAC.COILS_HP);
  if (!stocked.length) return null;
  const t = tonnage <= 2 ? 2 : tonnage <= 3 ? 3 : tonnage <= 4 ? 4 : 5;
  let match = stocked.find(c => c.tonnage === t);
  if (match) return match;
  match = stocked.filter(c => c.tonnage >= t).sort((a, b) => a.tonnage - b.tonnage)[0];
  return match || stocked[stocked.length - 1];
}

function pickAirHandler(tonnage) {
  const stocked = inStockOnly(window.NAPOLEON_HVAC.AHU);
  if (!stocked.length) return null;
  const t = tonnage <= 2 ? 2 : tonnage <= 3 ? 3 : tonnage <= 4 ? 4 : 5;
  return stocked.find(a => a.tonnage === t) || stocked[0];
}

const EQ_HUB = { model: "WSC43BB-KT", name: "EQ Hub Smart Thermostat" };
const A2L_SENSOR_REF = { model: "A2L4SA", name: "A2L Leak Detection Sensor" };
const HEAT_KIT = { model: "WHS10KW", name: "10 kW Electric Heat Kit" };
const PROG_TSTAT = { model: "NT151HCPV", name: "Essential Programmable Thermostat" };
const NG_LP_KIT  = { model: "W370-0258", name: "NG to LP Conversion Kit" };

// Pick the right Winter AC Cover for a given AC tonnage.
// From price book p12: NCR-2927 fits 1.5T-3T, NCR-2939 fits 3.5T-4T, NCR-2948 fits 5T.
function pickWinterCover(tons) {
  if (tons <= 3)    return { model:"NCR-2927", name:"Winter AC Cover (27 x 29)" };
  if (tons <= 4)    return { model:"NCR-2939", name:"Winter AC Cover (39 x 29)" };
  return { model:"NCR-2948", name:"Winter AC Cover (48 x 29)" };
}

// AHRI Certified Pairing Numbers - from Napoleon 2026 US MSRP Price Book p10-11 + Heat Pump Tech Sheet
// Key: outdoor model + "|" + coil/airhandler model
const AHRI_LOOKUP = {
  // Heat pump + cased coil (heat pump matchups page)
  "WSEHV2436BA1-N|WPCC24ABA1-N":"217463583",
  "WSEHV2436BA1-N|WPCC36ABA1-N":"217463581",
  "WSEHV4860BA1-N|WPCC48ABA1-N":"217463584",
  "WSEHV4860BA1-N|WPCC60ABA1-N":"217463582",
  // Heat pump + air handler (heat pump tech sheet)
  "WSEHV2436BA1-N|WPFX24A-N":"216626012",
  "WSEHV2436BA1-N|WPFX36A-N":"216025738",
  "WSEHV4860BA1-N|WPFX48A-N":"216626013",
  "WSEHV4860BA1-N|WPFX60A-N":"216025739",
  // 13.4 SEER2 AC + cased coil
  "WTACS0018BA1-N|CE24B3J-175L-000":"216778918",
  "WTACS0024BA1-N|CE24B3J-175L-000":"216778919",
  "WTACS0030BA1-N|CE36B3J-175L-000":"216778920",
  "WTACS0036BA1-N|CE36B3J-175L-000":"216778921",
  "WTACS0042BA1-N|CE42C3J-225L-000":"216778926",
  "WTACS0048BA1-N|CE48C3J-225L-000":"216778930",
  "WTACS0060BA1-N|DE61B4J-225L-000":"217598686",
  // 14.3 SEER2 AC + cased coil
  "WTBCS0018BA1-N|CE24B3J-175L-000":"216778935",
  "WTBCS0024BA1-N|CE24B3J-175L-000":"216778936",
  "WTBCS0030BA1-N|CE36B3J-175L-000":"216778937",
  "WTBCS0036BA1-N|CE36B3J-175L-000":"216778938",
  "WTBCS0042BA1-N|CE42C3J-225L-000":"216778942",
  "WTBCS0048BA1-N|DE61B4J-225L-000":"217619763",
  "WTBCS0060BA1-N|DE61B4J-225L-000":"217598687",
};

function findAhri(parts) {
  // Find the outdoor unit (heat pump or AC) and the matched indoor (coil or air handler)
  const outdoor = parts.find(p => /^(WSEHV|WTACS|WTBCS)/.test(p.model));
  const indoor  = parts.find(p => /^(WPCC|WPFX|CE|CC|DE|DC)/.test(p.model));
  if (!outdoor || !indoor) return null;
  return AHRI_LOOKUP[outdoor.model + "|" + indoor.model] || null;
}

const INTERNAL_PASSCODE = "583973";

function buildQuote() {
  const zip = (document.getElementById("zip").value || "").trim();
  const sqftIn = parseInt(document.getElementById("sqft").value, 10);
  const markupPct = parseFloat(document.getElementById("markup").value) / 100;
  const discountPct = parseFloat(document.getElementById("discount").value) / 100;
  const addHeatKit = document.getElementById("add-heatkit").checked;
  const addTstatToAC = document.getElementById("add-tstat-ac").checked;
  const addWinterCover = document.getElementById("acc-winter-cover") && document.getElementById("acc-winter-cover").checked;
  const addProgTstat   = document.getElementById("acc-prog-tstat")   && document.getElementById("acc-prog-tstat").checked;
  const addNgLpKit     = document.getElementById("acc-ng-lp")        && document.getElementById("acc-ng-lp").checked;

  if (!/^\d{5}$/.test(zip)) { alert("Please enter a valid 5-digit ZIP code."); return; }
  if (!sqftIn || sqftIn < 400) { alert("Please enter conditioned square footage (at least 400 sqft)."); return; }

  const customer = {
    name: document.getElementById("cust-name").value || "Customer",
    addr: document.getElementById("cust-addr").value || "",
    phone: document.getElementById("cust-phone").value || ""
  };

  const lookup = lookupZip(zip);
  const zone = lookup.zone;
  const region = lookup.region;
  const sqftPerTon = SQFT_PER_TON_BY_ZONE[zone] || 550;
  const rawTons = sqftIn / sqftPerTon;
  const tons = snapToTon(rawTons);
  const allow134 = region === "N";

  const furnace = pickFurnace(sqftIn, zone);
  const hp = pickHeatPump(tons);
  const hpCoil = pickHPCoil(tons);
  const ahu = pickAirHandler(tons);

  // System 1: HP + Air Handler (+optional heat kit) - no furnace
  const sys1Parts = [];
  if (hp)  sys1Parts.push(addRole(hp,  "Heat Pump"));
  if (ahu) sys1Parts.push(addRole(ahu, "Air Handler (EEV)"));
  if (addHeatKit) sys1Parts.push(addRole(HEAT_KIT, "Backup Heat Kit"));
  if (inStock(EQ_HUB.model) && addTstatToAC) sys1Parts.push(addRole(EQ_HUB, "Thermostat"));

  // System 2: HP + Furnace (dual fuel)
  const sys2Parts = [];
  if (hp)      sys2Parts.push(addRole(hp, "Heat Pump"));
  if (hpCoil)  sys2Parts.push(addRole(hpCoil, "Cased Coil"));
  if (furnace) sys2Parts.push(addRole(furnace, "Furnace"));
  if (inStock(EQ_HUB.model)) sys2Parts.push(addRole(EQ_HUB, "Thermostat"));

  // System 3: AC Condenser + Coil + Furnace
  // Prefer 14.3 SEER2 since it's universally legal
  const ac143 = pickAC(tons, "14.3");
  const coil143 = pickACCoil(tons, "14.3");
  const sys3Parts = [];
  if (ac143)   sys3Parts.push(addRole(ac143, "Outdoor AC"));
  if (coil143) sys3Parts.push(addRole(coil143, "Cased Coil"));
  if (inStock(A2L_SENSOR_REF.model)) sys3Parts.push(addRole(A2L_SENSOR_REF, "A2L Sensor"));
  if (furnace) sys3Parts.push(addRole(furnace, "Furnace"));
  if (addTstatToAC && inStock(EQ_HUB.model)) sys3Parts.push(addRole(EQ_HUB, "Thermostat"));

  // System 4: AC + Coil only (no furnace, no air handler - existing system retrofit)
  const sys4Parts = [];
  if (ac143)   sys4Parts.push(addRole(ac143, "Outdoor AC"));
  if (coil143) sys4Parts.push(addRole(coil143, "Cased Coil"));
  if (inStock(A2L_SENSOR_REF.model)) sys4Parts.push(addRole(A2L_SENSOR_REF, "A2L Sensor"));
  if (addTstatToAC && inStock(EQ_HUB.model)) sys4Parts.push(addRole(EQ_HUB, "Thermostat"));

  const systems = [
    { id: "hp-ahu", title: "Heat Pump + Air Handler", subtitle: "All-electric system with EEV air handler" + (addHeatKit ? " and 10 kW backup heat kit" : ""), parts: sys1Parts, recommended: false, hasAC: false },
    { id: "dual",   title: "Heat Pump + Furnace (Dual Fuel)", subtitle: "Hybrid: heat pump primary, gas furnace backup, EQ Hub auto-switches", parts: sys2Parts, recommended: true, hasAC: false },
    { id: "ac-furn",title: "AC Condenser + Coil + Furnace", subtitle: "Traditional split system, 14.3 SEER2 R-454B AC plus Ultimate 9700 furnace", parts: sys3Parts, recommended: false, hasAC: true },
    { id: "ac-only",title: "AC + Coil only", subtitle: "Cooling-only retrofit (use existing heat source)", parts: sys4Parts, recommended: false, hasAC: true },
  ];

  // Append selected accessories to each system
  for (const sys of systems) {
    if (addWinterCover && sys.hasAC) {
      const cover = pickWinterCover(tons);
      if (cover) sys.parts.push(addRole(cover, "Winter AC Cover"));
    }
    if (addProgTstat) {
      // Only add programmable tstat if there's no EQ Hub already
      const hasEqHub = sys.parts.some(p => p.model === EQ_HUB.model);
      if (!hasEqHub) sys.parts.push(addRole(PROG_TSTAT, "Programmable Thermostat"));
    }
    if (addNgLpKit) {
      // Only relevant for gas furnace systems
      const hasFurnace = sys.parts.some(p => /^(WUV|WPV|WSX|WPX)/.test(p.model));
      if (hasFurnace) sys.parts.push(addRole(NG_LP_KIT, "NG to LP Conversion Kit"));
    }
  }

  const quote = {
    customer: customer,
    zip: zip, sqft: sqftIn, zone: zone, region: region,
    rawTons: rawTons, tons: tons, sqftPerTon: sqftPerTon,
    markupPct: markupPct, discountPct: discountPct,
    allow134: allow134,
    systems: systems.map(s => priceSystem(s, markupPct, discountPct)),
    date: new Date().toLocaleDateString("en-US", { year:"numeric", month:"long", day:"numeric" })
  };

  window._lastQuote = quote;
  // Populate print header
  const pcName  = document.getElementById("pc-name");
  const pcAddr  = document.getElementById("pc-addr");
  const pcPhone = document.getElementById("pc-phone");
  const pDate   = document.getElementById("print-date");
  const pQid    = document.getElementById("print-quote-id");
  if (pcName)  pcName.textContent  = customer.name;
  if (pcAddr)  pcAddr.textContent  = customer.addr || "—";
  if (pcPhone) pcPhone.textContent = customer.phone