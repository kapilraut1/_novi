# Novi

A marketing site for **Novi** — a calm, all-in-one workspace that brings tasks, docs, and conversations together for small, fast-moving teams.


## Live preview

**[novi-landing.vercel.app](https://novi-teal.vercel.app/)** 

## Requirements coverage

| Brief requirement | Where it lives |
| ------------------ | -------------- |
| Nav with logo, links, "Start Free" CTA | `components/sections/Navbar.tsx` — collapses to an accessible animated mobile menu |
| Hero: headline, subline, 2 CTAs, supporting graphic | `components/sections/Hero.tsx` — staggered entrance animation, inline SVG kanban graphic |
| 4 feature cards (Boards, Threads, Timeline, Import) | `components/sections/Features.tsx` — scroll-triggered stagger, hover microinteractions |
| Footer: tagline, link groups, email signup, socials, copyright | `components/sections/Footer.tsx` — Zod-validated signup with animated states |
| Fully responsive (phone/tablet/desktop) | Mobile-first Tailwind breakpoints throughout; menu collapses, sections stack |
| Beyond-the-brief creative direction | `InteractiveShowcase`, `WorkspaceView`, `CommandPalette`, `NewTaskModal`, `TaskDetailModal`, `VideoTourModal` |

## Tech stack

| Area       | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 14 (App Router)                       |
| UI         | React 18 + TypeScript (strict)                |
| Styling    | Tailwind CSS v4 (`@theme` design tokens)      |
| Animation  | Motion (`motion/react`)                       |
| State      | Zustand (client-only UI state)                |
| Validation | Zod                                           |
| Icons      | lucide-react + Material Symbols (font glyphs) |
| Tests      | Jest + React Testing Library (jsdom)          |
| Quality    | ESLint (next), Prettier, `tsc --noEmit`       |

## Requirements

- Node.js 18.17+ (20.x recommended)
- npm (or pnpm/yarn)

## Getting started

```bash
npm install          # install dependencies
npm run dev          # start dev server -> http://localhost:3000
```

## Scripts

| Script                 | Description                         |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the Next.js dev server         |
| `npm run build`        | Production build (static prerender)  |
| `npm start`            | Serve the production build           |
| `npm run lint`         | ESLint (next/core-web-vitals)        |
| `npm run typecheck`    | `tsc --noEmit` (strict)              |
| `npm test`             | Run Jest once                        |
| `npm run test:watch`   | Run Jest in watch mode               |
| `npm run format`       | Prettier write across the repo       |
| `npm run format:check` | Prettier check across the repo       |

The full verification gate is:

```bash
npm run typecheck && npm run lint && npm test && npm run build
```

All four pass clean on this submission.

## Tests

Jest runs in a jsdom environment (via `next/jest`) with module aliases mapped (`@/*` → `src/*`).

| Suite                        | Covers                                                                                                                            |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `src/__tests__/navbar`       | Mobile menu open/close, `aria-expanded`, Escape + focus restore, outside-click close, nav links, navigating a menu item closes it |
| `src/__tests__/hero`         | Headline + landmark, both CTAs fire their handlers, kanban graphic is `aria-hidden`                                               |
| `src/__tests__/features`     | Exactly 4 cards, expected `h3` titles, section heading + kicker badge                                                             |
| `src/__tests__/footer`       | Invalid email shows zod validation error, valid email shows success state (fetch mocked and asserted **not** called)              |
| `src/__tests__/landing-page` | Full-page render smoke test (all sections, skip link, id anchors)                                                                 |

The newsletter form is intentionally client-side only in this build: input is validated with Zod; a valid submit shows "Successfully subscribed!" after a short simulated delay, and no network request is made. See **Why not (trade-offs)** below for the reasoning and how a real endpoint would be added.

## Folder structure

```
.
├── next.config.mjs          # Next.js config (empty defaults)
├── jest.config.mjs          # next/jest + jsdom + alias mapping
├── jest.setup.ts            # jest-dom matchers
├── tsconfig.json            # strict TS, path alias @/* -> src/*
├── public/
│   └── novi-logo.svg        # brand logo artwork
└── src/
    ├── app/
    │   ├── layout.tsx       # root layout, metadata, fonts, MotionConfig
    │   ├── page.tsx         # landing page orchestrates all sections/state
    │   ├── globals.css      # Tailwind v4 entry + @theme design tokens
    │   └── favicon.ico      # auto-served at /favicon.ico
    ├── components/
    │   ├── ui/              # atomic: Button, Input, IconButton, Badge
    │   ├── sections/        # Navbar, Hero, SocialProof, Features, InteractiveShowcase,
    │   │                    # WorkflowSection, IntegrationsSection, FinalCta, Footer,
    │   │                    # WorkspaceView
    │   └── modals/          # CommandPalette, NewTaskModal, TaskDetailModal, VideoTourModal
    ├── lib/
    │   ├── data/initial-data.ts  # seed tasks/projects/messages + NOVI_LOGO_URL
    │   ├── schemas.ts       # shared Zod schema (newsletter)
    │   ├── utils.ts         # cn() classname helper
    │   └── use-focus-trap.ts     # focus-trap hook for menus/modals
    ├── store/
    │   └── use-mobile-menu-store.ts  # Zustand mobile menu state
    ├── types/index.ts       # shared domain types (Task, Project, ...)
    └── __tests__/           # colocated test suites (see Tests)
```

### Page flow

`src/app/page.tsx` keeps all cross-section UI state (workspace open, active view/project, selected task, modal open flags) and passes handlers down. Sections are pure presentational components — they receive callbacks and data as props.

## Design & technical decisions

### Why Zustand?

The only shared, mutable client state is the mobile navigation menu's open/closed flag, which multiple components (the toggle button and the menu panel) subscribe to.

- **Sliced subscriptions** — subscribers re-render only when their selected slice (`isOpen`) changes, unlike a Context provider whose consumers all re-render on any change.
- **No prop drilling** — the store is imported directly where needed instead of threading `onMenuToggle` through the layout/page tree.
- **Testable** — tests reset it with a single `useMobileMenuStore.setState(...)` call, which keeps navbar tests deterministic without mocking providers.
- **Small surface** — ~15 lines; no redux-style boilerplate.

Everything else (page state) lives in `page.tsx` as `useState`, because it is local to one screen and we opted for plain React over global stores until state is demonstrably shared.

### Component architecture

- **Atomic UI (`components/ui`)** — `Button`, `IconButton`, `Input`, `Badge` are small, typed, forwardRef'd primitives with variant/size props, shared across sections and modals.
- **Sections** — one component per marketing section, keeping `page.tsx` as a thin composition root. Sections receive data + callbacks as props; they never import the page store.
- **Modals & workspace** — heavier, self-contained features (`WorkspaceView`, `CommandPalette`, …) render conditionally from the root page, so the marketing page and the interactive demo are cleanly separable.
- **Shared lib** — Zod schema, focus-trap hook, seed data, and types live in `src/lib`/`src/types`, so server, client, and tests all consume the same definitions.
- **`@/*` alias** — configured in both `tsconfig.json` and `jest.config.mjs`, so imports and tests use the same paths.
- **Comment-free code** — by convention, the codebase favors self-explanatory names over comments.

### Accessibility

- **WCAG AA contrast** — a measured palette: `on-surface` (#131b2e) and `on-surface-variant` (#464555) exceed ~8:1 across all surfaces; the `outline` token was darkened from #777587 (≈4.5:1, borderline) to #666577 to guarantee ≥4.89:1 on every surface it is used on, including tinted panels.
- **Keyboard operability** — every interactive element is reachable and operable by keyboard: native `<button>`/`<a>` elements, and any clickable non-native element (kanban cards, announcement pill, showcase task list, `/table` toggle) is given `role="button"`, `tabIndex`, and Enter/Space key handling.
- **Visible focus** — a consistent `focus-visible` outline in brand primary color on buttons, links, nav items, and custom click targets.
- **Menus/modals** — mobile nav and all modals use a focus-trap hook, close on Escape, restore focus to the trigger, and expose proper `aria-expanded`/`dialog` semantics.
- **Landmarks** — skip-to-content link, `<header>/<nav>/<main>/<section aria-labelledby>/<footer>` regions, and `lang="en"`.
- **Decorative content hidden** — the hero kanban board and section visuals are inline SVGs with `aria-hidden`/`focusable=false`; material-symbol icon glyphs and lucide icons are hidden from the accessibility tree; all logos carry meaningful `alt` text.
- **Reduced motion** — a root `MotionConfig reducedMotion="user"` disables transform animations for users who prefer reduced motion.
- **Semantics** — feature cards are `<article>` elements with `h3` headings; status/focus state is reflected with `aria-pressed`/`aria-current`-style attributes where appropriate.

### Performance

- **Fully static** — `npm run build` prerenders the site to static HTML (only `○ /`), so there is no server work at request time; First Load JS for `/` ≈ **175 kB**.
- **No raster below the fold** — every visual is inline SVG or CSS, so there is nothing to lazy-load above the CDN budget; the only `next/image` usages are the tiny brand logos.
- **`next/image` discipline** — all images declare explicit `width`/`height` (no layout shift), use `unoptimized` because they are SVGs (unoptimizable), and the above-the-fold navbar logo is marked `priority`. Footer/demo logos keep the default lazy loading.
- **Fonts** — Google Fonts loaded via `<link>` with `preconnect` for both `fonts.googleapis.com` and `fonts.gstatic`; `display=swap`.

### Why not (trade-offs)

- **Newsletter form is frontend-only.** Input is validated with Zod and the UI fully models loading/success/error states; the submit handler is intentionally a single seam (`handleSubscribe`) so a real backend can be dropped in later by adding an `app/api/subscribe/route.ts` and swapping the simulated delay for a `fetch` call — no UI changes required. Chosen to keep the deployed build fully static (zero cold-start latency, one-click Vercel deploy, no server config), which fit the assessment's scope better than standing up a route for a single form. Happy to walk through what the real integration would look like.
- **Google Fonts over `<link>`** (instead of `next/font`) was chosen because Tailwind arbitrary `font-['Plus_Jakarta_Sans']` classes reference the exact family names; `next/font` would require tokenizing those references.
- **No dark mode.** Not requested in the brief; adding it properly (theme state, `dark:` variants across every component, FOUC-safe hydration) would have traded polish on the required sections for a feature outside scope, so it was deliberately left out.

## What's next if this moves forward

- Wire the newsletter form to a real `/api/subscribe` route (Zod schema is already shared and ready to reuse server-side).
- Add Storybook for the `components/ui` primitives to document variant/size props.
- Add Playwright for end-to-end coverage of the mobile menu and modal flows on top of the existing unit tests.
