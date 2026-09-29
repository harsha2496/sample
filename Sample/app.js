/**
 * AURA CAFE & ROASTERY — CLIENT APPLICATION
 * Modern Vanilla JavaScript (ES6+)
 * Reactive state, cart operations, customization modal, promo codes,
 * Web Audio synthesizers, live order tracking simulation, and localStorage persistence.
 */

// ============================================================
// SVG ICONS FOR PRODUCTS (High-resolution offline vector art)
// ============================================================
const PRODUCT_ICONS = {
  hotCoffee: `
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-svg-icon">
      <ellipse cx="48" cy="85" rx="32" ry="7" fill="rgba(0,0,0,0.1)"/>
      <path d="M22 36L28 78C28.5 81.5 31.5 84 35 84H61C64.5 84 67.5 81.5 68 78L74 36H22Z" fill="#8B4513" stroke="#4A2508" stroke-width="3"/>
      <path d="M25 42L30 76C30.3 78 32 80 34 80H62C64 80 65.7 78 66 76L71 42H25Z" fill="#A0522D"/>
      <ellipse cx="48" cy="36" rx="26" ry="7" fill="#D2B48C" stroke="#4A2508" stroke-width="3"/>
      <ellipse cx="48" cy="36" rx="22" ry="5.5" fill="#5C2E0B"/>
      <!-- Latte Art Heart -->
      <path d="M48 37C46 34 41 33 41 36C41 39 48 42 48 42C48 42 55 39 55 36C55 33 50 34 48 37Z" fill="#FDFBF7"/>
      <!-- Handle -->
      <path d="M72 44C82 44 86 52 86 60C86 68 78 72 70 72" stroke="#4A2508" stroke-width="4" stroke-linecap="round"/>
      <!-- Steam -->
      <path d="M42 26C40 22 44 19 42 15" stroke="#C27838" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
      <path d="M49 28C47 24 51 20 49 14" stroke="#C27838" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>
      <path d="M56 25C54 21 58 17 56 13" stroke="#C27838" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
    </svg>`,

  coldCoffee: `
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-svg-icon">
      <ellipse cx="50" cy="88" rx="26" ry="6" fill="rgba(0,0,0,0.12)"/>
      <!-- Glass Cup -->
      <path d="M28 26L34 82C34.5 85 37 87 40 87H60C63 87 65.5 85 66 82L72 26H28Z" fill="#F4EAE0" fill-opacity="0.2" stroke="#3E2723" stroke-width="3"/>
      <!-- Cold Brew Layer -->
      <path d="M30 40L34.5 81C34.8 83.5 37 85 39.5 85H60.5C63 85 65.2 83.5 65.5 81L70 40H30Z" fill="#3E2723"/>
      <!-- Cold Foam Layer -->
      <path d="M28.5 28L30 40H70L71.5 28C65 30 57 27 50 28C43 29 35 27 28.5 28Z" fill="#FFF9F2"/>
      <!-- Ice Cubes -->
      <rect x="42" y="44" width="16" height="16" rx="3" transform="rotate(15 42 44)" fill="#FFFFFF" fill-opacity="0.35" stroke="#D7CCC8" stroke-width="1.5"/>
      <rect x="36" y="58" width="14" height="14" rx="3" transform="rotate(-10 36 58)" fill="#FFFFFF" fill-opacity="0.35" stroke="#D7CCC8" stroke-width="1.5"/>
      <!-- Straw -->
      <line x1="56" y1="12" x2="48" y2="76" stroke="#C27838" stroke-width="4.5" stroke-linecap="round"/>
    </svg>`,

  pastry: `
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-svg-icon">
      <ellipse cx="50" cy="82" rx="36" ry="7" fill="rgba(0,0,0,0.1)"/>
      <!-- Golden Crescent Croissant -->
      <path d="M18 58C22 44 38 34 50 34C62 34 78 44 82 58C84 65 74 69 68 65C62 61 58 57 50 57C42 57 38 61 32 65C26 69 16 65 18 58Z" fill="#E69138" stroke="#783F04" stroke-width="3"/>
      <!-- Pastry Layers & Flakes -->
      <path d="M28 53C35 44 44 40 50 40C56 40 65 44 72 53" stroke="#F6B26B" stroke-width="3" stroke-linecap="round"/>
      <path d="M38 48C42 43 46 41 50 41C54 41 58 43 62 48" stroke="#FCE5CD" stroke-width="2" stroke-linecap="round"/>
      <circle cx="44" cy="46" r="1.5" fill="#783F04"/>
      <circle cx="56" cy="47" r="1.5" fill="#783F04"/>
      <circle cx="50" cy="51" r="1.5" fill="#783F04"/>
    </svg>`,

  muffin: `
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-svg-icon">
      <ellipse cx="50" cy="85" rx="28" ry="6" fill="rgba(0,0,0,0.12)"/>
      <!-- Cup Base -->
      <path d="M30 52L36 82C36.5 84 38 85 40 85H60C62 85 63.5 84 64 82L70 52H30Z" fill="#8D6E63" stroke="#4E342E" stroke-width="2.5"/>
      <line x1="38" y1="54" x2="42" y2="83" stroke="#4E342E" stroke-width="1.5"/>
      <line x1="50" y1="54" x2="50" y2="83" stroke="#4E342E" stroke-width="1.5"/>
      <line x1="62" y1="54" x2="58" y2="83" stroke="#4E342E" stroke-width="1.5"/>
      <!-- Fluffy Muffin Top -->
      <path d="M22 52C20 42 28 32 40 30C43 25 50 24 55 26C62 23 72 27 75 34C82 38 82 48 78 52C75 56 25 56 22 52Z" fill="#5D4037" stroke="#3E2723" stroke-width="3"/>
      <!-- Chocolate chips -->
      <rect x="36" y="38" width="6" height="5" rx="2" fill="#271B16"/>
      <rect x="52" y="33" width="7" height="6" rx="2" fill="#271B16"/>
      <rect x="64" y="42" width="6" height="5" rx="2" fill="#271B16"/>
      <rect x="46" y="46" width="6" height="5" rx="2" fill="#271B16"/>
    </svg>`,

  sandwich: `
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-svg-icon">
      <ellipse cx="50" cy="85" rx="38" ry="7" fill="rgba(0,0,0,0.1)"/>
      <!-- Sourdough Toast -->
      <path d="M20 72C18 64 26 58 35 58H65C74 58 82 64 80 72C78 78 22 78 20 72Z" fill="#D7A15C" stroke="#7A4E1D" stroke-width="2.5"/>
      <!-- Greens / Avocado layer -->
      <path d="M22 58C28 52 38 56 46 53C54 50 64 55 78 54C80 57 76 60 72 61L25 61C23 60 21 59 22 58Z" fill="#4CAF50"/>
      <!-- Tomato / Protein Layer -->
      <path d="M26 50H74C76 54 70 56 68 56H32C30 56 24 54 26 50Z" fill="#E53935"/>
      <ellipse cx="44" cy="46" rx="10" ry="5" fill="#FFF9C4" stroke="#FBC02D" stroke-width="1.5"/>
      <!-- Top slice -->
      <path d="M24 44C22 36 30 30 40 30H60C70 30 78 36 76 44C74 48 26 48 24 44Z" fill="#EDBB7B" stroke="#7A4E1D" stroke-width="2.5"/>
      <circle cx="38" cy="36" r="1.5" fill="#7A4E1D"/>
      <circle cx="50" cy="35" r="1.5" fill="#7A4E1D"/>
      <circle cx="62" cy="38" r="1.5" fill="#7A4E1D"/>
    </svg>`,

  tea: `
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-svg-icon">
      <ellipse cx="50" cy="88" rx="24" ry="6" fill="rgba(0,0,0,0.1)"/>
      <!-- Refreshing Iced Tea Cup -->
      <path d="M30 26L35 82C35.5 85 38 87 41 87H59C62 87 64.5 85 65 82L70 26H30Z" fill="#FFF3E0" fill-opacity="0.3" stroke="#BF360C" stroke-width="2.5"/>
      <!-- Hibiscus Tea Gradient -->
      <path d="M31.5 36L35.5 81C35.8 83.5 38 85 40.5 85H59.5C62 85 64.2 83.5 64.5 81L68.5 36H31.5Z" fill="#C2185B"/>
      <!-- Mint leaves & lemon wheel -->
      <circle cx="50" cy="36" r="12" fill="#FFEE58" stroke="#F57F17" stroke-width="2"/>
      <path d="M50 36L44 42M50 36L56 42M50 36L50 26" stroke="#F57F17" stroke-width="1.5"/>
      <path d="M58 22C64 20 68 24 64 30C60 28 58 24 58 22Z" fill="#43A047"/>
      <!-- Straw -->
      <line x1="42" y1="12" x2="52" y2="78" stroke="#00897B" stroke-width="4" stroke-linecap="round"/>
    </svg>`
};

