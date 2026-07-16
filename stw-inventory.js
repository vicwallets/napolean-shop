/* Skip The Warehouse - Napoleon In-Stock Inventory Snapshot
   Scraped from: https://vicwallets.github.io/Inventory/quote.html
   Last scrape:  2026-07-16 6:00 PM ET
   Auto-refreshed: Tuesdays, Thursdays, Sundays at 6:00 PM ET
*/

const STW_INVENTORY = [
  { model:"A2L4SA",                                 stwNo:"539262", qty:15, cost:    139.50, sale:    179.96 },
  { model:"CE24B3J-175L-000",                       stwNo:"539252", qty:22, cost:    533.25, sale:    687.89 },
  { model:"CE36B3J-175L-000",                       stwNo:"539253", qty:5, cost:    580.50, sale:    748.85 },
  { model:"CE36B3J-225L-000",                       stwNo:"539254", qty:3, cost:    580.50, sale:    748.85 },
  { model:"CE48C3J-225L-000",                       stwNo:"539255", qty:9, cost:    695.25, sale:    896.87 },
  { model:"DE61B4J-225L-000",                       stwNo:"540944", qty:4, cost:    720.00, sale:    928.80 },
  { model:"NDHAMBB-18-0",                           stwNo:"564356", qty:19, cost:   1485.00, sale:   1915.65 },
  { model:"NDHAMBB-27-O",                           stwNo:"547987", qty:13, cost:   1829.25, sale:   2359.73 },
  { model:"NDHAMBB-36-O",                           stwNo:"547988", qty:19, cost:   2520.00, sale:   3250.80 },
  { model:"NDHAMBB-48-O",                           stwNo:"547990", qty:9, cost:   2736.00, sale:   3529.44 },
  { model:"NDHAS26BA-09-O",                         stwNo:"547973", qty:14, cost:    877.50, sale:   1131.98 },
  { model:"NDHAS26BA-12-O",                         stwNo:"547974", qty:23, cost:    931.50, sale:   1201.64 },
  { model:"NDHAS26BA-18-O",                         stwNo:"547975", qty:16, cost:   1129.50, sale:   1457.06 },
  { model:"NDHAS26BA-24-O",                         stwNo:"547976", qty:19, cost:   1667.25, sale:   2150.75 },
  { model:"NDHAS26BA-33-O",                         stwNo:"547977", qty:16, cost:   1910.25, sale:   2464.22 },
  { model:"NDHAS26BB-06-I",                         stwNo:"547978", qty:31, cost:    380.25, sale:    490.52 },
  { model:"NDHAS26BB-09-I",                         stwNo:"547979", qty:69, cost:    400.50, sale:    516.65 },
  { model:"NDHAS26BB-12-I",                         stwNo:"547980", qty:64, cost:    411.75, sale:    531.16 },
  { model:"NDHAS26BB-18-I",                         stwNo:"547981", qty:25, cost:    515.25, sale:    664.67 },
  { model:"NDHAS26BB-24-I",                         stwNo:"547982", qty:24, cost:    663.75, sale:    856.24 },
  { model:"NDHAS26BB-33-I",                         stwNo:"547983", qty:14, cost:    760.50, sale:    981.05 },
  { model:"NDHAS4CBB-12",                           stwNo:"547998", qty:19, cost:    427.50, sale:    551.48 },
  { model:"NDHAS4CBB-18",                           stwNo:"547999", qty:11, cost:    472.50, sale:    609.53 },
  { model:"NDHASCBB-09",                            stwNo:"548000", qty:6, cost:    418.50, sale:    539.87 },
  { model:"NDHASCBB-12",                            stwNo:"548001", qty:4, cost:    441.00, sale:    568.89 },
  { model:"NDHASCBB-18",                            stwNo:"548002", qty:1, cost:    463.50, sale:    597.92 },
  { model:"NDHASHDBB-09",                           stwNo:"548003", qty:1, cost:    510.75, sale:    658.87 },
  { model:"NDHASHDBB-12",                           stwNo:"548004", qty:12, cost:    580.50, sale:    748.85 },
  { model:"NDHASHDBB-18",                           stwNo:"548005", qty:11, cost:    648.00, sale:    835.92 },
  { model:"NDHASHDBB-24",                           stwNo:"548006", qty:5, cost:    720.00, sale:    928.80 },
  { model:"NT151HCPV",                              stwNo:"401752", qty:41, cost:     47.25, sale:     60.95 },
  { model:"W370-0018",                              stwNo:"455273", qty:7, cost:    126.20, sale:    162.80 },
  { model:"W370-0258",                              stwNo:"455272", qty:5, cost:    100.91, sale:    130.17 },
  { model:"WHS10KW",                                stwNo:"453915", qty:22, cost:    119.12, sale:    153.66 },
  { model:"WHS15KW",                                stwNo:"453916", qty:6, cost:    233.74, sale:    301.52 },
  { model:"WHS20KW-KT",                             stwNo:"525060", qty:1, cost:    321.75, sale:    415.06 },
  { model:"WHS8KW",                                 stwNo:"453913", qty:12, cost:    118.80, sale:    153.25 },
  { model:"WPFX24A-N",                              stwNo:"521403", qty:21, cost:   1275.75, sale:   1645.72 },
  { model:"WPFX36A-N",                              stwNo:"521404", qty:30, cost:   1336.50, sale:   1724.09 },
  { model:"WPFX48A-N",                              stwNo:"521405", qty:11, cost:   1599.75, sale:   2063.68 },
  { model:"WPFX60A-N",                              stwNo:"521406", qty:4, cost:   1671.75, sale:   2156.56 },
  { model:"WPV050T3AA-N",                           stwNo:"460846", qty:5, cost:   1541.47, sale:   1988.49 },
  { model:"WPV070T3AA-N",                           stwNo:"453886", qty:5, cost:   1525.28, sale:   1967.62 },
  { model:"WPV090T5BA-N",                           stwNo:"453888", qty:7, cost:   1764.36, sale:   2276.02 },
  { model:"WPV105T5BA-N",                           stwNo:"458089", qty:12, cost:   1818.13, sale:   2345.38 },
  { model:"WPX040S2AA-N",                           stwNo:"457780", qty:2, cost:   1157.52, sale:   1493.20 },
  { model:"WPX060S3AA-N",                           stwNo:"477507", qty:10, cost:   1221.48, sale:   1575.71 },
  { model:"WPX080S3AA-N",                           stwNo:"477508", qty:14, cost:   1269.32, sale:   1637.42 },
  { model:"WPX100S5BA-N",                           stwNo:"453892", qty:11, cost:   1512.68, sale:   1951.36 },
  { model:"WSC43BB-KT",                             stwNo:"466285", qty:4, cost:    193.05, sale:    249.03 },
  { model:"WSEHV2436BA1-N",                         stwNo:"521400", qty:13, cost:   1840.50, sale:   2374.25 },
  { model:"WSEHV4860BA1-N",                         stwNo:"521402", qty:17, cost:   2340.00, sale:   3018.60 },
  { model:"WTACS0018BA1-N",                         stwNo:"521385", qty:4, cost:   1021.50, sale:   1317.74 },
  { model:"WTACS0024BA1-N",                         stwNo:"521386", qty:5, cost:   1084.50, sale:   1399.01 },
  { model:"WTACS0036BA1-N",                         stwNo:"521388", qty:1, cost:   1309.50, sale:   1689.26 },
  { model:"WTACS0042BA1-N",                         stwNo:"521389", qty:4, cost:   1523.25, sale:   1964.99 },
  { model:"WTACS0048BA1-N",                         stwNo:"521390", qty:4, cost:   1620.00, sale:   2089.80 },
  { model:"WTACS0060BA1-N",                         stwNo:"521392", qty:3, cost:   1883.25, sale:   2429.39 },
  { model:"WTBCS0018BA1-N",                         stwNo:"521393", qty:2, cost:   1167.75, sale:   1506.40 },
  { model:"WTBCS0024BA1-N",                         stwNo:"521394", qty:5, cost:   1226.25, sale:   1581.86 },
  { model:"WTBCS0030BA1-N",                         stwNo:"521395", qty:3, cost:   1386.00, sale:   1787.94 },
  { model:"WTBCS0036BA1-N",                         stwNo:"521396", qty:6, cost:   1437.75, sale:   1854.70 },
  { model:"WTBCS0042BA1-N",                         stwNo:"521397", qty:1, cost:   1674.00, sale:   2159.46 },
  { model:"WTBCS0048BA1-N",                         stwNo:"521398", qty:4, cost:   1768.50, sale:   2281.37 },
  { model:"WTBCS0060BA1-N",                         stwNo:"521399", qty:3, cost:   2031.75, sale:   2620.96 },
  { model:"WUV070T3AA-N",                           stwNo:"453883", qty:3, cost:   2565.93, sale:   3310.05 },
  { model:"WUV090T5BA-N",                           stwNo:"453885", qty:6, cost:   2522.32, sale:   3253.79 },
  { model:"NCR-2927",                               stwNo:null,     qty:0,  cost:    42.75, sale: 95.00, specialOrder:true },
  { model:"NCR-2939",                               stwNo:null,     qty:0,  cost:    45.00, sale:100.00, specialOrder:true },
  { model:"NCR-2948",                               stwNo:null,     qty:0,  cost:    47.25, sale:105.00, specialOrder:true },
];

