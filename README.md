# One Way Pizza — Multi-Page Website Demo

A high-performance, mobile-first multi-page website demo built for **One Way Pizza** (Abbott Road, Garhi Shahu, Lahore, Pakistan).

## 🚀 Live Demo Structure

This website is structured across 5 dedicated pages:

- **[index.html](index.html)** — Home page: Hero banner, brand value propositions, signature pizzas teaser, 3-step ordering process, and location banner.
- **[menu.html](menu.html)** — Menu & Deals: Categorized pizzas (One Way Special, Super Supreme, Chicken Fajita, Hot & Spicy), value combos, portions & size guide, and direct order links.
- **[gallery.html](gallery.html)** — Food Photography Gallery: Interactive image showcase with full-screen lightbox preview.
- **[about.html](about.html)** — About Our Brand: Location history on Abbott Road, craftsmanship pillars, and fresh baking standards.
- **[contact.html](contact.html)** — Contact, Location & Hours: Direct click-to-call buttons (`+92 310 2021222`, `+92 303 2500034`), Google Maps integration, weekly hours schedule, and honest contact inquiry form.

## 🛠️ Tech Stack & Architecture

- **Frontend:** Semantic HTML5, CSS3 Custom Properties (Design Tokens), Vanilla JavaScript (ES6+).
- **Design System:** Deep Black (`#000000`), One Way Gold (`#FFC200`), Charcoal surfaces (`#161616`), and White (`#FFFFFF`).
- **Responsive Layout:** Mobile-first architecture supporting 320px, 375px, 390px, 768px, 1024px, and 1440px viewports.
- **Centralized Data:** [`js/data.js`](js/data.js) keeps all contact information, addresses, and menu records centralized.
- **Interactions:** [`js/main.js`](js/main.js) provides accessible drawer navigation (keyboard & screen-reader operable), lightbox modals, and validated contact forms.
- **Local Assets:** Stored locally in `assets/` and `assets/images/` without fragile third-party hotlinks.

## 💻 How to Run Locally

You can open any `.html` file directly in your web browser:

1. Double-click **`index.html`** in File Explorer to launch in your browser.
2. Or serve via any local web server (e.g., using Python or Node.js):
   ```powershell
   # Using Python
   python -m http.server 8000
   
   # Or using Node npx
   npx serve .
   ```
3. Navigate to `http://localhost:8000`.

## ⚠️ Important Status & Transparency

- This website is a **proposed sales demo**, not an owner-approved or officially launched website.
- **Content Integrity:** In strict accordance with client guidelines, menu prices and active daily deals are quoted directly by the restaurant (`Call` or `Foodpanda`) to prevent inaccurate claims.
- **Hours:** Timings (11:00 AM – 1:30 AM / 2:00 AM) are clearly marked provisional.
- **Inquiry Form:** Form includes client-side validation and truthful demo messaging directing users to live channels.
