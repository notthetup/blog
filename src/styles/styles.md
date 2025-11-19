Tailwind Components: Mapping and Integration Guide

This file documents the CSS components now present in `assets/css/tailwind-components.css` and how they map to your site templates' selectors.

Purpose:
- Provide Tailwind-compatible component classes that preserve the look and behavior of the original CSS.
- Helps you consolidate component styles and keep them in a single, maintainable file that uses the original selectors from your templates.

How to use:
 - Include the file in your build or link it after your Tailwind build so the component rules are available. The file now preserves the original selectors (IDs and classes) so you shouldn't need to change templates; the styles will apply directly.

Mapping of major selectors (now used directly in `tailwind-components.css`):
- `#container`
- `#pic` and `#pic img`
- `#socialpanel` and `#socialpanel ul#social` (and `#socialpanel ul#social li`)
- `#activities` and `#identity`
- `.ir`, `.hidden`, `.visuallyhidden`, `.invisible`, `.clearfix`
- `.masthead`
- `.site-logo img`
- `.site-title`
- `.site-description`
- `.entry-feature-image`
- `.entry-wrapper`
- `.entry-header`
- `.entry-title`
- `.entry-tags`
- `.entry-meta` and `.author-photo`
- `.entry-content`
- `.pagination`
- `.btn`
- `.social-icons`
- `#site-nav` and `.navigation-wrapper`
- `.image-credit`
- `.link-arrow`
- `.social-share-facebook`, `.social-share-twitter`, `.social-share-googleplus` (social share variants)

Notes & Tips:
- This file preserves the original visual styles from `assets/css/style.css`. For a cleaner Tailwind approach, you can subsequently replace the component rules with `@apply` util classes or rewrite components using Tailwind utilities.
 - Keep the compatibility fallback selectors in place for now (they are included at the end of the file). Once you’ve validated the components, you may remove duplicate rules from `assets/css/style.css` or refactor them into `@apply`-based versions.
- For responsive behaviors, the file kept the existing media queries (e.g., `max-width: 600px`) for compatibility.

If you want, I can now:
1. Convert component rules to `@apply` using Tailwind utilities (cleaner inline utility classes),
2. Remove duplicated old CSS declarations from `assets/css/style.css` and keep only the component file,
3. Help you wire `tailwind-components.css` into your build pipeline so it gets bundled with Tailwind's output.

Let me know how far you'd like me to go next.
