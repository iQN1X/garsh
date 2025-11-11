// بيانات محلية
const STORAGE_KEYS = {
  plants: 'gharsa_plants',
  generalCare: 'gharsa_general_care',
  lang: 'gharsa_lang',
  notifications: 'gharsa_notifications',
};

const state = {
  plants: [],
  generalCare: { waterEvery: null, fertilizeEvery: null, light: '' },
  deferredPrompt: null,
  lang: 'ar',
  notifications: [],
  currentPlantId: null,
};

// أدوات
const daysSince = (dateStr) => {
  const planted = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - planted) / (1000 * 60 * 60 * 24));
  return diff;
};
const readFileAsDataURL = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
  reader.readAsDataURL(file);
});

function save() {
  localStorage.setItem(STORAGE_KEYS.plants, JSON.stringify(state.plants));
  localStorage.setItem(STORAGE_KEYS.generalCare, JSON.stringify(state.generalCare));
  localStorage.setItem(STORAGE_KEYS.lang, state.lang);
  localStorage.setItem(STORAGE_KEYS.notifications, JSON.stringify(state.notifications.slice(-100)));
  renderPlants();
  renderReminders();
}

function load() {
  try {
    const plants = JSON.parse(localStorage.getItem(STORAGE_KEYS.plants) || '[]');
    const general = JSON.parse(localStorage.getItem(STORAGE_KEYS.generalCare) || '{}');
    const notifications = JSON.parse(localStorage.getItem(STORAGE_KEYS.notifications) || '[]');
    state.plants = Array.isArray(plants) ? plants : [];
    state.generalCare = { ...state.generalCare, ...general };
    state.lang = localStorage.getItem(STORAGE_KEYS.lang) || 'ar';
    state.notifications = Array.isArray(notifications) ? notifications : [];
  } catch {}
}

// i18n
const I18N = {
  ar: {
    'tabs.plants': 'نباتاتي', 'tabs.search':'البحث','tabs.care':'العناية','tabs.encyclopedia':'الموسوعة','tabs.dashboard':'لوحة التحكم','tabs.settings':'الإعدادات',
    'labels.language':'اللغة',
    'titles.plants':'نظام إدارة النباتات','titles.search':'بحث متقدم','titles.care':'متطلبات العناية','titles.encyclopedia':'موسوعة النباتات','titles.dashboard':'لوحة التحكم','titles.settings':'الإعدادات',
    'labels.plantName':'اسم النبتة','labels.species':'النوع','labels.plantedDate':'تاريخ الزراعة','labels.notes':'ملاحظات','labels.initialPhoto':'صورة أولية',
    'actions.addPlant':'إضافة النبتة','labels.searchText':'نص البحث','labels.filterSpecies':'فلتر النوع','labels.filterLight':'الإضاءة','labels.minDays':'أقل أيام منذ الزراعة','labels.maxDays':'أقصى أيام منذ الزراعة','labels.waterEvery':'الري كل (أيام)','labels.fertilizeEvery':'تسميد كل (أيام)',
    'actions.applyFilters':'تطبيق المرشحات','actions.reset':'إعادة ضبط','subtitles.generalCare':'متطلبات عامة لجميع النباتات',
    'subtitles.notifications':'التنبيهات','texts.notificationsHint':'للتذكير بالمهام، فعّل الإشعارات ثم سنعرض التنبيهات عند فتح التطبيق وفي المواعيد المستحقة أثناء الاستخدام.',
    'actions.enableNotifications':'تفعيل الإشعارات',
    'subtitles.manageEncyclopedia':'إدارة الموسوعة','actions.addType':'إضافة النوع',
    'subtitles.totals':'إجماليات','subtitles.performance':'أداء','subtitles.activity':'النشاط','subtitles.dataManagement':'إدارة البيانات','actions.exportData':'تصدير','actions.importDataLabel':'استيراد','actions.resetData':'إعادة تعيين',
    'texts.pwa':'تطبيق ويب تقدمي (PWA) يعمل دون اتصال بعد التثبيت، ويدعم الجوال والكمبيوتر.', 'actions.installApp':'تثبيت التطبيق',
    'subtitles.notificationsCenter':'مركز الإشعارات',
  },
  en: {
    'tabs.plants': 'My Plants','tabs.search':'Search','tabs.care':'Care','tabs.encyclopedia':'Encyclopedia','tabs.dashboard':'Dashboard','tabs.settings':'Settings',
    'labels.language':'Language',
    'titles.plants':'Plant Management','titles.search':'Advanced Search','titles.care':'Care Requirements','titles.encyclopedia':'Plant Encyclopedia','titles.dashboard':'Dashboard','titles.settings':'Settings',
    'labels.plantName':'Plant Name','labels.species':'Species','labels.plantedDate':'Planted Date','labels.notes':'Notes','labels.initialPhoto':'Initial Photo',
    'actions.addPlant':'Add Plant','labels.searchText':'Search Text','labels.filterSpecies':'Filter Species','labels.filterLight':'Light','labels.minDays':'Min Days Since Planting','labels.maxDays':'Max Days Since Planting','labels.waterEvery':'Water Every (days)','labels.fertilizeEvery':'Fertilize Every (days)',
    'actions.applyFilters':'Apply Filters','actions.reset':'Reset','subtitles.generalCare':'General Care for All Plants',
    'subtitles.notifications':'Notifications','texts.notificationsHint':'Enable notifications to get reminders during app use and on due times.',
    'actions.enableNotifications':'Enable Notifications',
    'subtitles.manageEncyclopedia':'Manage Encyclopedia','actions.addType':'Add Type',
    'subtitles.totals':'Totals','subtitles.performance':'Performance','subtitles.activity':'Activity','subtitles.dataManagement':'Data Management','actions.exportData':'Export','actions.importDataLabel':'Import','actions.resetData':'Reset',
    'texts.pwa':'Progressive Web App: works offline after install, supports mobile and desktop.','actions.installApp':'Install App',
    'subtitles.notificationsCenter':'Notifications Center',
  }
};

