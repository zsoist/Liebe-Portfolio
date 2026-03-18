# Liebe Portfolio

> Personal portfolio website — **Engineer · AI · Data**
>
> A recruiter-facing technical positioning asset, built with React + TypeScript + Vite and deployed on GitHub Pages.

---

## Table of Contents

1. [The Big Picture](#the-big-picture)
2. [Architecture Overview](#architecture-overview)
3. [Technology Choices & Why](#technology-choices--why)
4. [Project Structure Explained](#project-structure-explained)
5. [How Everything Fits Together](#how-everything-fits-together)
6. [Design System](#design-system)
7. [Component Breakdown](#component-breakdown)
8. [Quick Start](#quick-start)
9. [GitHub Pages Deployment](#github-pages-deployment)
10. [Customization Guide](#customization-guide)
11. [Key Concepts for Learners](#key-concepts-for-learners)
12. [Glossary](#glossary)

---

## The Big Picture

This project is a **single-page portfolio website**. That means:

- There is only **one HTML page** (`index.html`)
- All the "sections" (Hero, About, Projects, Skills, etc.) are parts of that same page
- When you click navigation links, the page **scrolls** to the right section — it doesn't load a new page
- The entire site is **static** — no server, no database, no backend. Just HTML, CSS, and JavaScript files served directly to the browser

### What problem does it solve?

When a recruiter opens this link, they need to understand in **5 seconds**:
- Who this person is
- What they can do
- What evidence supports that
- How to contact them

Every design and code decision serves this goal.

### Why GitHub Pages?

GitHub Pages is a **free hosting service** from GitHub. You push your code to a repository, and GitHub automatically serves it as a website. It's perfect for portfolios because:
- Free forever
- No server to manage
- Deploys automatically when you push code
- Professional URL format: `username.github.io/repo-name`

---

## Architecture Overview

Here's how the pieces connect at a high level:

```
┌─────────────────────────────────────────────────┐
│  Browser loads index.html                       │
│                                                 │
│  index.html includes:                           │
│    → Google Fonts (typography)                   │
│    → Meta tags (SEO, social sharing)             │
│    → <div id="root"></div>  ← React mounts here │
│    → <script src="main.tsx"> ← app entry point  │
│                                                 │
│  main.tsx:                                      │
│    → Imports React                              │
│    → Imports global CSS (index.css)             │
│    → Renders <App /> into #root                 │
│                                                 │
│  App.tsx:                                       │
│    → Imports all section components             │
│    → Renders them in order:                     │
│      <Nav />                                    │
│      <Hero />                                   │
│      <About />                                  │
│      <Projects />                               │
│      <Skills />                                 │
│      <Experience />                             │
│      <Contact />                                │
│      <Footer />                                 │
└─────────────────────────────────────────────────┘
```

### The Build Pipeline

When you run `npm run build`, this is what happens:

```
Source Code (what you write)          Built Output (what the browser gets)
─────────────────────────             ──────────────────────────────────
.tsx files (TypeScript + JSX)    →    .js file (plain JavaScript)
.css files                       →    .css file (optimized)
index.html                       →    index.html (with injected script/css links)
public/ folder                   →    copied as-is to dist/
```

**Vite** is the tool that does this transformation. It:
1. Converts TypeScript → JavaScript (so browsers can understand it)
2. Converts JSX → JavaScript function calls (React's way of writing HTML)
3. Bundles everything into a few optimized files
4. Minifies the code (removes whitespace, shortens variable names)
5. Outputs everything into the `dist/` folder

---

## Technology Choices & Why

### React (library, not a language!)

**What it is:** React is a JavaScript **library** (not a language, not a framework) for building user interfaces. It was created by Facebook/Meta.

**Why we use it:** React lets you break your UI into small, reusable pieces called **components**. Instead of one giant HTML file, you have small files like `Hero.tsx`, `About.tsx`, etc. Each component manages its own content and styles.

**Key React concepts used here:**

| Concept | What it means | Where you see it |
|---------|--------------|-----------------|
| **Components** | Reusable UI building blocks (like LEGO pieces) | Every `.tsx` file in `components/` |
| **JSX** | HTML-like syntax inside JavaScript files | The `return (...)` part of each component |
| **Props** | Data passed from parent to child component | Not heavily used here (simple site) |
| **useState** | A way to store and update data that can change | `Nav.tsx` — tracks scroll position and menu state |
| **useEffect** | Run code when component loads or updates | `Nav.tsx` — adds scroll event listener |

**React is NOT:**
- A programming language (it's written IN JavaScript/TypeScript)
- A framework (it's a library — the difference is that frameworks control the flow, libraries are tools you call)
- Required (you could build this with plain HTML/CSS/JS, but React makes it more organized and maintainable)

### TypeScript

**What it is:** TypeScript is JavaScript with **type checking**. It catches errors before your code runs.

**Why we use it:** When you write `const name: string = "Liebe"`, TypeScript ensures you never accidentally assign a number to `name`. This prevents bugs.

**File extension:** `.tsx` = TypeScript + JSX (React's HTML-like syntax). Regular TypeScript files are `.ts`.

### Vite (pronounced "veet")

**What it is:** A **build tool** that:
- Runs a development server with hot reload (change code → see changes instantly)
- Bundles your code for production (makes it fast for real users)

**Why Vite over other tools:**
- Extremely fast startup (< 1 second)
- Hot Module Replacement (HMR) — updates the page without full reload
- Simple configuration
- Modern and well-maintained

**Config file:** `vite.config.ts` — tells Vite:
- Use the React plugin (to understand JSX)
- Set the base URL for GitHub Pages
- Output built files to `dist/`

### CSS Custom Properties (CSS Variables)

**What it is:** Variables defined in CSS that can be reused everywhere.

**Example:**
```css
:root {
  --color-accent: #2563eb;  /* Define once */
}

.button {
  color: var(--color-accent);  /* Use anywhere */
}
```

**Why:** Change the accent color in ONE place → it updates everywhere. This is our "design system."

### Google Fonts (Inter + JetBrains Mono)

- **Inter:** A clean, professional sans-serif font. Used for all body text and headings. Designed specifically for screens.
- **JetBrains Mono:** A monospace font (every character has the same width). Used for labels, tags, and technical elements. Gives a "technical" feel.

---

## Project Structure Explained

```
Liebe-Portfolio/
│
├── index.html              ← The single HTML page. Entry point for the browser.
│                              Contains meta tags, font imports, and the #root div.
│
├── package.json            ← Project manifest. Lists dependencies and scripts.
│                              Think of it as the project's "ID card."
│
├── vite.config.ts          ← Vite's configuration. Sets base URL and plugins.
│
├── tsconfig.json           ← TypeScript config (main). References the other two.
├── tsconfig.app.json       ← TypeScript config for the app code (src/).
├── tsconfig.node.json      ← TypeScript config for build tools (vite.config.ts).
│
├── .gitignore              ← Tells git which files to NOT track (node_modules, dist).
│
├── .github/
│   └── workflows/
│       └── deploy.yml      ← GitHub Actions workflow. Automates deployment.
│                              Every push to master → build → deploy to Pages.
│
├── public/                 ← Static files copied directly to the build output.
│   ├── favicon.svg         ← The small icon in the browser tab.
│   └── icons.svg           ← SVG sprite (collection of SVG icons in one file).
│
├── src/                    ← All source code lives here.
│   ├── main.tsx            ← JavaScript entry point. Mounts React to #root.
│   ├── App.tsx             ← Root component. Assembles all sections.
│   ├── index.css           ← Global styles + design system (CSS variables).
│   │
│   └── components/         ← Each section of the page is its own component.
│       ├── Nav.tsx          ← Navigation bar (sticky, responsive).
│       ├── Hero.tsx         ← First thing visitors see. Name + headline + CTAs.
│       ├── About.tsx        ← Bio + highlight cards.
│       ├── Projects.tsx     ← Featured project case studies.
│       ├── Skills.tsx       ← Categorized technical capabilities.
│       ├── Experience.tsx   ← Education & work timeline.
│       ├── Contact.tsx      ← Links (LinkedIn, GitHub, Email) + CV download.
│       └── Footer.tsx       ← Copyright line at the bottom.
│
└── dist/                   ← Built output (generated by `npm run build`).
                               This is what gets deployed. NOT in git.
```

### Why this structure?

- **Separation of concerns:** Each component handles one section. Want to change the projects? Open `Projects.tsx`. Done.
- **Scalability:** Adding a new section = create a new component file + add it to `App.tsx`.
- **Maintainability:** Small files are easier to understand and debug.

---

## How Everything Fits Together

### The flow from code to screen:

```
1. You write code in src/
          ↓
2. Vite compiles TypeScript + JSX → JavaScript
          ↓
3. Vite bundles everything → dist/ folder
          ↓
4. GitHub Actions deploys dist/ → GitHub Pages
          ↓
5. User visits the URL → browser downloads HTML, CSS, JS
          ↓
6. React "hydrates" — turns JavaScript into interactive HTML
          ↓
7. User sees the portfolio!
```

### How components render:

```
index.html
  └── #root (empty div)
        └── React mounts App.tsx here
              ├── <Nav />        → Fixed navigation bar
              ├── <main>
              │     ├── <Hero />       → Full-height intro section
              │     ├── <About />      → Two-column bio + cards
              │     ├── <Projects />   → Grid of project cards
              │     ├── <Skills />     → 4-column capability grid
              │     ├── <Experience /> → Timeline layout
              │     └── <Contact />    → Centered CTA section
              └── <Footer />     → Bottom copyright
```

### How styles work:

Each component includes its own styles via `<style>` tags inside the JSX. This is a simple approach that keeps styles co-located with their component. The global design system variables are in `index.css`.

```
index.css (global)
  ├── CSS reset (normalize browser defaults)
  ├── CSS variables (colors, fonts, spacing, shadows)
  ├── Utility classes (.container, .section, .section-title, etc.)
  ├── Animation keyframes
  └── Responsive breakpoints

Component styles (local)
  └── Each .tsx file has a <style> tag with component-specific CSS
      Uses the global CSS variables for consistency
```

---

## Design System

The design system is a set of **design tokens** (values) defined as CSS variables in `index.css`. This ensures visual consistency across the entire site.

### Colors

| Variable | Light Mode | Dark Mode | Used For |
|----------|-----------|-----------|----------|
| `--color-bg` | `#fafafa` | `#0f1117` | Page background |
| `--color-bg-alt` | `#f3f4f6` | `#1a1c25` | Alternate section backgrounds |
| `--color-bg-card` | `#ffffff` | `#1e2029` | Card backgrounds |
| `--color-text` | `#374151` | `#9ca3af` | Body text |
| `--color-text-heading` | `#111827` | `#f3f4f6` | Headings |
| `--color-accent` | `#2563eb` | `#60a5fa` | Links, buttons, highlights |

### Typography Scale

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| Hero name | 48-72px | 800 | The big name |
| `.section-title` | 32px | 700 | Section headings |
| `.section-label` | 12px | 500 | Small uppercase labels |
| Body text | 16px | 400 | Paragraphs |
| `.tag` | 12px | 500 | Skill/tech tags |

### Spacing

| Variable | Value | Usage |
|----------|-------|-------|
| `--section-pad-y` | 96px (64px mobile) | Vertical padding between sections |
| `--section-pad-x` | 24px (20px mobile) | Horizontal content padding |
| `--container-max` | 1080px | Maximum content width |

### Dark Mode

The site automatically adapts to the user's system preference using `@media (prefers-color-scheme: dark)`. No toggle needed — if your OS is in dark mode, the site follows.

---

## Component Breakdown

### Nav.tsx — Navigation

**What it does:** Sticky navigation bar at the top of the page.

**Key behaviors:**
- Starts transparent, gets a background + shadow when you scroll
- Mobile: hamburger menu that expands/collapses
- Links scroll smoothly to each section

**React concepts used:**
- `useState` — tracks `scrolled` (boolean) and `menuOpen` (boolean)
- `useEffect` — adds a scroll event listener when the component mounts
- Conditional CSS classes — `nav--scrolled` applied based on scroll position

### Hero.tsx — Hero Section

**What it does:** The first thing anyone sees. Must communicate identity in 5 seconds.

**Design decisions:**
- Full viewport height (`min-height: 100vh`)
- Name in very large type with tight letter-spacing
- Two CTA buttons: primary (filled) and secondary (outlined)
- Tags at the bottom for quick keyword scanning
- `clamp()` CSS function for fluid font sizing

### Projects.tsx — Featured Projects

**What it does:** Displays project case studies in a card grid.

**Architecture decision:** Project data is stored as a JavaScript array at the top of the file, then rendered using `.map()`. This means adding a project = adding an object to the array. No HTML editing needed.

**Design decisions:**
- First project (flagship) spans full width with an accent border
- Each card has Problem → Approach → Outcome structure (case-study format)
- Tags at the bottom of each card for tech stack scanning

### Skills.tsx — Technical Profile

**What it does:** Categorized list of technical capabilities.

**Why NOT a logo cloud:** Logo clouds (grids of technology logos) look flashy but are hard to scan and don't communicate depth. Categorized lists with descriptive labels are more recruiter-friendly.

### Experience.tsx — Timeline

**What it does:** Education and work history in a vertical timeline.

**Design decisions:**
- Current item has a filled accent-colored dot
- Timeline line connects entries visually
- Cards with hover state for interactivity feel

### Contact.tsx — Call to Action

**What it does:** Final section with contact links and CV download.

**Design decisions:**
- Centered layout for focus
- Icon + text links for LinkedIn, GitHub, Email
- Primary button for CV download

---

## Quick Start

### Prerequisites

- **Node.js** (version 18 or higher) — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) — the package manager

### Commands

```bash
# Install dependencies (downloads all required packages)
npm install

# Start local development server (with hot reload)
npm run dev
# → Opens at http://localhost:5173

# Build for production
npm run build
# → Creates optimized files in dist/

# Preview the production build locally
npm run preview
```

### What each command does:

| Command | What happens |
|---------|-------------|
| `npm install` | Reads `package.json`, downloads React, Vite, TypeScript, etc. into `node_modules/` |
| `npm run dev` | Starts Vite's dev server. Changes to code instantly appear in the browser. |
| `npm run build` | Runs TypeScript checker, then Vite bundles everything → `dist/` folder |
| `npm run preview` | Serves the `dist/` folder locally so you can test the production build |

---

## GitHub Pages Deployment

### Automatic Deployment (recommended)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site every time you push to the `master` branch.

**One-time setup:**

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Push any change to `master` — the workflow runs automatically
5. After ~1 minute, your site is live at: `https://<your-username>.github.io/Liebe-Portfolio/`

**How the workflow works:**

```yaml
# Triggered by: push to master
# Step 1: Check out the code
# Step 2: Set up Node.js 20
# Step 3: npm ci (clean install of dependencies)
# Step 4: npm run build (TypeScript check + Vite build)
# Step 5: Upload dist/ as a "pages artifact"
# Step 6: Deploy the artifact to GitHub Pages
```

### If the repo name changes

If you rename the repository or use a custom domain, update the `base` field in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-new-repo-name/',  // ← must match your repo name
  // ...
})
```

---

## Customization Guide

### Content to Update

Search the codebase for `PLACEHOLDER` to find all items that need real data.

| What to change | File | What to look for |
|---------------|------|-----------------|
| Candidate name | `src/components/Hero.tsx` | "Liebe" text |
| Hero headline & subtitle | `src/components/Hero.tsx` | `hero__headline`, `hero__sub` |
| About section text | `src/components/About.tsx` | `about__text` paragraphs |
| Project details | `src/components/Projects.tsx` | `projects` array at top of file |
| Project GitHub links | `src/components/Projects.tsx` | `github: '#'` entries |
| Skills list | `src/components/Skills.tsx` | `categories` array |
| University names | `src/components/Experience.tsx` | `PLACEHOLDER` markers |
| Year ranges | `src/components/Experience.tsx` | `PLACEHOLDER` markers |
| Work experience | `src/components/Experience.tsx` | Uncomment the template |
| LinkedIn URL | `src/components/Contact.tsx` | `href="#"` on LinkedIn link |
| GitHub URL | `src/components/Contact.tsx` | `href="#"` on GitHub link |
| Email address | `src/components/Contact.tsx` | `placeholder@email.com` |
| CV/Resume PDF | Add file to `public/`, update `Contact.tsx` | CV download button |
| Page title | `index.html` | `<title>` tag |
| Meta description | `index.html` | `<meta name="description">` |
| OG image | Add `public/og-image.png` (1200x630px recommended) | Social sharing preview |

### Adding a New Section

1. Create `src/components/NewSection.tsx`:
```tsx
export default function NewSection() {
  return (
    <section className="new-section section" id="new-section">
      <div className="container">
        <p className="section-label">Label</p>
        <h2 className="section-title">Title</h2>
        {/* Your content */}
      </div>
    </section>
  )
}
```

2. Import and add it in `src/App.tsx`:
```tsx
import NewSection from './components/NewSection'

// Inside the return:
<NewSection />
```

3. Add a nav link in `src/components/Nav.tsx`:
```tsx
{ label: 'New Section', href: '#new-section' },
```

### Changing Colors

Edit the CSS variables in `src/index.css` under `:root` (light mode) and `@media (prefers-color-scheme: dark)` (dark mode).

---

## Key Concepts for Learners

### What is npm?

**npm** (Node Package Manager) manages JavaScript packages (libraries). Think of it as an app store for code.

- `package.json` = your shopping list (what packages you need)
- `node_modules/` = the actual downloaded packages (NOT committed to git — too large)
- `package-lock.json` = exact versions of every package (ensures everyone gets the same versions)
- `npm install` = "download everything on the shopping list"

### What is JSX?

JSX lets you write HTML-like syntax inside JavaScript. React transforms it into function calls.

```tsx
// You write this (JSX):
<h1 className="title">Hello</h1>

// React transforms it to this (JavaScript):
React.createElement('h1', { className: 'title' }, 'Hello')
```

Key differences from HTML:
- `class` → `className` (because `class` is reserved in JavaScript)
- `for` → `htmlFor`
- Self-closing tags are required: `<img />` not `<img>`
- JavaScript expressions go in curly braces: `{variable}`

### What is a Component?

A component is a **function that returns JSX**. That's it.

```tsx
function Greeting() {
  return <h1>Hello, World!</h1>
}
```

Components can:
- Accept **props** (inputs): `function Greeting({ name }) { return <h1>Hello, {name}!</h1> }`
- Have **state** (memory): `const [count, setCount] = useState(0)`
- Have **effects** (side effects): `useEffect(() => { ... }, [])`

### What is "Building" a project?

Browsers don't understand TypeScript or JSX. The "build" step converts your developer-friendly code into browser-friendly code:

```
TypeScript (.tsx) → JavaScript (.js)
Multiple files   → Few bundled files
JSX syntax       → React.createElement() calls
CSS imports      → Linked stylesheets
Source maps      → Debugging references
```

### What is Git and GitHub?

- **Git** = version control system. Tracks every change you make to your code. Like "undo history" on steroids.
- **GitHub** = website that hosts Git repositories (projects). Also provides Pages, Actions, Issues, PRs.
- **Commit** = a snapshot of your code at a point in time
- **Push** = upload your local commits to GitHub
- **Branch** = a parallel version of your code (for working on features without affecting the main code)

### What is GitHub Actions?

GitHub Actions is an **automation system**. The `.github/workflows/deploy.yml` file tells GitHub: "When I push to master, run these steps automatically." In our case: install packages → build → deploy to Pages.

---

## Glossary

| Term | Meaning |
|------|---------|
| **SPA** | Single Page Application — one HTML file, JavaScript handles navigation |
| **SSG** | Static Site Generation — pre-built HTML files (what we have after `build`) |
| **HMR** | Hot Module Replacement — update code without full page refresh |
| **JSX** | JavaScript XML — HTML-like syntax in JavaScript files |
| **TSX** | TypeScript + JSX combined |
| **CSS Variables** | Reusable values in CSS (`--color-accent: blue`) |
| **Responsive** | Design that adapts to different screen sizes |
| **Semantic HTML** | Using meaningful tags (`<nav>`, `<main>`, `<section>`) instead of all `<div>` |
| **Viewport** | The visible area of a web page in the browser |
| **Bundle** | Combined file of all your JavaScript/CSS code |
| **Minification** | Removing whitespace and shortening names to reduce file size |
| **CI/CD** | Continuous Integration/Delivery — automated build + deploy |
| **Media Query** | CSS rule that applies styles based on screen size |
| **rem/px** | Units of measurement in CSS (rem = relative to root font size, px = pixels) |
| **clamp()** | CSS function for responsive values: `clamp(min, preferred, max)` |
| **Lighthouse** | Google's tool for measuring web page quality (performance, accessibility, SEO) |

---

## License

This is a personal portfolio. Feel free to use the structure as a template for your own portfolio.
