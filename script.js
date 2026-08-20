/* ---------------- i18n ---------------- */
const I18N = {
  uz:{
    search_ph:"Nima qidiryapsiz?", search_btn:"Qidirish", sell_btn:"Sotish",
    hero_title:"Kerakli narsani toping — yoki keraksizini soting",
    hero_sub:"Toshkentdan Andijongacha — minglab e'lonlar bir joyda.",
    listings_title:"E'lonlar", empty_title:"Hech narsa topilmadi",
    footer_text:"BOZOR — odamlar o'z mahsulotlarini sotadigan va sotib oladigan joy.",
    add_title:"Yangi e'lon joylash", lbl_title:"Sarlavha", lbl_price:"Narxi (so'm)",
    lbl_category:"Kategoriya", lbl_location:"Manzil", lbl_desc:"Tavsif",
    ph_title:"Masalan: iPhone 13 Pro, 128GB",
    ph_desc:"Mahsulot haqida qisqacha yozing...", btn_cancel:"Bekor qilish", btn_publish:"Joylash",
    contact:"Bog'lanish", all:"Barchasi", stat:"faol e'lon hozir platformada",
    toast_ok:"E'lon muvaffaqiyatli joylandi!", toast_fill:"Iltimos, sarlavha va narxni kiriting",
    just_now:"hozirgina", detail_desc:"Tavsif", detail_loc:"Manzil", detail_cat:"Kategoriya",
    lbl_phone:"Telefon raqami", ph_phone:"+998 90 123 45 67",
    lbl_photo:"Rasm", no_photo:"Rasm yo'q", detail_phone:"Telefon",
    btn_delete:"E'lonni o'chirish", delete_title:"Bu e'lonni qayerda sotdingiz?",
    delete_sub:"E'lonni o'chirishdan oldin bir savolga javob bering.",
    sold_here:"Shu yerda (ilovada)", sold_elsewhere:"Boshqa joyda",
    toast_deleted:"E'lon o'chirildi"
  },
  ru:{
    search_ph:"Что вы ищете?", search_btn:"Искать", sell_btn:"Продать",
    hero_title:"Найдите нужное — или продайте ненужное",
    hero_sub:"От Ташкента до Андижана — тысячи объявлений в одном месте.",
    listings_title:"Объявления", empty_title:"Ничего не найдено",
    footer_text:"BOZOR — место, где люди продают и покупают товары.",
    add_title:"Новое объявление", lbl_title:"Заголовок", lbl_price:"Цена (сум)",
    lbl_category:"Категория", lbl_location:"Адрес", lbl_desc:"Описание",
    ph_title:"Например: iPhone 13 Pro, 128GB",
    ph_desc:"Кратко опишите товар...", btn_cancel:"Отмена", btn_publish:"Опубликовать",
    contact:"Связаться", all:"Все", stat:"активных объявлений на платформе",
    toast_ok:"Объявление успешно опубликовано!", toast_fill:"Пожалуйста, укажите заголовок и цену",
    just_now:"только что", detail_desc:"Описание", detail_loc:"Адрес", detail_cat:"Категория",
    lbl_phone:"Номер телефона", ph_phone:"+998 90 123 45 67",
    lbl_photo:"Фото", no_photo:"Нет фото", detail_phone:"Телефон",
    btn_delete:"Удалить объявление", delete_title:"Где вы продали этот товар?",
    delete_sub:"Прежде чем удалить объявление, ответьте на один вопрос.",
    sold_here:"Здесь (в приложении)", sold_elsewhere:"В другом месте",
    toast_deleted:"Объявление удалено"
  },
  en:{
    search_ph:"What are you looking for?", search_btn:"Search", sell_btn:"Sell",
    hero_title:"Find what you need — or sell what you don't",
    hero_sub:"From Tashkent to Andijan — thousands of listings in one place.",
    listings_title:"Listings", empty_title:"Nothing found",
    footer_text:"BOZOR — a place where people sell and buy their own goods.",
    add_title:"Post a new listing", lbl_title:"Title", lbl_price:"Price (UZS)",
    lbl_category:"Category", lbl_location:"Location", lbl_desc:"Description",
    ph_title:"e.g. iPhone 13 Pro, 128GB",
    ph_desc:"Briefly describe the item...", btn_cancel:"Cancel", btn_publish:"Publish",
    contact:"Contact", all:"All", stat:"active listings on the platform right now",
    toast_ok:"Listing published successfully!", toast_fill:"Please enter a title and price",
    just_now:"just now", detail_desc:"Description", detail_loc:"Location", detail_cat:"Category",
    lbl_phone:"Phone number", ph_phone:"+998 90 123 45 67",
    lbl_photo:"Photo", no_photo:"No photo", detail_phone:"Phone",
    btn_delete:"Delete listing", delete_title:"Where did you sell this item?",
    delete_sub:"Answer one question before the listing is deleted.",
    sold_here:"Here (in the app)", sold_elsewhere:"Elsewhere",
    toast_deleted:"Listing deleted"
  }
};
let lang = "uz";

