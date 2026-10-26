/* ─── COMPREHENSIVE INDIAN EV MARKET CATALOG ─── */
const BRAND_NAMES = {
  tata: 'Tata Motors',
  mg: 'MG Motor',
  mahindra: 'Mahindra Electric',
  hyundai: 'Hyundai',
  byd: 'BYD India',
  kia: 'Kia',
  citroen: 'Citroën',
  bmw: 'BMW i',
  mercedes: 'Mercedes-Benz EQ',
  volvo: 'Volvo Recharge',
  audi: 'Audi e-tron',
  porsche: 'Porsche',
  tesla: 'Tesla',
};

const BRAND_MODELS = {
  tata: [
    { model: 'Nexon EV', battery: 40.5, range: 453, price: 1450000, seg: 'Compact SUV' },
    { model: 'Curvv EV', battery: 55.0, range: 585, price: 1750000, seg: 'Coupe SUV' },
    { model: 'Punch EV', battery: 35.0, range: 421, price: 1099000, seg: 'Micro SUV' },
    // Tiago EV — 19.2 kWh (XE ₹6.99L) & 24 kWh (XZ Plus ₹9.09L)
    { model: 'Tiago EV', battery: 19.2, range: 230, price: 699000, seg: 'Hatchback' },
    { model: 'Tiago EV Long Range', battery: 24.0, range: 315, price: 909000, seg: 'Hatchback' },
    { model: 'Tigor EV', battery: 26.0, range: 315, price: 1150000, seg: 'Sedan' },
  ],
  mg: [
    // MG Comet EV — Executive ₹7.90L | Exclusive BE ₹10.61L
    { model: 'Comet EV', battery: 17.3, range: 230, price: 790000, seg: 'Urban Micro' },
    // MG Windsor EV — Excite ₹14.70L | Essence Pro ₹19.00L
    { model: 'Windsor EV', battery: 38.0, range: 331, price: 1470000, seg: 'Crossover Utility' },
    // MG ZS EV — Exclusive ₹19.28L | Essence ₹22.21L
    { model: 'ZS EV', battery: 50.3, range: 461, price: 1928000, seg: 'Midsize SUV' },
  ],
  mahindra: [
    // XUV 3XO EV — Smart 25kWh ₹9.99L → Empowered+ S 35kWh ₹13.99L
    { model: 'XUV 3XO EV', battery: 25.0, range: 375, price: 999000, seg: 'Micro SUV' },
    { model: 'XUV 3XO EV Long Range', battery: 35.0, range: 460, price: 1249000, seg: 'Micro SUV' },
    // XUV400 EV — Creative Plus MR 30kWh ₹12.49L → Empowered Plus A 45 ₹17.89L
    { model: 'XUV400 EV', battery: 30.0, range: 375, price: 1249000, seg: 'Compact SUV' },
    { model: 'XUV400 EV 45', battery: 45.0, range: 456, price: 1434000, seg: 'Compact SUV' },
    // BE 6e Pack — 59kWh ₹18.90L | 79kWh up to ₹26.90L
    { model: 'BE 6e', battery: 59.0, range: 550, price: 1890000, seg: 'Next-Gen Coupe SUV' },
    { model: 'BE 6e 79', battery: 79.0, range: 682, price: 2450000, seg: 'Next-Gen Coupe SUV' },
    // XEV 9e Pack — Pack One ₹21.90L | Pack Three ₹30.50L
    { model: 'XEV 9e', battery: 59.0, range: 600, price: 2190000, seg: 'Flagship Coupe SUV' },
    { model: 'XEV 9e 79', battery: 79.0, range: 656, price: 2490000, seg: 'Flagship Coupe SUV' },
    { model: 'eVerito', battery: 21.2, range: 140, price: 600000, seg: 'Fleet Sedan' },
  ],
  hyundai: [
    // Creta EV — Executive 42kWh ₹18.03L | Premium(O) 51.4kWh ₹23.82L
    { model: 'Creta EV', battery: 42.0, range: 473, price: 1803000, seg: 'Midsize SUV' },
    { model: 'Creta EV Long Range', battery: 51.4, range: 574, price: 2149000, seg: 'Midsize SUV' },
    { model: 'Ioniq 5', battery: 72.6, range: 631, price: 4600000, seg: 'Premium Electric' },
    { model: 'Kona Electric', battery: 39.2, range: 452, price: 2380000, seg: 'Urban SUV' },
  ],
  byd: [
    { model: 'Seal', battery: 82.5, range: 650, price: 4100000, seg: 'Performance Sedan' },
    { model: 'Atto 3', battery: 60.5, range: 521, price: 2499000, seg: 'Midsize SUV' },
    { model: 'eMax 7', battery: 71.8, range: 530, price: 2690000, seg: 'Family MPV' },
    { model: 'e6', battery: 71.7, range: 500, price: 2900000, seg: 'Premium MPV' },
  ],
  kia: [
    // Carens EV — HTK Plus 42kWh ₹18.04L | X-Line ER 6-seat 51.4kWh ₹25.00L
    { model: 'Carens EV', battery: 42.0, range: 450, price: 1804000, seg: 'Family MPV' },
    { model: 'Carens EV Long Range', battery: 51.4, range: 550, price: 2249000, seg: 'Family MPV' },
    { model: 'EV6', battery: 77.4, range: 708, price: 6095000, seg: 'Crossover GT' },
    { model: 'EV9', battery: 99.8, range: 561, price: 12900000, seg: 'Flagship 3-Row SUV' },
  ],
  citroen: [
    { model: 'ë-C3', battery: 29.2, range: 320, price: 1160000, seg: 'Compact Hatch' },
    { model: 'Basalt EV', battery: 35.0, range: 360, price: 1350000, seg: 'SUV Coupe' },
  ],
  bmw: [
    { model: 'iX1', battery: 66.5, range: 440, price: 6690000, seg: 'Luxury Compact' },
    { model: 'i4', battery: 83.9, range: 590, price: 7250000, seg: 'Gran Coupe' },
    { model: 'iX', battery: 111.5, range: 630, price: 12100000, seg: 'Luxury SUV' },
    { model: 'i7', battery: 101.7, range: 625, price: 20300000, seg: 'Ultra-Luxury Sedan' },
  ],
  mercedes: [
    { model: 'EQA', battery: 66.5, range: 560, price: 6600000, seg: 'Luxury Compact SUV' },
    { model: 'EQB', battery: 70.5, range: 535, price: 7090000, seg: 'Luxury 7-Seater' },
    { model: 'EQE SUV', battery: 90.6, range: 550, price: 13900000, seg: 'Executive SUV' },
    { model: 'EQS', battery: 107.8, range: 857, price: 16200000, seg: 'Flagship Luxury' },
  ],
  volvo: [
    { model: 'EX40', battery: 69.0, range: 475, price: 5690000, seg: 'Compact Luxury SUV' },
    { model: 'EC40', battery: 78.0, range: 530, price: 6295000, seg: 'Crossover Coupe' },
  ],
  audi: [
    { model: 'Q8 e-tron', battery: 114.0, range: 600, price: 11500000, seg: 'Luxury SUV' },
    { model: 'e-tron GT', battery: 93.4, range: 500, price: 17200000, seg: 'Grand Tourer' },
  ],
  porsche: [
    { model: 'Taycan', battery: 79.2, range: 444, price: 16100000, seg: 'Sports EV' },
    { model: 'Macan EV', battery: 100.0, range: 613, price: 16500000, seg: 'Performance SUV' },
  ],
  tesla: [
    { model: 'Model 3', battery: 60.0, range: 513, price: 5500000, seg: 'Sport Sedan' },
    { model: 'Model Y', battery: 60.0, range: 455, price: 6000000, seg: 'Compact Crossover' },
  ],
};

