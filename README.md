# Leverius

A private brokerage for architecturally significant houses. Editorial,
print-leaning marketing site: bone paper, forest ink, patinated brass,
Bodoni Moda display type against Inter Tight and tabular mono numerals.

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **Tailwind CSS v4** with a single token layer in `src/index.css`
- **shadcn/ui conventions** on **Radix UI** primitives, hand-authored in
  `src/components/ui` (`cn()` + `cva`, no runtime CSS-in-JS)
- **lucide-react** for icons, **Fontsource** for self-hosted variable fonts

## Radix primitives in use

`@radix-ui/react-dialog` (residence detail + mobile sheet),
`react-tabs` (collection filter), `react-accordion` (services),
`react-dropdown-menu` (enquiry interest picker), `react-separator`,
`react-label`, `react-slot`, `react-tooltip`.

Every interactive surface keeps focus trapping, `aria-*` wiring, escape
handling and scroll locking from Radix. Only the visual shell is custom.

## Structure

```
src/
  content/site.ts        single source of all copy + residence data
  components/ui/         shadcn-style primitives (button, dialog, tabs, ...)
  components/            page sections
  hooks/                 useReveal, useScrollSpy
  lib/utils.ts           cn()
  index.css              design tokens + base + utilities
```

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run lint     # oxlint
```

## Design notes

- Colour, spacing, radius, shadow and type scale live only in the `@theme`
  block. No component uses a raw hex value.
- Motion is one IntersectionObserver reveal plus hover transitions, all
  disabled under `prefers-reduced-motion: reduce`.
- The site is front-end only; the enquiry form resolves locally and does not
  post anywhere.
