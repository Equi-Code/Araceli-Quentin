
// ══════════════════════════════════════════
// GOOGLE SHEETS URL
// Reemplazá esta URL con la de tu Apps Script
// ══════════════════════════════════════════
// ── LANG ──
let currentLang = 'es';

function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.classList.toggle('active', el.dataset.lang === lang);
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
    });
    document.documentElement.lang = lang;
}

// ── COUNTDOWN ──
const weddingDate = new Date('2026-08-22T16:30:00');
function updateCountdown() {
    const diff = weddingDate - new Date();
    if (diff <= 0) return;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-min').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-sec').textContent = String(s).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── IFRAME PLACEHOLDER ──
(function () {
    const iframe = document.getElementById('google-form-iframe');
    const placeholder = document.getElementById('form-placeholder');
    if (iframe && placeholder) {
        const hasRealUrl = iframe.src && !iframe.src.includes('PEGAR_URL_FORM');
        if (hasRealUrl) {
            placeholder.classList.add('hidden');
        } else {
            iframe.style.display = 'none';
        }
    }
})();