// Flattened list for fast fuzzy live searching
const ALL_CARS = [];
Object.entries(BRAND_MODELS).forEach(([brandKey, models]) => {
  const brandTitle = BRAND_NAMES[brandKey] || brandKey;
  models.forEach(m => {
    ALL_CARS.push({
      brandKey,
      brandName: brandTitle,
      model: m.model,
      battery: m.battery,
      range: m.range,
      price: m.price,
      seg: m.seg,
      searchText: `${brandTitle} ${m.model} ${m.seg} ${m.battery}kwh`.toLowerCase()
    });
  });
});

const BRAND_BASE = {
  tata: 999000, mg: 790000, mahindra: 999000, hyundai: 1803000,
  byd: 2499000, kia: 1804000, citroen: 1100000, bmw: 6500000,
  mercedes: 6600000, volvo: 5690000, audi: 11500000, porsche: 16100000,
  tesla: 5500000,
};

const EV_DATA = {
  nexon:  { name:'Tata Nexon EV',    bat:'40.5 kWh', range:'453 km', price:'₹ 14.5L', use:'City & Highway',  chg:'7.2 kW AC / 50 kW DC' },
  mg:     { name:'MG ZS EV',         bat:'50.3 kWh', range:'461 km', price:'₹ 21.5L', use:'Long Distance',   chg:'50 kW DC'  },
  ioniq:  { name:'Hyundai Ioniq 5',  bat:'72.6 kWh', range:'631 km', price:'₹ 46.0L', use:'Ultra Premium',   chg:'220 kW DC' },
  xuv:    { name:'Mahindra XUV400',  bat:'39.4 kWh', range:'456 km', price:'₹ 15.5L', use:'SUV Enthusiast',  chg:'50 kW DC'  },
  atto:   { name:'BYD Atto 3',       bat:'60.5 kWh', range:'521 km', price:'₹ 25.0L', use:'Feature-rich Tech',chg:'80 kW DC'  },
};

/* ─── API CONFIGURATION & CONNECTION ─── */
function getApiBaseUrl() {
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  if (isLocal) {
    if (window.location.port === '8000') return ''; // served directly by FastAPI
    return 'http://localhost:8000';
  }
  if (window.EV_CONFIG && window.EV_CONFIG.API_URL) return window.EV_CONFIG.API_URL;
  if (window.EV_API_URL) return window.EV_API_URL;
  const stored = localStorage.getItem('EV_API_URL');
  if (stored && !stored.includes('ev-intellivalue-api')) return stored;

  return 'https://ev-intellivalue-backend.onrender.com';
}

function getAppDashboardUrl() {
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  if (isLocal) {
    return 'http://localhost:8501';
  }
  if (window.EV_CONFIG && window.EV_CONFIG.APP_URL) return window.EV_CONFIG.APP_URL;
  return 'https://ev-intellivalue-app.onrender.com';
}

function updateAppLinks() {
  const appUrl = getAppDashboardUrl();
  document.querySelectorAll('.app-link').forEach(link => {
    link.href = appUrl;
  });
}

