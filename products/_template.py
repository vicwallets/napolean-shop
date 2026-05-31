#!/usr/bin/env python3
"""Generate individual product pages for Napolean.shop substore.

Each entry below produces products/<slug>.html. All pages share the same
layout in styles.css and pull header/footer from partials.js so the brand
stays consistent.

Run from /sessions/blissful-vigilant-cray/mnt/Napolean/products via:
    python3 _template.py
"""

import os
from textwrap import dedent

OUT_DIR = os.path.dirname(os.path.abspath(__file__))

PRODUCTS = [
    # GAS FIREPLACES
    {
        "slug": "bl36", "model": "BL36NTE", "name": "Ascent BL36",
        "series": "Ascent™ Linear", "category": "Gas Fireplaces", "category_link": "gas-fireplaces.html",
        "art": "linear", "nav": "gas",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+BL36",
        "stw_status": "search",
        "tagline": "A 36-inch direct-vent linear gas fireplace with a sleek modern profile.",
        "description": "The Ascent Linear 36 brings refined, contemporary heat to any room. Hand-painted PHAZER® logs sit on a glowing ember bed inside a clean linear opening. Suitable for both residential and commercial spaces.",
        "specs": [("Type", "Direct vent gas"), ("Width", "36 in"), ("BTU", "30,000 BTU/hr"), ("Ignition", "Electronic"), ("Vent", "Direct vent"), ("Warranty", "President's Limited Lifetime")],
    },
    {
        "slug": "bl46", "model": "BL46NTE", "name": "Ascent BL46",
        "series": "Ascent™ Linear", "category": "Gas Fireplaces", "category_link": "gas-fireplaces.html",
        "art": "linear", "nav": "gas",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+BL46",
        "stw_status": "search",
        "tagline": "A 46-inch linear gas fireplace, scaled up for great rooms.",
        "description": "The Ascent Linear 46 carries the same modern lines as the BL36 with extra width and heat capacity. Perfect for open-concept living rooms and commercial dining areas.",
        "specs": [("Type", "Direct vent gas"), ("Width", "46 in"), ("BTU", "35,000 BTU/hr"), ("Ignition", "Electronic"), ("Vent", "Direct vent"), ("Warranty", "President's Limited Lifetime")],
    },
    {
        "slug": "bx36", "model": "BX36NTE", "name": "Ascent X 36",
        "series": "Ascent™ X", "category": "Gas Fireplaces", "category_link": "gas-fireplaces.html",
        "art": "traditional", "nav": "gas",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+BX36",
        "stw_status": "search",
        "tagline": "Direct vent gas with the most realistic logs in the industry.",
        "description": "The Ascent X 36 features Napoleon's hand-painted PHAZER® logs and glowing ember bed for an unmistakably real flame appearance. Electronic ignition makes operation effortless.",
        "specs": [("Type", "Direct vent gas"), ("Width", "36 in"), ("BTU", "30,000 BTU/hr"), ("Logs", "PHAZER® hand-painted"), ("Ignition", "Electronic"), ("Warranty", "President's Limited Lifetime")],
    },
    {
        "slug": "bx42", "model": "BX42NTE", "name": "Ascent X 42",
        "series": "Ascent™ X", "category": "Gas Fireplaces", "category_link": "gas-fireplaces.html",
        "art": "traditional", "nav": "gas",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+BX42",
        "stw_status": "search",
        "tagline": "The popular Ascent X traditional, scaled up to 42 inches.",
        "description": "All the realism of the BX36 with a wider firebox for larger rooms. PHAZER® logs, glowing embers, and a fully ceramic refractory back panel.",
        "specs": [("Type", "Direct vent gas"), ("Width", "42 in"), ("BTU", "35,000 BTU/hr"), ("Logs", "PHAZER® hand-painted"), ("Ignition", "Electronic"), ("Warranty", "President's Limited Lifetime")],
    },
    {
        "slug": "b36", "model": "B36NTRE", "name": "Ascent B36",
        "series": "Ascent™", "category": "Gas Fireplaces", "category_link": "gas-fireplaces.html",
        "art": "traditional", "nav": "gas",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+B36",
        "stw_status": "search",
        "tagline": "Classic Ascent direct vent in a 36-inch traditional firebox.",
        "description": "The original Ascent B36 sets the bar for what a direct-vent gas fireplace should be: efficient, reliable, and beautiful. Standard ceramic glass with optional black painted faceplate.",
        "specs": [("Type", "Direct vent gas"), ("Width", "36 in"), ("BTU", "30,000 BTU/hr"), ("Ignition", "Electronic"), ("Vent", "Direct vent"), ("Warranty", "President's Limited Lifetime")],
    },
    {
        "slug": "bhd4", "model": "BHD4STN", "name": "BHD4 See-Thru",
        "series": "Ascent™ Multi-View", "category": "Gas Fireplaces", "category_link": "gas-fireplaces.html",
        "art": "traditional", "nav": "gas",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+BHD4",
        "stw_status": "search",
        "tagline": "See-through gas fireplace, viewable from two rooms.",
        "description": "The BHD4 lets a single fireplace serve two adjacent spaces. Direct vent operation with PHAZER® logs and remote control standard.",
        "specs": [("Type", "See-through direct vent"), ("BTU", "30,000 BTU/hr"), ("Logs", "PHAZER®"), ("Ignition", "Electronic"), ("Vent", "Direct vent"), ("Warranty", "President's Limited Lifetime")],
    },
    {
        "slug": "gx36", "model": "GX36NTRE", "name": "GX36",
        "series": "GX", "category": "Gas Fireplaces", "category_link": "gas-fireplaces.html",
        "art": "linear", "nav": "gas",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+GX36",
        "stw_status": "search",
        "tagline": "Compact direct vent for tighter installations.",
        "description": "The GX36 is engineered for spaces where the larger Ascent series doesn't fit. Lower BTU output makes it ideal for bedrooms, dens, and smaller living rooms.",
        "specs": [("Type", "Direct vent gas"), ("Width", "36 in"), ("BTU", "24,000 BTU/hr"), ("Ignition", "Electronic"), ("Vent", "Direct vent"), ("Warranty", "President's Limited Lifetime")],
    },
    {
        "slug": "oakville3", "model": "GDIX3N", "name": "Oakville 3",
        "series": "Oakville Series", "category": "Gas Fireplaces", "category_link": "gas-fireplaces.html",
        "art": "traditional", "nav": "gas",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+Oakville",
        "stw_status": "search",
        "tagline": "Drop-in gas insert that retrofits any masonry fireplace.",
        "description": "The Oakville 3 transforms an existing wood-burning masonry fireplace into a clean, efficient gas heat source. Steel surround included; multiple finish options available.",
        "specs": [("Type", "Gas insert"), ("BTU", "22,000 BTU/hr"), ("Surround", "Steel, multiple finishes"), ("Ignition", "Electronic"), ("Application", "Masonry retrofit"), ("Warranty", "President's Limited Lifetime")],
    },
    # ELECTRIC FIREPLACES
    {
        "slug": "nefl42chs", "model": "NEFL42CHS", "name": "Alluravision 42 Slim",
        "series": "Alluravision™ Slimline", "category": "Electric Fireplaces", "category_link": "electric-fireplaces.html",
        "art": "electric", "nav": "electric",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+NEFL42CHS",
        "stw_status": "search",
        "tagline": "Wall mount electric fireplace, just 4 1/4 inches deep.",
        "description": "The Alluravision Slim 42 mounts to any wall and adds instant ambiance with multicolor LED flame and ember beds. No venting, no gas line — just plug it in.",
        "specs": [("Type", "Wall-mount electric"), ("Width", "42 in"), ("Depth", "4 1/4 in"), ("BTU", "5,000 BTU/hr"), ("Power", "120V"), ("Heat", "1,500W with thermostat")],
    },
    {
        "slug": "nefl42chd", "model": "NEFL42CHD-1", "name": "Alluravision 42 Deep",
        "series": "Alluravision™ Deep", "category": "Electric Fireplaces", "category_link": "electric-fireplaces.html",
        "art": "electric", "nav": "electric",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+NEFL42CHD",
        "stw_status": "search",
        "tagline": "Deep-set electric with rich layered flame visuals.",
        "description": "The Alluravision Deep adds depth to the LED flame for a more dimensional appearance. Comes with multicolor ember and flame settings, plus heat on demand.",
        "specs": [("Type", "Wall-mount electric"), ("Width", "42 in"), ("Depth", "5 13/16 in"), ("BTU", "5,000 BTU/hr"), ("Power", "120V"), ("Heat", "1,500W with thermostat")],
    },
    {
        "slug": "nefl50chd", "model": "NEFL50CHD-1", "name": "Alluravision 50 Deep",
        "series": "Alluravision™ Deep", "category": "Electric Fireplaces", "category_link": "electric-fireplaces.html",
        "art": "electric", "nav": "electric",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+NEFL50CHD",
        "stw_status": "search",
        "tagline": "50-inch wall mount electric with deep flame profile.",
        "description": "Step up to a 50-inch viewing area with the same award-winning LED flame technology. Ideal for bedrooms, offices, and primary living rooms.",
        "specs": [("Type", "Wall-mount electric"), ("Width", "50 in"), ("Depth", "5 13/16 in"), ("BTU", "5,000 BTU/hr"), ("Power", "120V"), ("Heat", "1,500W with thermostat")],
    },
    {
        "slug": "nefl74chd", "model": "NEFL74CHD-1", "name": "Alluravision 74",
        "series": "Alluravision™ Deep", "category": "Electric Fireplaces", "category_link": "electric-fireplaces.html",
        "art": "electric", "nav": "electric",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+NEFL74CHD",
        "stw_status": "search",
        "tagline": "The widest Alluravision — 74 inches of cinematic flame.",
        "description": "A statement piece for great rooms and commercial venues. The Alluravision 74 delivers an immersive flame experience without venting or gas connections.",
        "specs": [("Type", "Wall-mount electric"), ("Width", "74 in"), ("Depth", "5 13/16 in"), ("BTU", "5,000 BTU/hr"), ("Power", "120V"), ("Heat", "1,500W with thermostat")],
    },
    {
        "slug": "nefb50h", "model": "NEFB50H-3SV", "name": "Trivista 50",
        "series": "Trivista™ Primis", "category": "Electric Fireplaces", "category_link": "electric-fireplaces.html",
        "art": "electric", "nav": "electric",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+Trivista+50",
        "stw_status": "search",
        "tagline": "Three-sided built-in electric, viewable from any angle.",
        "description": "The Trivista Primis 50 puts flame on three sides for peninsula and corner installs. Highest heat output in its category at 9,000 BTU when hardwired.",
        "specs": [("Type", "Built-in 3-sided electric"), ("Width", "50 in"), ("BTU", "9,000 BTU/hr (240V)"), ("Power", "120V or 240V"), ("Coverage", "Up to 800 sq ft"), ("Warranty", "Limited Lifetime")],
    },
    {
        "slug": "nefb60h", "model": "NEFB60H-3SV", "name": "Trivista 60",
        "series": "Trivista™ Primis", "category": "Electric Fireplaces", "category_link": "electric-fireplaces.html",
        "art": "electric", "nav": "electric",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+Trivista+60",
        "stw_status": "search",
        "tagline": "60-inch three-sided electric with 2,800W of heat capacity.",
        "description": "The Trivista 60 is the largest member of the Primis line. When hardwired for 240V, it delivers a robust 9,000 BTU and 2,800 watts.",
        "specs": [("Type", "Built-in 3-sided electric"), ("Width", "60 in"), ("BTU", "9,000 BTU/hr (240V)"), ("Power", "120V or 240V"), ("Coverage", "Up to 800 sq ft"), ("Warranty", "Limited Lifetime")],
    },
    {
        "slug": "nefl50h", "model": "NEFL50H-3SV", "name": "Trivista Pictura 50",
        "series": "Trivista™ Pictura", "category": "Electric Fireplaces", "category_link": "electric-fireplaces.html",
        "art": "electric", "nav": "electric",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+Pictura",
        "stw_status": "search",
        "tagline": "Three-sided electric with multicolor LED options.",
        "description": "The Pictura adds multicolor LED flames to the three-sided format. Choose from a curated palette or cycle through colors via remote.",
        "specs": [("Type", "Built-in 3-sided electric"), ("Width", "50 in"), ("LED", "Multicolor flame & ember"), ("Power", "120V or 240V"), ("BTU", "9,000 BTU/hr (240V)"), ("Warranty", "Limited Lifetime")],
    },
    {
        "slug": "cinema24", "model": "NEFB24H-3A", "name": "Cinema 24",
        "series": "Cinema™", "category": "Electric Fireplaces", "category_link": "electric-fireplaces.html",
        "art": "electric", "nav": "electric",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+Cinema",
        "stw_status": "search",
        "tagline": "Compact 24-inch electric insert for tight spaces.",
        "description": "The Cinema 24 fits in mantels, recessed walls, and entertainment centers. Plug-in 120V operation with adjustable thermostat.",
        "specs": [("Type", "Built-in electric"), ("Width", "24 in"), ("BTU", "5,000 BTU/hr"), ("Power", "120V plug-in"), ("Thermostat", "Adjustable"), ("Warranty", "Limited Lifetime")],
    },
    # WOOD FIREPLACES
    {
        "slug": "nz3000", "model": "NZ3000H-1", "name": "High Country 3000",
        "series": "High Country™", "category": "Wood Fireplaces", "category_link": "wood-fireplaces.html",
        "art": "wood", "nav": "wood",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+NZ3000",
        "stw_status": "search",
        "tagline": "EPA Phase III certified wood-burning fireplace.",
        "description": "The High Country 3000 brings traditional wood heat to a modern home with low emissions. ZERO GRAVITY™ door system separates screen and ceramic glass operation.",
        "specs": [("Type", "Wood burning"), ("BTU", "70,000 BTU/hr"), ("EPA", "Phase III certified"), ("Door", "ZERO GRAVITY™"), ("Firebox", "Refractory-lined"), ("Warranty", "Limited Lifetime")],
    },
    {
        "slug": "nz5000", "model": "NZ5000-T", "name": "High Country 5000",
        "series": "High Country™", "category": "Wood Fireplaces", "category_link": "wood-fireplaces.html",
        "art": "wood", "nav": "wood",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+NZ5000",
        "stw_status": "search",
        "tagline": "European-inspired clean-face wood fireplace.",
        "description": "The High Country 5000 combines a clean-face contemporary opening with the comfort of real wood. Holds up to 50 lb of wood; the air-wash system keeps the glass spotless.",
        "specs": [("Type", "Wood burning"), ("BTU", "80,000 BTU/hr"), ("Firebox", "Up to 50 lb wood"), ("Glass", "Heat-radiating ceramic"), ("Air wash", "Yes"), ("Warranty", "Limited Lifetime")],
    },
    {
        "slug": "nz6000", "model": "NZ6000", "name": "High Country 6000",
        "series": "High Country™", "category": "Wood Fireplaces", "category_link": "wood-fireplaces.html",
        "art": "wood", "nav": "wood",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+NZ6000",
        "stw_status": "search",
        "tagline": "Rustic styling meets state-of-the-art wood-burning tech.",
        "description": "The NZ6000 blends a more traditional stone-hearth aesthetic with the same clean-burn engineering as the rest of the High Country line.",
        "specs": [("Type", "Wood burning"), ("BTU", "80,000 BTU/hr"), ("Style", "Rustic / traditional"), ("Door", "ZERO GRAVITY™"), ("Firebox", "Refractory-lined"), ("Warranty", "Limited Lifetime")],
    },
    {
        "slug": "nz8000", "model": "NZ8000", "name": "High Country 8000",
        "series": "High Country™", "category": "Wood Fireplaces", "category_link": "wood-fireplaces.html",
        "art": "wood", "nav": "wood",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+NZ8000",
        "stw_status": "search",
        "tagline": "The widest High Country — a true heating workhorse.",
        "description": "Massive viewing area, clean face, and serious heat output. The NZ8000 is built for the home that runs on wood through the winter.",
        "specs": [("Type", "Wood burning"), ("BTU", "100,000 BTU/hr"), ("Style", "Clean face, wide viewing"), ("Door", "ZERO GRAVITY™"), ("Firebox", "Refractory-lined, oversize"), ("Warranty", "Limited Lifetime")],
    },
    {
        "slug": "nz26", "model": "NZ26WI", "name": "NZ-26 Prestige",
        "series": "Prestige", "category": "Wood Fireplaces", "category_link": "wood-fireplaces.html",
        "art": "wood", "nav": "wood",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+NZ26",
        "stw_status": "search",
        "tagline": "EPA wood insert with cast iron door styling.",
        "description": "Drop the NZ-26 into an existing masonry fireplace and gain modern efficiency without losing the character of the original opening.",
        "specs": [("Type", "Wood insert"), ("Door", "Cast iron"), ("EPA", "Certified"), ("Firebox", "Standard depth"), ("Application", "Masonry retrofit"), ("Warranty", "Limited Lifetime")],
    },
    {
        "slug": "epi3", "model": "EPI3", "name": "EPI3 Wood Insert",
        "series": "EPI", "category": "Wood Fireplaces", "category_link": "wood-fireplaces.html",
        "art": "wood", "nav": "wood",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+EPI3",
        "stw_status": "search",
        "tagline": "Compact, efficient wood insert for everyday heating.",
        "description": "The EPI3 packs 65,000 BTU into a 1.7 cubic foot firebox, delivering steady heat for the average-sized living room.",
        "specs": [("Type", "Wood insert"), ("BTU", "65,000 BTU/hr"), ("Firebox", "1.7 cu ft"), ("Door", "Cast iron"), ("EPA", "Certified"), ("Warranty", "Limited Lifetime")],
    },
    # OUTDOOR FIREPLACES
    {
        "slug": "gss48", "model": "GSS48", "name": "Galaxy 48",
        "series": "Galaxy™", "category": "Outdoor Fireplaces", "category_link": "outdoor-fireplaces.html",
        "art": "outdoor", "nav": "outdoor",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+GSS48",
        "stw_status": "search",
        "tagline": "48-inch linear outdoor gas fireplace, weather-rated.",
        "description": "The Galaxy 48 is built for the elements: weather-resistant construction, glass wind deflector, and a sleek modern profile that elevates any outdoor living space.",
        "specs": [("Type", "Outdoor gas"), ("Width", "48 in"), ("Material", "Steel"), ("Wind deflector", "Tempered glass"), ("Fuel", "NG or LP"), ("Warranty", "Limited")],
    },
    {
        "slug": "gss48st", "model": "GSS48ST", "name": "Galaxy 48 Stainless",
        "series": "Galaxy™", "category": "Outdoor Fireplaces", "category_link": "outdoor-fireplaces.html",
        "art": "outdoor", "nav": "outdoor",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+GSS48ST",
        "stw_status": "search",
        "tagline": "The Galaxy 48 in brushed stainless steel.",
        "description": "All the features of the GSS48 finished in marine-grade brushed stainless. The premium choice for coastal homes and high-end outdoor kitchens.",
        "specs": [("Type", "Outdoor gas"), ("Width", "48 in"), ("Material", "Brushed stainless"), ("Wind deflector", "Tempered glass"), ("Fuel", "NG or LP"), ("Warranty", "Limited")],
    },
    {
        "slug": "gss36cf", "model": "GSS36CFN", "name": "Riverside 36",
        "series": "Riverside™", "category": "Outdoor Fireplaces", "category_link": "outdoor-fireplaces.html",
        "art": "outdoor", "nav": "outdoor",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+GSS36CF",
        "stw_status": "search",
        "tagline": "36-inch clean face outdoor gas fireplace.",
        "description": "The Riverside 36 brings on-trend clean-face contemporary design to outdoor entertaining. Up to 50,000 BTU keeps your patio comfortable into the cool months.",
        "specs": [("Type", "Outdoor gas"), ("Width", "36 in"), ("BTU", "50,000 BTU/hr"), ("Style", "Clean face contemporary"), ("Fuel", "NG or LP"), ("Warranty", "Limited")],
    },
    {
        "slug": "gss42cf", "model": "GSS42CFN", "name": "Riverside 42 Clean Face",
        "series": "Riverside™", "category": "Outdoor Fireplaces", "category_link": "outdoor-fireplaces.html",
        "art": "outdoor", "nav": "outdoor",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+GSS42CF",
        "stw_status": "search",
        "tagline": "42-inch clean face outdoor gas fireplace with electronic ignition.",
        "description": "The Riverside 42 ups the BTU and viewing area for larger outdoor rooms. Electronic ignition with a wireless wall switch makes operation simple.",
        "specs": [("Type", "Outdoor gas"), ("Width", "42 in"), ("BTU", "60,000 BTU/hr"), ("Ignition", "Electronic"), ("Fuel", "NG or LP"), ("Warranty", "Limited")],
    },
    {
        "slug": "gsst8", "model": "GSST8", "name": "Riverside Torch",
        "series": "Riverside™", "category": "Outdoor Fireplaces", "category_link": "outdoor-fireplaces.html",
        "art": "outdoor", "nav": "outdoor",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+GSST8",
        "stw_status": "search",
        "tagline": "A vertical outdoor flame torch for ambiance.",
        "description": "The Riverside Torch delivers tall, dancing flames as a standalone landscape feature or pair element to a fireplace. Perfect for entryways and pool decks.",
        "specs": [("Type", "Outdoor torch"), ("Profile", "Vertical"), ("Fuel", "NG or LP"), ("Material", "Stainless"), ("Warranty", "Limited")],
    },
    {
        "slug": "gpfl48", "model": "GPFL48MHP", "name": "Linear Patioflame",
        "series": "Patioflame®", "category": "Outdoor Fireplaces", "category_link": "outdoor-fireplaces.html",
        "art": "outdoor", "nav": "outdoor",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+Patioflame+GPFL48",
        "stw_status": "search",
        "tagline": "48-inch linear patio fire feature.",
        "description": "The Linear Patioflame mounts to a low wall or deck edge for a sleek modern fire feature. 60,000 BTU heat output and glass wind guards.",
        "specs": [("Type", "Patio fire feature"), ("Width", "48 in linear"), ("BTU", "60,000 BTU/hr"), ("Fuel", "NG or LP"), ("Warranty", "Limited")],
    },
    {
        "slug": "gpfp", "model": "GPFP-2", "name": "Round Patioflame",
        "series": "Patioflame®", "category": "Outdoor Fireplaces", "category_link": "outdoor-fireplaces.html",
        "art": "outdoor", "nav": "outdoor",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+Patioflame+GPFP",
        "stw_status": "search",
        "tagline": "Round stainless patio fire pit.",
        "description": "A classic gather-around fire pit in marine-grade stainless. 36,000 BTU is perfect for backyard conversation and roasting.",
        "specs": [("Type", "Round patio fire pit"), ("BTU", "36,000 BTU/hr"), ("Material", "Stainless steel"), ("Fuel", "NG or LP"), ("Warranty", "Limited")],
    },
    {
        "slug": "hamptons-table", "model": "GPFTS-PT", "name": "Hamptons Fire Table",
        "series": "Patioflame® Tables", "category": "Outdoor Fireplaces", "category_link": "outdoor-fireplaces.html",
        "art": "outdoor", "nav": "outdoor",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+Hamptons+Fire+Table",
        "stw_status": "search",
        "tagline": "Square fire table with porcelain top, seats four comfortably.",
        "description": "The Hamptons combines a useable patio table surface with a centered fire feature. Porcelain top, weather-rated frame, push-button ignition.",
        "specs": [("Type", "Patio fire table"), ("Top", "Porcelain"), ("BTU", "50,000 BTU/hr"), ("Seating", "4-6"), ("Fuel", "NG or LP"), ("Warranty", "Limited")],
    },
    # HEATING & COOLING
    {
        "slug": "wtbcs0018", "model": "WTBCS0018RA1-N", "name": "1.5 Ton Air Conditioner",
        "series": "Whisper Quiet™", "category": "Heating & Cooling", "category_link": "heating.html",
        "art": "hvac", "nav": "heating",
        "stw": "https://skipthewarehouse.com/product/napoleon-wtbcs0018ra1-n-15-ton-air-conditioner-r-410a-seer2-143/",
        "stw_status": "direct",
        "tagline": "1.5 ton premium central AC condenser.",
        "description": "Compact 1.5 ton condenser sized for studios, condos, and small homes. Whisper Quiet™ operation with high-efficiency compressor and R-410A refrigerant.",
        "specs": [("Capacity", "1.5 Ton (18,000 BTU)"), ("Refrigerant", "R-410A"), ("Efficiency", "SEER2 14.3"), ("Sound", "Whisper Quiet™"), ("Application", "Outdoor condenser"), ("Warranty", "Limited")],
    },
    {
        "slug": "wtbcs0024", "model": "WTBCS0024RA1-N", "name": "2 Ton Air Conditioner",
        "series": "Whisper Quiet™", "category": "Heating & Cooling", "category_link": "heating.html",
        "art": "hvac", "nav": "heating",
        "stw": "https://skipthewarehouse.com/product/napoleon-wtbcs0024ra1-n-2-ton-air-conditioner-r-410a-seer2-143/",
        "stw_status": "direct",
        "tagline": "2 ton premium central AC condenser.",
        "description": "Built for typical 1,000–1,400 square foot homes. Same Whisper Quiet™ platform with the next size up of compressor.",
        "specs": [("Capacity", "2 Ton (24,000 BTU)"), ("Refrigerant", "R-410A"), ("Efficiency", "SEER2 14.3"), ("Sound", "Whisper Quiet™"), ("Application", "Outdoor condenser"), ("Warranty", "Limited")],
    },
    {
        "slug": "wtbcs0036", "model": "WTBCS0036RA1-N", "name": "3 Ton Air Conditioner",
        "series": "Whisper Quiet™", "category": "Heating & Cooling", "category_link": "heating.html",
        "art": "hvac", "nav": "heating",
        "stw": "https://skipthewarehouse.com/product/napoleon-wtbcs0036ra1-n-3ton-air-conditioner-r-410a-seer2-143/",
        "stw_status": "direct",
        "tagline": "3 ton premium central AC condenser.",
        "description": "The most popular size in the Napoleon residential AC line. Sized for typical 1,500–2,000 square foot homes.",
        "specs": [("Capacity", "3 Ton (36,000 BTU)"), ("Refrigerant", "R-410A"), ("Efficiency", "SEER2 14.3"), ("Sound", "Whisper Quiet™"), ("Application", "Outdoor condenser"), ("Warranty", "Limited")],
    },
    {
        "slug": "wtbcs0042", "model": "WTBCS0042RA1-N", "name": "3.5 Ton Air Conditioner",
        "series": "Whisper Quiet™", "category": "Heating & Cooling", "category_link": "heating.html",
        "art": "hvac", "nav": "heating",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+WTBCS0042",
        "stw_status": "search",
        "tagline": "3.5 ton condenser for mid-large homes.",
        "description": "Stepped-up capacity for two-story or larger homes. Same Whisper Quiet™ footprint as the 3 ton model.",
        "specs": [("Capacity", "3.5 Ton (42,000 BTU)"), ("Refrigerant", "R-410A"), ("Efficiency", "SEER2 14.3"), ("Sound", "Whisper Quiet™"), ("Application", "Outdoor condenser"), ("Warranty", "Limited")],
    },
    {
        "slug": "wtbcs0060", "model": "WTBCS0060RA1-N", "name": "5 Ton Air Conditioner",
        "series": "Whisper Quiet™", "category": "Heating & Cooling", "category_link": "heating.html",
        "art": "hvac", "nav": "heating",
        "stw": "https://skipthewarehouse.com/?s=Napoleon+WTBCS0060",
        "stw_status": "search",
        "tagline": "5 ton condenser, the largest in the Whisper Quiet line.",
        "description": "For larger homes and light commercial. 60,000 BTU at SEER2 14.3 with the same R-410A refrigerant and high-efficiency compressor.",
        "specs": [("Capacity", "5 Ton (60,000 BTU)"), ("Refrigerant", "R-410A"), ("Efficiency", "SEER2 14.3"), ("Sound", "Whisper Quiet™"), ("Application", "Outdoor condenser"), ("Warranty", "Limited")],
    },
    {
        "slug": "p-c40a", "model": "P-C40A-F24A-A", "name": "2 Ton Thru-the-Wall Packaged Unit",
        "series": "Premium Series", "category": "Heating & Cooling", "category_link": "heating.html",
        "art": "hvac", "nav": "heating",
        "stw": "https://skipthewarehouse.com/product/napoleon-p-c40a-f24a-a-2-ton-40k-btu-thru-the-wall-packaged-unit-r-410a/",
        "stw_status": "direct",
        "tagline": "All-in-one heating and cooling, mounts through the wall.",
        "description": "Combines 2 ton cooling with 40,000 BTU gas heat in a single thru-the-wall package. 96.8% AFUE for serious heating efficiency.",
        "specs": [("Type", "Thru-the-wall packaged unit"), ("Cooling", "2 Ton"), ("Heating", "40,000 BTU"), ("Refrigerant", "R-410A"), ("Efficiency", "96.8% AFUE"), ("Warranty", "Limited")],
    },
]

TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{name} ({model}) — Napoleon | Napolean.shop</title>
  <meta name="description" content="{tagline}">
  <link rel="stylesheet" href="../styles.css">
</head>
<body data-nav="{nav}">
  <div id="header-slot"></div>

  <section class="page-header">
    <div class="container">
      <div class="breadcrumb">
        <a href="../index.html">Home</a><span>/</span>
        <a href="../{category_link}">{category}</a><span>/</span>
        {name}
      </div>
    </div>
  </section>

  <section class="container product-detail">
    <div class="gallery" data-art="{art}"></div>

    <div class="product-info">
      <div class="series-tag">{series}</div>
      <h1>{name}</h1>
      <div class="model">Model {model}</div>
      <p class="description">{description}</p>

      <div class="spec-table">
        {spec_rows}
      </div>

      <div class="purchase-box">
        <div class="stw-label">Available at Skip the Warehouse</div>
        <div class="stw-note">{stw_note}</div>
        <a href="{stw}" target="_blank" rel="noopener" class="btn btn-primary">Buy on Skip the Warehouse →</a>
      </div>
    </div>
  </section>

  <div id="footer-slot"></div>
  <script src="../partials.js"></script>
  <script src="../art.js"></script>
</body>
</html>
"""

def render_specs(specs):
    rows = []
    for k, v in specs:
        rows.append(f'<div class="row"><div class="key">{k}</div><div class="val">{v}</div></div>')
    return "\n        ".join(rows)

def main():
    for p in PRODUCTS:
        stw_note = (
            "This exact model is in stock and ships directly from Skip the Warehouse."
            if p["stw_status"] == "direct"
            else "Click through to view live pricing and availability on Skip the Warehouse."
        )
        html = TEMPLATE.format(
            name=p["name"],
            model=p["model"],
            tagline=p["tagline"],
            description=p["description"],
            series=p["series"],
            category=p["category"],
            category_link=p["category_link"],
            nav=p["nav"],
            art=p["art"],
            stw=p["stw"],
            stw_note=stw_note,
            spec_rows=render_specs(p["specs"]),
        )
        path = os.path.join(OUT_DIR, f"{p['slug']}.html")
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"Wrote {p['slug']}.html")

if __name__ == "__main__":
    main()
