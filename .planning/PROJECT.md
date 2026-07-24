# Sanidhya Portfolio

## What This Is

A personal portfolio website for Sanidhya Srivastav — Software Engineer, dual-degree student (B.Tech CSE @ AKTU + B.S. Data Science @ IIT Madras), hackathon leader, and UI/UX workshop mentor. The portfolio showcases two design-forward web applications (VORT-X tournament platform, Algo Master AI learning dashboard), education timeline, and contact channels. Built with React + Vite, currently a clean dark terminal aesthetic.

**This milestone (v1.1)** transforms the static 2D portfolio into a 3D dynamic experience using React Three Fiber, custom shaders, and scroll-driven scene transitions — while preserving all existing content and information architecture.

---

## Core Value

Showcase technical depth, design sensibility, and leadership through a polished, interactive portfolio that feels like a product — not a template.

---

## Business Context

- **Customer**: Hiring managers, engineering leads, potential collaborators
- **Revenue model**: N/A (personal brand / career asset)
- **Success metric**: Interview requests + qualitative feedback on "standout" factor
- **Strategy notes**: Differentiate via 3D craft; signal both engineering rigor and design taste

---

## Requirements

### Validated

- ✓ Responsive single-page portfolio with hash routing (About / Work / Journey / Contact) — v1.0
- ✓ Dark terminal aesthetic with brand accent colors (#ff3f53, #74e7ff, #ff4fd8, #ffcf5a) — v1.0
- ✓ Project cards for VORT-X and Algo Master AI with GitHub links — v1.0
- ✓ Education + Experience timeline (dual-column) — v1.0
- ✓ Contact section with email, GitHub, LinkedIn — v1.0
- ✓ Signal strip marquee with key metrics — v1.0
- ✓ Mobile responsive (<860px, <560px breakpoints) — v1.0

### Active

#### Foundation (Phase 1)

- [ ] **FND-01**: Three.js scene mounted in hero via React Three Fiber (Canvas, Suspense, ErrorBoundary)
- [ ] **FND-02**: Performance guard — scene only mounts on `prefers-reduced-motion: no-preference` + WebGL support check
- [ ] **FND-03**: Static fallback (terminal panel / hero image) when 3D disabled
- [ ] **FND-04**: Bundle size guard — 3D dependencies <200KB gzipped total
- [ ] **FND-05**: Lighthouse CI config with performance budget (≥90)
- [ ] **FND-06**: Accessibility fallback — `prefers-reduced-motion` respected globally

#### Hero 3D Experience (Phase 2)

- [ ] **HRO-01**: Interactive 3D hero background (particle system / geometry / shader)
- [ ] **HRO-02**: Mouse/tilt response (parallax or subtle rotation, ≤15°)
- [ ] **HRO-03**: Staggered entry animation for headline, role, lede, CTAs (600-800ms total)
- [ ] **HRO-04**: Terminal panel content preserved (HTML overlay or integrated 3D text)

#### Shaders (Phase 2)

- [ ] **SHD-01**: Custom fragment shader: animated noise + brand palette cycling
- [ ] **SHD-02**: Shader uniforms driven by scroll progress + time
- [ ] **SHD-03**: Optional post-processing (bloom/vignette) — perf-gated, behind flag

#### Scroll Transitions (Phase 3)

- [ ] **TRS-01**: Scroll triggers 3D camera transitions between section "stages"
- [ ] **TRS-02**: Each section has distinct 3D ambient stage (color shift, particle density, geometry)
- [ ] **TRS-03**: Scroll progress drives shader uniforms (color, displacement, time)
- [ ] **TRS-04**: Reduced-motion = instant section swap, no camera animation

#### Project Cards 3D (Phase 4)

- [ ] **PRJ-01**: Cards gain 3D depth on hover (perspective transform, layer separation in Z)
- [ ] **PRJ-02**: Cursor-follow tilt (max 10-15°) within card bounds, spring return
- [ ] **PRJ-03**: Card background uses lightweight shader (noise/gradient drift)
- [ ] **PRJ-04**: All existing project data preserved (title, type, desc, tags, status, link)

#### Polish & Audit (Phase 5)

- [ ] **PER-01**: Lighthouse Performance ≥90 (local preview build)
- [ ] **PER-02**: FCP <1.5s on 3G throttling
- [ ] **PER-03**: CLS = 0 during 3D canvas mount
- [ ] **PER-04**: 3D dependencies <200KB gzipped; total JS <500KB gzipped
- [ ] **PER-05**: Textures compressed (KTX2/Basis), loaded via `useTexture` + Suspense
- [ ] **ACC-01**: Semantic HTML, heading hierarchy, focus styles preserved
- [ ] **ACC-02**: Reduced-motion disables ALL 3D animation, static fallback shown
- [ ] **ACC-03**: WCAG AA contrast with shader backgrounds (≥4.5:1)
- [ ] **ACC-04**: Keyboard navigation unchanged (header → hero CTAs → sections → footer)
- [ ] **ACC-05**: Screen reader content identical to v1.0 (no 3D-only information)

### Out of Scope

| Feature | Reason |
|---------|--------|
| CMS / blog | Not a content platform — static portfolio is intentional |
| User accounts / auth | Personal site, no user-facing features |
| Real-time collab / multiplayer | Irrelevant to portfolio purpose |
| Backend API / database | Static hosting only (Vercel/Netlify/GitHub Pages) |
| Mobile app / native | Web-first; responsive covers mobile |
| Video backgrounds | Shader-based is lighter and more distinctive |
| Complex physics / simulation | Perf budget; focus on visual polish over simulation |
| Internationalization | Single-language (English) for personal brand |

---

## Context

**Technical Environment:**
- React 19 + Vite 7 (ESM, `type: module`)
- Lucide React for icons
- No current 3D deps — adding `@react-three/fiber`, `@react-three/drei`, `three`
- Hosting target: Vercel / Netlify / GitHub Pages (static)
- Node 20+, npm 10+

**Existing Codebase State:**
- Single `src/main.jsx` with all components (Header, Hero, About, Projects, Experience, Contact)
- `src/styles.css` — 1000+ lines, dark terminal theme, CSS custom properties, responsive grid
- Hash-based routing (`#about`, `#work`, `#journey`, `#contact`)
- `matrix-grid` background (CSS transform perspective)
- Terminal panel in hero (simulated CLI output)
- Signal strip marquee (CSS animation)
- Project cards with hover lift + decorative rotated border
- Dual-column timeline for Journey

**Known Issues / Tech Debt:**
- Single-file component structure — will need splitting for 3D scene components
- No testing setup (Vitest / React Testing Library)
- No CI/CD pipeline
- `lucide-react` icons not tree-shaken optimally (import all, use subset)
- Font loading: Inter + JetBrains Mono via system fallback — could self-host

---

## Constraints

- **Tech stack**: React 19, Vite 7, Three.js via R3F — no framework migration
- **Timeline**: Milestone v1.1 target ~4-6 weeks part-time
- **Budget**: $0 — open source only, static hosting
- **Dependencies**: Minimize bundle impact; tree-shake aggressively
- **Compatibility**: Chrome 90+, Firefox 88+, Safari 15+, Edge 90+ (WebGL2 baseline)
- **Performance**: 60fps on mid-range laptop (M1/M2, Ryzen 5000, Intel 11th gen); 30fps acceptable on low-end
- **Security**: No user input processing; static site — minimal attack surface
- **Accessibility**: WCAG AA minimum; `prefers-reduced-motion` mandatory

---

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| React Three Fiber over raw Three.js | Declarative, React ecosystem, easier Suspense/ErrorBoundary integration, tree-shaking | ✓ Good |
| Single-page hash routing retained | Simple, works on static hosting, preserves existing UX | ✓ Good |
| Shader-based backgrounds over video/GIF | GPU-accelerated, parametric, smaller bundle, brand-aligned | ✓ Good |
| `prefers-reduced-motion` global kill switch | Accessibility first; legal/ethical baseline | ✓ Good |
| Preserve all v1.0 content/components | Validated portfolio content; don't lose signal | ✓ Good |
| Phase 1: Foundation only (no visual 3D yet) | De-risk WebGL integration, perf, a11y before creative work | ✓ Good |
| Lighthouse CI as gate | Objective, automated quality signal | ✓ Good |

---

*Last updated: 2026-07-11 after milestone v1.1 initialization*