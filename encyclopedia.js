// بيانات الموسوعة للنباتات الأساسية
window.ENCYCLOPEDIA = [
  {
    id: 'tomato', name: 'الطماطم',
    stages: ['بذور', 'شتلة', 'نمو خضري', 'إزهار', 'إثمار'],
    germinationDays: '5-10 أيام',
    requirements: { light: 'شمس مباشرة', water: 'ري منتظم دون إغراق', fertilize: 'كل 14-21 يوم' },
    season: ['ربيعي','صيفي','خريفي'],
    bestPlantingQassim: 'نهاية الشتاء إلى بداية الربيع (فبراير–مارس) أو أواخر الصيف (أغسطس–سبتمبر)'
  },
  { id: 'strawberry', name: 'الفراولة', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-21 يوم', requirements: { light: 'شمس غير مباشرة', water: 'تربة رطبة', fertilize: 'كل 30 يوم' }, season: ['شتوي','ربيعي'], bestPlantingQassim: 'الخريف المتأخر حتى الشتاء (نوفمبر–يناير)' },
  { id: 'basil', name: 'الريحان', stages: ['بذور', 'شتلة', 'نمو', 'حصاد'], germinationDays: '5-7 أيام', requirements: { light: 'شمس غير مباشرة', water: 'ري خفيف متكرر', fertilize: 'كل 21 يوم' }, season: ['ربيعي','صيفي'], bestPlantingQassim: 'الربيع (مارس–أبريل)' },
  { id: 'mint', name: 'النعناع', stages: ['عقل/شتلة', 'انتشار', 'حصاد'], germinationDays: '7-15 يوم', requirements: { light: 'ظل جزئي', water: 'ري جيد', fertilize: 'خفيف' }, season: ['ربيعي','صيفي','خريفي'], bestPlantingQassim: 'الربيع أفضل (مارس–أبريل)، ويمكن على مدار العام مع حماية صيفية' },
  { id: 'potato', name: 'البطاطس', stages: ['درنات', 'نمو', 'إزهار', 'جني'], germinationDays: '10-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري عميق', fertilize: 'بوتاسيوم' }, season: ['شتوي','ربيعي'], bestPlantingQassim: 'نهاية الخريف حتى الشتاء (نوفمبر–يناير)' },
  { id: 'garlic', name: 'الثوم', stages: ['فصوص', 'نمو', 'نضج'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'فوسفور' }, season: ['شتوي'], bestPlantingQassim: 'الخريف المتأخر (أكتوبر–نوفمبر)' },
  { id: 'carrot', name: 'الجزر', stages: ['بذور', 'نمو', 'نضج', 'حصاد'], germinationDays: '10-21 يوم', requirements: { light: 'شمس مباشرة', water: 'ري منتظم', fertilize: 'خفيف' }, season: ['شتوي','ربيعي'], bestPlantingQassim: 'الشتاء المبكر (ديسمبر–يناير) أو بداية الربيع' },
  { id: 'onion', name: 'البصل', stages: ['بذور/شتلات', 'نمو', 'نضج'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'نيتروجين معتدل' }, season: ['شتوي'], bestPlantingQassim: 'الخريف المتأخر حتى الشتاء (نوفمبر–يناير)' },
  { id: 'lettuce', name: 'الخس', stages: ['بذور', 'شتلة', 'نمو', 'حصاد'], germinationDays: '7-10 أيام', requirements: { light: 'شمس غير مباشرة', water: 'تربة رطبة', fertilize: 'خفيف' }, season: ['شتوي','ربيعي'], bestPlantingQassim: 'الخريف والشتاء (أكتوبر–يناير)' },
  { id: 'pepper', name: 'الفلفل الرومي', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري منتظم', fertilize: 'كل 14-21 يوم' } },
  { id: 'chili', name: 'الفلفل الحار', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'كل 21 يوم' } },
  { id: 'cucumber', name: 'الخيار', stages: ['بذور', 'شتلة', 'تسلق/نمو', 'إزهار', 'إثمار'], germinationDays: '5-10 أيام', requirements: { light: 'شمس مباشرة', water: 'ري غزير دون إغراق', fertilize: 'نيتروجين معتدل' }, season: ['ربيعي','صيفي','خريفي'], bestPlantingQassim: 'بداية الربيع (فبراير–مارس) أو أوائل الخريف (سبتمبر)' },
  { id: 'eggplant', name: 'الباذنجان', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري منتظم', fertilize: 'بوتاسيوم جيد' }, season: ['ربيعي','صيفي','خريفي'], bestPlantingQassim: 'نهاية الشتاء إلى الربيع (فبراير–مارس) أو أواخر الصيف (أغسطس–سبتمبر)' },
  { id: 'zucchini', name: 'الكوسا', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '5-10 أيام', requirements: { light: 'شمس مباشرة', water: 'ري جيد', fertilize: 'خفيف منتظم' }, season: ['ربيعي','خريفي'], bestPlantingQassim: 'الربيع (مارس–أبريل) أو سبتمبر' },
  { id: 'pumpkin', name: 'اليقطين', stages: ['بذور', 'شتلة', 'تمدد/نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'ري عميق', fertilize: 'فوسفور وبوتاسيوم' }, season: ['ربيعي','صيفي'], bestPlantingQassim: 'الربيع (مارس–أبريل)' },
  { id: 'watermelon', name: 'البطيخ', stages: ['بذور', 'شتلة', 'زحف/نمو', 'إزهار', 'إثمار'], germinationDays: '7-10 أيام', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'بوتاسيوم' }, season: ['صيفي'], bestPlantingQassim: 'الربيع المتأخر (أبريل–مايو)' },
  { id: 'melon', name: 'الشمام', stages: ['بذور', 'شتلة', 'زحف/نمو', 'إزهار', 'إثمار'], germinationDays: '7-10 أيام', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'بوتاسيوم' }, season: ['ربيعي','صيفي'], bestPlantingQassim: 'الربيع (مارس–أبريل)' },
  { id: 'spinach', name: 'السبانخ', stages: ['بذور', 'نمو', 'حصاد'], germinationDays: '5-10 أيام', requirements: { light: 'شمس غير مباشرة', water: 'تربة رطبة', fertilize: 'خفيف' }, season: ['شتوي'], bestPlantingQassim: 'الخريف والشتاء (نوفمبر–يناير)' },
  { id: 'arugula', name: 'الجرجير', stages: ['بذور', 'نمو', 'حصاد'], germinationDays: '3-7 أيام', requirements: { light: 'شمس غير مباشرة', water: 'ري خفيف متكرر', fertilize: 'خفيف' }, season: ['شتوي','ربيعي'], bestPlantingQassim: 'الخريف والشتاء (أكتوبر–يناير)' },
  { id: 'parsley', name: 'البقدونس', stages: ['بذور', 'شتلة', 'نمو', 'حصاد'], germinationDays: '10-28 يوم', requirements: { light: 'شمس غير مباشرة', water: 'ري معتدل', fertilize: 'خفيف' }, season: ['شتوي','ربيعي'], bestPlantingQassim: 'الخريف المتأخر أو الربيع المبكر' },
  { id: 'coriander', name: 'الكزبرة', stages: ['بذور', 'نمو', 'حصاد'], germinationDays: '7-10 أيام', requirements: { light: 'شمس غير مباشرة', water: 'ري معتدل', fertilize: 'خفيف' }, season: ['شتوي','ربيعي'], bestPlantingQassim: 'الخريف والربيع' },
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
  // زهور إضافية
  { id: 'sunflower', name: 'عباد الشمس', stages: ['بذور', 'نمو', 'إزهار'], germinationDays: '7-10 أيام', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'خفيف' }, season: ['ربيعي','صيفي'], bestPlantingQassim: 'مارس–أبريل' },
  { id: 'tulip', name: 'التوليب', stages: ['بصلة', 'نمو', 'إزهار'], germinationDays: '—', requirements: { light: 'شمس غير مباشرة', water: 'تربة رطبة', fertilize: 'خفيف' }, season: ['شتوي','ربيعي'], bestPlantingQassim: 'الخريف المتأخر حتى الشتاء' },
  { id: 'daffodil', name: 'النرجس', stages: ['بصلة', 'نمو', 'إزهار'], germinationDays: '—', requirements: { light: 'شمس غير مباشرة', water: 'ري معتدل', fertilize: 'خفيف' }, season: ['شتوي','ربيعي'], bestPlantingQassim: 'الخريف المتأخر حتى الشتاء' },
  // إضافات كثيرة مطلوبة
  { id: 'bell-pepper', name: 'الفلفل الرومي', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'منتظم', fertilize: '14-21 يوم' }, season: ['ربيعي','صيفي','خريفي'], bestPlantingQassim: 'نهاية الشتاء إلى الربيع (فبراير–مارس) أو أواخر الصيف (أغسطس–سبتمبر)' },
  { id: 'hot-pepper', name: 'فلفل حار', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'معتدل', fertilize: '21 يوم' }, season: ['ربيعي','صيفي','خريفي'], bestPlantingQassim: 'فبراير–مارس أو أغسطس–سبتمبر' },
  { id: 'jalapeno', name: 'هالابينو', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-14 يوم', requirements: { light: 'شمس مباشرة', water: 'معتدل', fertilize: '21 يوم' }, season: ['ربيعي','صيفي','خريفي'], bestPlantingQassim: 'فبراير–مارس أو أغسطس–سبتمبر' },
  { id: 'cherry-tomato', name: 'طماطم كرزية', stages: ['بذور', 'شتلة', 'نمو خضري', 'إزهار', 'إثمار'], germinationDays: '5-10 أيام', requirements: { light: 'شمس مباشرة', water: 'منتظم', fertilize: '14-21 يوم' }, season: ['ربيعي','صيفي','خريفي'], bestPlantingQassim: 'فبراير–مارس أو أغسطس–سبتمبر' },
  { id: 'lemon', name: 'ليمون', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'منتظم' }, season: ['ربيعي','خريفي'], bestPlantingQassim: 'الربيع أو الخريف (مارس–أبريل / أكتوبر)' },
  { id: 'orange', name: 'برتقال', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'منتظم' }, season: ['ربيعي','خريفي'], bestPlantingQassim: 'الربيع أو الخريف (مارس–أبريل / أكتوبر)' },
  { id: 'mandarin', name: 'يوسفي', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'منتظم' }, season: ['ربيعي','خريفي'], bestPlantingQassim: 'الربيع أو الخريف' },
  { id: 'pomegranate', name: 'رمان', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'خفيف' }, season: ['ربيعي'], bestPlantingQassim: 'نهاية الشتاء إلى بداية الربيع (فبراير–مارس)' },
  { id: 'apple', name: 'تفاح', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'موسمي' }, season: ['شتوي','ربيعي'], bestPlantingQassim: 'نهاية الشتاء إلى بداية الربيع (فبراير–مارس)' },
  { id: 'fig', name: 'تين', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'خفيف' }, season: ['ربيعي'], bestPlantingQassim: 'نهاية الشتاء إلى بداية الربيع (فبراير–مارس)' },
  // فواكه إضافية
  { id: 'apricot', name: 'مشمش', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'موسمي' }, season: ['ربيعي'], bestPlantingQassim: 'نهاية الشتاء إلى بداية الربيع' },
  { id: 'peach', name: 'خوخ', stages: ['شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'موسمي' }, season: ['ربيعي'], bestPlantingQassim: 'نهاية الشتاء إلى بداية الربيع' },
  { id: 'grape', name: 'عنب', stages: ['شتلة', 'تسلق/نمو', 'إزهار', 'إثمار'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'موسمي' }, season: ['ربيعي'], bestPlantingQassim: 'نهاية الشتاء (فبراير) حتى بداية الربيع (مارس)' },
  { id: 'okra', name: 'الباميا', stages: ['بذور', 'شتلة', 'نمو', 'إزهار', 'إثمار'], germinationDays: '7-10 أيام', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'كل 21 يوم' }, season: ['صيفي'], bestPlantingQassim: 'أواخر الربيع إلى أوائل الصيف (أبريل–مايو)' },
  { id: 'olive', name: 'الزيتون', stages: ['شتلة', 'نمو', 'إثمار لاحقاً'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري معتدل', fertilize: 'خفيف' }, season: ['ربيعي','خريفي'], bestPlantingQassim: 'الربيع أو الخريف، مع تجنب ذروة الحر والبرد' },
  { id: 'date-palm', name: 'النخيل', stages: ['فسيلة', 'نمو', 'إثمار بعد سنوات'], germinationDays: '—', requirements: { light: 'شمس مباشرة', water: 'ري عميق', fertilize: 'متوازن مع عناصر صغرى' }, season: ['ربيعي','خريفي'], bestPlantingQassim: 'الربيع أو الخريف، والابتعاد عن برد الشتاء وحر الصيف' },
];

// صور افتراضية بحسب القسم
const CATEGORY_IMAGES = {
  'خضروات': './images/vegetables.svg',
  'فواكه': './images/fruits.svg',
  'أعشاب': './images/herbs.svg',
  'زهور': './images/flowers.svg',
  'أشجار': './images/trees.svg',
  'منزلية': './images/houseplants.svg',
  'صبارات': './images/cacti.svg',
};

function renderEncyclopedia() {
  const list = document.getElementById('encyclopedia-list');
  const speciesList = document.getElementById('species-list');
  if (!list) return;
  list.innerHTML = '';
  // تطبيق التصنيفات ديناميكياً إن لم تكن موجودة
  ensureCategories();
  const text = (window.encyFilters?.text) || '';
  const cat = (window.encyFilters?.category) || '';
  const filtered = window.ENCYCLOPEDIA.filter((item) => {
    const nameMatch = !text || item.name.toLowerCase().includes(text) || item.id.toLowerCase().includes(text);
    const catMatch = !cat || cat === '' || item.category === cat;
    return nameMatch && catMatch;
  });
  filtered.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';
    const heightText = item.height || HEIGHT_MAP[item.id] || CATEGORY_HEIGHT_DEFAULT[item.category] || '—';
    card.innerHTML = `
      <div class="ency-card">
        <img class="ency-thumb" src="${item.image || CATEGORY_IMAGES[item.category] || './icons/icon-192.png'}" alt="${item.name}" />
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
            <div><strong>الطول التقريبي:</strong> ${heightText}</div>
            ${item.category ? `<div><strong>القسم:</strong> ${item.category}</div>` : ''}
            ${item.season ? `<div><strong>الموسم:</strong> ${Array.isArray(item.season)? item.season.join('، ') : item.season}</div>` : ''}
            ${item.bestPlantingQassim ? `<div><strong>أفضل وقت للزراعة في القصيم:</strong> ${item.bestPlantingQassim}</div>` : ''}
          </div>
          <div class="actions">
            <button class="primary add-inv" data-kind="نبات" data-id="${item.id}" data-name="${item.name}">أضف إلى المخزن</button>
          </div>
        </div>
      </div>
    `;
    list.appendChild(card);
    const btn = card.querySelector('.add-inv');
    if (btn) {
      btn.addEventListener('click', () => {
        if (window.addToInventory) {
          window.addToInventory({ kind: 'نبات', id: item.id, name: item.name });
        }
      });
    }
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

// بيانات التربة (أسماء عربي مع الإنجليزية بين قوسين)
const SOIL_TYPES = [
  { id: 'loam', name: 'طمي (Loam)', texture: 'خليط متوازن من الرمل والطين والدبال', drainage: 'تصريف جيد', fertility: 'خصوبة عالية', ph: '6.0–7.0', bestFor: 'معظم الخضروات والأعشاب', tips: 'يحافظ على رطوبة معتدلة مع تهوية جيدة' },
  { id: 'sandy', name: 'رملية (Sandy)', texture: 'حبيبات كبيرة، خفيفة', drainage: 'سريع جداً', fertility: 'منخفضة', ph: '6.0–7.5', bestFor: 'جذور كالجزر والبصل مع تحسين بالدبال', tips: 'أضف كمبوست لرفع الخصوبة والاحتفاظ بالماء' },
  { id: 'clay', name: 'طينية (Clay)', texture: 'ناعمة لزجة، كثيفة', drainage: 'ضعيف', fertility: 'مرتفعة غالباً', ph: '6.0–7.0', bestFor: 'أشجار وفواكه بعد تحسين التصريف', tips: 'اخلطها بالرمل والكمبوست لتحسين التهوية' },
  { id: 'silt', name: 'غرينية (Silt)', texture: 'جزيئات دقيقة ناعمة كالدقيق', drainage: 'متوسط', fertility: 'متوسطة إلى عالية', ph: '6.0–7.5', bestFor: 'كثير من المحاصيل بعد إضافة مادة عضوية', tips: 'تميل للانضغاط؛ أضف كمبوست لتحسين البنية' },
  { id: 'peat', name: 'خُثية (Peat)', texture: 'غنية بالمادة العضوية، إسفنجية', drainage: 'احتفاظ ماء عالٍ', fertility: 'منخفضة إلى متوسطة', ph: 'حمضية 4.5–6.0', bestFor: 'النباتات المحبة للحموضة كالأزالي والبلوبيري', tips: 'أضف بيرلايت/جير حسب الحاجة لتحسين التهوية ورفع pH' },
  { id: 'chalky', name: 'جيرية (Chalky/Calcareous)', texture: 'غالباً خفيفة مع شظايا كلسية', drainage: 'جيد', fertility: 'منخفضة إلى متوسطة', ph: 'قلوية 7.5–8.5', bestFor: 'نباتات تتحمل القلوية', tips: 'أضف مادة عضوية وكبريت زراعي لخفض pH تدريجياً' },
  { id: 'saline', name: 'ملحية (Saline)', texture: 'متغيرة؛ أملاح مرتفعة', drainage: 'متغير', fertility: 'ضعيفة عادة', ph: 'متغير', bestFor: 'أنواع متحملة للملوحة', tips: 'غسل الأملاح وتحسين التصريف وتقليل الري الرديء' },
  { id: 'loess', name: 'لوس (Loess)', texture: 'غريني ريحي ناعم', drainage: 'جيد إلى متوسط', fertility: 'عالية', ph: '6.0–7.5', bestFor: 'محاصيل حقلية وبستانية', tips: 'حسّاسة للتعرية؛ استخدم تغطية نباتية' },
  { id: 'andisols', name: 'بركانية (Andisols/Volcanic)', texture: 'مسامية، خفيفة', drainage: 'جيد', fertility: 'جيدة', ph: '5.5–6.5', bestFor: 'خضروات وفواكه', tips: 'راقب الحموضة وأضف كالسيوم عند الحاجة' },
  { id: 'chernozem', name: 'تشيرنوزِم (Chernozem/Black Soil)', texture: 'غنية بالدبال، داكنة اللون', drainage: 'متوازن', fertility: 'مرتفعة جداً', ph: 'قريب من المتعادل 6.5–7.5', bestFor: 'حبوب وخضروات متعددة', tips: 'حافظ على المادة العضوية بالتغطية والكمبوست' },
  { id: 'laterite', name: 'لاتيريت (Laterite)', texture: 'متجوية، قاسية عند الجفاف', drainage: 'جيد عادة', fertility: 'منخفضة', ph: 'حمضية 5.0–6.0', bestFor: 'بعد تحسينات كثيفة (كمبوست/مصادر فوسفور)', tips: 'أضف كمبوست وغطاء نباتي لتقليل الفقد' },
  { id: 'alluvial', name: 'فيضية (Alluvial)', texture: 'رواسب أودية/أنهار متنوعة', drainage: 'متغير', fertility: 'متوسطة إلى عالية', ph: 'متغير', bestFor: 'طيف واسع من المحاصيل', tips: 'اختبر الأملاح والعناصر قبل الزراعة' },
  { id: 'potting-mix', name: 'خليط زراعة منزلي (Potting Mix)', texture: 'بيتموس + بيرلايت + كمبوست', drainage: 'جيد', fertility: 'متوسطة', ph: '5.5–6.5', bestFor: 'نباتات منزلية وزينة', tips: 'يُفضّل الري المتباعد مع تصريف كامل' },
  { id: 'coco-coir', name: 'ليف جوز الهند (Coco Coir Mix)', texture: 'ألياف نباتية، خفيفة', drainage: 'جيد', fertility: 'منخفضة (تحتاج تسميد)', ph: 'قريب من المتعادل', bestFor: 'ميديا للبادرات والشتلات', tips: 'أضف سماداً متوازناً ومُحسّنات صغرى' },
];

const FERTILIZER_TYPES = [
  { id: 'npk-balanced', name: 'متوازن (NPK 20-20-20)', type: 'مركّب', npk: '20-20-20', usage: 'عام لمعظم النباتات خلال النمو', frequency: 'كل 14–21 يوم', notes: 'خفّف حسب الإرشادات لتجنب حرق الجذور' },
  { id: 'high-n', name: 'نيتروجين عالي (High-N 30-10-10)', type: 'مركّب', npk: '30-10-10', usage: 'تعزيز النمو الخضري (الأوراق)', frequency: 'كل 14 يوم', notes: 'قلّل الجرعة وقت الإزهار' },
  { id: 'high-p', name: 'فوسفور عالي (High-P 10-30-10)', type: 'مركّب', npk: '10-30-10', usage: 'تشجيع الإزهار وتجذير الشتلات', frequency: 'كل 21 يوم', notes: 'مفيد بعد النقل وللتجذير' },
  { id: 'high-k', name: 'بوتاسيوم عالي (High-K 10-10-30)', type: 'مركّب', npk: '10-10-30', usage: 'تقوية الإثمار وجودة الثمار', frequency: 'كل 21–30 يوم', notes: 'يفضّل خلال الإثمار' },
  { id: 'urea', name: 'يوريا (Urea)', type: 'معدني', npk: '46-0-0', usage: 'زيادة النمو الورقي السريع', frequency: 'حسب الحاجة وبجرعات صغيرة', notes: 'قد تسبب حرقاً؛ استخدمها بحذر' },
  { id: 'ammonium-sulfate', name: 'كبريتات الأمونيوم (Ammonium Sulfate)', type: 'معدني', npk: '21-0-0 + S', usage: 'تزويد نيتروجين وخفض pH للترب القلوية', frequency: 'شهرياً أو حسب التربة', notes: 'يساهم في حموضة التربة' },
  { id: 'calcium-nitrate', name: 'نترات الكالسيوم (Calcium Nitrate)', type: 'معدني', npk: '15.5-0-0 + Ca', usage: 'تصحيح نقص الكالسيوم وتحسين الثمار', frequency: 'كل 21–30 يوم', notes: 'يفيد في منع عفن نهاية الثمرة' },
  { id: 'tsp', name: 'فوسفات ثلاثي فائق (Triple Superphosphate)', type: 'معدني', npk: '0-46-0', usage: 'تقوية الجذور وبداية النمو', frequency: 'تطبيقات محدودة عند التحضير', notes: 'لا تضعه مباشرة مع البذور' },
  { id: 'map', name: 'فوسفات أحادي الأمونيوم (MAP)', type: 'معدني', npk: '11-52-0', usage: 'بداية التجذير والإزهار', frequency: 'عند التحضير وبشكل دوري خفيف', notes: 'مصدر فوسفور فعّال' },
  { id: 'potassium-sulfate', name: 'كبريتات البوتاسيوم (Potassium Sulfate)', type: 'معدني', npk: '0-0-50', usage: 'تحسين جودة الثمار ومقاومة الإجهاد', frequency: 'كل 21–30 يوم', notes: 'مناسب للنباتات الحسّاسة للكلور' },
  { id: 'mop', name: 'كلوريد البوتاسيوم (Muriate of Potash)', type: 'معدني', npk: '0-0-60', usage: 'رفع البوتاسيوم للإثمار', frequency: 'حسب الحاجة', notes: 'يحتوي كلور؛ تجنّبه مع الأنواع الحسّاسة' },
  { id: 'bone-meal', name: 'طحين العظام (Bone Meal)', type: 'عضوي', npk: '3-15-0 (تقريبي)', usage: 'تعزيز الجذور والإزهار', frequency: 'بطيء التحلل؛ يخلط بالتربة', notes: 'مصدر فوسفور عضوي' },
  { id: 'blood-meal', name: 'طحين الدم (Blood Meal)', type: 'عضوي', npk: '12-0-0 (تقريبي)', usage: 'رفع النيتروجين للنمو الخضري', frequency: 'جرعات صغيرة حسب الحاجة', notes: 'قد يسبّب حرقاً إن زادت الجرعة' },
  { id: 'fish-emulsion', name: 'مستخلص السمك (Fish Emulsion)', type: 'عضوي', npk: '5-1-1 (تقريبي)', usage: 'تغذية لطيفة للنباتات عامة', frequency: 'كل 14–21 يوم', notes: 'رائحة قوية؛ آمن نسبياً' },
  { id: 'kelp', name: 'طحالب بحرية (Seaweed/Kelp)', type: 'عضوي', npk: 'منخفض جداً', usage: 'عناصر صغرى ومضادات إجهاد', frequency: 'رش ورقي أو تربة بشكل دوري', notes: 'يفيد في تقوية المناعة' },
  { id: 'worm-castings', name: 'سماد ديدان (Worm Castings)', type: 'عضوي', npk: 'منخفض/متغير', usage: 'تحسين التربة والميكروبيوم', frequency: 'يُمزج بالتربة عند الزراعة', notes: 'لطيف وآمن' },
  { id: 'manure', name: 'سماد روث (Manure)', type: 'عضوي', npk: 'متغير', usage: 'رفع الخصوبة وبنية التربة', frequency: 'موسمي/سنوي', notes: 'فضّل الروث المُكَوْبَس لتقليل مسببات الأمراض' },
  { id: 'slow-release', name: 'حبيبات بطيئة التحلل (Slow-Release Granules)', type: 'مركّب', npk: 'متنوع', usage: 'تغذية ثابتة طويلة الأمد', frequency: 'حسب إرشادات المنتج', notes: 'إطلاق مغذيات تدريجي' },
  { id: 'epsom', name: 'ملح إنكليزي (Epsom Salt/Magnesium Sulfate)', type: 'مُحسّن', npk: 'N/A', usage: 'تصحيح نقص المغنيسيوم', frequency: 'عند ظهور أعراض النقص', notes: 'ليس سماداً كاملاً؛ استخدمه لتصحيح عنصر واحد' },
  { id: 'dolomite', name: 'جير الدولوميت (Dolomite Lime)', type: 'مُحسّن', npk: 'N/A', usage: 'رفع pH وإضافة Ca/Mg للتربة الحمضية', frequency: 'سنوي/حسب اختبار التربة', notes: 'ارفع pH تدريجياً مع متابعة القياس' },
  { id: 'gypsum', name: 'جبس زراعي (Gypsum)', type: 'مُحسّن', npk: 'N/A', usage: 'إضافة كالسيوم وكبريت وتحسين بنية التربة', frequency: 'حسب الحاجة', notes: 'لا يؤثر كثيراً على pH؛ يفيد الطينية' },
  { id: 'compost', name: 'كمبوست عضوي (Compost)', type: 'عضوي', npk: 'متغير', usage: 'تحسين التربة والخصوبة على المدى الطويل', frequency: 'إضافة موسمية/ربع سنوية', notes: 'لطيف وآمن، يُحسّن البنية والميكروبيوم' },
];

// إضافة عنصر جديد للموسوعة
document.addEventListener('DOMContentLoaded', () => {
  // فلاتر البحث عن الأنواع
  window.encyFilters = { text: '', category: '' };
  const searchInput = document.getElementById('ency-search');
  const categorySelect = document.getElementById('ency-category');
  if (searchInput) searchInput.addEventListener('input', (e) => { window.encyFilters.text = e.target.value.trim().toLowerCase(); renderEncyclopedia(); });
  if (categorySelect) categorySelect.addEventListener('change', (e) => { window.encyFilters.category = e.target.value; renderEncyclopedia(); });

  const addBtn = document.getElementById('ency-add');
  if (!addBtn) return;
  addBtn.addEventListener('click', () => {
    const name = document.getElementById('ency-name').value.trim();
    const germ = document.getElementById('ency-germ').value.trim();
    const light = document.getElementById('ency-light').value.trim();
    const water = document.getElementById('ency-water').value.trim();
    const fert = document.getElementById('ency-fertilize').value.trim();
    const height = (document.getElementById('ency-height')?.value.trim()) || '';
    const category = (document.getElementById('ency-add-category')?.value) || '';
    const image = (document.getElementById('ency-image')?.value.trim()) || '';
    const stagesInput = document.getElementById('ency-stages').value.trim();
    if (!name) return alert('يرجى كتابة اسم النوع');
    const stages = stagesInput ? stagesInput.split(',').map(s => s.trim()).filter(Boolean) : [];
    const item = { id: name.toLowerCase().replace(/\s+/g,'-'), name, stages, germinationDays: germ, requirements: { light, water, fertilize: fert }, height: height || undefined, category: category || undefined, image: image || undefined };
    window.ENCYCLOPEDIA.push(item);
    renderEncyclopedia();
    alert('تمت إضافة النوع إلى الموسوعة');
  });
});

// تبويبات الموسوعة (نبات/تربة/أسمدة)
function showEncyTab(tab) {
  const plants = document.getElementById('ency-plants');
  const soil = document.getElementById('ency-soil');
  const fert = document.getElementById('ency-fert');
  const titleEl = document.getElementById('ency-title');
  if (!plants || !soil || !fert) return;
  plants.style.display = 'none';
  soil.style.display = 'none';
  fert.style.display = 'none';
  if (tab === 'soil') {
    soil.style.display = '';
    renderSoil();
    if (titleEl) titleEl.textContent = 'موسوعة التربة';
  } else if (tab === 'fert') {
    fert.style.display = '';
    renderFertilizers();
    if (titleEl) titleEl.textContent = 'موسوعة الأسمدة';
  } else {
    plants.style.display = '';
    renderEncyclopedia();
    if (titleEl) titleEl.textContent = 'موسوعة النبات';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btnP = document.getElementById('btn-ency-plants');
  const btnS = document.getElementById('btn-ency-soil');
  const btnF = document.getElementById('btn-ency-fert');
  if (btnP) btnP.addEventListener('click', () => showEncyTab('plants'));
  if (btnS) btnS.addEventListener('click', () => showEncyTab('soil'));
  if (btnF) btnF.addEventListener('click', () => showEncyTab('fert'));
  // نفتح قسم النبات افتراضياً لعرض المحتوى مباشرة
  showEncyTab('plants');
});

// عرض التربة
function renderSoil() {
  const list = document.getElementById('soil-list');
  if (!list) return;
  list.innerHTML = '';
  SOIL_TYPES.forEach((s) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="ency-card">
        <img class="ency-thumb" src="./images/ency-soil.svg" alt="${s.name}" />
        <div class="list">
          <div><strong>${s.name}</strong></div>
          <div><strong>القوام:</strong> ${s.texture}</div>
          <div><strong>التصريف:</strong> ${s.drainage}</div>
          <div><strong>الخصوبة:</strong> ${s.fertility}</div>
          <div><strong>الـpH:</strong> ${s.ph}</div>
          <div><strong>أفضل استخدام:</strong> ${s.bestFor}</div>
          <div><strong>نصائح:</strong> ${s.tips}</div>
        </div>
        <div class="actions">
          <button class="primary add-inv" data-kind="تربة" data-id="${s.id}" data-name="${s.name}">أضف إلى المخزن</button>
        </div>
      </div>
    `;
    list.appendChild(card);
    const btnS = card.querySelector('.add-inv');
    if (btnS) {
      btnS.addEventListener('click', () => {
        if (window.addToInventory) {
          window.addToInventory({ kind: 'تربة', id: s.id, name: s.name });
        }
      });
    }
  });
}

// عرض الأسمدة
function renderFertilizers() {
  const list = document.getElementById('fertilizer-list');
  if (!list) return;
  list.innerHTML = '';
  FERTILIZER_TYPES.forEach((f) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="ency-card">
        <img class="ency-thumb" src="./images/ency-fert.svg" alt="${f.name}" />
        <div class="list">
          <div><strong>${f.name}</strong> (${f.type})</div>
          <div><strong>NPK:</strong> ${f.npk}</div>
          <div><strong>الاستخدام:</strong> ${f.usage}</div>
          <div><strong>التكرار:</strong> ${f.frequency}</div>
          <div><strong>ملاحظات:</strong> ${f.notes}</div>
        </div>
        <div class="actions">
          <button class="primary add-inv" data-kind="سماد" data-id="${f.id}" data-name="${f.name}">أضف إلى المخزن</button>
        </div>
      </div>
    `;
    list.appendChild(card);
    const btnF = card.querySelector('.add-inv');
    if (btnF) {
      btnF.addEventListener('click', () => {
        if (window.addToInventory) {
          window.addToInventory({ kind: 'سماد', id: f.id, name: f.name });
        }
      });
    }
  });
}

// دالة لإسناد التصنيفات لكل الأنواع مرة واحدة
function ensureCategories() {
  const sets = {
    'خضروات': ['tomato','potato','garlic','carrot','onion','lettuce','pepper','chili','cucumber','eggplant','zucchini','pumpkin','spinach','arugula','green-bean','pea','corn','broccoli','cauliflower','beet','celery','bell-pepper','hot-pepper','jalapeno','cherry-tomato','okra'],
    'فواكه': ['strawberry','watermelon','melon','lemon','orange','mandarin','pomegranate','apple','fig','grape','apricot','peach'],
    'أعشاب': ['basil','mint','parsley','coriander','dill','rosemary','thyme','sage','oregano'],
    'زهور': ['lavender','jasmine','rose','chrysanthemum','marigold','sunflower','tulip','daffodil'],
    'منزلية': ['aloe-vera','snake-plant','spider-plant','peace-lily','pothos','monstera'],
    'صبارات': ['cactus'],
    'أشجار': ['olive','date-palm']
  };
  const idToCat = {};
  Object.keys(sets).forEach(cat => sets[cat].forEach(id => { idToCat[id] = cat; }));
  window.ENCYCLOPEDIA.forEach(item => {
    if (!item.category && idToCat[item.id]) item.category = idToCat[item.id];
  });
}

// أطوال تقريبية لكل نوع (سلسلة نصية مثل "60-120 سم" أو "1-3 م")
const HEIGHT_MAP = {
  tomato: '1-2 م', strawberry: '15-30 سم', basil: '30-60 سم', mint: '20-40 سم',
  potato: '50-100 سم', garlic: '30-60 سم', carrot: '20-30 سم', onion: '30-60 سم',
  lettuce: '20-30 سم', pepper: '50-100 سم', chili: '60-120 سم', cucumber: 'متسلق 1-3 م',
  eggplant: '60-120 سم', zucchini: '50-80 سم', pumpkin: 'زاحف 3-6 م', watermelon: 'زاحف 2-5 م',
  melon: 'زاحف 2-4 م', spinach: '20-30 سم', arugula: '20-30 سم', parsley: '30-50 سم',
  coriander: '30-50 سم', dill: '60-120 سم', rosemary: '60-150 سم', thyme: '20-40 سم',
  sage: '50-80 سم', oregano: '20-50 سم', 'green-bean': 'متسلق 1-2 م', pea: 'متسلق 1-2 م',
  corn: '1.5-3 م', broccoli: '60-90 سم', cauliflower: '50-80 سم', beet: '30-60 سم', celery: '30-60 سم',
  'aloe-vera': '30-60 سم', cactus: '30-200 سم', 'snake-plant': '30-120 سم', 'spider-plant': '20-40 سم',
  'peace-lily': '30-60 سم', pothos: 'متسلق 2-4 م', monstera: '1-3 م', lavender: '40-80 سم',
  jasmine: '1-3 م', rose: '50-150 سم', chrysanthemum: '30-90 سم', marigold: '20-60 سم',
  sunflower: '1-3 م', tulip: '20-60 سم', daffodil: '20-40 سم', 'bell-pepper': '50-100 سم',
  'hot-pepper': '60-120 سم', jalapeno: '60-100 سم', 'cherry-tomato': '1-2 م', lemon: '2-4 م',
  orange: '3-6 م', mandarin: '2-4 م', pomegranate: '3-5 م', apple: '3-6 م', fig: '2-5 م',
  apricot: '3-6 م', peach: '3-6 م', grape: 'متسلق 2-5 م', okra: '1-2 م', olive: '3-6 م',
  'date-palm': '5-20 م'
};

// أطوال افتراضية بحسب القسم عند غياب الطول الخاص
const CATEGORY_HEIGHT_DEFAULT = {
  'خضروات': '20-150 سم',
  'أعشاب': '20-60 سم',
  'زهور': '20-100 سم',
  'فواكه': '1-6 م',
  'أشجار': '2-6 م',
  'منزلية': '20-120 سم',
  'صبارات': '30-200 سم'
};