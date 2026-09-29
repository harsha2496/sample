# ☕ Aura Cafe & Roastery — Artisanal Online Ordering Website

An interactive, responsive, feature-rich web application built with modern web standards (Semantic HTML5, CSS Custom Properties, and Vanilla ES6+ JavaScript). It requires **zero external build tools or runtime dependencies** and works instantly both offline and online.

---

## 🌟 Key Features

1. **Comprehensive Menu & Categories**:
   - Signature Coffees, Fresh Bakery & Pastries, Gourmet Savory Bites, and Artisanal Teas/Coolers.
   - Live category tabs with item count indicators.
   - Quick filters for **Most Popular**, **Vegan**, and **Chef's Choice**.
   - Instant search with real-time filtering and query clearing.
   - Sort by price (low/high) and customer rating.

2. **Interactive Item Customization (`<dialog>`)**:
   - Size selection (Regular, Large, Venti) with live price updates.
   - Choice of Milk (Oat Milk, Whole Milk, Almond Milk).
   - Sweetness adjustments (100% Standard, 50% Less Sweet, Unsweetened).
   - Add-on extras (Extra Espresso Shot, Madagascar Vanilla Syrup, Salted Caramel Cold Foam).
   - Special kitchen notes / dietary requests.
   - Quantity stepper.

3. **Slide-Out Cart Drawer**:
   - Slide-over drawer with item breakdown and selected options.
   - Item quantity controls (+ / -) and item removal.
   - Delivery vs. Store Pickup toggle (adjusts delivery fees in real-time).
   - Dynamic **Free Delivery Progress Bar** (unlocked on orders over $25.00).
   - Interactive coupon/promo code engine:
     - `AURA20`: 20% discount on entire order.
     - `SAVE10`: 10% discount on order.
     - `FREESHIP`: Unlocks free delivery immediately.
   - Real-time tax and total bill calculations.

4. **Streamlined Multi-Step Checkout Flow**:
   - Contact Information (Name, Phone, Email) with client-side validation.
   - Delivery Address vs. Store Pickup instructions.
   - Payment method selection:
     - Credit / Debit Card (with card number formatting)
     - Apple / Google Pay
     - Cash on Delivery / Pay at Counter
   - Loading state with animated spinner upon order submission.

5. **Simulated Live Order Tracker**:
   - Generates a unique tracking reference (e.g., `#ORD-8492`).
   - 4-Stage animated timeline:
     1. *Order Confirmed*
     2. *Brewing Coffee & Baking Pastries*
     3. *Courier En Route / Ready at Counter*
     4. *Order Delivered & Enjoy!*
   - Live status banner with pulsating indicator.
   - Order receipt breakdown with print receipt option (`window.print()`).

6. **Order History & One-Click Re-ordering**:
   - Past orders are securely stored in the browser's `localStorage`.
   - "Orders" button in the navigation bar displays past receipts.
   - One-click **"Re-order All"** feature that re-populates the cart.

7. **Aesthetic & UX Polish**:
   - **Dark & Light Mode** toggle with persistent preference.
   - **Zero-Dependency Web Audio Synthesizer**: Subtle synthesized chimes on adding items to cart and triumphant fanfare on order completion (with mute toggle in the navigation bar).
   - Responsive design tailored for mobile phones, tablets, and desktop displays.
   - Custom SVG illustrations embedded directly into the code for instant loading without external image assets.

---

## 🚀 How to Run

You have two easy ways to run the website:

### Option 1: Direct Browser Launch (Easiest)
- Simply double-click **`start.bat`** or **`index.html`** in Windows Explorer.
- The website will immediately open in your default browser.

### Option 2: Local HTTP Server
If you'd like to run it through a local HTTP server:
- Right-click and choose **"Run with PowerShell"** on **`serve.ps1`**, or run:
  ```powershell
  powershell -ExecutionPolicy Bypass -File .\serve.ps1
  ```
- Navigate to **`http://localhost:8080`** in your browser.

---

## 📁 File Structure

```
Sample/
├── index.html       # Semantic HTML5 markup, accessibility attributes, native modals
├── styles.css       # Design tokens, responsive grid/flexbox, dark/light themes, animations
├── app.js           # Reactive application state, cart logic, sound synthesizer, order simulation
├── serve.ps1        # Optional zero-dependency PowerShell HTTP server (localhost:8080)
├── start.bat        # Windows 1-click launcher
└── README.md        # Documentation and feature guide
```
