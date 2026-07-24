# Phase 1: 3D Foundation & Scene Setup - Context

**Gathered:** 2026-07-12
**Status:** Ready for planning
**Phase:** 01-foundation
**Requirements:** FND-01, FND-02, FND-03, FND-04, FND-05, FND-06, PER-04, ACC-03

---

## Phase Boundary

**Goal:** Establish React Three Fiber foundation, performance guardrails, and accessibility fallback — no visual 3D yet, just the engine running.

**Scope (from ROADMAP.md):**
- Install R3F + drei, add Canvas wrapper in hero, basic scene (empty group)
- Add WebGL support detection + reduced-motion gate; static fallback component
- Configure Lighthouse CI + bundle size budget; add PER-04 RAF pause logic

**Out of Scope (deferred to later phases):**
- Any visual 3D content (particles, shaders, geometry) — Phase 2
- Scroll-driven camera transitions — Phase 3
- Project card 3D effects — Phase 4
- Full Lighthouse audit & accessibility pass — Phase 5

---

## Implementation Decisions

### 1. React Three Fiber + Drei (Locked)
**Decision:** Use `@react-three/fiber` and `@react-three/drei` over raw Three.js.
**Rationale:** Declarative React integration, built-in Suspense/ErrorBoundary support, tree-shaking, ecosystem alignment.
**Source:** PROJECT.md Key Decisions table

### 2. Bundle Size Guard: <200KB gzipped for 3D deps (Locked)
**Decision:** Enforce hard limit: `@react-three/fiber` + `@react-three/drei` + `three` < 200KB gzipped combined. Total JS < 500KB gzipped.
**Rationale:** Mobile 3G performance, Lighthouse CI budget, differentiation from heavy 3D sites.
**Source:** REQUIREMENTS.md FND-04, PER-04

### 3. WebGL Detection Strategy (Locked)
**Decision:** Client-side detection via offscreen canvas `getContext('webgl2')` → `getContext('webgl')`. Runs once on mount. SSR returns unsupported.
**Rationale:** Reliable, no UA sniffing, handles context loss/restore events.
**Implementation:** `useWebGLSupport()` hook in `src/hooks/`

### 4. Reduced-Motion Gate (Locked)
**Decision:** Global `prefers-reduced-motion: reduce` media query via `matchMedia`. React hook with change listener. Combined with WebGL check: `shouldRender3D = webglSupported && !prefersReducedMotion`.
**Rationale:** WCAG AA requirement (ACC-02, FND-06). Single kill switch for all 3D animation.
**Implementation:** `useReducedMotion()` hook + `ThreeDContext` provider

### 5. Static Fallback: Terminal Panel (Locked)
**Decision:** Reuse existing `.terminal-panel` from Hero as the 3D fallback. Extract to `TerminalPanel` component. Renders identically when 3D disabled.
**Rationale:** Preserves v1.0 content (ACC-05), zero layout shift (PER-03), no new design work.
**Implementation:** `Fallback3D` component wraps `TerminalPanel` in Canvas-sized container

### 6. Hydration Strategy: Server Renders Fallback (Locked)
**Decision:** SSR renders `Fallback3D` (TerminalPanel). Client hydrates, runs detection, conditionally mounts Canvas. No hydration mismatch.
**Rationale:** Avoids flash of 3D then fallback, works on static hosting (Vercel/Netlify), SEO-friendly.

### 7. Lighthouse CI Budgets (Locked)
**Decision:** Configure Lighthouse CI with budgets: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90, SEO ≥ 90. Resource budgets: third-party ≤ 200KB, total ≤ 500KB.
**Rationale:** Automated gate on every PR. Matches PER-01, PER-04.
**Config:** `lighthouserc.json` + `.github/workflows/lighthouse.yml`

### 8. RAF Pause Logic (Locked)
**Decision:** `PerformanceGuard` component wraps scene. Uses `useFrame` early-return when `document.hidden` or `prefersReducedMotion`. Listens to `visibilitychange` and reduced-motion context.
**Rationale:** Battery/CPU savings on background tabs (PER-04). Respects reduced-motion at runtime.
**Implementation:** `src/components/three/PerformanceGuard.jsx`

