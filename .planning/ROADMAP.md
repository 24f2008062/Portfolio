# Roadmap: Sanidhya Portfolio

## Milestones

- 🚧 **v1.1: 3D Dynamic Portfolio Redesign** — Phases 1-5 (in progress)
- 📋 **v1.2: Content & Polish** — Phases 6-7 (planned)
- 📋 **v2.0: Platform Features** — Phases 8+ (planned)

---

## Phases (Continuous Numbering from v1.0)

### Phase 1: 3D Foundation & Scene Setup
**Goal**: Establish React Three Fiber foundation, performance guardrails, and accessibility fallback — no visual 3D yet, just the engine running.
**Depends on**: Nothing (first phase of v1.1)
**Requirements**: FND-01, FND-02, FND-03, FND-04, FND-05, FND-06, PER-04, ACC-03
**Plans**: 3 plans

Plans:
- [ ] 01-01: Install R3F + drei, add Canvas wrapper in hero, basic scene (empty group)
- [ ] 01-02: Add WebGL support detection + reduced-motion gate; static fallback component
- [ ] 01-03: Configure Lighthouse CI + bundle size budget; add PER-04 RAF pause logic

---

### Phase 2: Hero 3D Experience & Shaders
**Goal**: Deliver the "wow" — interactive hero background with custom shader, entry animation, and preserved terminal panel.
**Depends on**: Phase 1
**Requirements**: HRO-01, HRO-02, HRO-03, HRO-04, SHD-01, SHD-02, PER-05
**Plans**: 4 plans

Plans:
- [ ] 02-01: Implement particle system / geometry hero (Points or InstancedMesh)
- [ ] 02-02: Add mouse/tilt interaction (useFrame + pointer state)
- [ ] 02-03: Build custom fragment shader (noise + brand palette) + scroll/time uniforms
- [ ] 02-04: Staggered entry animation for hero copy; integrate terminal panel overlay

---

### Phase 3: Scroll-Driven Section Transitions
**Goal**: Each section (About, Work, Journey, Contact) gets a distinct 3D "stage" with smooth camera transitions driven by scroll.
**Depends on**: Phase 2
**Requirements**: TRS-01, TRS-02, TRS-03, TRS-04
**Plans**: 3 plans

Plans:
- [ ] 03-01: Scroll provider (useScroll from drei or custom IntersectionObserver)
- [ ] 03-02: Define 4 camera positions/stages; implement smooth camera lerp on scroll
- [ ] 03-03: Per-section shader uniform updates (color shift, particle behavior); reduced-motion bypass

---

### Phase 4: Project Cards 3D Enhancement
**Goal**: Elevate project cards with 3D depth, tilt, and shader backgrounds while preserving all data.
**Depends on**: Phase 3 (or can run parallel after Phase 2)
**Requirements**: PRJ-01, PRJ-02, PRJ-03, PRJ-04
**Plans**: 3 plans

Plans:
- [ ] 04-01: Wrap project cards in R3F `<Html>` or CSS 3D transform with perspective
- [ ] 04-02: Add cursor-follow tilt (spring physics) + depth layer separation
- [ ] 04-03: Shader background for cards (subtle noise/gradient); verify all content renders

---

### Phase 5: Performance Audit, Accessibility & Ship
**Goal**: Validate all budgets, run full a11y audit, fix regressions, ship v1.1.
**Depends on**: Phase 4
**Requirements**: PER-01, PER-02, PER-03, PER-04, PER-05, ACC-01, ACC-02, ACC-03, ACC-04, ACC-05, SHD-03
**Plans**: 4 plans

Plans:
- [ ] 05-01: Lighthouse CI run (local + CI); fix any <90 scores
- [ ] 05-02: 3G throttle FCP/LCP optimization (code-split R3F, defer non-critical)
- [ ] 05-03: Full a11y audit (axe, manual keyboard, screen reader NVDA/VoiceOver)
- [ ] 05-04: Visual regression check (Chromatic or manual); tag release v1.1

---

## Progress Table

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/3 | Not started | — |
| 2. Hero 3D | 0/4 | Not started | — |
| 3. Scroll Transitions | 0/3 | Not started | — |
| 4. Project Cards 3D | 0/3 | Not started | — |
| 5. Audit & Ship | 0/4 | Not started | — |

---

## Execution Order

Phases execute sequentially: 1 → 2 → 3 → 4 → 5

Continuous phase numbering from v1.0 (v1.0 had Phases 1-4, so v1.1 continues at Phase 5? Actually this is a new milestone, so we start fresh at Phase 1 for v1.1 but roadmap numbering continues).

**Note**: Phase numbers in plan files use zero-padded format: `01-01-PLAN.md`, `02-03-PLAN.md`, etc.