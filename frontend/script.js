/* ─── EV DATA ─── */
const EV_DATA = {
  nexon:  { name:'Tata Nexon EV',    bat:'30.2 kWh', range:'312 km', price:'₹ 12L',  use:'City Commute',    chg:'7.2 kW AC' },
  mg:     { name:'MG ZS EV',         bat:'50.3 kWh', range:'461 km', price:'₹ 18L',  use:'Long Distance',   chg:'50 kW DC'  },
  ioniq:  { name:'Hyundai Ioniq 5',  bat:'72.6 kWh', range:'631 km', price:'₹ 34L',  use:'Premium Family',  chg:'220 kW DC' },
  xuv:    { name:'Mahindra XUV400',  bat:'39.4 kWh', range:'456 km', price:'₹ 16L',  use:'SUV Enthusiast',  chg:'50 kW DC'  },
  atto:   { name:'BYD Atto 3',       bat:'60.5 kWh', range:'521 km', price:'₹ 24L',  use:'Feature-rich',    chg:'80 kW DC'  },
};

const BRAND_BASE = { tata:650000, mg:1050000, mahindra:850000, hyundai:1400000, byd:1200000 };

/* ─── SPLASH SCREEN ─── */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('splash').classList.add('done'), 1800);
});

/* ─── DARK / LIGHT TOGGLE ─── */
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

/* ─── HAMBURGER ─── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* ─── ACTIVE NAV ─── */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) current = s.id; });
  navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
}, { passive: true });

/* ─── PARTICLES ─── */
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

/* ─── SCROLL REVEAL ─── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.animate-on-scroll').forEach(el => revealObs.observe(el));

/* ─── COUNTER ANIMATION ─── */
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

/* ─── CALCULATOR ─── */
const fmtINR = n => '₹ ' + Math.round(n).toLocaleString('en-IN');

document.getElementById('calc-battery').addEventListener('input', function() {
  document.getElementById('battery-val').textContent = this.value;
});
document.getElementById('calc-health').addEventListener('input', function() {
  document.getElementById('health-val').textContent = this.value;
});
document.getElementById('calc-km').addEventListener('input', function() {
  document.getElementById('km-val').textContent = parseInt(this.value).toLocaleString('en-IN');
});

document.getElementById('calc-btn').addEventListener('click', () => {
  const brand    = document.getElementById('calc-brand').value;
  const year     = parseInt(document.getElementById('calc-year').value);
  const battery  = parseInt(document.getElementById('calc-battery').value);
  const health   = parseInt(document.getElementById('calc-health').value);
  const km       = parseInt(document.getElementById('calc-km').value);

  const base        = (BRAND_BASE[brand] || 800000) + battery * 15000;
  const age         = 2026 - year;
  const ageFactor   = Math.max(0.35, 1 - age * 0.075);
  const usageFactor = Math.max(0.70, 1 - km / 500000);
  const batFactor   = health / 100;
  const mid         = base * ageFactor * usageFactor * batFactor;

  document.getElementById('res-low').textContent  = fmtINR(mid * 0.9);
  document.getElementById('res-mid').textContent  = fmtINR(mid);
  document.getElementById('res-high').textContent = fmtINR(mid * 1.1);
  document.getElementById('f-age').textContent    = `-${((1 - ageFactor) * 100).toFixed(1)}%`;
  document.getElementById('f-bat').textContent    = `-${(100 - health).toFixed(0)}%`;
  document.getElementById('f-km').textContent     = `-${((1 - usageFactor) * 100).toFixed(1)}%`;

  document.querySelector('.result-placeholder').style.display = 'none';
  document.getElementById('resultOutput').style.display = 'block';
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
