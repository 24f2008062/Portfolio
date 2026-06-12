# 🌐 Sanidhya Srivastav — Portfolio Website

[![React Version](https://img.shields.io/badge/react-v19.0.0-blue.svg?logo=react&logoColor=white&color=61dafb)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/vite-v7.0.0-purple.svg?logo=vite&logoColor=white&color=646cff)](https://vite.dev/)
[![Style](https://img.shields.io/badge/styling-Vanilla_CSS-orange.svg?logo=css3&logoColor=white&color=ff3f53)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

A highly polished, design-led, retro-futuristic developer portfolio website. Styled with a high-fidelity cyberpunk terminal aesthetic, the site showcases active projects, academic credentials, and software engineering capabilities.

> [!NOTE]  
> The entire portfolio is built as a highly optimized Single Page Application (SPA) with native hash routing (`#about`, `#work`, `#journey`, `#contact`), smooth animations, and clean components.

---

## ✨ Key Features & Aesthetics

### 🔴 Cyberpunk & Monospace Styling
*   **Vibrant Color Palette**: Sleek pitch-black layout accented with deep glow indicators (neon red, bright cyan, neon pink, and amber).
*   **Ambient Glows**: Soft floating background lights created through advanced CSS radial gradients.
*   **3D Perspective Horizon**: An interactive, perspective-warped retro matrix grid (`.matrix-grid`) styled using CSS 3D transforms (`perspective` & `rotateX`).

### 💻 Interactive Developer Terminal
*   **Prompt Simulations**: Mimics developer logs and execution lines (`$ whoami`, `$ current_mode`, `education --active`).
*   **Typing Cursors**: Simulated command entries featuring infinite blink selectors.

### ⚡ Smooth Micro-Interactions
*   **Ticker Marquee**: An auto-scrolling metric track summarizing key credentials, pausing smoothly on user hover.
*   **Swapping Page Transitions**: Sleek fade-in and slide-up transition animations (`pageIn`) applied instantly upon route changes.
*   **Opposite Alignment Timelines**: Education and experience records showing clear dual-column details with titles left-aligned and dates right-aligned.

---

## 🛠️ Technology Stack

| Technology / Library | Purpose |
| :--- | :--- |
| **React 19** | Modular UI composition and view state management |
| **Vite** | Hyper-fast hot-reloading (HMR) bundler and client development server |
| **Vanilla CSS** | Maximum control over layout grids, ambient glows, keyframe animations, and styling variables |
| **Lucide React** | Premium vector-based iconography |

---

## 📂 Project Layout

```bash
├── dist/                # Production build directory (generated on build)
├── public/              # Static assets (favicon, resume PDF, images)
├── src/
│   ├── main.jsx         # Core app code, static profile data, and page components
│   └── styles.css       # Design tokens, variables, core theme grids, and keyframes
├── index.html           # HTML5 mounting shell and SEO metadata config
├── package.json         # Workspace scripts & dependency package records
└── .gitignore           # Global directory ignore maps for Git control
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (recommended version `v18` or higher).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sanidhya-portfolio.git
   cd sanidhya-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port specified in terminal).

### Building for Production
To bundle the assets into static HTML/CSS/JS files for hosting (e.g., Vercel, Netlify, or GitHub Pages):
```bash
npm run build
```
The compiled assets will be written to the `dist/` directory.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
