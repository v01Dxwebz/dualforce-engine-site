# DUALFORCE Vector-R static rebuild

A static, no-build concept site for Vector-R: a 348cc Inline-2 with a fixed full-viewport Three.js canvas behind a ten-scene S1–S10 scroll sequence. The homepage actually uses Lenis smooth scroll plus GSAP ScrollTrigger with scrub and per-scene state updates. The dedicated engine lab and homepage lab use the same shared `EngineModel` scene/state architecture.

## Runtime behavior

`assets/js/engine-model.js` builds named groups for crankcase, crankshaft, connecting rods, pistons (rings, teeth, crown), cylinder liners, stator rings/coils, cylinder head/valves, and coolant jacket. Slider-crank motion uses bore 62 mm, stroke 57.6 mm, r = 28.8 mm, and a 100.8 mm rod-length placeholder; cylinder 2 is offset by 270°. Shared state is `rpm`, `playing`, `slowMo`, `mode`, `exploded`, `selectedPart`, and `crankAngleDeg`.

The engine lab RPM slider is exactly 600–8500 RPM and defaults to 3200 RPM. Its readout updates live. It includes OrbitControls (drag orbit, wheel zoom, double-click reset), canvas click/tap explode toggle, exact mode labels and legend, selected-part info, Play/Pause, Slow-mo, Guided Tour Back/Next, per-cylinder Intake/Compression/Power/Exhaust stroke labels, part selection with dimmed named groups, and Reassemble. WebGL fallback and `prefers-reduced-motion` behavior are included.

## Approved target vocabulary

Vector-R; 348cc Inline-2; 46.5 bhp target; 32.0 Nm at 0 RPM target; 1,980 N per piston target; 3,960 N twin target; 0.50 mm design gap; 400 × 375 × 350 mm envelope; 225 × 138 × 114 mm stator dimensions; seed ask Rs 9.6 Cr; gross profit per bike about Rs 1,29,800; Seed payback (gross profit basis) about 740 bikes; economics footnote; year-1 plan; proof-plan and risk placeholders. Exact modes: Reluctance EV, Otto 4-Stroke, 50:50 DualForce.

Placeholders: design targets, rod length, force/output/economics proof, thermal/NVH evidence, durability evidence, and the four risk mitigations/tests remain placeholders until validated.

## Run locally

```bash
python3 -m http.server 4173
# open http://127.0.0.1:4173/
```