// ============================================================
// MENU PRODUCTS DATA
// ============================================================
const PRODUCTS = [
  {
    id: "p1",
    name: "Reserve Oat Vanilla Latte",
    category: "coffee",
    categoryLabel: "Signature Coffee",
    price: 5.75,
    rating: 4.9,
    reviews: 342,
    calories: "170 kcal",
    prepTime: "3–5 min",
    badges: ["popular", "chef"],
    badgeLabel: "Popular",
    description: "Double shot of single-origin Colombian espresso folded with silky steamed barista oat milk and pure Madagascar vanilla bean syrup.",
    iconSvg: PRODUCT_ICONS.hotCoffee,
    hasMilkOptions: true,
    hasSweetness: true,
    hasExtraShots: true
  },
  {
    id: "p2",
    name: "Nitro Cold Brew Reserve",
    category: "coffee",
    categoryLabel: "Signature Coffee",
    price: 5.25,
    rating: 4.8,
    reviews: 215,
    calories: "10 kcal",
    prepTime: "2 min",
    badges: ["vegan"],
    badgeLabel: "Vegan",
    description: "Slow-steeped for 24 hours and nitrogen-infused for a creamy, velvety micro-foam head and naturally sweet, chocolate undertones.",
    iconSvg: PRODUCT_ICONS.coldCoffee,
    hasMilkOptions: true,
    hasSweetness: true,
    hasExtraShots: true
  },
  {
    id: "p3",
    name: "Artisan Almond Croissant",
    category: "bakery",
    categoryLabel: "Bakery & Pastry",
    price: 4.85,
    rating: 4.9,
    reviews: 418,
    calories: "340 kcal",
    prepTime: "Warm 2 min",
    badges: ["popular", "chef"],
    badgeLabel: "Chef's Choice",
    description: "Twice-baked French butter croissant filled with luscious almond frangipane cream, topped with toasted sliced almonds and powdered sugar.",
    iconSvg: PRODUCT_ICONS.pastry,
    hasMilkOptions: false,
    hasSweetness: false,
    hasExtraShots: false
  },
  {
    id: "p4",
    name: "Truffle Avocado Sourdough",
    category: "savory",
    categoryLabel: "Gourmet Savory",
    price: 9.50,
    rating: 4.9,
    reviews: 194,
    calories: "380 kcal",
    prepTime: "6–8 min",
    badges: ["popular", "vegan"],
    badgeLabel: "Best Seller",
    description: "Hand-smashed Hass avocado on toasted country sourdough, topped with heirloom cherry tomatoes, white truffle oil drizzle, and micro-cilantro.",
    iconSvg: PRODUCT_ICONS.sandwich,
    hasMilkOptions: false,
    hasSweetness: false,
    hasExtraShots: false
  },
  {
    id: "p5",
    name: "Ceremonial Matcha Latte",
    category: "refreshers",
    categoryLabel: "Tea & Coolers",
    price: 6.25,
    rating: 4.8,
    reviews: 167,
    calories: "140 kcal",
    prepTime: "4 min",
    badges: ["popular"],
    badgeLabel: "Trending",
    description: "First-harvest ceremonial grade Uji matcha whisked to perfection with your choice of warm or iced silky oat milk and a touch of agave.",
    iconSvg: PRODUCT_ICONS.hotCoffee,
    hasMilkOptions: true,
    hasSweetness: true,
    hasExtraShots: false
  },
  {
    id: "p6",
    name: "Caramel Cloud Macchiato",
    category: "coffee",
    categoryLabel: "Signature Coffee",
    price: 6.10,
    rating: 4.7,
    reviews: 289,
    calories: "220 kcal",
    prepTime: "3–4 min",
    badges: ["popular"],
    badgeLabel: "Popular",
    description: "Velvety aerated milk marked with rich blonde espresso shots, cascading homemade sea-salted butter caramel drizzle, and vanilla.",
    iconSvg: PRODUCT_ICONS.hotCoffee,
    hasMilkOptions: true,
    hasSweetness: true,
    hasExtraShots: true
  },
  {
    id: "p7",
    name: "Smoked Salmon & Capers Bagel",
    category: "savory",
    categoryLabel: "Gourmet Savory",
    price: 11.20,
    rating: 4.9,
    reviews: 153,
    calories: "440 kcal",
    prepTime: "5 min",
    badges: ["chef"],
    badgeLabel: "Chef's Choice",
    description: "Cold-smoked Atlantic salmon on a warm toasted everything bagel with whipped dill cream cheese, pickled red onions, and capers.",
    iconSvg: PRODUCT_ICONS.sandwich,
    hasMilkOptions: false,
    hasSweetness: false,
    hasExtraShots: false
  },
  {
    id: "p8",
    name: "Belgian Chocolate Ganache Muffin",
    category: "bakery",
    categoryLabel: "Bakery & Pastry",
    price: 4.50,
    rating: 4.8,
    reviews: 176,
    calories: "390 kcal",
    prepTime: "Warm 1 min",
    badges: ["new"],
    badgeLabel: "Fresh Bake",
    description: "Decadent dark cocoa muffin stuffed with molten Belgian chocolate ganache core and studded with bittersweet chocolate chunks.",
    iconSvg: PRODUCT_ICONS.muffin,
    hasMilkOptions: false,
    hasSweetness: false,
    hasExtraShots: false
  },
  {
    id: "p9",
    name: "Hibiscus Peach Sparkler",
    category: "refreshers",
    categoryLabel: "Tea & Coolers",
    price: 5.50,
    rating: 4.8,
    reviews: 138,
    calories: "80 kcal",
    prepTime: "2 min",
    badges: ["vegan"],
    badgeLabel: "Refreshing",
    description: "Tart Egyptian hibiscus flower infusion shaken over sparkling spring water with white peach purée and a fragrant sprig of fresh garden mint.",
    iconSvg: PRODUCT_ICONS.tea,
    hasMilkOptions: false,
    hasSweetness: true,
    hasExtraShots: false
  },
  {
    id: "p10",
    name: "Single-Origin Ethiopian Pour-Over",
    category: "coffee",
    categoryLabel: "Signature Coffee",
    price: 5.90,
    rating: 5.0,
    reviews: 95,
    calories: "5 kcal",
    prepTime: "4–5 min",
    badges: ["chef", "vegan"],
    badgeLabel: "Specialty",
    description: "Hand-poured Yirgacheffe beans with vibrant notes of bergamot, jasmine florals, and wild blueberry. An exquisite connoisseur brew.",
    iconSvg: PRODUCT_ICONS.hotCoffee,
    hasMilkOptions: false,
    hasSweetness: false,
    hasExtraShots: false
  },
  {
    id: "p11",
    name: "Cardamom & Brown Sugar Braid",
    category: "bakery",
    categoryLabel: "Bakery & Pastry",
    price: 4.75,
    rating: 4.8,
    reviews: 112,
    calories: "320 kcal",
    prepTime: "Warm 1 min",
    badges: ["chef"],
    badgeLabel: "Artisan",
    description: "Traditional Nordic braided sweet brioche scented with freshly crushed cardamom pods, caramelized Demerara sugar, and pearl sugar pearls.",
    iconSvg: PRODUCT_ICONS.pastry,
    hasMilkOptions: false,
    hasSweetness: false,
    hasExtraShots: false
  },
  {
    id: "p12",
    name: "Prosciutto & Burrata Warm Focaccia",
    category: "savory",
    categoryLabel: "Gourmet Savory",
    price: 11.95,
    rating: 4.9,
    reviews: 204,
    calories: "510 kcal",
    prepTime: "7 min",
    badges: ["chef", "popular"],
    badgeLabel: "Must Try",
    description: "House-baked rosemary sea-salt focaccia layered with 24-month aged Parma prosciutto, creamy fresh burrata, arugula, and balsamic glaze.",
    iconSvg: PRODUCT_ICONS.sandwich,
    hasMilkOptions: false,
    hasSweetness: false,
    hasExtraShots: false
  }
];