const CATEGORIES = [
  {id:"all", icon:"🗂️", name:{uz:"Barchasi",ru:"Все",en:"All"}},
  {id:"phones", icon:"📱", name:{uz:"Telefonlar",ru:"Телефоны",en:"Phones"}},
  {id:"electronics", icon:"💻", name:{uz:"Elektronika",ru:"Электроника",en:"Electronics"}},
  {id:"home", icon:"🛋️", name:{uz:"Uy-ro'zg'or",ru:"Дом",en:"Home"}},
  {id:"clothes", icon:"👕", name:{uz:"Kiyim-kechak",ru:"Одежда",en:"Clothing"}},
  {id:"auto", icon:"🚗", name:{uz:"Avtomobillar",ru:"Авто",en:"Auto"}},
  {id:"sport", icon:"⚽", name:{uz:"Sport",ru:"Спорт",en:"Sport"}},
];
let activeCat = "all";

const LOCATIONS = [
  {id:"tashkent", name:{uz:"Toshkent",ru:"Ташкент",en:"Tashkent"}},
  {id:"samarkand", name:{uz:"Samarqand",ru:"Самарканд",en:"Samarkand"}},
  {id:"andijan", name:{uz:"Andijon",ru:"Андижан",en:"Andijan"}},
  {id:"fergana", name:{uz:"Farg'ona",ru:"Фергана",en:"Fergana"}},
  {id:"bukhara", name:{uz:"Buxoro",ru:"Бухара",en:"Bukhara"}},
  {id:"namangan", name:{uz:"Namangan",ru:"Наманган",en:"Namangan"}},
  {id:"karshi", name:{uz:"Qarshi",ru:"Карши",en:"Qarshi"}},
  {id:"khiva", name:{uz:"Xiva",ru:"Хива",en:"Khiva"}},
  {id:"nukus", name:{uz:"Nukus",ru:"Нукус",en:"Nukus"}},
  {id:"jizzax", name:{uz:"Jizzax",ru:"Джизак",en:"Jizzakh"}},
  {id:"gulistan", name:{uz:"Guliston",ru:"Гулистан",en:"Gulistan"}},
  {id:"termez", name:{uz:"Termiz",ru:"Термез",en:"Termez"}},
  {id:"navoiy", name:{uz:"Navoiy",ru:"Навои",en:"Navoi"}},
  {id:"urgench", name:{uz:"Urganch",ru:"Ургенч",en:"Urgench"}},
];

const STORAGE_KEY = "bozor_products_v1";
const NEXT_ID_KEY = "bozor_next_id_v1";

function saveState(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(PRODUCTS));
    localStorage.setItem(NEXT_ID_KEY, String(nextId));
  }catch(e){ console.error("Saqlashda xatolik:", e); }
}

function loadStoredProducts(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch(e){ console.error("Yuklashda xatolik:", e); return null; }
}