function applyI18n() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  const dict = I18N[state.lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
}

// التنقل بين الواجهات
function setupNavigation() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((t) => {
    t.addEventListener('click', () => {
      tabs.forEach((x) => x.classList.remove('active'));
      t.classList.add('active');
      const target = t.dataset.view;
      showView(target);
    });
  });
  // لغة
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = state.lang;
    langSelect.addEventListener('change', () => { state.lang = langSelect.value; save(); applyI18n(); });
  }
}

function showView(target) {
  document.querySelectorAll('.view').forEach((v) => v.classList.remove('active'));
  const el = document.getElementById(`view-${target}`);
  if (el) el.classList.add('active');
}

// إدارة النباتات
function renderPlants() {
  const list = document.getElementById('plants-list');
  list.innerHTML = '';
  if (state.plants.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'card';
    empty.textContent = 'لا توجد نباتات حتى الآن — أضف أول نبتة!';
    list.appendChild(empty);
    return;
  }
  state.plants.forEach((plant, idx) => {
    const card = document.createElement('div');
    card.className = 'card plant-card';
    const days = daysSince(plant.date);
    const photos = (plant.photos || []).slice(-6);
    const nextWater = plant.care?.waterEvery || state.generalCare.waterEvery;
    const waterDue = nextWater ? days % nextWater === 0 : false;

    card.innerHTML = `
      <div class="plant-header">
        <div>
          <strong>${plant.name}</strong>
          <div class="plant-meta">${state.lang==='ar'?'النوع':'Species'}: ${plant.species || '—'} • ${state.lang==='ar'?'مزروعة منذ':'Days since'} ${days} ${state.lang==='ar'?'يوم':''}</div>
        </div>
        <button class="danger" data-action="delete">${state.lang==='ar'?'حذف':'Delete'}</button>
      </div>
      <div class="actions">
        <label class="secondary">
          ${state.lang==='ar'?'التقاط صورة يومية':'Capture Daily Photo'}
          <input type="file" accept="image/*" capture="environment" data-action="photo" hidden />
        </label>
        <button class="secondary" data-action="edit-care">${state.lang==='ar'?'تعديل العناية':'Edit Care'}</button>
        <button class="secondary" data-action="details">${state.lang==='ar'?'تفاصيل':'Details'}</button>
        ${waterDue ? `<span class="secondary">${state.lang==='ar'?'موعد ري اليوم':'Water due today'}</span>` : ''}
      </div>
      <div class="photos">${photos.map((p) => `<img src="${p.data}" alt="صورة" />`).join('')}</div>
    `;

    // أحداث
    card.querySelector('[data-action="delete"]').addEventListener('click', () => {
      if (confirm(state.lang==='ar'?'تأكيد حذف النبتة؟':'Confirm delete plant?')) {
        state.plants.splice(idx, 1);
        save();
      }
    });
    const photoInput = card.querySelector('[data-action="photo"]');
    photoInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const data = await readFileAsDataURL(file);
      plant.photos = plant.photos || [];
      plant.photos.push({ date: new Date().toISOString(), data });
      save();
    });
    card.querySelector('[data-action="edit-care"]').addEventListener('click', () => {
      const waterEvery = prompt(state.lang==='ar'?'الري كل (أيام):':'Water every (days):', plant.care?.waterEvery ?? '');
      const fertilizeEvery = prompt(state.lang==='ar'?'التسميد كل (أيام):':'Fertilize every (days):', plant.care?.fertilizeEvery ?? '');
      const light = prompt(state.lang==='ar'?'الإضاءة (شمس مباشرة/غير مباشرة/ظل جزئي):':'Light (direct/indirect/partial):', plant.care?.light ?? '');
      plant.care = {
        waterEvery: waterEvery ? Number(waterEvery) : null,
        fertilizeEvery: fertilizeEvery ? Number(fertilizeEvery) : null,
        light: light || '',
      };
      save();
    });

    // فتح التفاصيل
    const detailsBtn = card.querySelector('[data-action="details"]');
    if (detailsBtn) detailsBtn.addEventListener('click', () => {
      state.currentPlantId = plant.id;
      showView('plant');
      renderPlantDetail();
    });

    list.appendChild(card);
  });
}