async function checkApiHealth() {
  const statusDot = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');
  const endpointLabel = document.getElementById('serverEndpointLabel');
  if (!statusDot || !statusText) return;

  const baseUrl = getApiBaseUrl();
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(`${baseUrl}/api/health`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (res.ok) {
      statusDot.className = 'status-dot online';
      statusText.textContent = 'ML Engine Online (97.7% R²)';
      if (endpointLabel) endpointLabel.textContent = baseUrl ? 'Remote ML API Connected' : 'Local ML API Connected';
    } else {
      throw new Error(`HTTP ${res.status}`);
    }
  } catch (err) {
    statusDot.className = 'status-dot offline';
    statusText.textContent = 'Offline Mode (Calibrated Local)';
    if (endpointLabel) endpointLabel.textContent = 'Using Calibrated Offline Formula';
  }
}

/* ─── LIVE CAR SEARCH BOX IMPLEMENTATION ─── */
function setupCarSearch() {
  const searchInput = document.getElementById('carSearchInput');
  const resultsList = document.getElementById('searchResultsList');
  const clearBtn    = document.getElementById('clearSearchBtn');
  if (!searchInput || !resultsList) return;

  searchInput.addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    if (!q) {
      resultsList.style.display = 'none';
      if (clearBtn) clearBtn.style.display = 'none';
      return;
    }

    if (clearBtn) clearBtn.style.display = 'block';

    const matches = ALL_CARS.filter(c => c.searchText.includes(q));

    if (matches.length === 0) {
      resultsList.innerHTML = `<div class="no-results-notice">No matching vehicles found for "${escapeHtml(this.value)}"</div>`;
      resultsList.style.display = 'block';
      return;
    }

    resultsList.innerHTML = matches.slice(0, 8).map(car => `
      <div class="search-result-item" data-brand="${car.brandKey}" data-model="${escapeHtml(car.model)}" data-battery="${car.battery}">
        <div class="result-item-main">
          <span class="result-item-name">${escapeHtml(car.model)}</span>
          <span class="result-item-brand">${escapeHtml(car.brandName)} · ${escapeHtml(car.seg || '')}</span>
        </div>
        <div class="result-item-badges">
          <span class="badge-chip accent">${car.battery} kWh</span>
          <span class="badge-chip">${car.range} km</span>
          <span class="badge-chip">₹ ${(car.price / 100000).toFixed(1)}L</span>
        </div>
      </div>
    `).join('');

    resultsList.style.display = 'block';

    resultsList.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', function() {
        const brandKey = this.dataset.brand;
        const modelName = this.dataset.model;
        const batteryVal = parseFloat(this.dataset.battery);

        selectVehicle(brandKey, modelName, batteryVal);

        searchInput.value = `${BRAND_NAMES[brandKey] || brandKey} ${modelName}`;
        resultsList.style.display = 'none';
      });
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      resultsList.style.display = 'none';
      clearBtn.style.display = 'none';
      searchInput.focus();
    });
  }

  // Close search dropdown on click outside
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !resultsList.contains(e.target)) {
      resultsList.style.display = 'none';
    }
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function selectVehicle(brandKey, modelName, batteryCapacity) {
  const brandSelect = document.getElementById('calc-brand');
  const modelSelect = document.getElementById('calc-model');
  const alertBox = document.getElementById('calcValidationAlert');

  if (alertBox) {
    alertBox.style.display = 'none';
    alertBox.textContent = '';
  }

  if (brandSelect) {
    brandSelect.classList.remove('input-error');
    brandSelect.value = brandKey;
    populateModels(modelName);
  }
  if (modelSelect) {
    modelSelect.classList.remove('input-error');
    modelSelect.value = modelName;
  }

  if (batteryCapacity) {
    updateBatteryDefault(batteryCapacity);
  }
}

function populateModels(selectedModelToSet = null) {
  const brandSelect = document.getElementById('calc-brand');
  const modelSelect = document.getElementById('calc-model');
  if (!brandSelect || !modelSelect) return;

  const selectedBrand = brandSelect.value;
  const models = BRAND_MODELS[selectedBrand] || [];

  modelSelect.innerHTML = '';

  // If no brand selected yet, keep model disabled with clear guidance prompt
  if (!selectedBrand || models.length === 0) {
    modelSelect.disabled = true;
    const opt = document.createElement('option');
    opt.value = '';
    opt.disabled = true;
    opt.selected = true;
    opt.textContent = '-- Select Model (Choose Brand First) --';
    modelSelect.appendChild(opt);
    return;
  }

  modelSelect.disabled = false;
  const placeholderOpt = document.createElement('option');
  placeholderOpt.value = '';
  placeholderOpt.disabled = true;
  if (!selectedModelToSet) {
    placeholderOpt.selected = true;
  }
  placeholderOpt.textContent = '-- Select Model --';
  modelSelect.appendChild(placeholderOpt);

  models.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.model;
    opt.textContent = `${m.model} (${m.battery} kWh · ${m.range} km)`;
    if (selectedModelToSet && m.model === selectedModelToSet) {
      opt.selected = true;
    }
    modelSelect.appendChild(opt);
  });

  if (selectedModelToSet) {
    const chosenModel = models.find(m => m.model === selectedModelToSet);
    if (chosenModel) {
      updateBatteryDefault(chosenModel.battery);
    }
  }
}

function updateBatteryDefault(capacity) {
  const batterySlider = document.getElementById('calc-battery');
  const batteryBox    = document.getElementById('calc-battery-input');
  if (batterySlider) batterySlider.value = capacity;
  if (batteryBox) batteryBox.value = capacity;
}

