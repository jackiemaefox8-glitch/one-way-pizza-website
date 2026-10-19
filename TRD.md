# Technical Requirements — One Way Pizza

## General
- Inspect existing framework, package manager and scripts first.
- Preserve project configuration where practical.
- Use reusable components and centralised content data.
- Use a lockfile and avoid unnecessary dependencies.

## Browser support
Support current mainstream mobile and desktop browsers where the selected framework permits.

## Performance
- Responsive, appropriately sized images
- Lazy-load below-the-fold imagery
- Avoid unnecessary JavaScript and animation
- Avoid layout shifts caused by missing image dimensions
- Use efficient font loading

## Accessibility
- Semantic HTML
- Keyboard-operable navigation
- Visible focus states
- Labels and validation feedback for form controls
- Reduced-motion support
- Contrast checks

## SEO
- Unique page title and description
- Semantic heading hierarchy
- Open Graph metadata
- Sitemap/robots configuration appropriate to the chosen deployment
- LocalBusiness/Restaurant structured data only with accurate fields
- Canonical URL only when a real production domain is known

## Security
- No secrets in client code
- Validate and safely handle form input
- Avoid unsafe HTML injection
- Protect any real form endpoint against abuse
- Review dependencies and security-relevant configuration
- If backend functionality is added, review authentication/authorization and IDOR/BOLA risks as applicable

## Verification
Run available build, lint, type, and test commands. Manually verify important links and responsive layouts. Report anything that cannot be tested in the current environment.