// نماذج نمو تقريبية لكل نوع (بوحدات الأيام)
const GROWTH_MODELS = {
  tomato: [10, 25, 50, 70, 100],
  strawberry: [7, 20, 45, 70],
  basil: [7, 21, 40, 60],
  mint: [10, 25, 999],
  potato: [14, 35, 70, 100],
  garlic: [14, 40, 90],
  carrot: [21, 45, 90, 120],
  onion: [14, 45, 90],
  lettuce: [10, 25, 45, 60],
  pepper: [14, 35, 70, 100],
  chili: [14, 35, 70, 100],
  cucumber: [10, 25, 50, 80],
  eggplant: [14, 35, 70, 100],
  zucchini: [10, 25, 50, 80],
  pumpkin: [14, 40, 80, 120],
  watermelon: [14, 35, 70, 100],
  melon: [14, 35, 70, 100],
  spinach: [7, 21, 35],
  arugula: [5, 14, 28],
  parsley: [14, 35, 70],
  coriander: [7, 21, 35],
  dill: [7, 21, 35],
  rosemary: [21, 60, 120],
  thyme: [21, 60, 120],
  sage: [21, 60, 120],
  oregano: [21, 60, 120],
  'green-bean': [10, 25, 50, 80],
  pea: [10, 25, 50, 80],
  corn: [10, 30, 60, 90],
  broccoli: [10, 30, 60, 90],
  cauliflower: [10, 30, 60, 90],
  beet: [7, 21, 45, 70],
  celery: [14, 35, 70],
  // تقديرات عامة للنباتات المنزلية
  'aloe-vera': [30, 90, 180],
  cactus: [60, 180, 360],
  'snake-plant': [60, 180, 360],
  'spider-plant': [30, 90, 180],
  'peace-lily': [60, 120, 240],
  pothos: [30, 90, 180],
  monstera: [60, 180, 360],
  lavender: [30, 90, 180],
  jasmine: [60, 120, 240],
  rose: [60, 120, 240],
  chrysanthemum: [30, 90, 180],
  marigold: [20, 60, 120],
  // فلفل وأنواع طماطم إضافية
  'bell-pepper': [14, 35, 70, 100],
  'hot-pepper': [14, 35, 70, 100],
  jalapeno: [14, 35, 70, 100],
  'cherry-tomato': [10, 25, 50, 70, 100],
  // أشجار مثمرة (تقديرات طويلة الأمد)
  lemon: [120, 240, 480],
  orange: [120, 240, 480],
  mandarin: [120, 240, 480],
  pomegranate: [180, 360, 540],
  apple: [180, 360, 540],
  fig: [120, 300, 540],
  grape: [120, 300, 540],
};