const STW_INV_BY_MODEL = {};
for (const item of STW_INVENTORY) STW_INV_BY_MODEL[item.model.toUpperCase()] = item;

function isInStock(m){if(!m)return false;const i=STW_INV_BY_MODEL[m.toUpperCase()];return !!(i&&i.qty>0);}
function isAvailable(m){if(!m)return false;const i=STW_INV_BY_MODEL[m.toUpperCase()];return !!i&&(i.qty>0||i.specialOrder===true);}
function isSpecialOrder(m){if(!m)return false;const i=STW_INV_BY_MODEL[m.toUpperCase()];return !!(i&&i.specialOrder===true);}
function stwUrl(m){const i=STW_INV_BY_MODEL[(m||"").toUpperCase()];if(!i||!i.stwNo)return null;return "https://skipthewarehouse.com/quote-tool/#"+i.stwNo;}
function stockQty(m){const i=STW_INV_BY_MODEL[(m||"").toUpperCase()];return i?i.qty:0;}
function stockCost(m){const i=STW_INV_BY_MODEL[(m||"").toUpperCase()];return i?i.cost:0;}
function stockRetail(m){const i=STW_INV_BY_MODEL[(m||"").toUpperCase()];return i?i.sale:0;}
function stockLoc(m){const i=STW_INV_BY_MODEL[(m||"").toUpperCase()];if(!i)return null;return "Dillsburg";}

if(typeof window!=="undefined"){
  window.STW_INVENTORY=STW_INVENTORY;window.STW_INV_BY_MODEL=STW_INV_BY_MODEL;
  window.isInStock=isInStock;window.isAvailable=isAvailable;window.isSpecialOrder=isSpecialOrder;
  window.stwUrl=stwUrl;window.stockQty=stockQty;window.stockCost=stockCost;
  window.stockRetail=stockRetail;window.stockLoc=stockLoc;
  window.STW_INV_LAST_SCRAPE="2026-07-16 6:00 PM ET";
  window.STW_MARKUP_DEFAULT=0.29;window.STW_DISCOUNT_MAX=0.15;
}
if(typeof module!=="undefined"&&module.exports){
  module.exports={STW_INVENTORY,STW_INV_BY_MODEL,isInStock,isAvailable,isSpecialOrder,stwUrl,stockQty,stockCost,stockRetail,stockLoc};
}
