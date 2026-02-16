# CLAUDE.md

## Project Overview

Personal portfolio and experimentation website (pelykh.dev) built with React 19, TypeScript, and Vite.

## Tech Stack

- **Framework**: React 19 + TypeScript 5.7
- **Build**: Vite 7
- **Routing**: TanStack Router (file-based routing in `src/routes/`)
- **State/Data**: TanStack Query, TanStack Form
- **UI**: Shadcn (Radix UI) + Tailwind CSS 4
- **i18n**: i18next (locales in `src/i18n/locales/`)
- **Linting/Formatting**: Biome
- **Testing**: Vitest
- **Component Docs**: Storybook

## Commands

```bash
npm run dev          # Dev server on port 3000
npm run build        # TypeScript check + Vite build
npm run test         # Run Vitest
npm run lint         # Biome linter
npm run format       # Biome formatter
npm run check        # Biome check (lint + format)
npm run storybook    # Storybook on port 6006
```

## Project Structure

- `src/routes/` — File-based routes (TanStack Router auto-generates `routeTree.gen.ts`)
- `src/components/ui/` — Shadcn UI components
- `src/components/storybook/` — Storybook components and stories
- `src/hooks/` — Custom React hooks
- `src/lib/` — Utility functions
- `src/i18n/` — Internationalization config and locale files (en, uk)
- `src/integrations/` — Third-party integration providers

## Conventions

- **Formatting**: Tabs for indentation, double quotes (configured in `biome.json`)
- **Imports**: Use `@/*` path alias for `src/` imports
- **Shadcn components**: Add new components via `pnpm dlx shadcn@latest add <component>`
- **Routing**: Add new pages as files in `src/routes/`; the route tree is auto-generated
- **i18n**: Add translations to both `en.json` and `uk.json` when adding user-facing text
- **Do not edit** `src/routeTree.gen.ts` — it is auto-generated
