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
    { model: 'Tiago EV', battery: 24.0, range: 315, price: 899000, seg: 'Hatchback' },
    { model: 'Tigor EV', battery: 26.0, range: 315, price: 1150000, seg: 'Sedan' },
  ],
  mg: [
    { model: 'Windsor EV', battery: 38.0, range: 331, price: 1350000, seg: 'Crossover Utility' },
    { model: 'ZS EV', battery: 50.3, range: 461, price: 2150000, seg: 'Midsize SUV' },
    { model: 'Comet EV', battery: 17.3, range: 230, price: 699000, seg: 'Urban Micro' },
  ],
  mahindra: [
    { model: 'XUV400 EV', battery: 39.4, range: 456, price: 1550000, seg: 'Compact SUV' },
    { model: 'BE 6e', battery: 59.0, range: 550, price: 1890000, seg: 'Next-Gen SUV' },
    { model: 'XEV 9e', battery: 79.0, range: 656, price: 2190000, seg: 'Coupe SUV' },
    { model: 'eVerito', battery: 21.2, range: 140, price: 600000, seg: 'Fleet Sedan' },
  ],
  hyundai: [
    { model: 'Creta EV', battery: 45.0, range: 473, price: 1790000, seg: 'Midsize SUV' },
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
  tata: 1200000, mg: 1350000, mahindra: 1400000, hyundai: 1700000,
  byd: 2500000, kia: 5500000, citroen: 1100000, bmw: 6500000,
  mercedes: 6800000, volvo: 5600000, audi: 11000000, porsche: 15000000,
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
      statusText.textContent = 'ML Engine Online (97.6% R²)';
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

  if (brandSelect) {
    brandSelect.value = brandKey;
    populateModels(modelName);
  } else if (modelSelect) {
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
  models.forEach((m, idx) => {
    const opt = document.createElement('option');
    opt.value = m.model;
    opt.textContent = `${m.model} (${m.battery} kWh · ${m.range} km)`;
    if (selectedModelToSet && m.model === selectedModelToSet) {
      opt.selected = true;
    } else if (!selectedModelToSet && idx === 0) {
      opt.selected = true;
    }
    modelSelect.appendChild(opt);
  });

  const chosenModel = selectedModelToSet
    ? models.find(m => m.model === selectedModelToSet)
    : models[0];

  if (chosenModel) {
    updateBatteryDefault(chosenModel.battery);
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
    populateModels();
  });
}

// Model change listener
const calcModel = document.getElementById('calc-model');
if (calcModel) {
  calcModel.addEventListener('change', function() {
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
  const brandInput = document.getElementById('calc-brand').value;
  const modelInput = document.getElementById('calc-model') ? document.getElementById('calc-model').value : null;
  const year       = parseInt(document.getElementById('calc-year').value);
  const region     = document.getElementById('calc-region') ? document.getElementById('calc-region').value : 'Mumbai';
  const battery    = parseFloat(document.getElementById('calc-battery-input')?.value || document.getElementById('calc-battery')?.value || 40.5);
  const health     = parseFloat(document.getElementById('calc-health-input')?.value || document.getElementById('calc-health')?.value || 85);
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

    document.querySelector('.result-placeholder').style.display = 'none';
    document.getElementById('resultOutput').style.display = 'block';

  } catch (err) {
    console.warn('API call failed, running calibrated local calculation:', err);

    const baseModels = BRAND_MODELS[brandInput] || [];
    const foundModel = baseModels.find(m => m.model === modelInput);
    const basePrice   = foundModel ? foundModel.price : (BRAND_BASE[brandInput] || 1200000);

    const currentYear = new Date().getFullYear();
    const age         = Math.max(0, currentYear - year);
    const ageFactor   = Math.max(0.35, 1 - age * 0.075);
    const usageFactor = Math.max(0.70, 1 - km / 500000);
    const batFactor   = health / 100;
    const mid         = basePrice * ageFactor * usageFactor * batFactor;
    const estRange    = Math.round((foundModel ? foundModel.range : battery * 7.5) * (health / 100) * 0.88);
    const retention   = Math.round((mid / basePrice) * 100);

    document.getElementById('res-low').textContent  = fmtINR(mid * 0.95);
    document.getElementById('res-mid').textContent  = fmtINR(mid);
    document.getElementById('res-high').textContent = fmtINR(mid * 1.05);

    if (document.getElementById('res-retention')) {
      document.getElementById('res-retention').textContent = `${retention}% (Calibrated)`;
    }
    if (document.getElementById('res-eff-range')) {
      document.getElementById('res-eff-range').textContent = `~${estRange} km`;
    }

    document.getElementById('f-age').textContent = `-${((1 - ageFactor) * 100).toFixed(1)}%`;
    document.getElementById('f-bat').textContent = `-${(100 - health).toFixed(0)}%`;
    document.getElementById('f-km').textContent  = `-${((1 - usageFactor) * 100).toFixed(1)}%`;

    const badge = document.getElementById('resultSourceBadge');
    if (badge) {
      badge.textContent = '⚡ Calibrated Model (Offline)';
      badge.style.background = 'rgba(245, 158, 11, 0.15)';
      badge.style.color = '#f59e0b';
    }

    document.querySelector('.result-placeholder').style.display = 'none';
    document.getElementById('resultOutput').style.display = 'block';

  } finally {
    btn.innerHTML = origBtnText;
    btn.disabled = false;
  }
});

/* ─── COMPARE TOOL ─── */
document.getElementById('cmp-btn').addEventListener('click', () => {
  const a = EV_DATA[document.getElementById('cmp-a').value];
  const b = EV_DATA[document.getElementById('cmp-b').value];
  const t = document.getElementById('cmpTable');

  document.getElementById('cmp-name-a').textContent   = a.name;
  document.getElementById('cmp-name-b').textContent   = b.name;
  document.getElementById('cmp-bat-a').textContent    = a.bat;
  document.getElementById('cmp-bat-b').textContent    = b.bat;
  document.getElementById('cmp-range-a').textContent  = a.range;
  document.getElementById('cmp-range-b').textContent  = b.range;
  document.getElementById('cmp-price-a').textContent  = a.price;
  document.getElementById('cmp-price-b').textContent  = b.price;
  document.getElementById('cmp-use-a').textContent    = a.use;
  document.getElementById('cmp-use-b').textContent    = b.use;
  document.getElementById('cmp-chg-a').textContent    = a.chg;
  document.getElementById('cmp-chg-b').textContent    = b.chg;

  t.style.display = 'block';
  t.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
