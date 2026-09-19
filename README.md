# Faisal Talukdar — Personal Brand / Performance Marketing Website

Static HTML/CSS/JS package for GitHub Pages. No build step required.

## Main pages
- `index.html` — lightweight landing page
- `services.html` — all six service areas
- `about.html` — bio, working style and profile links
- `contact.html` — direct contact + email handoff form
- `blog/index.html` — Insights
- `case-studies/halal-food.html` — selected case study
- `privacy.html` and `404.html`

## Logo upload system
Go to `assets/images/logos/`. Replace the 11 starter PNGs using the exact same filenames. The website reads those local files automatically; no HTML/CSS/JS change is needed when replacing a logo with another image using the same filename.

Recommended logo format: transparent PNG or SVG, square, at least 64×64px.

## Marquee behavior
- Platform belt: right → left
- AI belt: left → right
- Full viewport width
- Duplicated tracks for a continuous loop
- Edge masking only at the actual browser edges
- Hover pauses on desktop
- `prefers-reduced-motion` is respected

## Evidence policy
Future case-study and proof slots are structured without invented performance numbers. Add verified metrics, screenshots, client context and testimonials as they become available.

## Deploy
Upload the contents of this folder to the GitHub Pages repository root.

## Update notes
- The landing-page service cards now open dedicated service-detail pages; those detail pages are intentionally not added to the primary header navigation.
- The four About information cards now open dedicated detail articles, each with a direct contact CTA.
- Secondary body copy was increased slightly for readability; the primary landing hero headline remains unchanged.
- Large page images now use optimized WebP assets. The existing social-share PNG keeps the same filename/URL but was compressed without changing its design.
- Canonical URLs, Open Graph URLs, sitemap coverage and structured data were aligned page-by-page.