function findSpeciesIdByName(name) {
  if (!name || !window.ENCYCLOPEDIA) return null;
  const low = name.toLowerCase();
  const item = window.ENCYCLOPEDIA.find((i) => i.name.toLowerCase() === low || i.id === low);
  return item ? item.id : null;
}

function stageForDays(speciesId, days) {
  const enc = (window.ENCYCLOPEDIA || []).find((i) => i.id === speciesId);
  const model = GROWTH_MODELS[speciesId];
  if (!enc || !model) return { name: '—', index: -1, progress: 0 };
  let index = 0;
  while (index < model.length && days >= model[index]) index++;
  if (index >= enc.stages.length) index = enc.stages.length - 1;
  const name = enc.stages[index] || enc.stages[enc.stages.length - 1];
  const prev = index > 0 ? model[index - 1] : 0;
  const next = model[index] || model[model.length - 1];
  const progress = Math.max(0, Math.min(100, Math.round(((days - prev) / (next - prev)) * 100)));
  return { name, index, progress };
}

function renderPlantDetail() {
  const plant = state.plants.find((p) => p.id === state.currentPlantId);
  if (!plant) return;
  const title = document.getElementById('plant-detail-title');
  const summary = document.getElementById('plant-summary');
  const back = document.getElementById('back-to-plants');
  const timeline = document.getElementById('daily-timeline');
  const predictDaysEl = document.getElementById('predict-days');
  const predictedStageEl = document.getElementById('predicted-stage');
  const growthBar = document.getElementById('growth-bar');
  const growthHint = document.getElementById('growth-hint');

  title.textContent = `${state.lang==='ar'?'تفاصيل النبتة':'Plant details'}: ${plant.name}`;
  const d = daysSince(plant.date);
  summary.textContent = `${state.lang==='ar'?'النوع':'Species'}: ${plant.species||'—'} • ${state.lang==='ar'?'مزروعة منذ':'Days since'} ${d}`;
  if (back) back.onclick = () => { showView('plants'); };

  // سجل يومي
  plant.logs = plant.logs || [];
  timeline.innerHTML = '';
  const sorted = [...plant.logs].sort((a,b)=> b.date.localeCompare(a.date));
  if (sorted.length === 0) {
    const empty = document.createElement('div'); empty.className='entry'; empty.textContent = state.lang==='ar'?'لا يوجد سجل بعد':'No logs yet'; timeline.appendChild(empty);
  } else {
    sorted.forEach((log) => {
      const entry = document.createElement('div'); entry.className = 'entry';
      const dateStr = new Date(log.date).toLocaleDateString();
      const status = [log.watered? (state.lang==='ar'?'تم الري':'Watered'): null, log.fertilized? (state.lang==='ar'?'تم التسميد':'Fertilized'): null].filter(Boolean).join(' • ');
      entry.textContent = `${dateStr}${status? ' • '+status: ''}`;
      if (log.note) { const note = document.createElement('div'); note.className='plant-meta'; note.textContent = log.note; entry.appendChild(note); }
      timeline.appendChild(entry);
    });
  }

  // حفظ سجل اليوم
  const waterChk = document.getElementById('log-watered');
  const fertChk = document.getElementById('log-fertilized');
  const noteEl = document.getElementById('log-note');
  const saveBtn = document.getElementById('save-today-log');
  if (saveBtn) saveBtn.onclick = () => {
    const today = new Date().toISOString().slice(0,10);
    const existing = plant.logs.find((l)=> l.date.slice(0,10) === today);
    const entry = { date: new Date().toISOString(), watered: waterChk.checked, fertilized: fertChk.checked, note: noteEl.value.trim() };
    if (existing) Object.assign(existing, entry); else plant.logs.push(entry);
    notify(state.lang==='ar'?'تم حفظ سجل اليوم':'Saved today log');
    save();
    renderPlantDetail();
  };

  // توقع المرحلة
  function updatePrediction() {
    const speciesId = findSpeciesIdByName(plant.species);
    const ahead = Number(predictDaysEl.value||0);
    const totalDays = d + ahead;
    const st = stageForDays(speciesId, totalDays);
    predictedStageEl.textContent = st.name;
    growthBar.querySelector('span').style.width = `${st.progress}%`;
    growthHint.textContent = `${state.lang==='ar'?'بعد':'After'} ${ahead} ${state.lang==='ar'?'يوم':'days'} → ${st.name}`;
  }
  predictDaysEl.oninput = updatePrediction;
  updatePrediction();
}