// ============================================================
// PROMO CODES DEFINITIONS
// ============================================================
const PROMO_CODES = {
  AURA20: { discountPercent: 20, description: "20% Off Your Entire Order" },
  SAVE10: { discountPercent: 10, description: "10% Off Your Entire Order" },
  FREESHIP: { freeDelivery: true, description: "Free Delivery Included" }
};

// ============================================================
// APPLICATION STATE
// ============================================================
const state = {
  cart: [],
  activeCategory: "all",
  activeFilter: null,
  searchQuery: "",
  sortBy: "featured",
  fulfillmentMode: "delivery", // 'delivery' or 'pickup'
  appliedCoupon: null,
  soundEnabled: true,
  currentModalProduct: null,
  orders: []
};

// ============================================================
// WEB AUDIO SYNTHESIZER (Pleasant zero-dependency UI sounds)
// ============================================================
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playPop() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (e) {
      // Audio not supported or blocked
    }
  }

  playSuccessFanfare() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") this.ctx.resume();

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + (idx * 0.09);

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.14, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.36);
      });
    } catch (e) {}
  }
}

const sfx = new SoundEffects();

// ============================================================
// DOM ELEMENTS
// ============================================================
const dom = {
  themeToggle: document.getElementById("theme-toggle"),
  soundToggle: document.getElementById("sound-toggle"),
  searchInput: document.getElementById("search-input"),
  clearSearchBtn: document.getElementById("clear-search"),
  categoryTabs: document.getElementById("category-tabs"),
  productsGrid: document.getElementById("products-grid"),
  emptyState: document.getElementById("empty-state"),
  clearFiltersBtn: document.getElementById("clear-filters-btn"),
  resetFilterChip: document.getElementById("filter-reset-btn"),
  sortBySelect: document.getElementById("sort-by"),
  activeCategoryTitle: document.getElementById("active-category-title"),
  activeCategoryDesc: document.getElementById("active-category-desc"),

  // Cart Drawer
  cartBtn: document.getElementById("cart-btn"),
  cartOverlay: document.getElementById("cart-overlay"),
  cartDrawer: document.getElementById("cart-drawer"),
  cartCloseBtn: document.getElementById("cart-close-btn"),
  cartItemsList: document.getElementById("cart-items-list"),
  cartBadge: document.getElementById("cart-badge"),
  navCartTotal: document.getElementById("nav-cart-total"),
  drawerItemsCount: document.getElementById("drawer-items-count"),
  cartFooter: document.getElementById("cart-footer"),
  browseMenuBtn: document.getElementById("browse-menu-btn"),

  // Fulfillment & Bill
  tabDelivery: document.getElementById("tab-delivery"),
  tabPickup: document.getElementById("tab-pickup"),
  freeDeliveryText: document.getElementById("free-delivery-text"),
  freeDeliveryFill: document.getElementById("free-delivery-fill"),
  couponInput: document.getElementById("coupon-input"),
  applyCouponBtn: document.getElementById("apply-coupon-btn"),
  couponFeedback: document.getElementById("coupon-feedback"),
  billSubtotal: document.getElementById("bill-subtotal"),
  rowDiscount: document.getElementById("row-discount"),
  discountCodeName: document.getElementById("discount-code-name"),
  billDiscount: document.getElementById("bill-discount"),
  labelDeliveryFee: document.getElementById("label-delivery-fee"),
  billDelivery: document.getElementById("bill-delivery"),
  billTax: document.getElementById("bill-tax"),
  billTotal: document.getElementById("bill-total"),
  openCheckoutBtn: document.getElementById("open-checkout-btn"),

  // Customization Dialog
  customizeDialog: document.getElementById("customize-dialog"),
  dialogCloseBtn: document.getElementById("dialog-close-btn"),
  dialogItemIconWrap: document.getElementById("dialog-item-icon-wrap"),
  dialogItemCategory: document.getElementById("dialog-item-category"),
  dialogItemTitle: document.getElementById("dialog-item-title"),
  dialogItemDesc: document.getElementById("dialog-item-desc"),
  dialogItemRating: document.getElementById("dialog-item-rating"),
  dialogItemCal: document.getElementById("dialog-item-cal"),
  modalQtyMinus: document.getElementById("modal-qty-minus"),
  modalQtyPlus: document.getElementById("modal-qty-plus"),
  modalQtyVal: document.getElementById("modal-qty-val"),
  modalTotalPrice: document.getElementById("modal-total-price"),
  modalAddToCartBtn: document.getElementById("modal-add-to-cart-btn"),
  itemNotes: document.getElementById("item-notes"),
  sizeOptionsGroup: document.getElementById("size-options-group"),
  milkOptionsGroup: document.getElementById("milk-options-group"),
  sweetnessOptionsGroup: document.getElementById("sweetness-options-group"),
  addonsOptionsGroup: document.getElementById("addons-options-group"),

  // Checkout Dialog
  checkoutDialog: document.getElementById("checkout-dialog"),
  checkoutCloseBtn: document.getElementById("checkout-close-btn"),
  checkoutForm: document.getElementById("checkout-form"),
  checkoutTotal: document.getElementById("checkout-total-price"),
  deliveryFields: document.getElementById("delivery-fields"),
  pickupLocationInfo: document.getElementById("pickup-location-info"),
  checkoutFulfillmentHeading: document.getElementById("checkout-fulfillment-heading"),
  cardFieldsBox: document.getElementById("card-fields-box"),
  submitOrderBtn: document.getElementById("submit-order-btn"),
  orderSpinner: document.getElementById("order-spinner"),

  // Tracker Dialog
  trackerDialog: document.getElementById("order-tracker-dialog"),
  trackerCloseBtn: document.getElementById("tracker-close-btn"),
  trackOrderId: document.getElementById("track-order-id"),
  trackProgressFill: document.getElementById("track-progress-fill"),
  trackingSteps: document.getElementById("tracking-steps"),
  liveStatusTitle: document.getElementById("live-status-title"),
  liveStatusDesc: document.getElementById("live-status-desc"),
  trackItemsList: document.getElementById("track-items-list"),
  trackPaymentMethod: document.getElementById("track-payment-method"),
  trackCustomerName: document.getElementById("track-customer-name"),
  trackDestination: document.getElementById("track-destination"),
  trackTotalPaid: document.getElementById("track-total-paid"),
  trackNewOrderBtn: document.getElementById("track-new-order-btn"),
  printReceiptBtn: document.getElementById("print-receipt-btn"),

  // Orders Dialog
  ordersBtn: document.getElementById("orders-btn"),
  pastOrdersDialog: document.getElementById("past-orders-dialog"),
  pastOrdersCloseBtn: document.getElementById("past-orders-close-btn"),
  pastOrdersList: document.getElementById("past-orders-list"),
  orderHistoryBadge: document.getElementById("order-history-badge"),

  // Toast
  toastContainer: document.getElementById("toast-container")
};

