/**
 * Hover text-flip — importar apenas em <script> client-side (nunca no frontmatter).
 * Split por char (ref. Osmo Button 004): calcula --index/--signed-index/--max-index
 * por char, que o CSS (@layer components em global.css) usa pra escalonar o flip
 * no hover/focus-visible. Com reducedMotion=true, nem faz o split — a camada hover
 * já fica oculta por padrão via CSS (:not(:has(.hover-text__split-char))).
 */
import { createMotion, SplitText } from './gsap';

export function initHoverText() {
  createMotion(undefined, (ctx) => {
    if (ctx.reducedMotion) return;

    const labels = document.querySelectorAll<HTMLElement>('[data-hover-text-el]');
    const splits = Array.from(labels).map((label) => {
      const split = SplitText.create(label, {
        type: 'chars',
        tag: 'span',
        charsClass: 'hover-text__split-char',
      });

      const chars = split.chars;
      const center = (chars.length - 1) / 2;
      const maxIndex = Math.floor(center);
      label.style.setProperty('--max-index', String(maxIndex));

      chars.forEach((char, index) => {
        const distance = Math.floor(Math.abs(index - center));
        const signedIndex = index < center ? distance : index > center ? -distance : 0;
        (char as HTMLElement).style.setProperty('--index', String(distance));
        (char as HTMLElement).style.setProperty('--signed-index', String(signedIndex));
      });

      return split;
    });

    return () => splits.forEach((split) => split.revert());
  });
}
