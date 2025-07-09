# Vue 3 + Vite + Tailwind CSS + Vue Router Starter

This project is a starter setup for building Vue 3 applications with Vite, Tailwind CSS, and Vue Router pre-configured.

## Features

- **Vue 3**: The latest version of Vue.js for building modern web apps.
- **Vite**: Fast development server and build tool.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Vue Router**: Official router for Vue.js, already installed and ready to use.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

- `src/` — Main source code
  - `App.vue` — Root Vue component
  - `main.js` — App entry point, sets up router and imports Tailwind CSS
  - `style.css` — Tailwind CSS directives
  - `assets/` — Static assets (e.g., images, icons)
  - `components/` — Vue components (e.g., `HelloWorld.vue`)
  - `composables/` — Vue composables (reusable logic)
  - `constants/` — Project constants (e.g., `routeNames.js`)
  - `layout/` — Layout components (e.g., `NavBar.vue`)
  - `plugins/` — Vue plugins
  - `router/` — Vue Router setup (e.g., `routes.js`)
  - `store/` — State management (e.g., Pinia, Vuex)
  - `utils/` — Utility functions
  - `views/` — Route view components (e.g., `Home.vue`)
- `public/` — Static public assets
- `index.html` — Main HTML file
- `tailwind.config.js` — Tailwind configuration (in project root)
- `postcss.config.js` — PostCSS configuration (in project root)
- `vite.config.js` — Vite configuration
- `package.json` — Project metadata and dependencies

## Customization

- Add your routes in `src/router/index.js`.
- Add your components in `src/components/`.
- Use Tailwind utility classes in your templates.

---

This template is ready for you to start building your Vue 3 app with modern tooling!
