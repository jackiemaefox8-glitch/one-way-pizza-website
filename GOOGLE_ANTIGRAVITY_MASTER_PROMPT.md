# GOOGLE ANTIGRAVITY MASTER PROMPT — ONE WAY PIZZA

Act as a senior full-stack engineer, UI/UX designer, brand identity specialist, SEO consultant, accessibility auditor and QA engineer.

Build a polished, responsive website demo for **One Way Pizza**, a pizza restaurant in Lahore, Pakistan. This is a proposed sales demo for a prospective client, not an owner-approved or officially launched website.

## 1. Read project files first
Read `README.md`, `CLIENT_BRIEF.md`, `PRD.md`, `AGENTS.md`, `DESIGN_SYSTEM.md`, `ARCHITECTURE.md`, `TRD.md`, `APP_FLOW.md`, `IMPLEMENTATION_PLAN.md` and `TESTING.md`. Inspect all available assets in `assets/`. If the two reference PDFs, AI Agent Setup Pack and Fullstack AI Training Guide, are available in the workspace, use their principles too. Do not claim to have read files that are not accessible.

Inspect the existing repository and project scripts before changing anything. Follow plan → build → test → audit → fix → re-verify.

## 2. Business details
Business: One Way Pizza  
Category: Pizza Restaurant / Fast Food  
City: Lahore, Punjab, Pakistan  
Phone 1: +92 310 2021222  
Phone 2: +92 303 2500034  
Address: Ground Floor, Fajar Plaza, Shop 19, opposite Duniya News, Abbott Road, near Shimla Pahari Road, Garhi Shahu, Lahore, Punjab, Pakistan, 54000.

Google Maps: https://www.google.com/maps/search/?api=1&query=One+Way+Pizza+Abbott+Road+Lahore  
Foodpanda: https://www.foodpanda.pk/restaurant/ktfh/one-way-pizza-ktfh  
Directory: https://www.bizsouthasia.com/PK/one-way-pizza-0303-2500034

Official website absence, owner interest, opening hours, Instagram handle, prices, discounts and the current review data are not fully verified. Treat all such details as provisional until confirmed.

## 3. Brand identity
Use the supplied logo and brand board as the primary references. Preserve the original logo's proportions and visual appearance. Do not substitute a generic text logo if the asset is available.

Visual direction: premium, bold, modern, appetizing and clear.
- Black: `#000000`
- Golden yellow: approximately `#FFC200`
- White: `#FFFFFF`
- Green only as a restrained supporting accent.

Use no more than two main font families. Use strong headings, readable body text, consistent spacing, generous negative space, strong food imagery and clear CTAs. Target WCAG AA contrast for ordinary text. Avoid generic templates, excessive gradients, overdone animations, glow and glassmorphism.

## 4. Build these sections
1. Header/navigation: logo, Home, Menu, Deals, Gallery, About, Contact, Order Now.
2. Hero: “Good Pizza Goes a Long Way.”, concise supporting copy, appetizing image, Foodpanda and Call to Order CTAs.
3. Featured menu: One Way Special Pizza, Super Supreme Pizza, Chicken Fajita Pizza, Hot & Spicy Pizza.
4. Deals section, but never invent active offers or discounts.
5. Food photography gallery.
6. Brand/about section using only supportable claims.
7. Simple ordering steps.
8. Location/contact section with full address, phone links and Maps link.
9. Provisional opening hours, clearly labelled awaiting owner confirmation, or omit them.
10. Footer with logo, navigation and verified links.

Do not fabricate prices, sizes, ingredients, reviews, awards, history, customer counts or delivery promises. If prices are unavailable, use “Contact for current price” or omit the price. Use real, licensed or otherwise permitted food imagery. Avoid unstable image hotlinks where practical.

## 5. Functional behaviour
- All navigation must work.
- Foodpanda CTA must open the supplied listing.
- Phone buttons must use correct `tel:` links.
- Maps button must open the supplied Maps URL.
- WhatsApp is optional; only add after owner confirmation. If added, use the confirmed number and a correctly encoded message.
- Contact form must validate inputs and show honest success/error feedback. Do not fake submission if there is no backend or email integration.
- No dead buttons, fake checkout, fake payment, or fake live order tracking.
- External links should behave intentionally and safely.

## 6. Technical decisions
Use the current repository's stack if suitable. If starting from an empty repository, choose a maintainable modern frontend stack and avoid unnecessary dependencies. Use reusable components and centralise business details, URLs, opening hours and menu content. Keep the site lightweight. Do not add a database, authentication, admin panel or payment system unless genuinely required.

## 7. Responsive design
Build mobile-first and verify approximately 320–375px, 390–430px, 768px, 1024px and 1440px widths. Avoid horizontal overflow, clipped text and tiny tap targets. Make primary ordering/call actions easy to find on mobile.

## 8. SEO, accessibility and performance
Implement semantic HTML, a correct heading hierarchy, page title and meta description, Open Graph metadata, image alt text, visible focus, keyboard navigation, accessible form labels, reduced-motion support and sensible image loading. Add sitemap/robots only as appropriate. Use a canonical URL only when the actual production domain is known. Add Restaurant/LocalBusiness structured data only with accurate supported facts.

## 9. Security and privacy
Keep secrets out of client code and version control. Validate and safely handle form input. Avoid unsafe HTML injection. Review dependencies and configuration. If a backend is introduced, review authorization, IDOR/BOLA and abuse prevention. Collect only necessary contact data.

## 10. Required project documents
Maintain these files:
- `PRD.md`
- `AGENTS.md`
- `DESIGN_SYSTEM.md`
- `ARCHITECTURE.md`
- `TRD.md`
- `APP_FLOW.md`
- `IMPLEMENTATION_PLAN.md`
- `TESTING.md`

Also update `README.md` with setup/run instructions and document remaining limitations.

## 11. Test, audit, fix, re-verify
Run available build, lint, type and automated test commands. Verify links, form states, mobile navigation, multiple viewport widths, console/network errors where tools permit, accessibility, SEO and image loading. Fix discovered issues and re-run relevant checks. Never claim a check passed unless it was actually executed. Mark untested checks honestly.

## 12. Handover
Deliver a working demo, the planning files, setup instructions, a truthful test report and a list of owner confirmations still required. Do not deploy, buy a domain, contact the restaurant or perform irreversible external actions without explicit approval.

Begin by inspecting the repository and assets. Then plan, implement, test, audit, fix and re-verify.