// ============================================================
// INITIALIZATION
// ============================================================
function initApp() {
  loadSavedPreferences();
  renderProducts();
  updateCategoryCounts();
  setupEventListeners();
  renderCart();
  updateOrderHistoryBadge();
}

// Load saved data from localStorage
function loadSavedPreferences() {
  // Theme
  const savedTheme = localStorage.getItem("aura_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcons(savedTheme);

  // Sound
  const savedSound = localStorage.getItem("aura_sound");
  state.soundEnabled = savedSound !== null ? savedSound === "true" : true;
  updateSoundIcon();

  // Cart
  try {
    const savedCart = localStorage.getItem("aura_cart");
    if (savedCart) state.cart = JSON.parse(savedCart);
  } catch (e) {
    state.cart = [];
  }

  // Orders
  try {
    const savedOrders = localStorage.getItem("aura_orders");
    if (savedOrders) state.orders = JSON.parse(savedOrders);
  } catch (e) {
    state.orders = [];
  }
}

function updateThemeIcons(theme) {
  const moon = dom.themeToggle.querySelector(".icon-moon");
  const sun = dom.themeToggle.querySelector(".icon-sun");
  if (theme === "dark") {
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
  } else {
    moon.classList.remove("hidden");
    sun.classList.add("hidden");
  }
}

function updateSoundIcon() {
  dom.soundToggle.style.opacity = state.soundEnabled ? "1" : "0.4";
  dom.soundToggle.title = state.soundEnabled ? "Sound FX: ON" : "Sound FX: OFF";
}

function updateCategoryCounts() {
  const counts = {
    all: PRODUCTS.length,
    coffee: PRODUCTS.filter(p => p.category === "coffee").length,
    bakery: PRODUCTS.filter(p => p.category === "bakery").length,
    savory: PRODUCTS.filter(p => p.category === "savory").length,
    refreshers: PRODUCTS.filter(p => p.category === "refreshers").length
  };

  document.getElementById("count-all").textContent = counts.all;
  document.getElementById("count-coffee").textContent = counts.coffee;
  document.getElementById("count-bakery").textContent = counts.bakery;
  document.getElementById("count-savory").textContent = counts.savory;
  document.getElementById("count-refreshers").textContent = counts.refreshers;
}

// ============================================================
// FILTERING & PRODUCT RENDERING
// ============================================================
function getFilteredProducts() {
  return PRODUCTS.filter(product => {
    // Category filter
    if (state.activeCategory !== "all" && product.category !== state.activeCategory) {
      return false;
    }

    // Quick filter chip
    if (state.activeFilter) {
      if (state.activeFilter === "popular" && !product.badges.includes("popular")) return false;
      if (state.activeFilter === "vegan" && !product.badges.includes("vegan")) return false;
      if (state.activeFilter === "chef" && !product.badges.includes("chef")) return false;
    }

    // Search query
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchCat = product.categoryLabel.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchCat) return false;
    }

    return true;
  }).sort((a, b) => {
    if (state.sortBy === "price-low") return a.price - b.price;
    if (state.sortBy === "price-high") return b.price - a.price;
    if (state.sortBy === "rating") return b.rating - a.rating;
    return 0; // default featured
  });
}