let DEFAULT_PRODUCTS = [
  {id:1, photo:"./img/image copy.png", phone:"+998 90 123 45 67", price:8200000, cat:"phones", loc:{uz:"Toshkent, Yunusobod",ru:"Ташкент, Юнусабад",en:"Tashkent, Yunusabad"}, title:{uz:"iPhone 13 Pro 128GB, ideal holatda",ru:"iPhone 13 Pro 128GB, идеальное состояние",en:"iPhone 13 Pro 128GB, mint condition"}, desc:{uz:"Kafolat bor, quti va zaryadlovchi mavjud.",ru:"Есть гарантия, коробка и зарядка в наличии.",en:"Warranty included, comes with box and charger."}, time:"2 kun oldin"},
  {id:2, photo:"./img/image copy 2.png", phone:"+998 91 234 56 78", price:186000000, cat:"auto", loc:{uz:"Samarqand",ru:"Самарканд",en:"Samarkand"}, title:{uz:"Chevrolet Cobalt 2021-yil",ru:"Chevrolet Cobalt 2021 год",en:"Chevrolet Cobalt, year 2021"}, desc:{uz:"Birinchi qo'ldan, yugurgan 34 ming km.",ru:"Из первых рук, пробег 34 тыс. км.",en:"First owner, 34k km mileage."}, time:"5 soat oldin"},
  {id:3, photo:"./img/image copy 3.png", phone:"+998 93 345 67 89", price:1450000, cat:"home", loc:{uz:"Andijon",ru:"Андижан",en:"Andijan"}, title:{uz:"Yumshoq divan, 3 o'rinli",ru:"Мягкий диван, 3-местный",en:"Sofa, 3-seater"}, desc:{uz:"Deyarli yangi, rangi kulrang.",ru:"Почти новый, серого цвета.",en:"Almost new, grey color."}, time:"1 kun oldin"},
  {id:4, photo:"./img/image copy 4.png", phone:"+998 94 456 78 90", price:9600000, cat:"electronics", loc:{uz:"Toshkent, Mirzo Ulug'bek",ru:"Ташкент, Мирзо Улугбек",en:"Tashkent, Mirzo Ulugbek"}, title:{uz:"MacBook Air M1 2020, 8/256GB",ru:"MacBook Air M1 2020, 8/256GB",en:"MacBook Air M1 2020, 8/256GB"}, desc:{uz:"Batareya sikli 120, ishlash tezligi a'lo.",ru:"Цикл батареи 120, работает отлично.",en:"Battery cycle 120, runs great."}, time:"3 kun oldin"},
  {id:5, photo:"./img/image copy 5.png", phone:"+998 97 567 89 01", price:180000, cat:"clothes", loc:{uz:"Farg'ona",ru:"Фергана",en:"Fergana"}, title:{uz:"Erkaklar uchun qishki kurtka, XL",ru:"Мужская зимняя куртка, XL",en:"Men's winter jacket, XL"}, desc:{uz:"Yangi, hech kiyilmagan.",ru:"Новая, не носили.",en:"Brand new, never worn."}, time:"6 soat oldin"},
  {id:6, photo:"/img/image copy 6.png", phone:"+998 88 678 90 12", price:320000, cat:"sport", loc:{uz:"Buxoro",ru:"Бухара",en:"Bukhara"}, title:{uz:"Velosiped, tog' turi, 21 tezlik",ru:"Велосипед горный, 21 скорость",en:"Mountain bike, 21-speed"}, desc:{uz:"Yaxshi holatda, doim garajda saqlangan.",ru:"В хорошем состоянии, хранился в гараже.",en:"Good condition, always garage kept."}, time:"4 kun oldin"},
  {id:7, photo:"./img/image copy 7.png", phone:"+998 90 789 01 23", price:3400000, cat:"phones", loc:{uz:"Namangan",ru:"Наманган",en:"Namangan"}, title:{uz:"Samsung Galaxy A54 8/256GB",ru:"Samsung Galaxy A54 8/256GB",en:"Samsung Galaxy A54 8/256GB"}, desc:{uz:"6 oy ishlatilgan, hech qanday nuqson yo'q.",ru:"Использовался 6 месяцев, дефектов нет.",en:"Used 6 months, no defects."}, time:"1 kun oldin"},
  {id:8, photo:"./img/image copy 8.png", phone:"+998 91 890 12 34", price:2100000, cat:"home", loc:{uz:"Toshkent, Sergeli",ru:"Ташкент, Сергели",en:"Tashkent, Sergeli"}, title:{uz:"Oshxona garnituri, to'liq to'plam",ru:"Кухонный гарнитур, полный комплект",en:"Kitchen set, full package"}, desc:{uz:"MDF material, 2 yil ishlatilgan.",ru:"Материал МДФ, использовался 2 года.",en:"MDF material, used for 2 years."}, time:"2 kun oldin"},
  {id:9, photo:"./img/image copy 9.png", phone:"+998 93 901 23 45", price:5200000, cat:"electronics", loc:{uz:"Qarshi",ru:"Карши",en:"Qarshi"}, title:{uz:"PlayStation 5, 2 pult bilan",ru:"PlayStation 5, с 2 джойстиками",en:"PlayStation 5, with 2 controllers"}, desc:{uz:"5 ta disk bilan birga sotiladi.",ru:"Продаётся вместе с 5 дисками.",en:"Comes with 5 games."}, time:"8 soat oldin"},
  {id:10, photo:"./img/image copy 10.png", phone:"+998 94 012 34 56", price:412000000, cat:"auto", loc:{uz:"Toshkent, Yashnobod",ru:"Ташкент, Яшнабад",en:"Tashkent, Yashnabad"}, title:{uz:"Chevrolet Tracker 2023, gaz-benzin",ru:"Chevrolet Tracker 2023, газ-бензин",en:"Chevrolet Tracker 2023, gas-petrol"}, desc:{uz:"Faqat 8 ming km yurgan, kafolatda.",ru:"Пробег всего 8 тыс. км, на гарантии.",en:"Only 8k km, still under warranty."}, time:"12 soat oldin"},
  {id:11, photo:"./img/image copy 11.png", phone:"+998 97 123 45 67", price:95000, cat:"clothes", loc:{uz:"Xiva",ru:"Хива",en:"Khiva"}, title:{uz:"Ayollar uchun sport kostyum",ru:"Женский спортивный костюм",en:"Women's tracksuit"}, desc:{uz:"S va M o'lchamlarda mavjud.",ru:"Есть размеры S и M.",en:"Available in sizes S and M."}, time:"3 kun oldin"},
  {id:12, photo:"./img/image copy 12.png", phone:"+998 88 234 56 78", price:750000, cat:"sport", loc:{uz:"Toshkent, Chilonzor",ru:"Ташкент, Чиланзар",en:"Tashkent, Chilonzor"}, title:{uz:"Trenajor - ellips mashinasi",ru:"Тренажёр — эллиптический",en:"Elliptical trainer machine"}, desc:{uz:"Uy uchun, kam ishlatilgan.",ru:"Для дома, мало использовался.",en:"For home use, lightly used."}, time:"5 kun oldin"},
];

