# Agency.ai — React + Vite + Tailwind

A modern, single‑page marketing website for a digital agency. Built with React 19, Vite, Tailwind CSS v4, Motion for animations, and react‑hot‑toast for notifications. The site showcases services, recent work, team members, and includes a functional contact form powered by Web3Forms.

## Features
- **Responsive layout**: Mobile‑first, flex/grid utilities via Tailwind CSS v4.
- **Dark mode**: Persisted theme toggle using `localStorage` and the `dark` variant.
- **Animated UI**: Smooth section and element animations with `motion`.
- **Custom cursor**: Subtle dot + outline that follows mouse movement.
- **Sections**: `Hero`, `Trusted By`, `Services`, `Our Work`, `Team`, `Contact Us`, and `Footer`.
- **Contact form**: Submits to Web3Forms with success/error toasts.

## Tech stack
- **Runtime & Bundler**: React 19, Vite 7
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animation**: `motion`
- **Notifications**: `react-hot-toast`
- **Linting**: ESLint 9 with React plugins

## Getting started

### Prerequisites
- Node.js 18+ (recommended 18 LTS or newer)
- PNPM, NPM, or Yarn (examples below use NPM)

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
This starts the Vite dev server and opens the app at `http://localhost:5173/` by default.

### Build
```bash
npm run build
```
Outputs a production build to `dist/`.

### Preview production build
```bash
npm run preview
```
Serves the `dist/` build locally for testing.

## Environment variables
The contact form uses [Web3Forms](https://web3forms.com) and expects a site access key at build/runtime:

- `VITE_WEB3_FORMS_ACCESS_KEY`

Create a `.env` file in the project root:
```bash
# .env
VITE_WEB3_FORMS_ACCESS_KEY=your_web3forms_access_key
```
Vite automatically exposes variables prefixed with `VITE_` to the client. The key is read in `src/components/ContactUs.jsx` as `import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY`.

## Project structure
```
root
├─ public/
├─ src/
│  ├─ assets/              # Images and SVGs; exported via src/assets/assets.js
│  ├─ components/          # UI sections and shared components
│  │  ├─ Navbar.jsx        # Sticky nav with theme toggle and mobile menu
│  │  ├─ Hero.jsx          # Headline, subcopy, hero image
│  │  ├─ TrustedBy.jsx     # Company logos row
│  │  ├─ Services.jsx      # Service grid using ServiceCard
│  │  ├─ ServiceCard.jsx   # Gradient hover trail and motion effects
│  │  ├─ OurWork.jsx       # Portfolio grid
│  │  ├─ Teams.jsx         # Team members grid
│  │  ├─ ContactUs.jsx     # Web3Forms-powered contact form + toasts
│  │  ├─ Footer.jsx        # Footer with links and newsletter input
│  │  ├─ Title.jsx         # Section title/subtitle helper
│  │  └─ ThemeToggleButton.jsx # Manages dark/light mode + persistence
│  ├─ App.jsx              # Section composition + custom cursor logic
│  ├─ index.css            # Tailwind v4 directives, theme color, base styles
│  └─ main.jsx             # React root
├─ index.html              # Vite entry
├─ vite.config.js          # Vite + React plugin config
├─ eslint.config.js        # ESLint setup
└─ package.json            # Scripts and dependencies
```

## Notable implementation details
- **Dark mode**: `ThemeToggleButton` sets/removes the `dark` class on `document.documentElement` and stores the preference in `localStorage`.
- **Custom cursor**: Implemented in `App.jsx` using refs and `requestAnimationFrame` to move a dot and an outline.
- **Animations**: Components use `motion` to fade/slide in on initial render or when in view (`viewport={{ once: true }}`).
- **Contact form**: Submits with `fetch` to Web3Forms. Success/error states are surfaced via `react-hot-toast`.

## Scripts
- `npm run dev`: Start dev server
- `npm run build`: Build for production
- `npm run preview`: Preview the production build
- `npm run lint`: Lint source files

## Styling (Tailwind v4)
- Tailwind is enabled via `@import "tailwindcss";` in `src/index.css`.
- The project defines a primary brand color using the Tailwind v4 `@theme` block:
  ```css
  @theme {
    --color-primary: #5044e5;
  }
  ```
- A `dark` custom variant is declared for convenience:
  ```css
  @custom-variant dark (&:where(.dark *));
  ```

## Deployment
- Any static host (e.g., Netlify, Vercel, GitHub Pages) can serve the `dist/` output.
- Ensure `VITE_WEB3_FORMS_ACCESS_KEY` is configured in your hosting provider’s environment variables for the contact form to work in production.

## Accessibility notes
- The app hides the system cursor (`* { cursor: none; }`) to show the custom cursor. If you need the default cursor back for accessibility/debugging, remove or override that rule in `src/index.css`.

## Troubleshooting
- If the contact form fails, verify that `VITE_WEB3_FORMS_ACCESS_KEY` is set and valid.
- Node.js version mismatches can cause Vite to error; use Node 18+.
- If dark mode does not persist, clear `localStorage` for the site and retry.

## License
This project does not specify a license. If you intend to distribute it, add a `LICENSE` file and update this section accordingly.
