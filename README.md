# Portfolio

Production foundation for Santiago Rodriguez's portfolio, built with React 19,
TypeScript, Vite, Tailwind CSS, Motion, and i18next.

## Prerequisites

- Node.js 20.19 or newer
- npm 11 or newer

## Development

```bash
npm install
npm run dev
```

Create a production bundle with `npm run build` and preview it with
`npm run preview`.

## Quality

```bash
npm run format
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run check
```

## Structure

- `src/app`: application entry UI and smoke test
- `src/sections`: section-oriented modules for home, projects, skills, and about
- `src/components`: shared UI and layout components
- `src/config`: centralized site configuration
- `src/i18n`: English and Spanish resources and initialization
- `src/lib`: shared integration foundations, including Motion variants
- `src/styles`: Tailwind import, design tokens, and global accessibility defaults
- `src/test`: shared test setup
- `public/images`: project and profile asset locations

The exported design in `../Portfolio Home Section Design` is reference-only. It
is intentionally outside this application and its generated canvas runtime is
not part of the production source.