/* ─── INITIALIZATION ON LOAD ─── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash) splash.classList.add('done');
  }, 1600);
  checkApiHealth();
  updateAppLinks();
  populateModels();
  setupCarSearch();
});

/* ─── DARK / LIGHT THEME TOGGLE ─── */
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = themeToggle.querySelector('.theme-icon');
let isDark = true;
themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeIcon.textContent = isDark ? '🌙' : '☀️';
});

/* ─── NAVBAR SCROLL ─── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ─── MOBILE HAMBURGER ─── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* ─── ACTIVE NAV ON SCROLL ─── */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) current = s.id; });
  navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
}, { passive: true });

/* ─── PARTICLES ANIMATION ─── */
(function spawnParticles() {
  const c = document.getElementById('particles');
  if (!c) return;
  for (let i = 0; i < 24; i++) {
    const p   = document.createElement('div');
    p.className = 'particle';
    const sz  = Math.random() * 4 + 2;
    const col = ['#10b981','#3b82f6','#8b5cf6'][i % 3];
    p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;background:${col};animation-duration:${Math.random()*10+10}s;animation-delay:${Math.random()*12}s;opacity:0`;
    c.appendChild(p);
  }
})();

/* ─── SCROLL REVEAL OBSERVER ─── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.animate-on-scroll').forEach(el => revealObs.observe(el));

/* ─── NUMBER COUNTER ANIMATION ─── */
function animateCounter(el) {
  const target   = parseFloat(el.dataset.target);
  const decimal  = target % 1 !== 0;
  const duration = 1800;
  const start    = performance.now();
  (function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const v = target * (1 - Math.pow(1 - p, 3));
    el.textContent = decimal ? v.toFixed(1) : Math.floor(v).toLocaleString('en-IN');
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = decimal ? target.toFixed(1) : target.toLocaleString('en-IN');
  })(start);
}
const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); cntObs.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-val[data-target]').forEach(el => cntObs.observe(el));

/* ─── CALCULATOR CONTROLS & SYNC ─── */
const fmtINR = n => '₹ ' + Math.round(n).toLocaleString('en-IN');

// Brand change listener
const calcBrand = document.getElementById('calc-brand');
if (calcBrand) {
  calcBrand.addEventListener('change', () => {
    calcBrand.classList.remove('input-error');
    const alertBox = document.getElementById('calcValidationAlert');
    if (alertBox) alertBox.style.display = 'none';
    populateModels();
  });
}

// Model change listener
const calcModel = document.getElementById('calc-model');
if (calcModel) {
  calcModel.addEventListener('change', function() {
    this.classList.remove('input-error');
    const alertBox = document.getElementById('calcValidationAlert');
    if (alertBox) alertBox.style.display = 'none';
    const brand = document.getElementById('calc-brand').value;
    const models = BRAND_MODELS[brand] || [];
    const found = models.find(m => m.model === this.value);
    if (found) {
      updateBatteryDefault(found.battery);
    }
  });
}

// Synchronize Battery Capacity Slider & Number Input Box
const batterySlider = document.getElementById('calc-battery');
const batteryBox    = document.getElementById('calc-battery-input');
if (batterySlider && batteryBox) {
  batterySlider.addEventListener('input', () => {
    batteryBox.value = batterySlider.value;
  });
  batteryBox.addEventListener('input', () => {
    const val = parseFloat(batteryBox.value);
    if (!isNaN(val)) batterySlider.value = val;
  });
}

// Synchronize Battery Health Slider & Number Input Box
const healthSlider = document.getElementById('calc-health');
const healthBox    = document.getElementById('calc-health-input');
if (healthSlider && healthBox) {
  healthSlider.addEventListener('input', () => {
    healthBox.value = healthSlider.value;
  });
  healthBox.addEventListener('input', () => {
    const val = parseFloat(healthBox.value);
    if (!isNaN(val)) healthSlider.value = val;
  });
}

// Synchronize Odometer Km Slider & Number Input Box
const kmSlider = document.getElementById('calc-km');
const kmBox    = document.getElementById('calc-km-input');
if (kmSlider && kmBox) {
  kmSlider.addEventListener('input', () => {
    kmBox.value = kmSlider.value;
  });
  kmBox.addEventListener('input', () => {
    const val = parseInt(kmBox.value);
    if (!isNaN(val)) kmSlider.value = val;
  });
}

/* ─── CALCULATE BUTTON CLICK HANDLER ─── */
document.getElementById('calc-btn').addEventListener('click', async () => {
  const brandSelect = document.getElementById('calc-brand');
  const modelSelect = document.getElementById('calc-model');
  const alertBox = document.getElementById('calcValidationAlert');
  const placeholder = document.getElementById('resultPlaceholder') || document.querySelector('.result-placeholder');
  const resultOutput = document.getElementById('resultOutput');

  // Clear previous error states
  if (brandSelect) brandSelect.classList.remove('input-error');
  if (modelSelect) modelSelect.classList.remove('input-error');
  if (alertBox) {
    alertBox.style.display = 'none';
    alertBox.textContent = '';
  }

  const brandInput = brandSelect ? brandSelect.value.trim() : '';
  const modelInput = modelSelect ? modelSelect.value.trim() : '';

  // REQUIRE EXPLICIT CAR SELECTION
  if (!brandInput || !modelInput) {
    let msg = '⚠️ Please select both a vehicle Brand and Model before calculating valuation.';
    if (!brandInput && !modelInput) {
      if (brandSelect) brandSelect.classList.add('input-error');
      if (modelSelect) modelSelect.classList.add('input-error');
    } else if (!brandInput) {
      if (brandSelect) brandSelect.classList.add('input-error');
      msg = '⚠️ Please select a vehicle Brand / Manufacturer.';
    } else if (!modelInput) {
      if (modelSelect) modelSelect.classList.add('input-error');
      msg = '⚠️ Please select a specific Vehicle Model to calculate resale value.';
    }

    if (alertBox) {
      alertBox.textContent = msg;
      alertBox.style.display = 'flex';
      alertBox.classList.remove('shake');
      void alertBox.offsetWidth;
      alertBox.classList.add('shake');
    }

    // Keep placeholder visible, do NOT show calculation
    if (placeholder) placeholder.style.display = 'flex';
    if (resultOutput) resultOutput.style.display = 'none';
    return;
  }

  const year       = parseInt(document.getElementById('calc-year').value);
  const region     = document.getElementById('calc-region') ? document.getElementById('calc-region').value : 'Mumbai';
  const battery    = parseFloat(document.getElementById('calc-battery-input')?.value || document.getElementById('calc-battery')?.value || 40.5);
  const health     = parseFloat(document.getElementById('calc-health-input')?.value || document.getElementById('calc-health')?.value || 88);
  const km         = parseInt(document.getElementById('calc-km-input')?.value || document.getElementById('calc-km')?.value || 30000);
  const btn        = document.getElementById('calc-btn');

  const origBtnText = btn.innerHTML;
  btn.innerHTML = '⚡ Computing ML Valuation...';
  btn.disabled = true;

  const baseUrl = getApiBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/api/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        brand: brandInput,
        model: modelInput,
        year: year,
        battery_capacity_kwh: battery,
        battery_health_percent: health,
        km_driven: km,
        region: region
      })
    });

    if (!response.ok) {
      throw new Error(`API error HTTP ${response.status}`);
    }

    const data = await response.json();

    document.getElementById('res-low').textContent  = data.low_estimate_formatted;
    document.getElementById('res-mid').textContent  = data.predicted_price_formatted;
    document.getElementById('res-high').textContent = data.high_estimate_formatted;

    if (document.getElementById('res-retention')) {
      document.getElementById('res-retention').textContent = `${data.retention_pct}% (${data.market_liquidity})`;
    }
    if (document.getElementById('res-eff-range')) {
      document.getElementById('res-eff-range').textContent = `~${data.effective_range_km} km`;
    }

    document.getElementById('f-age').textContent = `-${data.age_factor_pct}%`;
    document.getElementById('f-bat').textContent = `-${data.battery_deduction_pct}%`;
    document.getElementById('f-km').textContent  = `-${data.mileage_penalty_pct}%`;

    const badge = document.getElementById('resultSourceBadge');
    if (badge) {
      badge.textContent = `⚡ ML Gradient Boosting (${data.confidence_accuracy} R²)`;
      badge.style.background = 'rgba(16, 185, 129, 0.15)';
      badge.style.color = '#10b981';
    }

    if (placeholder) placeholder.style.display = 'none';
    if (resultOutput) resultOutput.style.display = 'block';

  } catch (err) {
    console.warn('API call failed, running calibrated local calculation:', err);

    const baseModels = BRAND_MODELS[brandInput] || [];
    const foundModel = baseModels.find(m => m.model === modelInput);
    const basePrice   = foundModel ? foundModel.price : (BRAND_BASE[brandInput] || 1200000);

    const currentYear = 2026;
    const age         = Math.max(0, currentYear - year);
    const ageRetentionCurves = {
      0: 0.96,
      1: 0.84,
      2: 0.71,
      3: 0.58,
      4: 0.48,
      5: 0.40,
      6: 0.33,
      7: 0.28,
      8: 0.24
    };
    const baseRetention = ageRetentionCurves[age] !== undefined
      ? ageRetentionCurves[age]
      : Math.max(0.20, 0.40 - (age - 5) * 0.04);

    const expectedSoh = Math.max(70.0, 100.0 - (age * 2.3));
    const sohDelta = health - expectedSoh;
    const sohMultiplier = Math.max(0.78, Math.min(1.12, 1.0 + (sohDelta * 0.008)));

    const expectedKm = Math.max(6000, age * 12000);
    const kmDelta = km - expectedKm;
    const kmMultiplier = Math.max(0.85, Math.min(1.10, 1.0 - (kmDelta / 350000)));

    const mid = Math.round(basePrice * baseRetention * sohMultiplier * kmMultiplier);
    const low = Math.round(mid * 0.95);
    const high = Math.round(mid * 1.05);

    const retention = Math.round((mid / basePrice) * 100);
    const factoryRange = foundModel ? foundModel.range : (battery * 7.5);
    const estRange = Math.round(factoryRange * (health / 100.0) * 0.88);

    const ageFactorPct = ((1.0 - baseRetention) * 100).toFixed(1);
    const batDeductionPct = (health < expectedSoh ? ((expectedSoh - health) * 0.8).toFixed(1) : '0.0');
    const kmPenaltyPct = (km > expectedKm ? (((km - expectedKm) / 350000) * 100).toFixed(1) : '0.0');

    document.getElementById('res-low').textContent  = fmtINR(low);
    document.getElementById('res-mid').textContent  = fmtINR(mid);
    document.getElementById('res-high').textContent = fmtINR(high);

    if (document.getElementById('res-retention')) {
      const tier = retention >= 70 ? 'Prime Tier' : retention >= 50 ? 'Strong Value' : 'Value Tier';
      document.getElementById('res-retention').textContent = `${retention}% (${tier})`;
    }
    if (document.getElementById('res-eff-range')) {
      document.getElementById('res-eff-range').textContent = `~${estRange} km`;
    }

    document.getElementById('f-age').textContent = `-${ageFactorPct}%`;
    document.getElementById('f-bat').textContent = `-${batDeductionPct}%`;
    document.getElementById('f-km').textContent  = `-${kmPenaltyPct}%`;

    const badge = document.getElementById('resultSourceBadge');
    if (badge) {
      badge.textContent = '⚡ Calibrated Model (Offline)';
      badge.style.background = 'rgba(245, 158, 11, 0.15)';
      badge.style.color = '#f59e0b';
    }

    if (placeholder) placeholder.style.display = 'none';
    if (resultOutput) resultOutput.style.display = 'block';

  } finally {
    btn.innerHTML = origBtnText;
    btn.disabled = false;
  }
});

/* ─── EXPANDED COMPARE TOOL (18 Indian EV Models - 2026 Resale Benchmarks) ─── */
const CMP_DB = {
  // Budget & Commuter (< ₹15L)
  tiago:   { name:'Tata Tiago EV',       brand:'Tata',     seg:'City Hatchback',   bat:24.0, chem:'LFP',      range:315, hwyRange:210, price: 849000, resale3y: 509000, chg:'25 kW DC (~57 min)', accel:'12.0s',fuel:'₹ 2.5L', war:'8 yr / 1.6L km', warTrans:'Fully Transferable', use:'Daily Urban Commute',  tagColor:'#10b981' },
  punch:   { name:'Tata Punch EV',       brand:'Tata',     seg:'Micro SUV',        bat:35.0, chem:'LFP',      range:421, hwyRange:295, price:1199000, resale3y: 719000, chg:'50 kW DC (~56 min)', accel:'9.5s', fuel:'₹ 3.2L', war:'8 yr / 1.6L km', warTrans:'Fully Transferable', use:'City & Weekend Trips',tagColor:'#10b981' },
  tigor:   { name:'Tata Tigor EV',       brand:'Tata',     seg:'Compact Sedan',    bat:26.0, chem:'LFP',      range:315, hwyRange:205, price:1249000, resale3y: 599000, chg:'25 kW DC (~65 min)', accel:'12.2s',fuel:'₹ 2.8L', war:'8 yr / 1.6L km', warTrans:'Fully Transferable', use:'Commercial & Fleet',    tagColor:'#10b981' },
  comet:   { name:'MG Comet EV',         brand:'MG',       seg:'Micro City Car',   bat:17.3, chem:'LFP',      range:230, hwyRange:150, price: 699000, resale3y: 419000, chg:'3.3/7.4 kW AC (~3.5h)',accel:'14.0s',fuel:'₹ 1.8L', war:'8 yr / 1.2L km', warTrans:'Fully Transferable', use:'Dense City Commute',   tagColor:'#3b82f6' },
  ec3:     { name:'Citroën ë-C3',        brand:'Citroën',  seg:'Cross-Hatch',      bat:29.2, chem:'LFP',      range:320, hwyRange:215, price:1161000, resale3y: 580000, chg:'30 kW DC (~57 min)', accel:'15.3s',fuel:'₹ 2.9L', war:'7 yr / 1.4L km', warTrans:'Fully Transferable', use:'Budget Family Run',   tagColor:'#eab308' },

  // Mainstream SUVs & Crossovers (₹15L – ₹30L)
  nexon:   { name:'Tata Nexon EV',       brand:'Tata',     seg:'Compact SUV',      bat:40.5, chem:'LFP',      range:453, hwyRange:320, price:1449000, resale3y: 782000, chg:'50 kW DC (~56 min)', accel:'8.9s', fuel:'₹ 3.8L', war:'8 yr / 1.6L km', warTrans:'Fully Transferable', use:'Family All-Rounder',  tagColor:'#10b981' },
  curvv:   { name:'Tata Curvv EV',       brand:'Tata',     seg:'Coupe SUV',        bat:55.0, chem:'LFP',      range:585, hwyRange:420, price:1749000, resale3y: 962000, chg:'70 kW DC (~45 min)', accel:'8.6s', fuel:'₹ 4.5L', war:'8 yr / 1.6L km', warTrans:'Fully Transferable', use:'Highway Touring',      tagColor:'#06b6d4' },
  windsor: { name:'MG Windsor EV',       brand:'MG',       seg:'Aero Crossover',   bat:38.0, chem:'LFP',      range:331, hwyRange:245, price:1349000, resale3y: 728000, chg:'45 kW DC (~55 min)', accel:'9.2s', fuel:'₹ 3.5L', war:'Lifetime 1st / 8yr', warTrans:'8 Yr on 2nd Owner',  use:'Comfort Cruiser',     tagColor:'#3b82f6' },
  mg:      { name:'MG ZS EV',            brand:'MG',       seg:'Midsize SUV',      bat:50.3, chem:'LFP',      range:461, hwyRange:340, price:2149000, resale3y:1117000, chg:'50 kW DC (~55 min)', accel:'8.5s', fuel:'₹ 4.2L', war:'8 yr / 1.5L km', warTrans:'Fully Transferable', use:'Long Distance Tour',  tagColor:'#3b82f6' },
  xuv:     { name:'Mahindra XUV400 EV',  brand:'Mahindra', seg:'Compact SUV',      bat:39.4, chem:'NMC',      range:456, hwyRange:305, price:1549000, resale3y: 774000, chg:'50 kW DC (~50 min)', accel:'8.3s', fuel:'₹ 3.9L', war:'8 yr / 1.5L km', warTrans:'Fully Transferable', use:'Spirited Performance',tagColor:'#f59e0b' },
  be6e:    { name:'Mahindra BE 6e',      brand:'Mahindra', seg:'Next-Gen SUV',     bat:59.0, chem:'LFP Blade',range:550, hwyRange:400, price:1890000, resale3y:1039000, chg:'175 kW DC (~20 min)',accel:'6.7s', fuel:'₹ 4.8L', war:'Lifetime 1st / 8yr', warTrans:'8 Yr on Resale',     use:'Tech-First Enthusiast',tagColor:'#f59e0b' },
  xev9e:   { name:'Mahindra XEV 9e',     brand:'Mahindra', seg:'Flagship SUV',     bat:79.0, chem:'LFP Blade',range:656, hwyRange:480, price:2190000, resale3y:1204000, chg:'175 kW DC (~20 min)',accel:'6.8s', fuel:'₹ 5.2L', war:'Lifetime 1st / 8yr', warTrans:'8 Yr on Resale',     use:'Luxury Long-Hauler',  tagColor:'#f59e0b' },
  creta:   { name:'Hyundai Creta EV',    brand:'Hyundai',  seg:'Midsize SUV',      bat:45.0, chem:'NMC',      range:473, hwyRange:335, price:1790000, resale3y: 966000, chg:'50 kW DC (~50 min)', accel:'8.8s', fuel:'₹ 4.0L', war:'8 yr / 1.6L km', warTrans:'Fully Transferable', use:'Family Versatile',    tagColor:'#8b5cf6' },
  kona:    { name:'Hyundai Kona Electric',brand:'Hyundai', seg:'Compact Crossover',bat:39.2, chem:'NMC',      range:452, hwyRange:300, price:2380000, resale3y:1071000, chg:'50 kW DC (~57 min)', accel:'9.7s', fuel:'₹ 3.8L', war:'8 yr / 1.6L km', warTrans:'Fully Transferable', use:'Early Adopter Classic',tagColor:'#8b5cf6' },
  atto:    { name:'BYD Atto 3',          brand:'BYD',      seg:'Midsize SUV',      bat:60.5, chem:'LFP Blade',range:521, hwyRange:380, price:2499000, resale3y:1299000, chg:'80 kW DC (~45 min)', accel:'7.3s', fuel:'₹ 5.0L', war:'8 yr / 1.6L km', warTrans:'Fully Transferable', use:'Premium Refinement',  tagColor:'#ef4444' },

  // Premium & Performance (> ₹30L)
  seal:    { name:'BYD Seal',            brand:'BYD',      seg:'Performance Sedan',bat:82.5, chem:'LFP Blade',range:650, hwyRange:490, price:4100000, resale3y:2132000, chg:'150 kW DC (~30 min)',accel:'3.8s', fuel:'₹ 6.5L', war:'8 yr / 2.0L km', warTrans:'Fully Transferable', use:'Executive Driver',    tagColor:'#ef4444' },
  ioniq:   { name:'Hyundai Ioniq 5',     brand:'Hyundai',  seg:'Premium Crossover',bat:72.6, chem:'NMC',      range:631, hwyRange:470, price:4600000, resale3y:2438000, chg:'350 kW DC (~18 min)',accel:'5.2s', fuel:'₹ 6.2L', war:'8 yr / 1.6L km', warTrans:'Fully Transferable', use:'Interstate GT',       tagColor:'#8b5cf6' },
  ev6:     { name:'Kia EV6 GT',          brand:'Kia',      seg:'Crossover GT',     bat:77.4, chem:'NMC',      range:708, hwyRange:520, price:6095000, resale3y:3108000, chg:'350 kW DC (~18 min)',accel:'3.5s', fuel:'₹ 7.0L', war:'8 yr / 1.6L km', warTrans:'Fully Transferable', use:'Supercar Acceleration',tagColor:'#dc2626' },
};

function fmtLakh(v) { return '₹ ' + (v / 100000).toFixed(1) + ' Lakh'; }

function updateCmpVisuals() {
  const aKey = document.getElementById('cmp-a').value;
  const bKey = document.getElementById('cmp-b').value;
  const a = CMP_DB[aKey], b = CMP_DB[bKey];
  if (!a || !b) return;

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setStyle = (id, prop, val) => { const el = document.getElementById(id); if (el) el.style[prop] = val; };

  // Tag & Badges
  setEl('cmp-tag-a', a.brand);
  setEl('cmp-tag-b', b.brand);
  setStyle('cmp-tag-a', 'background', a.tagColor);
  setStyle('cmp-tag-b', 'background', b.tagColor);
  setEl('cmp-chem-tag-a', a.chem);
  setEl('cmp-chem-tag-b', b.chem);

  // Headers
  setEl('cmp-head-a', a.name);
  setEl('cmp-head-b', b.name);
  setEl('cmp-seg-a', a.seg);
  setEl('cmp-seg-b', b.seg);

  // Telemetry Grid
  setEl('cmp-tel-bat-a', a.bat + ' kWh');
  setEl('cmp-tel-bat-b', b.bat + ' kWh');
  setEl('cmp-tel-range-a', '~' + a.hwyRange + ' km');
  setEl('cmp-tel-range-b', '~' + b.hwyRange + ' km');
  setEl('cmp-tel-acc-a', a.accel);
  setEl('cmp-tel-acc-b', b.accel);
  setEl('cmp-tel-chg-a', a.chg.split(' ')[0] + ' ' + a.chg.split(' ')[1]);
  setEl('cmp-tel-chg-b', b.chg.split(' ')[0] + ' ' + b.chg.split(' ')[1]);

  // Price & 2026 Resale Benchmarks
  const retA = Math.round((a.resale3y / a.price) * 100);
  const retB = Math.round((b.resale3y / b.price) * 100);
  setEl('cmp-quickprice-a', fmtLakh(a.price));
  setEl('cmp-quickprice-b', fmtLakh(b.price));
  setEl('cmp-quickresale-a', `${fmtLakh(a.resale3y)} (${retA}%)`);
  setEl('cmp-quickresale-b', `${fmtLakh(b.resale3y)} (${retB}%)`);
}

// Live-update visual cards and specs
function runComparison(smoothScroll = false) {
  const aKey = document.getElementById('cmp-a').value;
  const bKey = document.getElementById('cmp-b').value;
  const a = CMP_DB[aKey], b = CMP_DB[bKey];
  if (!a || !b) return;

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  // Header names
  setEl('cmp-name-a', a.name);
  setEl('cmp-name-b', b.name);

  // All comparison rows
  setEl('cmp-segm-a', a.seg);
  setEl('cmp-segm-b', b.seg);
  setEl('cmp-bat-a', a.bat + ' kWh');
  setEl('cmp-bat-b', b.bat + ' kWh');
  setEl('cmp-chem-a', `${a.chem} Battery`);
  setEl('cmp-chem-b', `${b.chem} Battery`);
  setEl('cmp-range-a', a.range + ' km');
  setEl('cmp-range-b', b.range + ' km');
  setEl('cmp-hwyrange-a', '~' + a.hwyRange + ' km (Real Hwy)');
  setEl('cmp-hwyrange-b', '~' + b.hwyRange + ' km (Real Hwy)');
  setEl('cmp-chg-a', a.chg);
  setEl('cmp-chg-b', b.chg);
  setEl('cmp-accel-a', a.accel);
  setEl('cmp-accel-b', b.accel);
  setEl('cmp-price-a', fmtLakh(a.price));
  setEl('cmp-price-b', fmtLakh(b.price));
  setEl('cmp-resale-a', fmtLakh(a.resale3y));
  setEl('cmp-resale-b', fmtLakh(b.resale3y));

  const retA = Math.round((a.resale3y / a.price) * 100);
  const retB = Math.round((b.resale3y / b.price) * 100);
  setEl('cmp-ret-a', `${retA}% (3-Yr Retention)`);
  setEl('cmp-ret-b', `${retB}% (3-Yr Retention)`);

  setEl('cmp-fuel-a', a.fuel);
  setEl('cmp-fuel-b', b.fuel);
  setEl('cmp-war-a', a.war);
  setEl('cmp-war-b', b.war);
  setEl('cmp-wartrans-a', a.warTrans || 'Transferable');
  setEl('cmp-wartrans-b', b.warTrans || 'Transferable');
  setEl('cmp-use-a', a.use);
  setEl('cmp-use-b', b.use);

  // Generate smart verdict based on 2026 market intelligence
  const priceDiff = Math.round(((b.price - a.price) / a.price) * 100);

  let verdict = `<strong>${a.name} vs ${b.name}:</strong> `;
  if (a.price < b.price) {
    verdict += `${a.name} is ₹${((b.price - a.price) / 100000).toFixed(1)} Lakh (${Math.abs(priceDiff)}%) more accessible upfront with a ${a.bat} kWh pack. `;
  } else {
    verdict += `${a.name} commands a ₹${((a.price - b.price) / 100000).toFixed(1)} Lakh (${Math.abs(priceDiff)}%) premium over ${b.name}. `;
  }

  if (a.chem === 'LFP' && b.chem === 'NMC') {
    verdict += `${a.name}'s LFP chemistry provides superior resistance against thermal degradation in Indian climates, while ${b.name}'s NMC pack delivers punchier acceleration. `;
  } else if (a.chem === 'NMC' && b.chem === 'LFP') {
    verdict += `${a.name} uses NMC cells for lighter weight and power density, whereas ${b.name}'s LFP chemistry offers longer multi-year cycle longevity. `;
  }

  verdict += `In the secondary market, 3-year value retention is <strong>${retA}%</strong> for ${a.name} vs <strong>${retB}%</strong> for ${b.name}. Market pricing is heavily governed by verified Battery State-of-Health (SOH %) and warranty transferability.`;

  const verdictEl = document.getElementById('cmpVerdictText');
  if (verdictEl) verdictEl.innerHTML = verdict;

  if (smoothScroll) {
    document.getElementById('cmpTable').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

document.getElementById('cmp-a').addEventListener('change', () => { updateCmpVisuals(); runComparison(false); });
document.getElementById('cmp-b').addEventListener('change', () => { updateCmpVisuals(); runComparison(false); });

document.getElementById('cmp-btn').addEventListener('click', () => {
  updateCmpVisuals();
  runComparison(true);
});

// Run comparison on initial page load so table is always pre-filled
updateCmpVisuals();
runComparison(false);

/* ─── GALLERY CARD CLICK → CALCULATOR ─── */
document.querySelectorAll('.ev-card[data-calc-brand]').forEach(card => {
  card.addEventListener('click', () => {
    const brand = card.dataset.calcBrand;
    const model = card.dataset.calcModel;
    const battery = parseFloat(card.dataset.calcBattery);

    selectVehicle(brand, model, battery);
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
  });
});

/* ─── FAQ ACCORDION ─── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ─── NEWSLETTER ─── */
document.getElementById('newsletterForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('newsletterForm').style.display    = 'none';
  document.getElementById('newsletterSuccess').style.display = 'block';
});
