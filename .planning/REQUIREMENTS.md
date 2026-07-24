# Requirements: Sanidhya Portfolio — Milestone v1.1

**Defined:** 2026-07-11
**Core Value:** Showcase technical depth, design sensibility, and leadership through a polished, interactive portfolio that feels like a product — not a template.

---

## v1.1 Requirements (Milestone: 3D Dynamic Portfolio Redesign)

### Foundation (Phase 1)

- [ ] **FND-01**: Three.js scene mounted in hero via React Three Fiber (Canvas, Suspense, ErrorBoundary)
- [ ] **FND-02**: Performance guard — scene only mounts on `prefers-reduced-motion: no-preference` + WebGL support check
- [ ] **FND-03**: Static fallback (terminal panel / hero image) when 3D disabled
- [ ] **FND-04**: Bundle size guard — 3D dependencies <200KB gzipped total
- [ ] **FND-05**: Lighthouse CI config with performance budget (≥90)
- [ ] **FND-06**: Accessibility fallback — `prefers-reduced-motion` respected globally

### Hero 3D Experience (Phase 2)

- [ ] **HRO-01**: Interactive 3D hero background (particle system / geometry / shader)
- [ ] **HRO-02**: Mouse/tilt response (parallax or subtle rotation, ≤15°)
- [ ] **HRO-03**: Staggered entry animation for headline, role, lede, CTAs (600-800ms total)
- [ ] **HRO-04**: Terminal panel content preserved (HTML overlay or integrated 3D text)

### Shaders (Phase 2)

- [ ] **SHD-01**: Custom fragment shader: animated noise + brand palette cycling
- [ ] **SHD-02**: Shader uniforms driven by scroll progress + time
- [ ] **SHD-03**: Optional post-processing (bloom/vignette) — perf-gated, behind flag

### Scroll Transitions (Phase 3)

- [ ] **TRS-01**: Scroll triggers 3D camera transitions between section "stages"
- [ ] **TRS-02**: Each section has distinct 3D ambient stage (color shift, particle density, geometry)
- [ ] **TRS-03**: Scroll progress drives shader uniforms (color, displacement, time)
- [ ] **TRS-04**: Reduced-motion = instant section swap, no camera animation

### Project Cards 3D (Phase 4)

- [ ] **PRJ-01**: Cards gain 3D depth on hover (perspective transform, layer separation in Z)
- [ ] **PRJ-02**: Cursor-follow tilt (max 10-15°) within card bounds, spring return
- [ ] **PRJ-03**: Card background uses lightweight shader (noise/gradient drift)
- [ ] **PRJ-04**: All existing project data preserved (title, type, desc, tags, status, link)

### Polish & Audit (Phase 5)

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

---

## v2 Requirements (Future Milestones)

### Advanced 3D & Interaction

- **ADV-01**: WebGPU migration when browser support matures
- **ADV-02**: GPU-driven particle simulation (compute shaders)
- **ADV-03**: Scroll-linked timeline scrubbing in 3D space
- **ADV-04**: Project detail modal with 3D model viewer (glTF)

### Content & Personalization

- **CNT-01**: Blog / writing section (MDX-based)
- **CNT-02**: Dynamic project data from GitHub API (stars, forks, recent activity)
- **CNT-03**: Theme customizer (user-selectable color presets)
- **CNT-04**: Visitor analytics (privacy-friendly, self-hosted)

### Platform & Distribution

- **PLT-01**: PWA installability + offline shell
- **PLT-02**: RSS / JSON Feed for updates
- **PLT-03**: Edge middleware for geo-based content variants

---

## Out of Scope

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

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FND-01 | Phase 1 | Pending |
| FND-02 | Phase 1 | Pending |
| FND-03 | Phase 1 | Pending |
| FND-04 | Phase 1 | Pending |
| FND-05 | Phase 1 | Pending |
| FND-06 | Phase 1 | Pending |
| HRO-01 | Phase 2 | Pending |
| HRO-02 | Phase 2 | Pending |
| HRO-03 | Phase 2 | Pending |
| HRO-04 | Phase 2 | Pending |
| SHD-01 | Phase 2 | Pending |
| SHD-02 | Phase 2 | Pending |
| SHD-03 | Phase 5 | Pending |
| TRS-01 | Phase 3 | Pending |
| TRS-02 | Phase 3 | Pending |
| TRS-03 | Phase 3 | Pending |
| TRS-04 | Phase 3 | Pending |
| PRJ-01 | Phase 4 | Pending |
| PRJ-02 | Phase 4 | Pending |
| PRJ-03 | Phase 4 | Pending |
| PRJ-04 | Phase 4 | Pending |
| PER-01 | Phase 5 | Pending |
| PER-02 | Phase 5 | Pending |
| PER-03 | Phase 5 | Pending |
| PER-04 | Phase 5 | Pending |
| PER-05 | Phase 5 | Pending |
| ACC-01 | Phase 5 | Pending |
| ACC-02 | Phase 5 | Pending |
| ACC-03 | Phase 5 | Pending |
| ACC-04 | Phase 5 | Pending |
| ACC-05 | Phase 5 | Pending |

**Coverage:**
- v1.1 requirements: 26 total
- Mapped to phases: 26
- Unmapped: 0 ✓

---

*Requirements defined: 2026-07-11*
*Last updated: 2026-07-11 after initial definition*