function setupPlantForm() {
  const form = document.getElementById('plant-form');
  const nameEl = document.getElementById('plant-name');
  const speciesEl = document.getElementById('plant-species');
  const dateEl = document.getElementById('plant-date');
  const notesEl = document.getElementById('plant-notes');
  const photoEl = document.getElementById('plant-photo');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const plant = {
      id: crypto.randomUUID(),
      name: nameEl.value.trim(),
      species: speciesEl.value.trim(),
      date: dateEl.value,
      notes: notesEl.value.trim(),
      photos: [],
      care: {},
    };
    if (photoEl.files[0]) {
      const data = await readFileAsDataURL(photoEl.files[0]);
      plant.photos.push({ date: new Date().toISOString(), data });
    }
    state.plants.push(plant);
    form.reset();
    save();
  });
}

// متطلبات العناية العامة
function setupGeneralCareForm() {
  const form = document.getElementById('general-care-form');
  const water = document.getElementById('general-water');
  const fert = document.getElementById('general-fertilize');
  const light = document.getElementById('general-light');
  // تحميل القيم
  if (state.generalCare.waterEvery) water.value = state.generalCare.waterEvery;
  if (state.generalCare.fertilizeEvery) fert.value = state.generalCare.fertilizeEvery;
  if (state.generalCare.light) light.value = state.generalCare.light;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    state.generalCare = {
      waterEvery: water.value ? Number(water.value) : null,
      fertilizeEvery: fert.value ? Number(fert.value) : null,
      light: light.value || '',
    };
    save();
    alert(state.lang==='ar'?'تم حفظ المتطلبات العامة':'General care saved');
  });
}

// الإشعارات والتذكيرات
function setupNotifications() {
  const btn = document.getElementById('enable-notifications');
  btn.addEventListener('click', async () => {
    try {
      const res = await Notification.requestPermission();
      if (res === 'granted') {
        new Notification(state.lang==='ar'?'تم تفعيل الإشعارات في غرسة':'Notifications enabled in Gharsa');
      } else {
        alert(state.lang==='ar'?'رفض الإذن بالإشعارات':'Notification permission denied');
      }
    } catch (e) {
      alert(state.lang==='ar'?'حدث خطأ في طلب الإذن':'Error requesting permission');
    }
  });
}

