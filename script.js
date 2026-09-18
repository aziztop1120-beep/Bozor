/* ---------------- i18n ---------------- */
const I18N = {
  uz:{
    search_ph:"Nima qidiryapsiz?", search_btn:"Qidirish", sell_btn:"Sotish",
    hero_title:"Kerakli narsani toping — yoki keraksizini soting",
    hero_sub:"Toshkentdan Andijongacha — minglab e'lonlar bir joyda.",
    listings_title:"E'lonlar", empty_title:"Hech narsa topilmadi",
    footer_text:"BOZOR — odamlar o'z mahsulotlarini sotadigan va sotib oladigan joy.",
    add_title:"Yangi e'lon joylash", lbl_title:"Sarlavha", lbl_price:"Narxi (so'm)",
    lbl_category:"Kategoriya", lbl_location:"Manzil", lbl_desc:"Tavsif", lbl_district:"Tuman",
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
    toast_deleted:"E'lon o'chirildi",
    login_btn:"Kirish", login_title:"Hisobga kirish", lbl_name:"Ism",
    ph_name:"Ismingizni kiriting", lbl_password:"Parol", ph_password:"Parolni kiriting",
    login_remember:"Meni eslab qol", login_register_q:"Hisobingiz yo'qmi?",
    login_register_link:"Ro'yxatdan o'tish", err_name:"Ismingizni kiritmadingiz!",
    err_password:"Parolni kiritmadingiz!", toast_login_ok:"Xush kelibsiz,",
    logout_btn:"Chiqish", toast_logout:"Tizimdan chiqdingiz",
    register_title:"Ro'yxatdan o'tish", lbl_confirm_password:"Parolni tasdiqlang",
    ph_confirm_password:"Parolni qayta kiriting", register_btn:"Ro'yxatdan o'tish",
    login_have_account:"Hisobingiz bormi?", login_link:"Kirish",
    err_confirm_password:"Parollar mos kelmadi", toast_register_ok:"Ro'yxatdan muvaffaqiyatli o'tdingiz!",
    nav_search:"Qidiruv", nav_favorites:"Sevimli", nav_sell:"Sotish",
    nav_messages:"Xabarlar", nav_profile:"Profil", nav_soon:"Tez orada!",
    nav_pick_listing:"Avval bir e'lonni oching",
    favorites_title:"Sevimli e'lonlar", empty_favorites:"Sevimlilar bo'sh",
    toast_fav_added:"Sevimlilarga qo'shildi", toast_fav_removed:"Sevimlilardan o'chirildi",
    btn_pick_map:"Xaritadan aniq joyni belgilash", geo_marked:"✅ Joylashuv xaritada belgilandi",
    map_pick_title:"Xaritadan joyni belgilang", map_pick_hint:"Xaritaga bosing yoki markerni suring — tanlangan joy saqlanadi.",
    map_layer_street:"Xarita", map_layer_satellite:"Sun'iy yo'ldosh",
    btn_use_my_location:"📍 Joriy joylashuvim", btn_save_location:"Saqlash",
    detail_geo:"Aniq joylashuv", btn_directions:"🧭 Yo'nalish olish",
    toast_geo_denied:"Joylashuvni aniqlab bo'lmadi", toast_geo_unsupported:"Qurilma geolokatsiyani qo'llab-quvvatlamaydi",
    profile_subtitle:"Hisobingiz", logout_confirm_q:"Hisobdan chiqishni xohlaysizmi?",

    profile_greeting:(name)=>`Salom, ${name}!`,
    profile_wallet_label:"Sizning hamyoningizda:", currency_sum:"so'm",
    profile_bonus_label:"Bonuslar:", profile_bonus_value:"0,00 bonus",
    profile_edit_row:"Profilni tahrirlash",
    profile_post_listing_btn:"E'lon joylashtirish", profile_buy_bundle_btn:"To'plam sotib olish",
    profile_your_listings_title:"Sizning e'lonlaringiz", profile_all_listings_row:"Barcha e'lonlaringiz",
    profile_chat_title:"Chat", profile_active_chats:"Aktiv suhbatlar", profile_inbox:"Quti",
    profile_payments_title:"To'lovlar", profile_wallet_row:"Sizning hamyoningiz", profile_payment_history_row:"To'lovlar tarixi",
    profile_settings_title:"Sozlamalar va boshqalar", profile_settings_row:"Sozlamalar", profile_help_row:"Yordam",
    profile_terms_row:"Shartlar va qoidalar", profile_agreement_row:"Foydalanuvchi bilan kelishuvi", profile_about_row:"Ilova haqida",
    my_listings_title:"Mening e'lonlarim", empty_mine:"Sizda hali e'lonlar yo'q",
    prompt_new_name:"Yangi ismingizni kiriting:",
  },
  ru:{
    search_ph:"Что вы ищете?", search_btn:"Искать", sell_btn:"Продать",
    hero_title:"Найдите нужное — или продайте ненужное",
    hero_sub:"От Ташкента до Андижана — тысячи объявлений в одном месте.",
    listings_title:"Объявления", empty_title:"Ничего не найдено",
    footer_text:"BOZOR — место, где люди продают и покупают товары.",
    add_title:"Новое объявление", lbl_title:"Заголовок", lbl_price:"Цена (сум)",
    lbl_category:"Категория", lbl_location:"Адрес", lbl_desc:"Описание", lbl_district:"Район",
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
    toast_deleted:"Объявление удалено",
    login_btn:"Войти", login_title:"Вход в аккаунт", lbl_name:"Имя",
    ph_name:"Введите ваше имя", lbl_password:"Пароль", ph_password:"Введите пароль",
    login_remember:"Запомнить меня", login_register_q:"Нет аккаунта?",
    login_register_link:"Зарегистрироваться", err_name:"Вы не ввели имя!",
    err_password:"Вы не ввели пароль!", toast_login_ok:"Добро пожаловать,",
    logout_btn:"Выйти", toast_logout:"Вы вышли из системы",
    register_title:"Регистрация", lbl_confirm_password:"Подтвердите пароль",
    ph_confirm_password:"Введите пароль ещё раз", register_btn:"Зарегистрироваться",
    login_have_account:"Уже есть аккаунт?", login_link:"Войти",
    err_confirm_password:"Пароли не совпадают", toast_register_ok:"Вы успешно зарегистрировались!",
    nav_search:"Поиск", nav_favorites:"Избранное", nav_sell:"Продать",
    nav_messages:"Сообщения", nav_profile:"Профиль", nav_soon:"Скоро!",
    nav_pick_listing:"Сначала откройте объявление",
    favorites_title:"Избранные объявления", empty_favorites:"Избранное пусто",
    toast_fav_added:"Добавлено в избранное", toast_fav_removed:"Удалено из избранного",
    btn_pick_map:"Отметить точное место на карте", geo_marked:"✅ Местоположение отмечено на карте",
    map_pick_title:"Отметьте место на карте", map_pick_hint:"Нажмите на карту или перетащите маркер — точка сохранится.",
    map_layer_street:"Карта", map_layer_satellite:"Спутник",
    btn_use_my_location:"📍 Моё текущее местоположение", btn_save_location:"Сохранить",
    detail_geo:"Точное местоположение", btn_directions:"🧭 Построить маршрут",
    toast_geo_denied:"Не удалось определить местоположение", toast_geo_unsupported:"Устройство не поддерживает геолокацию",
    profile_subtitle:"Ваш аккаунт", logout_confirm_q:"Выйти из аккаунта?",

    profile_greeting:(name)=>`Привет, ${name}!`,
    profile_wallet_label:"На вашем кошельке:", currency_sum:"сум",
    profile_bonus_label:"Бонусы:", profile_bonus_value:"0,00 бонусов",
    profile_edit_row:"Редактировать профиль",
    profile_post_listing_btn:"Разместить объявление", profile_buy_bundle_btn:"Купить пакет",
    profile_your_listings_title:"Ваши объявления", profile_all_listings_row:"Все ваши объявления",
    profile_chat_title:"Чат", profile_active_chats:"Активные чаты", profile_inbox:"Входящие",
    profile_payments_title:"Платежи", profile_wallet_row:"Ваш кошелёк", profile_payment_history_row:"История платежей",
    profile_settings_title:"Настройки и другое", profile_settings_row:"Настройки", profile_help_row:"Помощь",
    profile_terms_row:"Условия использования", profile_agreement_row:"Пользовательское соглашение", profile_about_row:"О приложении",
    my_listings_title:"Мои объявления", empty_mine:"У вас пока нет объявлений",
    prompt_new_name:"Введите новое имя:",
  },
  en:{
    search_ph:"What are you looking for?", search_btn:"Search", sell_btn:"Sell",
    hero_title:"Find what you need — or sell what you don't",
    hero_sub:"From Tashkent to Andijan — thousands of listings in one place.",
    listings_title:"Listings", empty_title:"Nothing found",
    footer_text:"BOZOR — a place where people sell and buy their own goods.",
    add_title:"Post a new listing", lbl_title:"Title", lbl_price:"Price (UZS)",
    lbl_category:"Category", lbl_location:"Location", lbl_desc:"Description", lbl_district:"District",
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
    toast_deleted:"Listing deleted",
    login_btn:"Login", login_title:"Sign in", lbl_name:"Name",
    ph_name:"Enter your name", lbl_password:"Password", ph_password:"Enter your password",
    login_remember:"Remember me", login_register_q:"Don't have an account?",
    login_register_link:"Register", err_name:"You didn't enter your name!",
    err_password:"You didn't enter your password!", toast_login_ok:"Welcome,",
    logout_btn:"Log out", toast_logout:"You've been logged out",
    register_title:"Register", lbl_confirm_password:"Confirm password",
    ph_confirm_password:"Re-enter your password", register_btn:"Register",
    login_have_account:"Already have an account?", login_link:"Sign in",
    err_confirm_password:"Passwords don't match", toast_register_ok:"Registered successfully!",
    nav_search:"Search", nav_favorites:"Favorites", nav_sell:"Sell",
    nav_messages:"Messages", nav_profile:"Profile", nav_soon:"Coming soon!",
    nav_pick_listing:"Open a listing first",
    favorites_title:"Favorite listings", empty_favorites:"No favorites yet",
    toast_fav_added:"Added to favorites", toast_fav_removed:"Removed from favorites",
    btn_pick_map:"Mark exact location on map", geo_marked:"✅ Location marked on the map",
    map_pick_title:"Mark the location on the map", map_pick_hint:"Tap the map or drag the marker — the spot will be saved.",
    map_layer_street:"Map", map_layer_satellite:"Satellite",
    btn_use_my_location:"📍 My current location", btn_save_location:"Save",
    detail_geo:"Exact location", btn_directions:"🧭 Get directions",
    toast_geo_denied:"Couldn't determine location", toast_geo_unsupported:"This device doesn't support geolocation",
    profile_subtitle:"Your account", logout_confirm_q:"Log out of your account?",

    profile_greeting:(name)=>`Hi, ${name}!`,
    profile_wallet_label:"Your wallet balance:", currency_sum:"UZS",
    profile_bonus_label:"Bonuses:", profile_bonus_value:"0.00 bonus",
    profile_edit_row:"Edit profile",
    profile_post_listing_btn:"Post a listing", profile_buy_bundle_btn:"Buy a bundle",
    profile_your_listings_title:"Your listings", profile_all_listings_row:"All your listings",
    profile_chat_title:"Chat", profile_active_chats:"Active chats", profile_inbox:"Inbox",
    profile_payments_title:"Payments", profile_wallet_row:"Your wallet", profile_payment_history_row:"Payment history",
    profile_settings_title:"Settings & more", profile_settings_row:"Settings", profile_help_row:"Help",
    profile_terms_row:"Terms & conditions", profile_agreement_row:"User agreement", profile_about_row:"About the app",
    my_listings_title:"My listings", empty_mine:"You don't have any listings yet",
    prompt_new_name:"Enter your new name:",
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
  {id:"tools", icon:"🛠️", name:{uz:"Asboblar",ru:"Инструменты",en:"Tools"}},
  {id:"school", icon:"📚", name:{uz:"O'quv qurollari",ru:"Учебные принадлежности",en:"School supplies"}},
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

// Ba'zi shaharlar uchun tumanlar ro'yxati. Manzil tanlanganda, agar shu id
// shu ro'yxatda bo'lsa, tuman tanlash maydoni ko'rsatiladi.
const DISTRICTS = {
  tashkent: [
    {id:"bektemir", name:{uz:"Bektemir",ru:"Бектемир",en:"Bektemir"}},
    {id:"chilonzor", name:{uz:"Chilonzor",ru:"Чиланзар",en:"Chilonzor"}},
    {id:"mirzo-ulugbek", name:{uz:"Mirzo Ulug'bek",ru:"Мирзо Улугбек",en:"Mirzo Ulugbek"}},
    {id:"mirobod", name:{uz:"Mirobod",ru:"Мирабад",en:"Mirobod"}},
    {id:"olmazor", name:{uz:"Olmazor",ru:"Алмазар",en:"Olmazor"}},
    {id:"sergeli", name:{uz:"Sergeli",ru:"Сергели",en:"Sergeli"}},
    {id:"shayxontohur", name:{uz:"Shayxontohur",ru:"Шайхантахур",en:"Shaykhantakhur"}},
    {id:"uchtepa", name:{uz:"Uchtepa",ru:"Учтепа",en:"Uchtepa"}},
    {id:"yakkasaroy", name:{uz:"Yakkasaroy",ru:"Яккасарай",en:"Yakkasaray"}},
    {id:"yangihayot", name:{uz:"Yangihayot",ru:"Янгихаёт",en:"Yangihayot"}},
    {id:"yashnobod", name:{uz:"Yashnobod",ru:"Яшнабад",en:"Yashnabad"}},
    {id:"yunusobod", name:{uz:"Yunusobod",ru:"Юнусабад",en:"Yunusabad"}},
  ]
};

const STORAGE_KEY = "bozor_products_v1";
const NEXT_ID_KEY = "bozor_next_id_v1";
const USERS_KEY = "bozor_users_v1";
const SESSION_KEY = "bozor_session_v1";
const FAVORITES_KEY = "bozor_favorites_v1";

function loadUsers(){
  try{
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){ console.error("Foydalanuvchilarni yuklashda xatolik:", e); return []; }
}
function saveUsers(users){
  try{ localStorage.setItem(USERS_KEY, JSON.stringify(users)); }
  catch(e){ console.error("Foydalanuvchilarni saqlashda xatolik:", e); }
}
function loadSession(){
  try{
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}
let currentUser = loadSession();

/* Foydalanuvchi uchun barqaror ID yaratish (masalan 9 xonali raqam) */
function generateUserId(){
  return String(Math.floor(100000000 + Math.random()*900000000));
}

/* ---------------- favorites ---------------- */
function loadFavorites(){
  try{
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){ return []; }
}
function saveFavorites(){
  try{ localStorage.setItem(FAVORITES_KEY, JSON.stringify(FAVORITES)); }
  catch(e){ console.error("Sevimlilarni saqlashda xatolik:", e); }
}
let FAVORITES = loadFavorites();
let showOnlyFavorites = false;
let showOnlyMine = false;

function isFavorite(id){ return FAVORITES.includes(id); }

function toggleFavorite(id, ev){
  if(ev){ ev.stopPropagation(); }
  const idx = FAVORITES.indexOf(id);
  if(idx === -1){
    FAVORITES.push(id);
    showToast(t("toast_fav_added"));
  }else{
    FAVORITES.splice(idx, 1);
    showToast(t("toast_fav_removed"));
  }
  saveFavorites();
  renderGrid();
}

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
  {id:13,  photo:"./img/image copy 13.png", phone:"+998 90 345 67 12", price:620000, cat:"tools", loc:{uz:"Toshkent, Uchtepa",ru:"Ташкент, Учтепа",en:"Tashkent, Uchtepa"}, title:{uz:"Drel, zarbali, 750W",ru:"Дрель ударная, 750Вт",en:"Impact drill, 750W"}, desc:{uz:"Bir marta ishlatilgan, quti va bitlar bilan.",ru:"Использовалась один раз, в комплекте с битами.",en:"Used once, comes with bits and box."}, time:"7 soat oldin"},
  {id:14,  photo:"./img/image copy 14.png", phone:"+998 91 456 78 23", price:980000, cat:"tools", loc:{uz:"Andijon",ru:"Андижан",en:"Andijan"}, title:{uz:"Bolg'arka (ugol shlifmashina), 125mm",ru:"Болгарка (УШМ), 125мм",en:"Angle grinder, 125mm"}, desc:{uz:"Ishlab turibdi, zaxira disklar bilan birga.",ru:"В рабочем состоянии, с запасными дисками.",en:"Working condition, comes with spare discs."}, time:"1 kun oldin"},
  {id:15,  photo:"./img/image copy 15.png", phone:"+998 93 567 89 34", price:145000, cat:"school", loc:{uz:"Toshkent, Yunusobod",ru:"Ташкент, Юнусабад",en:"Tashkent, Yunusabad"}, title:{uz:"Maktab uchun qalam-daftar to'plami",ru:"Набор канцтоваров для школы",en:"School stationery set"}, desc:{uz:"Daftar, ruchka, qalam, chizg'ich va boshqalar.",ru:"Тетради, ручки, карандаши, линейка и др.",en:"Notebooks, pens, pencils, ruler and more."}, time:"2 kun oldin"},
  
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
    const val = t(el.getAttribute("data-i18n"));
    if(typeof val === "string") el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    el.placeholder = t(el.getAttribute("data-i18n-ph"));
  });
  document.getElementById("statLine").textContent = `🔥 ${PRODUCTS.length}+ ${t('stat')}`;
}

