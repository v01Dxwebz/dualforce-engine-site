export const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const modes = {
  reluctance: { name: 'Reluctance EV', detail: 'Electromagnetic assistance prioritised.' },
  otto: { name: 'Otto 4-Stroke', detail: 'Combustion cycle prioritised.' },
  dual: { name: '50:50 DualForce', detail: 'Balanced energy handoff at the shared crank.' },
};
export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
export function setPressed(buttons, active) { buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.mode === active))); }
