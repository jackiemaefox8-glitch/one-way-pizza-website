# PRD — One Way Pizza Website Demo

## 1. Purpose
Create a premium, responsive restaurant website demo that helps a prospective client understand how a professional online presence could present One Way Pizza and direct visitors to existing ordering/contact channels.

## 2. Audience
- Customers browsing on mobile devices
- Customers looking for the menu and ordering options
- The restaurant owner evaluating the proposed website

## 3. Primary goals
- Present the brand consistently with the supplied identity reference.
- Make menu discovery and contact/order actions easy.
- Display address and directions clearly.
- Work well on mobile, tablet and desktop.
- Provide a credible sales-demo experience without implying owner approval.

## 4. Core pages/sections
- Home/hero
- Featured menu
- Menu/deals
- Food gallery
- About/why choose us
- Ordering steps
- Contact/location/hours
- Footer

A single-page site is acceptable for the initial demo if navigation is clear and sections are well structured.

## 5. Functional requirements
- Navigation links scroll to correct sections or pages.
- Foodpanda link opens the supplied listing.
- Telephone links use `tel:` with the supplied phone numbers.
- Maps link opens the supplied location search.
- Contact form validates fields and reports success only if a real submission mechanism exists.
- WhatsApp CTA is optional and requires owner confirmation.
- No dead buttons, fake checkout, fake payment or fabricated live order tracking.

## 6. Content integrity
Do not fabricate prices, discounts, testimonials, ratings, ingredients, awards, opening-hour verification, social profiles or operational promises. Mark unverified content as provisional or omit it.

## 7. Non-functional requirements
- Mobile-first responsive layout
- Accessible keyboard interaction and visible focus
- WCAG AA contrast target for normal text
- Semantic HTML and basic SEO
- Optimised images and sensible loading behaviour
- Maintainable reusable components
- No secrets committed to source control

## 8. Acceptance criteria
- Brand assets are used without distortion.
- All core sections are implemented.
- All published CTA destinations are correct.
- No horizontal overflow at tested widths.
- Build/lint/type checks are run when available.
- Issues found during testing are fixed and relevant checks repeated.
- Remaining limitations and owner confirmations are documented.