// Sahifa yangilanganda e'lonlar yo'qolib ketmasligi uchun localStorage'dan o'qiymiz.
// Agar oldin saqlangan holat bo'lmasa, standart namunaviy e'lonlardan boshlaymiz.
const storedProducts = loadStoredProducts();
let PRODUCTS = storedProducts || DEFAULT_PRODUCTS;
let nextId = parseInt(localStorage.getItem(NEXT_ID_KEY), 10) || (Math.max(0, ...PRODUCTS.map(p=>p.id)) + 1);
if(!storedProducts) saveState();

/* ---------------- rendering ---------------- */
function t(key){ return I18N[lang][key] || key; }

function applyStaticI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    el.placeholder = t(el.getAttribute("data-i18n-ph"));
  });
  document.getElementById("statLine").textContent = `🔥 ${PRODUCTS.length}+ ${t('stat')}`;
}

const CHIP_BASE = "flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold whitespace-nowrap";
const CHIP_INACTIVE = " bg-[var(--surface-2)] border-[var(--border)] text-[var(--text-muted)]";
const CHIP_ACTIVE = " bg-[var(--accent)] border-[var(--accent)] text-[var(--accent-ink)]";

function renderCategories(){
  const row = document.getElementById("catRow");
  row.innerHTML = "";
  CATEGORIES.forEach(c=>{
    const div = document.createElement("div");
    div.className = CHIP_BASE + (c.id===activeCat ? CHIP_ACTIVE : CHIP_INACTIVE);
    div.innerHTML = `<span>${c.icon}</span><span>${c.name[lang]}</span>`;
    div.onclick = ()=>{ activeCat = c.id; renderCategories(); renderGrid(); };
    row.appendChild(div);
  });
}

function fmtPrice(n){
  return n.toLocaleString('en-US').replace(/,/g,' ') + " so'm";
}

