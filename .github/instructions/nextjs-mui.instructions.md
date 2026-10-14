---
applyTo: "**/*.ts,**/*.tsx"
---

# Next.js & Material UI Conventions

- Follow Next.js official documentation patterns (App Router, file-system routing, layouts, metadata API, etc.).
- Prefer Server Components by default. Only add `"use client"` when a component needs interactivity, state, or browser-only APIs.
- Prefer server-side data fetching (`fetch` inside Server Components, `generateStaticParams`, route handlers) over client-side fetching (`useEffect` + `fetch`, SWR/React Query on the client).
- Prefer static rendering (SSG/ISR) whenever the data allows it. Use dynamic rendering or revalidation only when content must be fresh per-request.
- Use Next.js built-ins where applicable: `next/image` for images, `next/link` for navigation, `next/font` for fonts, `metadata`/`generateMetadata` for SEO.
- Wrap slow-to-fetch or slow-to-render server content in `<Suspense>` with a fallback (e.g. an MUI `Skeleton` or `CircularProgress`), so users see a loading state instead of blocking the whole page.

## UI Components

- Build UI using Material UI (`@mui/material`, `@mui/icons-material`, `@mui/system`), following MUI's official patterns (theming via `ThemeProvider`, `sx` prop, `styled()`, MUI layout components like `Box`, `Stack`, `Grid`).
- Avoid raw HTML elements with hand-rolled CSS when an equivalent MUI component/prop exists.
- Keep theme customizations centralized in [src/theme.ts](../../src/theme.ts).

## Common Components

- When a special behavior on top of a Next.js or MUI component is needed (e.g. wrapping `next/image` with `Box` styling support), create a wrapper component in the [common](../../common) folder, following the pattern used in [NextImageBox.tsx](../../common/NextImageBox.tsx). Document it with JSDoc explaining its purpose and props.
- For more complex reusable components, compose them out of other MUI (or existing `common`) components and place them in the `common` folder as well. Example: an `ActionConfirmationModal` built from MUI's `Dialog` that accepts props for title, message, and confirm/cancel callbacks.
- Export new `common` components from [common/index.ts](../../common/index.ts).

## Import Order

- Group imports into three blocks, separated by a blank line between each group:
  1. Third-party imports (e.g. `react`, `next`, `@mui/material`).
  2. `@common` imports (from the [common](../../common) folder).
  3. All other imports (local/relative imports, e.g. `@/components`, `@/constants`, `@/types`).

## Accessibility & Responsiveness

- Design mobile-first: base styles target small screens, then use MUI breakpoints (`sx={{ ... }}` with `xs`, `sm`, `md`, ...) to scale up.
- Ensure layouts and typography adapt across screen sizes and font scaling (avoid fixed pixel sizes that break with user font-size preferences; prefer `rem`/theme typography variants).
- Follow accessibility best practices: semantic HTML/ARIA roles, sufficient color contrast, keyboard navigability, alt text on images, accessible labels on interactive MUI components.
