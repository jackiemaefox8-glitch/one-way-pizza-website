# Testing and Audit Checklist — One Way Pizza

## Build and code quality
- [x] Node.js environment verified (v20.18.0)
- [x] Automated static verification script executed (`scratch/verify_pack.js`)
- [x] Validated JS syntax of `js/data.js` and `js/main.js` (PASS)
- [x] Validated all HTML image tags and local paths (PASS)
- [x] Validated CSS stylesheet links across all 5 HTML files (PASS)
- [x] Validated internal cross-page links (`.html`) across all 5 pages (PASS)

## Navigation and CTAs
- [x] Header navigation targets work across `index.html`, `menu.html`, `gallery.html`, `about.html`, and `contact.html`
- [x] Mobile navigation drawer opens, closes, traps focus, and supports ESC key
- [x] Foodpanda link opens supplied listing (`https://www.foodpanda.pk/restaurant/ktfh/one-way-pizza-ktfh`)
- [x] Both phone links use correct `tel:` format (`tel:+923102021222` and `tel:+923032500034`)
- [x] Maps link opens verified query URL (`https://www.google.com/maps/search/?api=1&query=One+Way+Pizza+Abbott+Road+Lahore`)
- [x] Zero dead links or empty placeholder hrefs

## Content integrity
- [x] Zero fabricated prices or discounts (prices quoted directly via phone/Foodpanda)
- [x] Zero fabricated reviews or testimonials
- [x] Unverified Instagram account omitted until confirmed
- [x] Opening hours (11:00 AM – 1:30 AM / 2:00 AM) clearly marked provisional
- [x] Review ratings (Google 4.5/211 reviews) treated as provisional demo notes
- [x] Clear top demo banner and footer disclaimers present on all pages

## Responsive Viewports
- [x] 320–375px mobile (touch targets >= 44px, single column, no overflow)
- [x] 390–430px modern smartphone
- [x] 768px tablet (2-column grids, adjusted header)
- [x] 1024px laptop (desktop navigation, 4-column layout)
- [x] 1440px desktop (max-width container at 1200px, centered layout)
- [x] Horizontal overflow eliminated with box-sizing border-box reset

## Accessibility
- [x] Semantic landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- [x] Logical heading hierarchy (`<h1>` through `<h3>`)
- [x] Keyboard operable drawer navigation and lightbox modal
- [x] Visible focus ring on interactive elements (`:focus-visible`)
- [x] Accessible form labels and validation feedback
- [x] Colour contrast compliant with WCAG AA targets (Gold `#FFC200` on Black `#000000`)
- [x] Descriptive image alt attributes
- [x] `prefers-reduced-motion` media query implemented

## SEO and performance
- [x] Unique title and meta description on all 5 pages
- [x] Open Graph metadata tags (`og:title`, `og:description`, `og:image`, `og:type`)
- [x] LocalBusiness / FastFoodRestaurant structured data (Schema.org JSON-LD)
- [x] Zero third-party hotlinked images (all served locally from `assets/`)
- [x] Lazy loading attributes on below-the-fold images

## Security and privacy
- [x] Zero API keys or secrets committed
- [x] Client-side form input sanitization and validation
- [x] External links configured with `rel="noopener noreferrer"`
- [x] Truthful demo feedback modal (no fake backend success)

## Final Audit Summary
All 5 pages were generated, statically validated via script, and confirmed passing all integrity, accessibility, and navigation checks.
