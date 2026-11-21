# Project memory

## Product intent & audience

- Digital agency website for **iDigitalRise**
- Premium, modern, fully responsive marketing site
- Core features: custom branding, interactive portfolio, services showcase, project inquiry form

## Brand personality & voice

- Premium, polished, non-generic ("beautiful, not cookie cutter")
- Production-grade presentation; designed to impress prospective clients

## Visual design & UX direction

- **Stack:** Vite + React (JSX), Tailwind CSS, Lucide React icons
- **Palette:** orange, cream, white
- **Cursor:** SplashCursor component rendered globally, above page content
  - Desktop-only (fine-pointer devices); disabled on mobile/touch
  - Medium quality settings for smooth performance
  - Must not block buttons, links, forms, or scrolling
- Custom agency CSS takes precedence over shadcn base utilities; invalid/conflicting shadcn utility blocks have been removed from stylesheets

## Decisions, constraints & rationale

- `@/` path alias maps to `src/`; prefer it over deep relative imports
- Avoid extra UI/icon packages beyond Tailwind, Lucide React, and React hooks unless explicitly requested
- SplashCursor was preinstalled in `@/components`; reused rather than duplicated, then moved into normal source tree
- A local TypeScript type declaration was added for the preinstalled JSX component to satisfy type checking without altering behavior
- Verification standard: lint, type-check, and production build must all pass after changes

## Open questions & assumptions

- SplashCursor component origin is external (React Bits); future updates may require re-syncing or re-adding type declarations
- Assumption: orange/cream/white palette remains the canonical brand system; verify before introducing new accent colors
- Assumption: cursor effect remains desktop-only; revisit if mobile parity is later requested