function renderProducts() {
  const products = getFilteredProducts();

  if (products.length === 0) {
    dom.productsGrid.innerHTML = "";
    dom.emptyState.classList.remove("hidden");
    return;
  }

  dom.emptyState.classList.add("hidden");

  dom.productsGrid.innerHTML = products.map(product => {
    const badgeHtml = product.badges.map(b => {
      let label = b.toUpperCase();
      if (b === "popular") label = "POPULAR";
      if (b === "chef") label = "CHEF PICK";
      if (b === "vegan") label = "VEGAN";
      if (b === "new") label = "NEW";
      return `<span class="badge-tag ${b}">${label}</span>`;
    }).join("");

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="card-visual">
          <div class="badge-tag-wrap">${badgeHtml}</div>
          <span class="prep-time-badge">⏱ ${product.prepTime}</span>
          ${product.iconSvg}
        </div>
        <div class="card-details">
          <span class="card-category">${product.categoryLabel}</span>
          <h3 class="card-title">${product.name}</h3>
          <p class="card-desc">${product.description}</p>
          <div class="card-meta-row">
            <span class="rating-star">★ ${product.rating.toFixed(1)} <small>(${product.reviews})</small></span>
            <span>${product.calories}</span>
          </div>
          <div class="card-footer">
            <span class="card-price">$${product.price.toFixed(2)}</span>
            <button class="btn-card-add" data-action="customize" data-id="${product.id}" aria-label="Add ${product.name} to order">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>Customize & Add</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ============================================================
// CUSTOMIZATION MODAL LOGIC
// ============================================================
let modalQty = 1;

function openCustomizationDialog(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.currentModalProduct = product;
  modalQty = 1;
  dom.modalQtyVal.textContent = "1";
  dom.itemNotes.value = "";

  // Set visual & header
  dom.dialogItemIconWrap.innerHTML = product.iconSvg;
  dom.dialogItemCategory.textContent = product.categoryLabel;
  dom.dialogItemTitle.textContent = product.name;
  dom.dialogItemDesc.textContent = product.description;
  dom.dialogItemRating.textContent = `★ ${product.rating} (${product.reviews} reviews)`;
  dom.dialogItemCal.textContent = product.calories;

  // Toggle option groups relevant to product
  dom.milkOptionsGroup.style.display = product.hasMilkOptions ? "flex" : "none";
  dom.sweetnessOptionsGroup.style.display = product.hasSweetness ? "flex" : "none";
  dom.addonsOptionsGroup.style.display = (product.category === "coffee" || product.category === "refreshers") ? "flex" : "none";

  // Reset size to Regular
  const firstSizeRadio = dom.sizeOptionsGroup.querySelector('input[name="item-size"][value="Regular"]');
  if (firstSizeRadio) firstSizeRadio.checked = true;

  // Reset addons checkboxes
  const checkboxes = dom.addonsOptionsGroup.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(cb => cb.checked = false);

  calculateModalPrice();
  dom.customizeDialog.showModal();
}

function calculateModalPrice() {
  if (!state.currentModalProduct) return;

  let unitPrice = state.currentModalProduct.price;

  // Size add
  const selectedSize = dom.sizeOptionsGroup.querySelector('input[name="item-size"]:checked');
  if (selectedSize) {
    unitPrice += parseFloat(selectedSize.dataset.priceAdd || 0);
  }

  // Milk add
  if (state.currentModalProduct.hasMilkOptions) {
    const selectedMilk = dom.milkOptionsGroup.querySelector('input[name="item-milk"]:checked');
    if (selectedMilk) {
      unitPrice += parseFloat(selectedMilk.dataset.priceAdd || 0);
    }
  }

  // Addons add
  const checkedAddons = dom.addonsOptionsGroup.querySelectorAll('input[name="extra-addon"]:checked');
  checkedAddons.forEach(addon => {
    unitPrice += parseFloat(addon.dataset.price || 0);
  });

  const total = unitPrice * modalQty;
  dom.modalTotalPrice.textContent = `$${total.toFixed(2)}`;
}

function addConfiguredItemToCart() {
  if (!state.currentModalProduct) return;

  const product = state.currentModalProduct;
  const sizeInput = dom.sizeOptionsGroup.querySelector('input[name="item-size"]:checked');
  const size = sizeInput ? sizeInput.value : "Regular";
  const sizePriceAdd = sizeInput ? parseFloat(sizeInput.dataset.priceAdd || 0) : 0;

  let milk = null;
  let milkPriceAdd = 0;
  if (product.hasMilkOptions) {
    const milkInput = dom.milkOptionsGroup.querySelector('input[name="item-milk"]:checked');
    if (milkInput) {
      milk = milkInput.value;
      milkPriceAdd = parseFloat(milkInput.dataset.priceAdd || 0);
    }
  }

  let sweetness = null;
  if (product.hasSweetness) {
    const sweetInput = dom.sweetnessOptionsGroup.querySelector('input[name="item-sweetness"]:checked');
    if (sweetInput) sweetness = sweetInput.value;
  }

  const selectedAddons = [];
  let addonsPriceAdd = 0;
  const checkedBoxes = dom.addonsOptionsGroup.querySelectorAll('input[name="extra-addon"]:checked');
  checkedBoxes.forEach(cb => {
    selectedAddons.push(cb.value);
    addonsPriceAdd += parseFloat(cb.dataset.price || 0);
  });

  const notes = dom.itemNotes.value.trim();
  const unitPrice = product.price + sizePriceAdd + milkPriceAdd + addonsPriceAdd;

  // Build unique key to merge identical orders
  const itemKey = `${product.id}_${size}_${milk || "nomilk"}_${sweetness || "nosweet"}_${selectedAddons.sort().join("-")}_${notes}`;

  const existingIndex = state.cart.findIndex(i => i.itemKey === itemKey);
  if (existingIndex > -1) {
    state.cart[existingIndex].qty += modalQty;
  } else {
    state.cart.push({
      itemKey,
      productId: product.id,
      name: product.name,
      size,
      milk,
      sweetness,
      addons: selectedAddons,
      notes,
      unitPrice,
      qty: modalQty,
      iconSvg: product.iconSvg
    });
  }

  saveCart();
  renderCart();
  dom.customizeDialog.close();
  sfx.playPop();
  showToast(`Added ${modalQty}x ${product.name} to cart!`);

  // Open cart drawer automatically for high conversion experience
  openCartDrawer();
}

// ============================================================
// CART MANAGEMENT & CALCULATIONS
// ============================================================
function saveCart() {
  localStorage.setItem("aura_cart", JSON.stringify(state.cart));
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);

  // Delivery fee logic ($2.99 or free if pickup or if >= $25 or promo FREESHIP)
  let deliveryFee = 0;
  if (state.fulfillmentMode === "delivery" && subtotal > 0) {
    if (subtotal >= 25 || (state.appliedCoupon && state.appliedCoupon.freeDelivery)) {
      deliveryFee = 0;
    } else {
      deliveryFee = 2.99;
    }
  }

  // Discount
  let discount = 0;
  if (state.appliedCoupon && state.appliedCoupon.discountPercent) {
    discount = (subtotal * state.appliedCoupon.discountPercent) / 100;
  }

  const taxableAmount = Math.max(0, subtotal - discount);
  const tax = taxableAmount * 0.08; // 8% tax
  const total = taxableAmount + tax + deliveryFee;

  return { subtotal, deliveryFee, discount, tax, total };
}

function renderCart() {
  const totalItems = state.cart.reduce((sum, i) => sum + i.qty, 0);
  dom.cartBadge.textContent = totalItems;
  dom.drawerItemsCount.textContent = `(${totalItems} ${totalItems === 1 ? "item" : "items"})`;

  const { subtotal, deliveryFee, discount, tax, total } = calculateCartTotals();
  dom.navCartTotal.textContent = `$${total.toFixed(2)}`;

  if (state.cart.length === 0) {
    dom.cartItemsList.innerHTML = `
      <div class="cart-empty-state" id="cart-empty-message">
        <div class="cart-empty-icon">☕</div>
        <h4>Your cart is empty</h4>
        <p>Explore our menu and add something delicious to get started!</p>
        <button class="btn btn-secondary" id="empty-browse-btn">Browse Menu</button>
      </div>
    `;
    const btn = document.getElementById("empty-browse-btn");
    if (btn) btn.addEventListener("click", closeCartDrawer);
    dom.cartFooter.classList.add("hidden");
    return;
  }

  dom.cartFooter.classList.remove("hidden");

  // Render items
  dom.cartItemsList.innerHTML = state.cart.map((item, index) => {
    const details = [];
    if (item.size) details.push(`Size: ${item.size}`);
    if (item.milk) details.push(item.milk);
    if (item.sweetness) details.push(item.sweetness);
    if (item.addons && item.addons.length > 0) details.push(item.addons.join(", "));
    if (item.notes) details.push(`"${item.notes}"`);

    const detailsStr = details.join(" • ");
    const lineTotal = (item.unitPrice * item.qty).toFixed(2);

    return `
      <div class="cart-item-card" data-index="${index}">
        <div class="cart-item-icon">
          ${item.iconSvg}
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-subtext">${detailsStr}</div>
          <div class="cart-item-bottom">
            <span class="cart-item-price">$${lineTotal}</span>
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn" data-action="decrease" data-index="${index}" aria-label="Decrease quantity">−</button>
              <span class="cart-qty-num">${item.qty}</span>
              <button class="cart-qty-btn" data-action="increase" data-index="${index}" aria-label="Increase quantity">+</button>
            </div>
          </div>
        </div>
        <button class="cart-item-delete" data-action="delete" data-index="${index}" title="Remove item" aria-label="Remove item">&times;</button>
      </div>
    `;
  }).join("");

  // Free delivery progress bar
  if (state.fulfillmentMode === "delivery") {
    if (subtotal >= 25 || (state.appliedCoupon && state.appliedCoupon.freeDelivery)) {
      dom.freeDeliveryText.innerHTML = `🎉 <strong>Free Delivery unlocked!</strong>`;
      dom.freeDeliveryFill.style.width = "100%";
      dom.freeDeliveryFill.style.background = "var(--accent)";
    } else {
      const remaining = (25 - subtotal).toFixed(2);
      const pct = Math.min(100, Math.round((subtotal / 25) * 100));
      dom.freeDeliveryText.innerHTML = `Add <strong>$${remaining}</strong> more to unlock <strong>Free Delivery!</strong>`;
      dom.freeDeliveryFill.style.width = `${pct}%`;
      dom.freeDeliveryFill.style.background = "var(--primary)";
    }
  } else {
    dom.freeDeliveryText.innerHTML = `🏬 Pickup selected — <strong>No delivery fee!</strong>`;
    dom.freeDeliveryFill.style.width = "100%";
    dom.freeDeliveryFill.style.background = "var(--accent)";
  }

  // Update Bill summary
  dom.billSubtotal.textContent = `$${subtotal.toFixed(2)}`;

  if (discount > 0) {
    dom.rowDiscount.classList.remove("hidden");
    dom.discountCodeName.textContent = state.appliedCoupon.code;
    dom.billDiscount.textContent = `-$${discount.toFixed(2)}`;
  } else {
    dom.rowDiscount.classList.add("hidden");
  }

  if (state.fulfillmentMode === "pickup") {
    dom.labelDeliveryFee.textContent = "Store Pickup";
    dom.billDelivery.textContent = "FREE";
  } else {
    dom.labelDeliveryFee.textContent = "Delivery Fee";
    dom.billDelivery.textContent = deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`;
  }

  dom.billTax.textContent = `$${tax.toFixed(2)}`;
  dom.billTotal.textContent = `$${total.toFixed(2)}`;
}

function openCartDrawer() {
  dom.cartOverlay.classList.remove("hidden");
  dom.cartDrawer.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  dom.cartOverlay.classList.add("hidden");
  dom.cartDrawer.classList.remove("open");
  document.body.style.overflow = "";
}

// ============================================================
// CHECKOUT & ORDER SUBMISSION
// ============================================================
function openCheckoutDialog() {
  if (state.cart.length === 0) return;

  const { total } = calculateCartTotals();
  dom.checkoutTotal.textContent = `$${total.toFixed(2)}`;

  if (state.fulfillmentMode === "pickup") {
    dom.deliveryFields.classList.add("hidden");
    dom.pickupLocationInfo.classList.remove("hidden");
    dom.checkoutFulfillmentHeading.textContent = "Pickup Details";
  } else {
    dom.deliveryFields.classList.remove("hidden");
    dom.pickupLocationInfo.classList.add("hidden");
    dom.checkoutFulfillmentHeading.textContent = "Delivery Address";
  }

  closeCartDrawer();
  dom.checkoutDialog.showModal();
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById("cust-name");
  const phoneInput = document.getElementById("cust-phone");
  const emailInput = document.getElementById("cust-email");
  const addressInput = document.getElementById("cust-address");

  let isValid = true;

  // Validate Name
  if (!nameInput.value.trim()) {
    document.getElementById("name-error").classList.add("visible");
    nameInput.classList.add("has-error");
    isValid = false;
  } else {
    document.getElementById("name-error").classList.remove("visible");
    nameInput.classList.remove("has-error");
  }

  // Validate Phone
  if (!phoneInput.value.trim() || phoneInput.value.trim().length < 7) {
    document.getElementById("phone-error").classList.add("visible");
    phoneInput.classList.add("has-error");
    isValid = false;
  } else {
    document.getElementById("phone-error").classList.remove("visible");
    phoneInput.classList.remove("has-error");
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    document.getElementById("email-error").classList.add("visible");
    emailInput.classList.add("has-error");
    isValid = false;
  } else {
    document.getElementById("email-error").classList.remove("visible");
    emailInput.classList.remove("has-error");
  }

  // Validate Address if delivery
  if (state.fulfillmentMode === "delivery" && !addressInput.value.trim()) {
    document.getElementById("address-error").classList.add("visible");
    addressInput.classList.add("has-error");
    isValid = false;
  } else {
    document.getElementById("address-error").classList.remove("visible");
    addressInput.classList.remove("has-error");
  }

  if (!isValid) return;

  // Simulating payment processing
  const submitText = dom.submitOrderBtn.querySelector(".submit-text");
  submitText.textContent = "Processing Order...";
  dom.orderSpinner.classList.remove("hidden");
  dom.submitOrderBtn.disabled = true;

  setTimeout(() => {
    // Generate Order
    const orderId = `#ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    const payMethodSelected = document.querySelector('input[name="payment-method"]:checked').value;
    let payLabel = "Credit / Debit Card";
    if (payMethodSelected === "applepay") payLabel = "Apple / Google Pay";
    if (payMethodSelected === "cash") payLabel = state.fulfillmentMode === "delivery" ? "Cash on Delivery" : "Pay at Counter";

    const { total } = calculateCartTotals();

    const newOrder = {
      orderId,
      date: new Date().toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
      customerName: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      email: emailInput.value.trim(),
      destination: state.fulfillmentMode === "delivery" ? addressInput.value.trim() : "Flagship Store (Pickup)",
      fulfillmentMode: state.fulfillmentMode,
      paymentMethod: payLabel,
      items: JSON.parse(JSON.stringify(state.cart)),
      total: total.toFixed(2)
    };

    // Save order
    state.orders.unshift(newOrder);
    localStorage.setItem("aura_orders", JSON.stringify(state.orders));
    updateOrderHistoryBadge();

    // Reset button
    submitText.textContent = "Place Order Now";
    dom.orderSpinner.classList.add("hidden");
    dom.submitOrderBtn.disabled = false;

    // Reset cart
    state.cart = [];
    saveCart();
    renderCart();

    // Close checkout dialog and launch live tracker
    dom.checkoutDialog.close();
    launchOrderTracker(newOrder);
    sfx.playSuccessFanfare();
  }, 1200);
}

// ============================================================
// SIMULATED LIVE ORDER TRACKER
// ============================================================
let trackerInterval = null;

function launchOrderTracker(order) {
  dom.trackOrderId.textContent = order.orderId;
  dom.trackCustomerName.textContent = order.customerName;
  dom.trackDestination.textContent = order.destination;
  dom.trackPaymentMethod.textContent = order.paymentMethod;
  dom.trackTotalPaid.textContent = `$${order.total}`;

  dom.trackItemsList.innerHTML = order.items.map(item => `
    <div class="receipt-item-line">
      <span>${item.qty}x ${item.name} (${item.size})</span>
      <strong>$${(item.unitPrice * item.qty).toFixed(2)}</strong>
    </div>
  `).join("");

  // Setup Step 3 label based on fulfillment
  document.getElementById("step-3-label").textContent = order.fulfillmentMode === "delivery" ? "On the way" : "Ready for Pickup";

  // Reset steps
  resetTrackingSteps();
  dom.trackerDialog.showModal();

  // Run simulation of order lifecycle
  if (trackerInterval) clearInterval(trackerInterval);

  let currentStage = 1;
  updateTrackerUI(1, order.fulfillmentMode);

  trackerInterval = setInterval(() => {
    currentStage++;
    if (currentStage > 4) {
      clearInterval(trackerInterval);
      return;
    }
    updateTrackerUI(currentStage, order.fulfillmentMode);
    sfx.playPop();
  }, 4500);
}

function resetTrackingSteps() {
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById(`step-${i}`);
    el.classList.remove("active", "current");
  }
}