function renderReminders() {
  const box = document.getElementById('reminders');
  box.innerHTML = '';
  const today = new Date();
  const items = [];
  state.plants.forEach((p) => {
    const d = daysSince(p.date);
    const w = p.care?.waterEvery || state.generalCare.waterEvery;
    const f = p.care?.fertilizeEvery || state.generalCare.fertilizeEvery;
    if (w && d % w === 0) items.push({ plant: p, type: 'ري' });
    if (f && d % f === 0) items.push({ plant: p, type: 'تسميد' });
  });
  if (items.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'card';
    empty.textContent = state.lang==='ar'?'لا يوجد تذكيرات اليوم.':'No reminders today.';
    box.appendChild(empty);
    return;
  }
  items.forEach((it) => {
    const row = document.createElement('div');
    row.className = 'card';
    row.innerHTML = `<strong>${it.type}:</strong> ${it.plant.name}`;
    const btn = document.createElement('button');
    btn.className = 'secondary';
    btn.textContent = state.lang==='ar'?'إرسال تذكير الآن':'Send reminder now';
    btn.addEventListener('click', () => {
      if (Notification.permission === 'granted') {
        new Notification(`${it.type} - ${it.plant.name}`);
      } else {
        alert(`${it.type} - ${it.plant.name}`);
      }
    });
    row.appendChild(btn);
    box.appendChild(row);
  });
}

// مركز إشعارات داخلي
function notify(message) {
  const entry = { id: crypto.randomUUID(), message, time: new Date().toISOString() };
  state.notifications.push(entry);
  save();
  const center = document.getElementById('notification-center');
  if (center) {
    const row = document.createElement('div');
    row.className = 'card';
    row.textContent = `${new Date(entry.time).toLocaleString()} • ${message}`;
    center.prepend(row);
  }
}

// فحص مُجدول للتذكيرات (أثناء الاستخدام)
function scheduleChecks() {
  setInterval(() => {
    const messages = [];
    const dNow = new Date();
    state.plants.forEach((p) => {
      const d = daysSince(p.date);
      const w = p.care?.waterEvery || state.generalCare.waterEvery;
      const f = p.care?.fertilizeEvery || state.generalCare.fertilizeEvery;
      if (w && d % w === 0) messages.push(`${state.lang==='ar'?'ري':'Water'}: ${p.name}`);
      if (f && d % f === 0) messages.push(`${state.lang==='ar'?'تسميد':'Fertilize'}: ${p.name}`);
    });
    messages.forEach((m) => {
      notify(m);
      if (Notification.permission === 'granted') new Notification(m);
    });
  }, 60 * 60 * 1000); // كل ساعة
}

// البحث المتقدم
function setupSearch() {
  const applyBtn = document.getElementById('apply-filters');
  const resetBtn = document.getElementById('reset-filters');
  const results = document.getElementById('search-results');
  const textEl = document.getElementById('search-text');
  const speciesEl = document.getElementById('filter-species');
  const lightEl = document.getElementById('filter-light');
  const minDaysEl = document.getElementById('min-days');
  const maxDaysEl = document.getElementById('max-days');
  const waterEl = document.getElementById('filter-water');
  const fertEl = document.getElementById('filter-fert');

  function runSearch() {
    const q = textEl.value.trim().toLowerCase();
    const sp = speciesEl.value.trim();
    const light = lightEl.value;
    const minD = Number(minDaysEl.value || 0);
    const maxD = Number(maxDaysEl.value || Infinity);
    const w = Number(waterEl.value || 0);
    const f = Number(fertEl.value || 0);

    const out = state.plants.filter((p) => {
      const d = daysSince(p.date);
      const matchText = !q || p.name.toLowerCase().includes(q) || (p.species||'').toLowerCase().includes(q);
      const matchSpecies = !sp || (p.species||'') === sp;
      const careLight = p.care?.light || state.generalCare.light || '';
      const matchLight = !light || careLight === light;
      const matchDays = d >= minD && d <= maxD;
      const matchWater = !w || (p.care?.waterEvery || state.generalCare.waterEvery || 0) === w;
      const matchFert = !f || (p.care?.fertilizeEvery || state.generalCare.fertilizeEvery || 0) === f;
      return matchText && matchSpecies && matchLight && matchDays && matchWater && matchFert;
    });

    results.innerHTML = '';
    if (out.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'card';
      empty.textContent = state.lang==='ar'?'لا نتائج مطابقة.':'No matching results.';
      results.appendChild(empty);
      return;
    }
    out.forEach((p) => {
      const card = document.createElement('div');
      card.className = 'card plant-card';
      card.innerHTML = `<strong>${p.name}</strong><div class="plant-meta">${p.species||'—'}</div>`;
      results.appendChild(card);
    });
  }

  if (applyBtn) applyBtn.addEventListener('click', runSearch);
  if (resetBtn) resetBtn.addEventListener('click', () => {
    textEl.value = speciesEl.value = '';
    lightEl.value = '';
    minDaysEl.value = maxDaysEl.value = '';
    waterEl.value = fertEl.value = '';
    results.innerHTML = '';
  });
}