const CHIP_BASE = "flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-semibold whitespace-nowrap cursor-pointer select-none transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--accent)]";
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
    const matchesFav = !showOnlyFavorites || isFavorite(p.id);
    const matchesMine = !showOnlyMine || (currentUser && p.ownerName === currentUser.name);
    return matchesCat && matchesQ && matchesFav && matchesMine;
  });

  const titleEl = document.getElementById("listingsTitle");
  if(titleEl) titleEl.textContent = showOnlyMine ? t("my_listings_title") : (showOnlyFavorites ? t("favorites_title") : t("listings_title"));
  document.getElementById("resultCount").textContent = list.length;
  document.getElementById("emptyState").style.display = list.length ? "none" : "block";
  const emptyTextEl = document.querySelector("#emptyState [data-i18n='empty_title']");
  if(emptyTextEl) emptyTextEl.textContent = showOnlyMine ? t("empty_mine") : (showOnlyFavorites ? t("empty_favorites") : t("empty_title"));

  list.forEach(p=>{
    const card = document.createElement("div");
    card.className = "card bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col cursor-pointer";
    card.onclick = ()=>openDetail(p);
    const catObj = CATEGORIES.find(c=>c.id===p.cat);
    const fav = isFavorite(p.id);
    card.innerHTML = `
      <div class="h-24 sm:h-32 lg:h-36 bg-[var(--surface-2)] relative overflow-hidden flex items-center justify-center">
        <span class="absolute top-1.5 left-1.5 bg-black/55 text-white text-[11px] font-bold px-2 py-1 rounded-full">${catObj ? catObj.name[lang] : ''}</span>
        <button type="button" class="fav-btn absolute top-1.5 right-1.5 z-10 w-7 h-7 rounded-full bg-black/45 flex items-center justify-center cursor-pointer border-none${fav ? ' fav-active' : ''}" data-fav-id="${p.id}" onclick="toggleFavorite(${p.id}, event)">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="${fav ? 'var(--nav-pink, #E4157F)' : 'none'}" stroke="${fav ? 'var(--nav-pink, #E4157F)' : '#fff'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
        ${p.photo ? `<img src="${p.photo}" alt="" class="w-full h-full object-cover block">` : `<div class="w-full h-full flex items-center justify-center text-[var(--text-muted)] text-xs font-bold text-center px-2">${t('no_photo')}</div>`}
      </div>
      <div class="p-3 flex flex-col gap-1.5 flex-1">
        <div class="text-base font-extrabold text-[var(--accent)] font-display">${fmtPrice(p.price)}</div>
        <div class="text-sm font-semibold leading-snug line-clamp-2 min-h-[38px]">${p.title[lang]}</div>
        <div class="text-xs text-[var(--text-muted)] flex justify-between mt-1 gap-1">
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
  handleLocationChange();
}

function renderDistrictSelect(locId, prevDistrict){
  const wrap = document.getElementById("districtWrap");
  const sel = document.getElementById("fDistrict");
  const list = DISTRICTS[locId];
  if(!list){
    wrap.classList.add("hidden");
    sel.innerHTML = "";
    return;
  }
  sel.innerHTML = "";
  list.forEach(d=>{
    const opt = document.createElement("option");
    opt.value = d.id;
    opt.textContent = d.name[lang];
    sel.appendChild(opt);
  });
  if(prevDistrict && list.some(d=>d.id===prevDistrict)) sel.value = prevDistrict;
  wrap.classList.remove("hidden");
}

function handleLocationChange(){
  const locId = document.getElementById("fLocation").value;
  const prevDistrict = document.getElementById("fDistrict").value;
  renderDistrictSelect(locId, prevDistrict);
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
  renderAuthBtn();
  if(currentUser && !document.getElementById("profilePage").classList.contains("hidden")){
    renderProfilePage();
  }
}

function toggleTheme(){
  const html = document.documentElement;
  const isLight = html.getAttribute("data-theme") === "light";
  html.setAttribute("data-theme", isLight ? "dark" : "light");
  document.getElementById("themeBtn").textContent = isLight ? "🌙" : "☀️";
}

/* ---------------- auth (full-page gate) ---------------- */
const TAB_ACTIVE = " bg-[var(--accent)] text-[var(--accent-ink)]";
const TAB_INACTIVE = " bg-transparent text-[var(--text-muted)]";

function renderAuthBtn(){
  const btn = document.getElementById("authBtn");
  if(!btn) return;
  if(currentUser){
    btn.innerHTML = `<span>👤</span><span class="max-w-[90px] truncate">${currentUser.name}</span>`;
    btn.onclick = ()=>bottomNavGo('profile');
    btn.title = t('nav_profile');
  }else{
    btn.innerHTML = `<span>👤</span><span data-i18n="login_btn">${t('login_btn')}</span>`;
    btn.onclick = ()=>showAuthGate();
    btn.title = t('login_btn');
  }
}

function showAuthGate(){
  document.getElementById("authGate").classList.remove("hidden");
  document.getElementById("appContent").classList.add("hidden");
  switchAuthTab("login");
}

function enterApp(){
  document.getElementById("authGate").classList.add("hidden");
  document.getElementById("appContent").classList.remove("hidden");
}

function switchAuthTab(tab){
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const tabLogin = document.getElementById("authTabLogin");
  const tabRegister = document.getElementById("authTabRegister");
  if(tab === "register"){
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    tabRegister.className = "flex-1 rounded-lg py-2.5 font-extrabold text-sm cursor-pointer transition-all" + TAB_ACTIVE;
    tabLogin.className = "flex-1 rounded-lg py-2.5 font-extrabold text-sm cursor-pointer transition-all" + TAB_INACTIVE;
  }else{
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    tabLogin.className = "flex-1 rounded-lg py-2.5 font-extrabold text-sm cursor-pointer transition-all" + TAB_ACTIVE;
    tabRegister.className = "flex-1 rounded-lg py-2.5 font-extrabold text-sm cursor-pointer transition-all" + TAB_INACTIVE;
  }
}

function submitLogin(){
  const name = document.getElementById("lName").value.trim();
  const password = document.getElementById("lPassword").value;
  const remember = document.getElementById("lRemember").checked;
  if(!name){ showToast(t('err_name')); return; }
  if(!password){ showToast(t('err_password')); return; }
  const users = loadUsers();
  const found = users.find(u=>u.name.toLowerCase()===name.toLowerCase() && u.password===password);
  let user = found;
  if(!user){
    user = {name, password, id: generateUserId()};
    users.push(user);
    saveUsers(users);
  }else if(!user.id){
    // Eski foydalanuvchilarga ID biriktirilmagan bo'lsa, hozir biriktiramiz.
    user.id = generateUserId();
    saveUsers(users);
  }
  currentUser = {name: user.name, id: user.id, avatar: user.avatar || null};
  if(remember){
    try{ localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser)); }catch(e){}
  }
  renderAuthBtn();
  enterApp();
  showToast(`${t('toast_login_ok')} ${user.name}!`);
}

function submitRegister(){
  const name = document.getElementById("rName").value.trim();
  const password = document.getElementById("rPassword").value;
  const confirmPassword = document.getElementById("rConfirmPassword").value;
  if(!name){ showToast(t('err_name')); return; }
  if(!password){ showToast(t('err_password')); return; }
  if(password !== confirmPassword){ showToast(t('err_confirm_password')); return; }
  const users = loadUsers();
  const existingIdx = users.findIndex(u=>u.name.toLowerCase()===name.toLowerCase());
  const id = (existingIdx !== -1 && users[existingIdx].id) ? users[existingIdx].id : generateUserId();
  if(existingIdx !== -1) users.splice(existingIdx, 1);
  users.push({name, password, id});
  saveUsers(users);
  currentUser = {name, id};
  try{ localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser)); }catch(e){}
  renderAuthBtn();
  enterApp();
  showToast(t('toast_register_ok'));
}

function logoutUser(){
  currentUser = null;
  try{ localStorage.removeItem(SESSION_KEY); }catch(e){}
  renderAuthBtn();
  closeProfilePage();
  showAuthGate();
  showToast(t('toast_logout'));
}

/* Faqat profil sahifasidagi "Chiqish" tugmasi shu funksiyani chaqiradi —
   shunda foydalanuvchi tasodifan emas, faqat o'zi bosganda tizimdan chiqadi. */
function confirmLogout(){
  if(!currentUser) return;
  if(window.confirm(t('logout_confirm_q'))){
    logoutUser();
  }
}

/* ---------------- profile page (full page, like a real marketplace app) ---------------- */
function renderProfilePage(){
  if(!currentUser) return;
  const initial = (currentUser.name || "?").trim().charAt(0).toUpperCase() || "?";
  const avatar = document.getElementById("ppAvatar");
  const greeting = document.getElementById("ppGreeting");
  const idEl = document.getElementById("ppId");
  const mineCountEl = document.getElementById("ppMineCount");
  if(avatar){
    if(currentUser.avatar){
      avatar.innerHTML = `<img src="${currentUser.avatar}" alt="avatar">`;
    }else{
      avatar.innerHTML = "";
      avatar.textContent = initial;
    }
  }
  if(greeting) greeting.textContent = t("profile_greeting")(currentUser.name);
  if(idEl) idEl.textContent = `ID: ${currentUser.id || "—"}`;
  if(mineCountEl){
    const mineCount = PRODUCTS.filter(p=>p.ownerName === currentUser.name).length;
    mineCountEl.textContent = mineCount;
  }
}

function openProfilePage(){
  if(!currentUser) return;
  renderProfilePage();
  document.getElementById("profilePage").classList.remove("hidden");
  window.scrollTo({top:0});
}

function closeProfilePage(){
  const page = document.getElementById("profilePage");
  if(page) page.classList.add("hidden");
}

/* Profil sahifasidagi ✕ tugmasi: sahifani yopadi va pastki navdagi
   "Profil" belgisini ham nofaol holatga qaytaradi. */
function closeProfilePageX(){
  closeProfilePage();
  const btn = document.querySelector('#bottomNav [data-nav="profile"]');
  if(btn){ btn.classList.remove("bn-active"); btn.style.color = ""; }
}

/* Foydalanuvchi profil rasmini tanlaganda ishga tushadi: rasmni
   dataURL sifatida o'qiydi, ekranda darhol ko'rsatadi va
   joriy foydalanuvchi (hamda uning saqlangan hisobi)ga saqlaydi. */
function onProfilePhotoSelected(e){
  if(!currentUser) return;
  const file = e.target.files && e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    const dataUrl = reader.result;
    currentUser.avatar = dataUrl;
    try{ localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser)); }catch(err){}
    const users = loadUsers();
    const idx = users.findIndex(u=>u.id === currentUser.id || u.name.toLowerCase()===currentUser.name.toLowerCase());
    if(idx !== -1){ users[idx].avatar = dataUrl; saveUsers(users); }
    renderProfilePage();
    renderAuthBtn();
  };
  reader.readAsDataURL(file);
  e.target.value = "";
}

function editProfileName(){
  if(!currentUser) return;
  const newName = window.prompt(t("prompt_new_name"), currentUser.name);
  if(!newName || !newName.trim() || newName.trim() === currentUser.name) return;
  const trimmed = newName.trim();
  const users = loadUsers();
  const idx = users.findIndex(u=>u.id === currentUser.id || u.name.toLowerCase()===currentUser.name.toLowerCase());
  if(idx !== -1){ users[idx].name = trimmed; saveUsers(users); }
  // Foydalanuvchining oldingi e'lonlaridagi egasi nomini ham yangilaymiz.
  PRODUCTS.forEach(p=>{ if(p.ownerName === currentUser.name) p.ownerName = trimmed; });
  saveState();
  currentUser.name = trimmed;
  try{ localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser)); }catch(e){}
  renderAuthBtn();
  renderProfilePage();
}

function goToMyListings(){
  closeProfilePage();
  showOnlyMine = true;
  showOnlyFavorites = false;
  renderGrid();
  window.scrollTo({top:0, behavior:"smooth"});
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

/* ---------------- location picker (add listing) ---------------- */
const DEFAULT_MAP_CENTER = {lat:41.311081, lng:69.240562}; // Toshkent markazi
let mapPickLeaflet = null;
let mapPickMarker = null;
let pickedGeo = null; // {lat, lng} tanlangan joy
let mapPickStreetLayer = null;
let mapPickSatLayer = null;
let mapPickLayerType = "street"; // "street" | "satellite"

function openMapPicker(){
  document.getElementById("mapPickOverlay").classList.add("show");
  setTimeout(initMapPicker, 60);
}

function initMapPicker(){
  const start = pickedGeo || DEFAULT_MAP_CENTER;
  if(!mapPickLeaflet){
    mapPickLeaflet = L.map("mapPickMap").setView([start.lat, start.lng], pickedGeo ? 15 : 11);

    // Ko'cha (schematik) qatlam — OpenStreetMap
    mapPickStreetLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap"
    });

    // Sun'iy yo'ldosh (satellite) qatlam — Esri World Imagery
    mapPickSatLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 19,
      attribution: "Tiles &copy; Esri"
    });

    (mapPickLayerType === "satellite" ? mapPickSatLayer : mapPickStreetLayer).addTo(mapPickLeaflet);
    updateMapLayerButtons();

    mapPickMarker = L.marker([start.lat, start.lng], {draggable:true}).addTo(mapPickLeaflet);
    mapPickMarker.on("dragend", ()=>{
      const pos = mapPickMarker.getLatLng();
      pickedGeo = {lat: pos.lat, lng: pos.lng};
    });
    mapPickLeaflet.on("click", (e)=>{
      mapPickMarker.setLatLng(e.latlng);
      pickedGeo = {lat: e.latlng.lat, lng: e.latlng.lng};
    });
  }else{
    mapPickLeaflet.invalidateSize();
    mapPickLeaflet.setView([start.lat, start.lng], pickedGeo ? 15 : mapPickLeaflet.getZoom());
    mapPickMarker.setLatLng([start.lat, start.lng]);
    updateMapLayerButtons();
  }
}

/* Xarita / sun'iy yo'ldosh ko'rinishini almashtiradi. */
function setMapPickLayer(type){
  if(type === mapPickLayerType || !mapPickLeaflet) { mapPickLayerType = type; updateMapLayerButtons(); return; }
  const from = mapPickLayerType === "satellite" ? mapPickSatLayer : mapPickStreetLayer;
  const to = type === "satellite" ? mapPickSatLayer : mapPickStreetLayer;
  if(from) mapPickLeaflet.removeLayer(from);
  if(to) to.addTo(mapPickLeaflet);
  mapPickLayerType = type;
  updateMapLayerButtons();
}

function updateMapLayerButtons(){
  const streetBtn = document.getElementById("mapLayerBtnStreet");
  const satBtn = document.getElementById("mapLayerBtnSat");
  if(streetBtn) streetBtn.classList.toggle("active", mapPickLayerType === "street");
  if(satBtn) satBtn.classList.toggle("active", mapPickLayerType === "satellite");
}

function useMyLocationForPin(){
  if(!navigator.geolocation){ showToast(t("toast_geo_unsupported")); return; }
  navigator.geolocation.getCurrentPosition(pos=>{
    const {latitude, longitude} = pos.coords;
    pickedGeo = {lat: latitude, lng: longitude};
    if(mapPickMarker) mapPickMarker.setLatLng([latitude, longitude]);
    if(mapPickLeaflet) mapPickLeaflet.setView([latitude, longitude], 15);
  }, ()=>{
    showToast(t("toast_geo_denied"));
  });
}

function confirmMapPick(){
  if(!pickedGeo && mapPickMarker){
    const pos = mapPickMarker.getLatLng();
    pickedGeo = {lat: pos.lat, lng: pos.lng};
  }
  if(pickedGeo){
    document.getElementById("fGeoLat").value = pickedGeo.lat;
    document.getElementById("fGeoLng").value = pickedGeo.lng;
    document.getElementById("geoPickedLabel").classList.remove("hidden");
  }
  closeModal("mapPickOverlay");
}

/* ---------------- location viewer (listing detail) ---------------- */
let detailLeafletMap = null;

function initDetailMap(geo){
  const el = document.getElementById("detailMap");
  if(!el || typeof L === "undefined") return;
  if(detailLeafletMap){ detailLeafletMap.remove(); detailLeafletMap = null; }
  detailLeafletMap = L.map("detailMap", {zoomControl:false, scrollWheelZoom:false}).setView([geo.lat, geo.lng], 14);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap"
  }).addTo(detailLeafletMap);
  L.marker([geo.lat, geo.lng]).addTo(detailLeafletMap);
}

function submitListing(){
  const title = document.getElementById("fTitle").value.trim();
  const price = parseInt(document.getElementById("fPrice").value, 10);
  const cat = document.getElementById("fCategory").value;
  const locId = document.getElementById("fLocation").value;
  const districtId = document.getElementById("fDistrict").value;
  const phone = document.getElementById("fPhone").value.trim();
  const desc = document.getElementById("fDesc").value.trim() || "—";
  if(!title || !price){ showToast(t('toast_fill')); return; }
  const locObj = LOCATIONS.find(l=>l.id===locId) || LOCATIONS[0];
  const districtList = DISTRICTS[locObj.id];
  const districtObj = districtList && districtId ? districtList.find(d=>d.id===districtId) : null;
  const locName = districtObj
    ? {uz:`${locObj.name.uz}, ${districtObj.name.uz}`, ru:`${locObj.name.ru}, ${districtObj.name.ru}`, en:`${locObj.name.en}, ${districtObj.name.en}`}
    : locObj.name;
  const geoLatRaw = document.getElementById("fGeoLat").value;
  const geoLngRaw = document.getElementById("fGeoLng").value;
  const geo = (geoLatRaw && geoLngRaw) ? {lat: parseFloat(geoLatRaw), lng: parseFloat(geoLngRaw)} : null;
  const newProduct = {
    id: nextId++,
    photo: currentPhotoDataUrl,
    phone,
    price, cat,
    loc: locName,
    geo,
    ownerName: currentUser ? currentUser.name : null,
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
  document.getElementById("fGeoLat").value = "";
  document.getElementById("fGeoLng").value = "";
  document.getElementById("geoPickedLabel").classList.add("hidden");
  pickedGeo = null;
  closeModal("addOverlay");
  activeCat = "all";
  showOnlyMine = false;
  renderCategories();
  renderGrid();
  document.getElementById("statLine").textContent = `🔥 ${PRODUCTS.length}+ ${t('stat')}`;
  showToast(t('toast_ok'));
}

/* ---------------- delete flow ---------------- */
let pendingDeleteId = null;
let lastOpenedProduct = null;

function openDeleteConfirm(id){
  pendingDeleteId = id;
  document.getElementById("deleteOverlay").classList.add("show");
}

function confirmDelete(where){
  if(pendingDeleteId == null) return;
  const target = PRODUCTS.find(p=>p.id === pendingDeleteId);
  if(!target || !currentUser || target.ownerName !== currentUser.name){
    pendingDeleteId = null;
    closeModal("deleteOverlay");
    showToast("Faqat o'zingiz joylashtirgan e'lonni o'chira olasiz");
    return;
  }
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
  lastOpenedProduct = p;
  const catObj = CATEGORIES.find(c=>c.id===p.cat);
  const content = document.getElementById("detailContent");
  const fav = isFavorite(p.id);
  content.innerHTML = `
    <button class="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white text-lg flex items-center justify-center border-none cursor-pointer" onclick="closeModal('detailOverlay')">✕</button>
    <div class="h-40 sm:h-56 rounded-xl bg-[var(--surface-2)] flex items-center justify-center mb-3 overflow-hidden relative z-0">
      <button type="button" class="absolute top-2 left-2 z-10 w-8 h-8 rounded-full bg-black/45 flex items-center justify-center cursor-pointer border-none${fav ? ' fav-active' : ''}" id="detailFavBtn" onclick="toggleFavorite(${p.id}, event); const b=document.getElementById('detailFavBtn'); const nowFav=isFavorite(${p.id}); b.classList.toggle('fav-active', nowFav); b.querySelector('svg').setAttribute('fill', nowFav ? 'var(--nav-pink, #E4157F)' : 'none'); b.querySelector('svg').setAttribute('stroke', nowFav ? 'var(--nav-pink, #E4157F)' : '#fff');">
        <svg viewBox="0 0 24 24" width="17" height="17" fill="${fav ? 'var(--nav-pink, #E4157F)' : 'none'}" stroke="${fav ? 'var(--nav-pink, #E4157F)' : '#fff'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </button>
      ${p.photo ? `<img src="${p.photo}" alt="" class="w-full h-full object-cover block">` : `<div class="w-full h-full flex items-center justify-center text-[var(--text-muted)] text-sm font-bold">${t('no_photo')}</div>`}
    </div>
    <div class="text-2xl font-extrabold text-[#00f2fe] font-display mb-1.5">${fmtPrice(p.price)}</div>
    <h3 class="m-0 mb-2 text-lg font-bold">${p.title[lang]}</h3>
    <div class="text-base text-[var(--text-muted)] leading-relaxed my-2.5">${p.desc[lang]}</div>
    <div class="flex justify-between text-sm text-[var(--text-muted)] py-2.5 border-t border-[var(--border)]"><span>${t('detail_cat')}</span><span>${catObj ? catObj.name[lang] : ''}</span></div>
    <div class="flex justify-between text-sm text-[var(--text-muted)] py-2.5 border-t border-[var(--border)]"><span>${t('detail_loc')}</span><span>${p.loc[lang]}</span></div>
    ${p.phone ? `<div class="flex justify-between text-sm text-[var(--text-muted)] py-2.5 border-t border-[var(--border)]"><span>${t('detail_phone')}</span><span>${p.phone}</span></div>` : ''}
    ${p.geo ? `
    <div class="pt-2.5 border-t border-[var(--border)]">
      <div class="text-sm text-[var(--text-muted)] mb-2">${t('detail_geo')}</div>
      <div id="detailMap" class="w-full h-40 rounded-xl overflow-hidden border border-[var(--border)]"></div>
      <a href="https://www.google.com/maps/dir/?api=1&destination=${p.geo.lat},${p.geo.lng}" target="_blank" rel="noopener" class="mt-2 w-full inline-flex items-center justify-center gap-1.5 bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] rounded-lg py-2.5 font-bold text-sm">${t('btn_directions')}</a>
    </div>` : ''}
    <div class="flex gap-2 mt-4">
      ${p.phone
        ? `<a class="flex-1 bg-[#00f2fe] text-black rounded-lg py-3.5 font-extrabold text-base flex items-center justify-center cursor-pointer" href="tel:${p.phone.replace(/\s+/g,'')}">${t('contact')}</a>`
        : `<button class="flex-1 bg-[#00f2fe] text-black rounded-lg py-3.5 font-extrabold text-base border-none cursor-pointer" onclick="showToast(t('contact'))">${t('contact')}</button>`}
    </div>
    ${(currentUser && p.ownerName === currentUser.name) ? `<button class="w-full mt-2 bg-transparent border border-[var(--danger)] text-[var(--danger)] rounded-lg py-3 font-bold text-base cursor-pointer" onclick="openDeleteConfirm(${p.id})">${t('btn_delete')}</button>` : ''}`;
  document.getElementById("detailOverlay").classList.add("show");
  if(p.geo) setTimeout(()=>initDetailMap(p.geo), 60);
}

document.getElementById("searchInput").addEventListener("input", renderGrid);

[document.getElementById("addOverlay"), document.getElementById("detailOverlay"), document.getElementById("deleteOverlay"), document.getElementById("mapPickOverlay")].forEach(ov=>{
  ov.addEventListener("click", e=>{ if(e.target===ov) ov.classList.remove("show"); });
});

/* ---------------- bottom mobile nav ---------------- */
function bottomNavGo(section){
  document.querySelectorAll("#bottomNav .bn-item[data-nav]").forEach(b=> {
    b.classList.remove("bn-active");
    b.style.color = ""; // CSS-dagi eski standart rangiga qaytadi
  });
  
  const btn = document.querySelector(`#bottomNav [data-nav="${section}"]`);
  if(btn) {
    btn.classList.add("bn-active");
    // Faqat aktiv tugma rangini Aqua qiladi
    btn.style.color = "#00f2fe"; 
  }

  // Profildan boshqa bo'limga o'tilsa, profil sahifasini yopamiz
  if(section !== "profile") closeProfilePage();

  if(section === "search"){
    showOnlyFavorites = false;
    showOnlyMine = false;
    renderGrid();
    window.scrollTo({top:0, behavior:"smooth"});
    const input = document.getElementById("searchInput");
    if(input) setTimeout(()=>input.focus(), 300);
  }else if(section === "favorites"){
    showOnlyFavorites = true;
    showOnlyMine = false;
    renderGrid();
    document.getElementById("grid").scrollIntoView({behavior:"smooth", block:"start"});
  }else if(section === "sell"){
    if(currentUser){ openAddModal(); } else { showAuthGate(); }
  }else if(section === "messages"){
    if(lastOpenedProduct && lastOpenedProduct.phone){
      const digits = lastOpenedProduct.phone.replace(/\D/g,"");
      window.open(`https://wa.me/${digits}`, "_blank");
    }else{
      showToast(t("nav_pick_listing"));
    }
  }else if(section === "profile"){
    // Ro'yxatdan o'tgan foydalanuvchi uchun haqiqiy profil sahifasi ochiladi —
    // faqat sahifadagi "Chiqish" tugmasi bosilgandagina hisobdan chiqadi.
    if(currentUser){ openProfilePage(); } else { showAuthGate(); }
  }else{
    showToast(t("nav_soon"));
  }
}

/* ---------------- init ---------------- */
setLang("uz");
if(currentUser){
  enterApp();
}else{
  showAuthGate();
}
// Qidiruvni boshlang'ichda yoqib qo'yish
setTimeout(() => { bottomNavGo("search"); }, 50);