function updateTrackerUI(stage, fulfillmentMode) {
  const steps = [
    document.getElementById("step-1"),
    document.getElementById("step-2"),
    document.getElementById("step-3"),
    document.getElementById("step-4")
  ];

  steps.forEach((step, idx) => {
    if (idx + 1 < stage) {
      step.classList.add("active");
      step.classList.remove("current");
    } else if (idx + 1 === stage) {
      step.classList.add("active", "current");
    } else {
      step.classList.remove("active", "current");
    }
  });

  const progressPercentages = [25, 50, 75, 100];
  dom.trackProgressFill.style.width = `${progressPercentages[stage - 1]}%`;

  if (stage === 1) {
    dom.liveStatusTitle.textContent = "Order Confirmed & Sent to Barista";
    dom.liveStatusDesc.textContent = "Our kitchen has received your ticket and is preparing fresh ingredients.";
  } else if (stage === 2) {
    dom.liveStatusTitle.textContent = "Brewing Coffee & Baking Pastries";
    dom.liveStatusDesc.textContent = "Master baristas are pulling espresso shots and warming artisan treats.";
  } else if (stage === 3) {
    if (fulfillmentMode === "delivery") {
      dom.liveStatusTitle.textContent = "Courier is on the way to your door!";
      dom.liveStatusDesc.textContent = "Your order is securely packed in thermal carriers for maximum warmth.";
    } else {
      dom.liveStatusTitle.textContent = "Ready for Pickup at the Counter!";
      dom.liveStatusDesc.textContent = "Head to 108 Grand Boulevard. Simply give your order number at the pickup station.";
    }
  } else if (stage === 4) {
    dom.liveStatusTitle.textContent = "Order Complete — Savor & Enjoy!";
    dom.liveStatusDesc.textContent = "Thank you for ordering with Aura Cafe! We hope you love every sip and bite.";
  }
}

