/**
 * Smooth scroll — importar apenas em <script> client-side (nunca no frontmatter).
 * Lenis fica fora do createMotion() porque não é uma timeline GSAP, mas respeita
 * a mesma regra inegociável de prefers-reduced-motion: com reducedMotion=true,
 * não instancia nada e o scroll nativo cai no scroll-behavior: auto já forçado
 * em global.css.
 *
 * Sincronizado ao ticker do GSAP (padrão oficial Lenis + ScrollTrigger) para que
 * o scrub do StepTimeline e os reveals ScrollTrigger.create(...) continuem
 * acompanhando o scroll sem dessincronia.
 */
import Lenis from 'lenis';
import { gsap, ScrollTrigger, BREAKPOINTS } from './gsap';

let lenis: Lenis | null = null;

function start() {
  if (lenis) return;

  lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function stop() {
  lenis?.destroy();
  lenis = null;
}

export function initSmoothScroll() {
  const reducedMotion = window.matchMedia(BREAKPOINTS.reducedMotion);

  if (!reducedMotion.matches) start();

  reducedMotion.addEventListener('change', (e) => {
    if (e.matches) stop();
    else start();
  });
}
