# Portfolio

Personal portfolio website built with React and deployed on Netlify. The project uses Create React App for bundling, React Router for client-side navigation, and Bootstrap plus CSS modules for styling.

## Tech Stack

- React 19
- Create React App (`react-scripts` 5)
- React Router DOM
- Bootstrap 5
- ESLint 9
- Prettier
- GitHub Actions
- Netlify

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

The development server runs on `http://localhost:3000`.

## Available Scripts

- `npm run dev`: starts the CRA development server
- `npm start`: alias for the CRA development server
- `npm run build`: creates the production build in `build/`
- `npm run preview`: serves the production build locally
- `npm run lint`: runs ESLint across the project
- `npm run lint:fix`: fixes auto-fixable ESLint issues
- `npm run format`: formats the codebase with Prettier
- `npm run format:check`: checks formatting without changing files
- `npm test`: runs the test suite once

## Environment Variables

No environment variables are required for the current project state.

If environment variables are added later, follow these rules:

- use `.env.local` for local development secrets
- never commit secrets
- document each variable in this README
- expose browser variables with the CRA `REACT_APP_` prefix

## Build

```bash
npm run build
```

The production output is generated in `build/`, which matches the Netlify publish directory configured in `netlify.toml`.

## Deployment (Netlify)

This project stays compatible with the current Netlify deployment model.

- Build command: `npm run build`
- Publish directory: `build`
- SPA routing: handled by both `netlify.toml` and `public/_redirects`

Netlify can continue deploying directly from the repository without platform changes.

## CI

GitHub Actions runs on pull requests and pushes to `main` and performs:

- `npm ci`
- `npm run lint`
- `npm test`
- `npm run build`

## Folder Structure

```text
public/
  _redirects
  index.html
src/
  components/
    content/
    layouts/
    pages/
    ui/
  layouts/
  routes/
  img/
  App.js
  index.js
.github/workflows/
netlify.toml
eslint.config.js
```

## Notes

- The current stack remains CRA by design to preserve the existing production deployment behavior.
- Infrastructure improvements in this pass focus on DX, consistency, CI, and deploy safety without changing the hosting platform.
