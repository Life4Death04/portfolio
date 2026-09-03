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

## Container Deployment

The production image builds the Vite site with Node.js and serves the static
output from unprivileged Nginx on container port `8080`.

```bash
cp .env.example .env
docker compose up -d --build
curl --fail http://127.0.0.1:8080/healthz
```

Set `HOST_PORT` in `.env` if port `8080` is already in use. Compose publishes
the port on `127.0.0.1` only, so the site is not directly exposed to the LAN.
The container uses a read-only root filesystem and stores temporary Nginx files
in an in-memory filesystem.

For a Cloudflare Tunnel installed on the Docker host, configure the public
hostname's HTTP origin as `http://127.0.0.1:8080` (using the configured
`HOST_PORT`). If `cloudflared` runs in a separate container, attach it to the
Docker network named `portfolio` and use `http://portfolio:8080` instead;
container loopback would point back to `cloudflared`, not this service.

Cloudflare credentials and tunnel lifecycle are intentionally managed outside
this repository and are never baked into the application image.
