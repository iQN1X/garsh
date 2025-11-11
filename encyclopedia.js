// بيانات الموسوعة للنباتات الأساسية
window.ENCYCLOPEDIA = [
  {
    id: 'tomato', name: 'الطماطم',
    stages: ['بذور', 'شتلة', 'نمو خضري', 'إزهار', 'إثمار'],
    germinationDays: '5-10 أيام',
    requirements: { light: 'شمس مباشرة', water: 'ري منتظم دون إغراق', fertilize: 'كل 14-21 يوم' }
  },
  { id: 'strawberry', name: 'الفراولة', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-21 يوم', requirements: { light: 'شمس غير مباشرة', water: 'تربة رطبة', fertilize: 'كل 30 يوم' } },
  { id: 'basil', name: 'الريحان', stages: ['بذور', 'شتلة', 'نمو', 'حصاد'], germinationDays: '5-7 أيام', requirements: { light: 'شمس غير مباشرة', water: 'ري خفيف متكرر', fertilize: 'كل 21 يوم' } },
  { id: 'mint', name: 'النعناع', stages: ['عقل/شتلة', 'انتشار', 'حصاد'], germinationDays: '7-15 يوم', requirements: { light: 'ظل جزئي', water: 'ري جيد', fertilize: 'خفيف' } },
  { id: 'potato', name: 'البطاطس', stages: ['درنات', 'نمو', 'إزهار', 'جني'], germinationDays: '10-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري عميق', fertilize: 'بوتاسيوم' } },
  { id: 'garlic', name: 'الثوم', stages: ['فصوص', 'نمو', 'نضج'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'فوسفور' } },
  { id: 'carrot', name: 'الجزر', stages: ['بذور', 'نمو', 'نضج', 'حصاد'], germinationDays: '10-21 يوم', requirements: { light: 'شمس مباشرة', water: 'ري منتظم', fertilize: 'خفيف' } },
  { id: 'onion', name: 'البصل', stages: ['بذور/شتلات', 'نمو', 'نضج'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'نيتروجين معتدل' } },
  { id: 'lettuce', name: 'الخس', stages: ['بذور', 'شتلة', 'نمو', 'حصاد'], germinationDays: '7-10 أيام', requirements: { light: 'شمس غير مباشرة', water: 'تربة رطبة', fertilize: 'خفيف' } },
  { id: 'pepper', name: 'الفلفل الرومي', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري منتظم', fertilize: 'كل 14-21 يوم' } },
  { id: 'chili', name: 'الفلفل الحار', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'كل 21 يوم' } },
  { id: 'cucumber', name: 'الخيار', stages: ['بذور', 'شتلة', 'تسلق/نمو', 'إزهار', 'إثمار'], germinationDays: '5-10 أيام', requirements: { light: 'شمس مباشرة', water: 'ري غزير دون إغراق', fertilize: 'نيتروجين معتدل' } },
  { id: 'eggplant', name: 'الباذنجان', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري منتظم', fertilize: 'بوتاسيوم جيد' } },
  { id: 'zucchini', name: 'الكوسا', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '5-10 أيام', requirements: { light: 'شمس مباشرة', water: 'ري جيد', fertilize: 'خفيف منتظم' } },
  { id: 'pumpkin', name: 'اليقطين', stages: ['بذور', 'شتلة', 'تمدد/نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري عميق', fertilize: 'فوسفور وبوتاسيوم' } },
  { id: 'watermelon', name: 'البطيخ', stages: ['بذور', 'شتلة', 'زحف/نمو', 'إزهار', 'إثمار'], germinationDays: '7-10 أيام', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'بوتاسيوم' } },
  { id: 'melon', name: 'الشمام', stages: ['بذور', 'شتلة', 'زحف/نمو', 'إزهار', 'إثمار'], germinationDays: '7-10 أيام', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'بوتاسيوم' } },
  { id: 'spinach', name: 'السبانخ', stages: ['بذور', 'نمو', 'حصاد'], germinationDays: '5-10 أيام', requirements: { light: 'شمس غير مباشرة', water: 'تربة رطبة', fertilize: 'خفيف' } },
  { id: 'arugula', name: 'الجرجير', stages: ['بذور', 'نمو', 'حصاد'], germinationDays: '3-7 أيام', requirements: { light: 'شمس غير مباشرة', water: 'ري خفيف متكرر', fertilize: 'خفيف' } },
  { id: 'parsley', name: 'البقدونس', stages: ['بذور', 'شتلة', 'نمو', 'حصاد'], germinationDays: '10-28 يوم', requirements: { light: 'شمس غير مباشرة', water: 'ري معتدل', fertilize: 'خفيف' } },
  { id: 'coriander', name: 'الكزبرة', stages: ['بذور', 'نمو', 'حصاد'], germinationDays: '7-10 أيام', requirements: { light: 'شمس غير مباشرة', water: 'ري معتدل', fertilize: 'خفيف' } },
  { id: 'dill', name: 'الشبت', stages: ['بذور', 'نمو', 'حصاد'], germinationDays: '7-14 يوم', requirements: { light: 'شمس غير مباشرة', water: 'ري معتدل', fertilize: 'خفيف' } },
  { id: 'rosemary', name: 'إكليل الجبل', stages: ['عقل/شتلة', 'نمو', 'حصاد'], germinationDays: '14-28 يوم', requirements: { light: 'شمس مباشرة', water: 'ري خفيف', fertilize: 'خفيف' } },
  { id: 'thyme', name: 'الزعتر', stages: ['بذور/عقل', 'نمو', 'حصاد'], germinationDays: '10-21 يوم', requirements: { light: 'شمس مباشرة', water: 'ري خفيف', fertilize: 'خفيف' } },
  { id: 'sage', name: 'الميرمية', stages: ['عقل/شتلة', 'نمو', 'حصاد'], germinationDays: '14-21 يوم', requirements: { light: 'شمس مباشرة', water: 'ري خفيف', fertilize: 'خفيف' } },
  { id: 'oregano', name: 'الأوريجانو', stages: ['بذور/عقل', 'نمو', 'حصاد'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري خفيف', fertilize: 'خفيف' } },
  { id: 'green-bean', name: 'الفاصوليا الخضراء', stages: ['بذور', 'شتلة', 'تسلق/نمو', 'إزهار', 'إثمار'], germinationDays: '7-10 أيام', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'خفيف' } },
  { id: 'pea', name: 'البازلاء', stages: ['بذور', 'شتلة', 'تسلق/نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'خفيف' } },
  { id: 'corn', name: 'الذرة', stages: ['بذور', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري منتظم', fertilize: 'نيتروجين جيد' } },
  { id: 'broccoli', name: 'البروكلي', stages: ['بذور', 'شتلة', 'نمو', 'تكوين رؤوس', 'حصاد'], germinationDays: '7-14 يوم', requirements: { light: 'شمس غير مباشرة', water: 'ري منتظم', fertilize: 'خفيف' } },
  { id: 'cauliflower', name: 'القرنبيط', stages: ['بذور', 'شتلة', 'نمو', 'تكوين رؤوس', 'حصاد'], germinationDays: '7-14 يوم', requirements: { light: 'شمس غير مباشرة', water: 'ري منتظم', fertilize: 'خفيف' } },
  { id: 'beet', name: 'الشمندر', stages: ['بذور', 'نمو', 'نضج', 'حصاد'], germinationDays: '5-10 أيام', requirements: { light: 'شمس غير مباشرة', water: 'ري معتدل', fertilize: 'خفيف' } },
  { id: 'celery', name: 'الكرفس', stages: ['بذور', 'شتلة', 'نمو', 'حصاد'], germinationDays: '14-21 يوم', requirements: { light: 'شمس غير مباشرة', water: 'تربة رطبة', fertilize: 'خفيف' } },
  // نباتات منزلية وزينة وسكولنت
  { id: 'aloe-vera', name: 'الألوفيرا', stages: ['فسيلة', 'نمو', 'نضج'], germinationDays: 'لا يزرع غالباً بالبذور', requirements: { light: 'شمس غير مباشرة', water: 'ري خفيف متباعد', fertilize: 'نادر' } },
  { id: 'cactus', name: 'الصبار', stages: ['عقلة/شتلة', 'نمو', 'نضج'], germinationDays: 'بطيء جداً بالبذور', requirements: { light: 'شمس مباشرة', water: 'ري نادر', fertilize: 'نادر' } },
  { id: 'snake-plant', name: 'سانسيفيريا (جلد النمر)', stages: ['عقلة/شتلة', 'نمو', 'نضج'], germinationDays: '—', requirements: { light: 'ظل جزئي', water: 'ري قليل', fertilize: 'خفيف' } },
  { id: 'spider-plant', name: 'العنكبوتية', stages: ['فسيلة', 'نمو', 'نضج'], germinationDays: '—', requirements: { light: 'شمس غير مباشرة', water: 'ري معتدل', fertilize: 'خفيف' } },
  { id: 'peace-lily', name: 'زنابق السلام', stages: ['شتلة', 'نمو', 'إزهار'], germinationDays: '—', requirements: { light: 'ظل جزئي', water: 'تربة رطبة', fertilize: 'خفيف' } },
  { id: 'pothos', name: 'بثوس (اللبلاب الذهبي)', stages: ['عقلة', 'نمو', 'نضج'], germinationDays: '—', requirements: { light: 'ظل جزئي', water: 'ري معتدل', fertilize: 'خفيف' } },
  { id: 'monstera', name: 'مونستيرا', stages: ['شتلة', 'نمو', 'نضج'], germinationDays: '—', requirements: { light: 'شمس غير مباشرة', water: 'ري معتدل', fertilize: 'خفيف' } },
  { id: 'lavender', name: 'اللافندر', stages: ['بذور/عقلة', 'نمو', 'إزهار'], germinationDays: '14-28 يوم', requirements: { light: 'شمس مباشرة', water: 'ري خفيف', fertilize: 'نادر' } },
  { id: 'jasmine', name: 'الياسمين', stages: ['عقلة/شتلة', 'نمو', 'إزهار'], germinationDays: '—', requirements: { light: 'شمس غير مباشرة', water: 'ري معتدل', fertilize: 'خفيف' } },
  { id: 'rose', name: 'الورد', stages: ['شتلة', 'نمو', 'إزهار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'منتظم' } },
  { id: 'chrysanthemum', name: 'الأقحوان', stages: ['شتلة', 'نمو', 'إزهار'], germinationDays: '—', requirements: { light: 'شمس غير مباشرة', water: 'ري معتدل', fertilize: 'خفيف' } },
  { id: 'marigold', name: 'القطيفة', stages: ['بذور', 'نمو', 'إزهار'], germinationDays: '5-7 أيام', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'خفيف' } },
  // إضافات كثيرة مطلوبة
  { id: 'bell-pepper', name: 'الفلفل الرومي', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'منتظم', fertilize: '14-21 يوم' } },
  { id: 'hot-pepper', name: 'فلفل حار', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'معتدل', fertilize: '21 يوم' } },
  { id: 'jalapeno', name: 'هالابينو', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'معتدل', fertilize: '21 يوم' } },
  { id: 'cherry-tomato', name: 'طماطم كرزية', stages: ['بذور', 'شتلة', 'نمو خضري', 'إزهار', 'إثمار'], germinationDays: '5-10 أيام', requirements: { light: 'شمس مباشرة', water: 'منتظم', fertilize: '14-21 يوم' } },
  { id: 'lemon', name: 'ليمون', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'منتظم' } },
  { id: 'orange', name: 'برتقال', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'منتظم' } },
  { id: 'mandarin', name: 'يوسفي', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'منتظم' } },
  { id: 'pomegranate', name: 'رمان', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'خفيف' } },
  { id: 'apple', name: 'تفاح', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'موسمي' } },
  { id: 'fig', name: 'تين', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'خفيف' } },
  { id: 'grape', name: 'عنب', stages: ['شتلة', 'تسلق/نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'موسمي' } },
];

function renderEncyclopedia() {
  const list = document.getElementById('encyclopedia-list');
  const speciesList = document.getElementById('species-list');
  if (!list) return;
  list.innerHTML = '';
  window.ENCYCLOPEDIA.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="plant-card">
        <div class="plant-header">
          <strong>${item.name}</strong>
          <span class="plant-meta">إنبات: ${item.germinationDays}</span>
        </div>
        <div class="list">
          <div><strong>المراحل:</strong> ${item.stages.join(' • ')}</div>
          <div><strong>إضاءة:</strong> ${item.requirements.light}</div>
          <div><strong>الري:</strong> ${item.requirements.water}</div>
          <div><strong>التسميد:</strong> ${item.requirements.fertilize}</div>
        </div>
      </div>
    `;
    list.appendChild(card);
  });

  // إعادة بناء قائمة الأنواع دائماً لتشمل كل الإضافات
  if (speciesList) {
    speciesList.innerHTML = '';
    window.ENCYCLOPEDIA.forEach((i) => {
      const opt = document.createElement('option');
      opt.value = i.name;
      speciesList.appendChild(opt);
    });
  }
}

document.addEventListener('DOMContentLoaded', renderEncyclopedia);

// إضافة عنصر جديد للموسوعة
document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('ency-add');
  if (!addBtn) return;
  addBtn.addEventListener('click', () => {
    const name = document.getElementById('ency-name').value.trim();
    const germ = document.getElementById('ency-germ').value.trim();
    const light = document.getElementById('ency-light').value.trim();
    const water = document.getElementById('ency-water').value.trim();
    const fert = document.getElementById('ency-fert').value.trim();
    const stagesInput = document.getElementById('ency-stages').value.trim();
    if (!name) return alert('يرجى كتابة اسم النوع');
    const stages = stagesInput ? stagesInput.split(',').map(s => s.trim()).filter(Boolean) : [];
    const item = { id: name.toLowerCase().replace(/\s+/g,'-'), name, stages, germinationDays: germ, requirements: { light, water, fertilize: fert } };
    window.ENCYCLOPEDIA.push(item);
    renderEncyclopedia();
    alert('تمت إضافة النوع إلى الموسوعة');
  });
});