### 9. Component Architecture (Locked)
**Decision:** Split components by domain:
- `src/components/three/` — Canvas3D, HeroScene, PerformanceGuard, Fallback3D
- `src/components/hero/` — TerminalPanel
- `src/hooks/` — useWebGLSupport, useReducedMotion
- `src/context/` — ThreeDContext
**Rationale:** Separation of concerns, reusable for Phases 2-4, testable.

### 10. Camera Defaults (Locked)
**Decision:** Default camera: `fov={50}`, `position={[0, 0, 5]}`. Orthographic not needed for hero.
**Rationale:** Works for particle systems and shader geometries at hero scale. Adjustable per Phase 2.

---

## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Core
- `.planning/PROJECT.md` — Full project context, tech stack, constraints, key decisions
- `.planning/REQUIREMENTS.md` — All v1.1 requirements with traceability matrix
- `.planning/ROADMAP.md` — Phase breakdown, plan list, execution order

### Phase 1 Specific
- `.planning/phases/01-foundation/01-01-PLAN.md` — Canvas + Scene setup
- `.planning/phases/01-foundation/01-02-PLAN.md` — Detection + Fallback
- `.planning/phases/01-foundation/01-03-PLAN.md` — Lighthouse CI + Budgets + RAF Pause

### Codebase Patterns
- `src/main.jsx` — Current single-file app structure (to be split)
- `src/styles.css` — Terminal theme, CSS custom properties, responsive breakpoints
- `package.json` — React 19, Vite 7, lucide-react, no testing/CI yet

### External Specs
- React Three Fiber docs: https://docs.pmnd.rs/react-three-fiber
- Drei docs: https://docs.pmnd.rs/drei
- Lighthouse CI: https://github.com/GoogleChrome/lighthouse-ci
- WCAG 2.1 prefers-reduced-motion: https://www.w3.org/TR/css-mediaqueries-5/#prefers-reduced-motion

---

## Specific Ideas

- **TerminalPanel extraction** enables exact visual parity between 3D and fallback modes
- **ThreeDContext at Page level** allows future 3D components (scroll stages, project cards) to consume `shouldRender3D` without prop drilling
- **PerformanceGuard** pattern reusable for any R3F scene — Phase 3 scroll stages, Phase 4 project cards
- **Bundle check script** runs post-build, fails CI — enforces budget before Lighthouse runs

---

## Deferred Ideas

| Idea | Reason | Target Phase |
|------|--------|--------------|
| WebGPU detection | Browser support immature | v2 (ADV-01) |
| Progressive 3D enhancement (load R3F on interaction) | Complexity vs budget gain | Phase 5 optimization |
| Custom shader fallback (CSS-based) | Terminal panel sufficient | Not needed |
| Automated visual regression | Phase 5 scope | Phase 5 |

---

## Code Context

### Reusable Assets
- **TerminalPanel** (to be extracted from `src/main.jsx:229-255`) — static terminal UI, used in Hero and Fallback3D
- **Hero layout CSS** (`.hero`, `.hero-copy`, `.terminal-panel`) — already responsive, grid-based
- **Color palette** (CSS vars: `--green`, `--cyan`, `--pink`, `--amber`) — brand-aligned for future shaders

### Integration Points
- `App` component (lines 90-106) — hash routing, page rendering — wrap with `ThreeDProvider`
- `Hero` component (lines 202-257) — inject `Canvas3D` as background layer
- `matrix-grid` background (CSS) — may conflict with Canvas z-index; Canvas at `z-index: -1`, matrix-grid at `z-index: -1` with `opacity: 0.75`

### Known Constraints
- Single-file `main.jsx` (429 lines) — needs component extraction for maintainability
- No test setup — Vitest + RTL to be added Phase 5
- No CI/CD — GitHub Actions workflow created in Plan 01-03
- Font loading: Inter + JetBrains Mono via system fallback — consider self-hosting Phase 5

---

*Phase: 01-foundation | Context gathered: 2026-07-12*