function renderGrid(){
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  let list = PRODUCTS.filter(p=>{
    const matchesCat = activeCat==="all" || p.cat===activeCat;
    const matchesQ = !q || p.title[lang].toLowerCase().includes(q) || p.title.uz.toLowerCase().includes(q);
    return matchesCat && matchesQ;
  });
  document.getElementById("resultCount").textContent = list.length;
  document.getElementById("emptyState").style.display = list.length ? "none" : "block";

  list.forEach(p=>{
    const card = document.createElement("div");
    card.className = "card bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col cursor-pointer";
    card.onclick = ()=>openDetail(p);
    const catObj = CATEGORIES.find(c=>c.id===p.cat);
    card.innerHTML = `
      <div class="h-24 bg-[var(--surface-2)] relative overflow-hidden flex items-center justify-center">
        <span class="absolute top-1.5 left-1.5 bg-black/55 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">${catObj ? catObj.name[lang] : ''}</span>
        ${p.photo ? `<img src="${p.photo}" alt="" class="w-full h-full object-cover block">` : `<div class="w-full h-full flex items-center justify-center text-[var(--text-muted)] text-[11px] font-bold text-center px-2">${t('no_photo')}</div>`}
      </div>
      <div class="p-2.5 flex flex-col gap-1 flex-1">
        <div class="text-[14px] font-extrabold text-[var(--accent)] font-display">${fmtPrice(p.price)}</div>
        <div class="text-[12px] font-semibold leading-snug line-clamp-2 min-h-[32px]">${p.title[lang]}</div>
        <div class="text-[10px] text-[var(--text-muted)] flex justify-between mt-1 gap-1">
          <span class="truncate">${p.loc[lang]}</span><span class="flex-shrink-0">${p.time}</span>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function renderCategorySelect(){
  const sel = document.getElementById("fCategory");
  sel.innerHTML = "";
  CATEGORIES.filter(c=>c.id!=="all").forEach(c=>{
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = c.name[lang];
    sel.appendChild(opt);
  });
}

function renderLocationSelect(){
  const sel = document.getElementById("fLocation");
  const prev = sel.value;
  sel.innerHTML = "";
  LOCATIONS.forEach(l=>{
    const opt = document.createElement("option");
    opt.value = l.id;
    opt.textContent = l.name[lang];
    sel.appendChild(opt);
  });
  if(prev) sel.value = prev;
}

/* ---------------- language & theme ---------------- */
function setLang(l){
  lang = l;
  document.getElementById("langSelect").value = l;
  applyStaticI18n();
  renderCategories();
  renderGrid();
  renderCategorySelect();
  renderLocationSelect();
}

function toggleTheme(){
  const html = document.documentElement;
  const isLight = html.getAttribute("data-theme") === "light";
  html.setAttribute("data-theme", isLight ? "dark" : "light");
  document.getElementById("themeBtn").textContent = isLight ? "🌙" : "☀️";
}

/* ---------------- modals ---------------- */
let currentPhotoDataUrl = null;

function openAddModal(){
  document.getElementById("addOverlay").classList.add("show");
}
function closeModal(id){
  document.getElementById(id).classList.remove("show");
}
function previewPhoto(e){
  const file = e.target.files && e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    currentPhotoDataUrl = reader.result;
    const img = document.getElementById("photoPreview");
    img.src = currentPhotoDataUrl;
    img.classList.remove("hidden");
  };
  reader.readAsDataURL(file);
}
function showToast(msg){
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"), 2400);
}

function submitListing(){
  const title = document.getElementById("fTitle").value.trim();
  const price = parseInt(document.getElementById("fPrice").value, 10);
  const cat = document.getElementById("fCategory").value;
  const locId = document.getElementById("fLocation").value;
  const phone = document.getElementById("fPhone").value.trim();
  const desc = document.getElementById("fDesc").value.trim() || "—";
  if(!title || !price){ showToast(t('toast_fill')); return; }
  const locObj = LOCATIONS.find(l=>l.id===locId) || LOCATIONS[0];
  const newProduct = {
    id: nextId++,
    photo: currentPhotoDataUrl,
    phone,
    price, cat,
    loc: locObj.name,
    title: {uz:title, ru:title, en:title},
    desc: {uz:desc, ru:desc, en:desc},
    time: t('just_now')
  };
  PRODUCTS.unshift(newProduct);
  saveState();
  ["fTitle","fPrice","fPhone","fDesc"].forEach(id=>document.getElementById(id).value="");
  document.getElementById("fPhoto").value = "";
  const preview = document.getElementById("photoPreview");
  preview.classList.add("hidden");
  preview.src = "";
  currentPhotoDataUrl = null;
  closeModal("addOverlay");
  activeCat = "all";
  renderCategories();
  renderGrid();
  document.getElementById("statLine").textContent = `🔥 ${PRODUCTS.length}+ ${t('stat')}`;
  showToast(t('toast_ok'));
}

/* ---------------- delete flow ---------------- */
let pendingDeleteId = null;

function openDeleteConfirm(id){
  pendingDeleteId = id;
  document.getElementById("deleteOverlay").classList.add("show");
}

function confirmDelete(where){
  if(pendingDeleteId == null) return;
  PRODUCTS = PRODUCTS.filter(p=>p.id !== pendingDeleteId);
  saveState();
  pendingDeleteId = null;
  closeModal("deleteOverlay");
  closeModal("detailOverlay");
  renderGrid();
  document.getElementById("statLine").textContent = `🔥 ${PRODUCTS.length}+ ${t('stat')}`;
  showToast(t('toast_deleted'));
}

function openDetail(p){
  const catObj = CATEGORIES.find(c=>c.id===p.cat);
  const content = document.getElementById("detailContent");
  content.innerHTML = `
    <button class="absolute top-3 right-3 bg-transparent border-none text-[var(--text-muted)] text-lg" onclick="closeModal('detailOverlay')">✕</button>
    <div class="h-40 rounded-xl bg-[var(--surface-2)] flex items-center justify-center mb-3 overflow-hidden relative">
      ${p.photo ? `<img src="${p.photo}" alt="" class="w-full h-full object-cover block">` : `<div class="w-full h-full flex items-center justify-center text-[var(--text-muted)] text-[13px] font-bold">${t('no_photo')}</div>`}
    </div>
    <div class="text-xl font-extrabold text-[var(--accent)] font-display mb-1.5">${fmtPrice(p.price)}</div>
    <h3 class="m-0 mb-2 text-base font-bold">${p.title[lang]}</h3>
    <div class="text-sm text-[var(--text-muted)] leading-relaxed my-2.5">${p.desc[lang]}</div>
    <div class="flex justify-between text-xs text-[var(--text-muted)] py-2 border-t border-[var(--border)]"><span>${t('detail_cat')}</span><span>${catObj ? catObj.name[lang] : ''}</span></div>
    <div class="flex justify-between text-xs text-[var(--text-muted)] py-2 border-t border-[var(--border)]"><span>${t('detail_loc')}</span><span>${p.loc[lang]}</span></div>
    ${p.phone ? `<div class="flex justify-between text-xs text-[var(--text-muted)] py-2 border-t border-[var(--border)]"><span>${t('detail_phone')}</span><span>${p.phone}</span></div>` : ''}
    <div class="flex gap-2 mt-3.5">
      ${p.phone
        ? `<a class="flex-1 bg-[var(--accent)] text-[var(--accent-ink)] rounded-lg py-3 font-extrabold text-sm flex items-center justify-center" href="tel:${p.phone.replace(/\s+/g,'')}">${t('contact')}</a>`
        : `<button class="flex-1 bg-[var(--accent)] text-[var(--accent-ink)] rounded-lg py-3 font-extrabold text-sm border-none" onclick="showToast(t('contact'))">${t('contact')}</button>`}
    </div>
    <button class="w-full mt-2 bg-transparent border border-[var(--danger)] text-[var(--danger)] rounded-lg py-2.5 font-bold text-sm" onclick="openDeleteConfirm(${p.id})">${t('btn_delete')}</button>`;
  document.getElementById("detailOverlay").classList.add("show");
}

document.getElementById("searchInput").addEventListener("input", renderGrid);
[document.getElementById("addOverlay"), document.getElementById("detailOverlay"), document.getElementById("deleteOverlay")].forEach(ov=>{
  ov.addEventListener("click", e=>{ if(e.target===ov) ov.classList.remove("show"); });
});

/* ---------------- init ---------------- */
setLang("uz");
