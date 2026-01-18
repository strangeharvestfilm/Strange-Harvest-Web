# AI Coding Agent Instructions for Strange Harvest Web

## Project Overview
**Strange Harvest** is a Vite + React + TypeScript promotional website for a film using a centralized content management pattern with a single-page composition architecture.

## Architecture & Data Flow

### Entry Point Chain
`index.html` → `main.tsx` → `App.tsx` → `src/Page.tsx` → Section Components

### Content Management Pattern
All site copy lives in `src/components/sitecopy.ts` as a single exportable object. Components import and destructure the content they need:

```tsx
import { sitecopy } from "./sitecopy";

export default function Hero() {
  const { hero } = sitecopy;
  return <h1>{hero.title}</h1>;
}
```

**Critical**: When adding new content sections, update `sitecopy.ts` first, then have components pull from it. Content is typed but not validated at runtime.

### Component Organization
Components live in `src/components/` and are rendered in a fixed sequence by `src/Page.tsx`:
Header → Hero → Synopsis → Trailer → Watch → Merch → Press → CastCrew → Footer

**Each component**:
- Is a default export stateless functional component
- Pulls content from `sitecopy.ts`
- Uses semantic HTML (`<section>`, `<header>`, etc.)
- Includes an `id` attribute matching anchor href patterns (`#watch`, `#shop`, etc.)

## Styling System

### Dual CSS Architecture
1. **theme.css** - Design tokens (CSS custom properties in `:root`)
   - HSL color tokens: `--background`, `--primary`, `--accent`, `--muted`, etc.
   - Font families: `--font-display` (Cinzel serif), `--font-body` (Crimson Text serif)
   - Usage: `hsl(var(--background))`

2. **main.css** - Layout, typography, component-specific styles
   - Global resets and typography
   - Component classes: `.hero`, `.watchGrid`, `.ctaRow`, etc.
   - Utility patterns for sections, cards, buttons

**Fonts**: Google Fonts preloaded in `index.html` for Cinzel + Crimson Text

## Development Workflow

### Build Commands
```bash
npm run dev      # Start dev server on port 5173
npm run build    # TypeScript compile + Vite production build
npm run preview  # Preview production build locally
```

### Adding New Content Sections
1. Add content object to `src/components/sitecopy.ts`
2. Create `src/components/YourSection.tsx` following the pattern:
```tsx
import { sitecopy } from "./sitecopy";

export default function YourSection() {
  const { yourSection } = sitecopy;
  return <section id="your-section">{/* ... */}</section>;
}
```
3. Import and render in `src/Page.tsx` before `<Footer />`
4. Add styles to `main.css` using class names like `.yourSection`

### Asset Management
- All images in `public/images/` (accessible as `/images/filename.png`)
- Icon naming: `icon-[platform].png` (e.g., `icon-apple.png`)
- Poster/stills: `still-[description].jpg`

## Critical Patterns

### Import Paths
- **Within components**: Use relative paths `"./ComponentName"` or `"../sitecopy"`
- **In Page.tsx**: `"./components/ComponentName"`
- No barrel exports or path aliases configured

### Content Structure in sitecopy.ts
Nested objects by section with common patterns:
- `title` + `body` for text-heavy sections
- `title` + `quotes[]` for testimonials/press
- `platforms[]` arrays with `{ name, href, icon }` structure for external links

### Anchor Navigation
Components use `id` attributes that match anchor hrefs throughout the site:
- Hero CTAs link to `#trailer`, `#watch`, `#shop`
- Header nav uses `#top`, `#about`, etc.
- All sections have `scroll-margin-top: 90px` for fixed header offset

## External Dependencies
- **React 18.2** with React DOM
- **Vite 5** as build tool with `@vitejs/plugin-react`
- **TypeScript 5.3** with strict mode
- **No state management library** - all content static from sitecopy.ts
- **No routing** - single page with anchor navigation only
