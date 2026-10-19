# Architecture — One Way Pizza Demo

## Initial approach
Prefer a lightweight frontend implementation using the framework already present in the repository. If the repository is empty, choose a maintainable modern framework only when it materially improves the project.

## Suggested component structure
- `SiteHeader`
- `MobileNavigation`
- `HeroSection`
- `PrimaryCTA`
- `FeaturedMenu`
- `MenuCard`
- `DealsSection`
- `FoodGallery`
- `OrderingSteps`
- `LocationContact`
- `OpeningHours`
- `ContactForm`
- `SiteFooter`

## Content separation
Keep business contact details, external URLs, opening hours, and menu items in a central data/config module rather than scattering literals through components.

## Assets
- Store the supplied logo and brand board in the project assets/public directory.
- Prepare a suitable favicon from the logo if practical.
- Optimise image formats and sizes.
- Avoid third-party image hotlinks where practical.

## Backend
No backend is required for the initial demo unless the project needs a real contact submission endpoint. If no backend/email integration exists, the form must clearly communicate that it is a demo or provide a working contact alternative.

## External integrations
- Foodpanda: supplied restaurant listing
- Google Maps: supplied search URL
- Phone: `tel:` links
- WhatsApp: optional; only after owner confirmation

## Deployment
Do not assume a domain or deployment target. Document build/run steps. Production deployment requires explicit approval.