// ============================================================
// PAST ORDERS & RE-ORDERING
// ============================================================
function updateOrderHistoryBadge() {
  if (state.orders.length > 0) {
    dom.orderHistoryBadge.textContent = state.orders.length;
    dom.orderHistoryBadge.classList.remove("hidden");
  } else {
    dom.orderHistoryBadge.classList.add("hidden");
  }
}

function openPastOrdersDialog() {
  if (state.orders.length === 0) {
    dom.pastOrdersList.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <h3>No past orders yet</h3>
        <p>Your completed orders will appear here for fast re-ordering.</p>
      </div>
    `;
  } else {
    dom.pastOrdersList.innerHTML = state.orders.map((ord, idx) => {
      const itemsSummary = ord.items.map(i => `${i.qty}x ${i.name}`).join(", ");
      return `
        <div class="past-order-card">
          <div class="past-order-top">
            <span class="past-order-id">${ord.orderId}</span>
            <span class="past-order-date">${ord.date}</span>
          </div>
          <p class="past-order-items">${itemsSummary}</p>
          <div class="past-order-bottom">
            <span class="past-order-total">Total: $${ord.total}</span>
            <button class="btn btn-primary btn-reorder" data-reorder-idx="${idx}">Re-order All</button>
          </div>
        </div>
      `;
    }).join("");
  }

  dom.pastOrdersDialog.showModal();
}

function reorderPastOrder(index) {
  const ord = state.orders[index];
  if (!ord) return;

  ord.items.forEach(pastItem => {
    state.cart.push(JSON.parse(JSON.stringify(pastItem)));
  });

  saveCart();
  renderCart();
  dom.pastOrdersDialog.close();
  openCartDrawer();
  sfx.playPop();
  showToast("Past items re-added to your cart!");
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast toast-success";
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  dom.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.25s ease-out";
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

// ============================================================
// EVENT LISTENERS
// ============================================================
function setupEventListeners() {
  // Theme Toggle
  dom.themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("aura_theme", next);
    updateThemeIcons(next);
  });

  // Sound FX Toggle
  dom.soundToggle.addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem("aura_sound", state.soundEnabled);
    updateSoundIcon();
    if (state.soundEnabled) sfx.playPop();
  });

  // Search Input
  dom.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery.trim() !== "") {
      dom.clearSearchBtn.classList.remove("hidden");
    } else {
      dom.clearSearchBtn.classList.add("hidden");
    }
    renderProducts();
  });

  dom.clearSearchBtn.addEventListener("click", () => {
    dom.searchInput.value = "";
    state.searchQuery = "";
    dom.clearSearchBtn.classList.add("hidden");
    renderProducts();
  });

  // Sort Dropdown
  dom.sortBySelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // Category Tabs
  dom.categoryTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".cat-pill");
    if (!tab) return;

    dom.categoryTabs.querySelectorAll(".cat-pill").forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    state.activeCategory = tab.dataset.category;

    // Update section title & description
    const titles = {
      all: { title: "Featured Menu", desc: "Freshly prepared with master craftsmanship and premier ingredients." },
      coffee: { title: "Signature Coffee", desc: "Single-origin espresso, slow cold brews, and velvety milk lattes." },
      bakery: { title: "Bakery & Pastries", desc: "French butter croissants, warm fruit danishes, and molten chocolate bakes." },
      savory: { title: "Gourmet Savory", desc: "Artisan sourdough toasts, stuffed bagels, and toasted panini." },
      refreshers: { title: "Teas & Refreshers", desc: "Ceremonial matcha, iced floral sparklers, and botanicals." }
    };

    dom.activeCategoryTitle.textContent = titles[state.activeCategory].title;
    dom.activeCategoryDesc.textContent = titles[state.activeCategory].desc;

    renderProducts();
  });

  // Quick Filter Chips
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const filter = chip.dataset.filter;
      if (filter === "reset") {
        state.activeFilter = null;
        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        dom.resetFilterChip.classList.remove("visible");
      } else {
        if (state.activeFilter === filter) {
          state.activeFilter = null;
          chip.classList.remove("active");
          dom.resetFilterChip.classList.remove("visible");
        } else {
          document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
          chip.classList.add("active");
          state.activeFilter = filter;
          dom.resetFilterChip.classList.add("visible");
        }
      }
      renderProducts();
    });
  });

  // Clear filters from empty state
  dom.clearFiltersBtn.addEventListener("click", () => {
    state.activeCategory = "all";
    state.activeFilter = null;
    state.searchQuery = "";
    dom.searchInput.value = "";
    dom.clearSearchBtn.classList.add("hidden");
    dom.resetFilterChip.classList.remove("visible");

    dom.categoryTabs.querySelectorAll(".cat-pill").forEach(t => {
      t.classList.toggle("active", t.dataset.category === "all");
    });
    document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));

    renderProducts();
  });

  // Product Grid Action Delegation (Customize button)
  dom.productsGrid.addEventListener("click", (e) => {
    const btn = e.target.closest('button[data-action="customize"]');
    if (btn) {
      const id = btn.dataset.id;
      openCustomizationDialog(id);
    }
  });

  // Customization Dialog controls
  dom.dialogCloseBtn.addEventListener("click", () => dom.customizeDialog.close());

  dom.modalQtyMinus.addEventListener("click", () => {
    if (modalQty > 1) {
      modalQty--;
      dom.modalQtyVal.textContent = modalQty;
      calculateModalPrice();
    }
  });

  dom.modalQtyPlus.addEventListener("click", () => {
    modalQty++;
    dom.modalQtyVal.textContent = modalQty;
    calculateModalPrice();
  });

  dom.customizeDialog.addEventListener("change", (e) => {
    if (e.target.matches('input[name="item-size"], input[name="item-milk"], input[name="extra-addon"]')) {
      calculateModalPrice();
    }
  });

  dom.modalAddToCartBtn.addEventListener("click", addConfiguredItemToCart);

  // Cart Drawer open / close
  dom.cartBtn.addEventListener("click", openCartDrawer);
  dom.cartCloseBtn.addEventListener("click", closeCartDrawer);
  dom.cartOverlay.addEventListener("click", closeCartDrawer);
  if (dom.browseMenuBtn) dom.browseMenuBtn.addEventListener("click", closeCartDrawer);

  // Fulfillment toggle (Delivery vs Pickup)
  dom.tabDelivery.addEventListener("click", () => {
    state.fulfillmentMode = "delivery";
    dom.tabDelivery.classList.add("active");
    dom.tabPickup.classList.remove("active");
    renderCart();
  });

  dom.tabPickup.addEventListener("click", () => {
    state.fulfillmentMode = "pickup";
    dom.tabPickup.classList.add("active");
    dom.tabDelivery.classList.remove("active");
    renderCart();
  });

  // Cart Items delegation (qty + / -, delete)
  dom.cartItemsList.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const action = btn.dataset.action;
    const index = parseInt(btn.dataset.index, 10);
    if (isNaN(index) || !state.cart[index]) return;

    if (action === "increase") {
      state.cart[index].qty++;
      saveCart();
      renderCart();
      sfx.playPop();
    } else if (action === "decrease") {
      if (state.cart[index].qty > 1) {
        state.cart[index].qty--;
      } else {
        state.cart.splice(index, 1);
      }
      saveCart();
      renderCart();
      sfx.playPop();
    } else if (action === "delete") {
      state.cart.splice(index, 1);
      saveCart();
      renderCart();
      sfx.playPop();
    }
  });

  // Promo Code Apply
  dom.applyCouponBtn.addEventListener("click", () => {
    const code = dom.couponInput.value.trim().toUpperCase();
    if (!code) return;

    if (PROMO_CODES[code]) {
      state.appliedCoupon = { code, ...PROMO_CODES[code] };
      dom.couponFeedback.textContent = `Promo code applied: ${PROMO_CODES[code].description}!`;
      dom.couponFeedback.className = "coupon-feedback success";
      dom.couponFeedback.classList.remove("hidden");
      renderCart();
      sfx.playPop();
    } else {
      dom.couponFeedback.textContent = "Invalid code. Try code AURA20 for 20% off!";
      dom.couponFeedback.className = "coupon-feedback error";
      dom.couponFeedback.classList.remove("hidden");
    }
  });

  // Checkout modal
  dom.openCheckoutBtn.addEventListener("click", openCheckoutDialog);
  dom.checkoutCloseBtn.addEventListener("click", () => dom.checkoutDialog.close());
  dom.checkoutForm.addEventListener("submit", handleCheckoutSubmit);

  // Card input formatting helpers
  const cardInput = document.getElementById("card-num");
  if (cardInput) {
    cardInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "");
      val = val.substring(0, 16);
      const parts = [];
      for (let i = 0; i < val.length; i += 4) {
        parts.push(val.substring(i, i + 4));
      }
      e.target.value = parts.join(" ");
    });
  }

  const expInput = document.getElementById("card-exp");
  if (expInput) {
    expInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "").substring(0, 4);
      if (val.length >= 3) {
        e.target.value = `${val.substring(0, 2)}/${val.substring(2, 4)}`;
      } else {
        e.target.value = val;
      }
    });
  }

  // Payment method radio change
  document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
      if (e.target.value === "card") {
        dom.cardFieldsBox.classList.remove("hidden");
      } else {
        dom.cardFieldsBox.classList.add("hidden");
      }
    });
  });

  // Live Tracker Dialog controls
  dom.trackerCloseBtn.addEventListener("click", () => {
    if (trackerInterval) clearInterval(trackerInterval);
    dom.trackerDialog.close();
  });

  dom.trackNewOrderBtn.addEventListener("click", () => {
    if (trackerInterval) clearInterval(trackerInterval);
    dom.trackerDialog.close();
  });

  dom.printReceiptBtn.addEventListener("click", () => {
    window.print();
  });

  // Past Orders Dialog
  dom.ordersBtn.addEventListener("click", openPastOrdersDialog);
  dom.pastOrdersCloseBtn.addEventListener("click", () => dom.pastOrdersDialog.close());
  dom.pastOrdersList.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-reorder-idx]");
    if (btn) {
      const idx = parseInt(btn.dataset.reorderIdx, 10);
      reorderPastOrder(idx);
    }
  });
}

// Start application
document.addEventListener("DOMContentLoaded", initApp);