// لوحة التحكم: مقاييس وأداء
function renderDashboard() {
  const totalsEl = document.getElementById('metric-totals');
  const perfEl = document.getElementById('metric-performance');
  const actEl = document.getElementById('metric-activity');
  if (!totalsEl || !perfEl || !actEl) return;
  const totalPlants = state.plants.length;
  const photoCount = state.plants.reduce((sum,p)=> sum + (p.photos?.length||0), 0);
  const avgDays = totalPlants ? Math.round(state.plants.reduce((s,p)=> s + daysSince(p.date), 0) / totalPlants) : 0;
  totalsEl.textContent = `${state.lang==='ar'?'النباتات':'Plants'}: ${totalPlants} • ${state.lang==='ar'?'الصور':'Photos'}: ${photoCount} • ${state.lang==='ar'?'متوسط الأيام':'Avg days'}: ${avgDays}`;

  const timing = performance.getEntriesByType('navigation')[0];
  if (timing) {
    const dom = Math.round(timing.domContentLoadedEventEnd - timing.startTime);
    const load = Math.round(timing.loadEventEnd - timing.startTime);
    perfEl.textContent = `${state.lang==='ar'?'DOMContentLoaded':'DOMContentLoaded'}: ${dom}ms • ${state.lang==='ar'?'التحميل':'Load'}: ${load}ms`;
  } else {
    perfEl.textContent = state.lang==='ar'?'لا بيانات أداء':'No performance data';
  }

  actEl.textContent = `${state.lang==='ar'?'إشعارات':'Notifications'}: ${state.notifications.length}`;
}

// إدارة البيانات: تصدير/استيراد/إعادة تعيين
function setupDataManagement() {
  const exportBtn = document.getElementById('export-data');
  const importInput = document.getElementById('import-data');
  const resetBtn = document.getElementById('reset-data');
  if (exportBtn) exportBtn.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({ plants: state.plants, generalCare: state.generalCare }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `gharsa-backup-${Date.now()}.json`;
    a.click();
  });
  if (importInput) importInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const text = await file.text();
    try {
      const data = JSON.parse(text);
      if (Array.isArray(data.plants)) state.plants = data.plants;
      if (data.generalCare) state.generalCare = data.generalCare;
      save();
      notify(state.lang==='ar'?'تم استيراد البيانات':'Data imported');
    } catch { alert(state.lang==='ar'?'ملف غير صالح':'Invalid file'); }
  });
  if (resetBtn) resetBtn.addEventListener('click', () => {
    if (!confirm(state.lang==='ar'?'سيتم حذف جميع البيانات. متابعة؟':'All data will be deleted. Continue?')) return;
    state.plants = [];
    state.generalCare = { waterEvery:null, fertilizeEvery:null, light:'' };
    state.notifications = [];
    save();
    notify(state.lang==='ar'?'تمت إعادة التعيين':'Reset complete');
  });
}

// تثبيت PWA
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  state.deferredPrompt = e;
  const btn = document.getElementById('install-button');
  btn.hidden = false;
  btn.addEventListener('click', async () => {
    if (!state.deferredPrompt) return;
    state.deferredPrompt.prompt();
    const { outcome } = await state.deferredPrompt.userChoice;
    state.deferredPrompt = null;
    btn.hidden = true;
  });
});

// خدمة
function registerEvents() {
  setupNavigation();
  setupPlantForm();
  setupGeneralCareForm();
  setupNotifications();
  setupSearch();
  setupDataManagement();
  renderPlants();
  renderReminders();
  renderDashboard();
  scheduleChecks();
  applyI18n();
}

document.addEventListener('DOMContentLoaded', () => {
  load();
  registerEvents();
});