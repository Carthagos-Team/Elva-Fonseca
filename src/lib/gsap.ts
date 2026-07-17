/**
 * GSAP base — importar apenas em <script> client-side (nunca no frontmatter).
 * Todo motion do site passa por createMotion(), que garante:
 *  - ScrollTrigger registrado uma única vez
 *  - branch obrigatório para prefers-reduced-motion
 *  - breakpoints alinhados ao fluid system (1024 = início da faixa desktop)
 *
 * Site é MPA (sem <ClientRouter />): cada navegação recarrega a página,
 * então não há cleanup entre rotas. Se View Transitions entrarem um dia,
 * adicionar revert() em astro:before-swap aqui.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const BREAKPOINTS = {
  desktop: '(min-width: 1024px)',
  mobile: '(max-width: 1023px)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
} as const;

export interface MotionContext {
  /** true quando o usuário pediu menos movimento — sem parallax, sem stagger longo, sem scrub */
  reducedMotion: boolean;
  isDesktop: boolean;
  isMobile: boolean;
}

/**
 * createMotion(scope, (ctx, mm) => { ... })
 * O callback roda para cada combinação de media query e recebe o contexto já resolvido.
 * Com reducedMotion=true, anime apenas estados finais / fades curtos — ou nada.
 */
export function createMotion(
  scope: Element | string | undefined,
  setup: (ctx: MotionContext, mm: gsap.Context) => void,
): gsap.MatchMedia {
  const mm = gsap.matchMedia(scope as Element | string);

  mm.add(
    {
      isDesktop: BREAKPOINTS.desktop,
      isMobile: BREAKPOINTS.mobile,
      reducedMotion: BREAKPOINTS.reducedMotion,
    },
    (context) => {
      const conditions = context.conditions as Record<string, boolean>;
      setup(
        {
          reducedMotion: !!conditions.reducedMotion,
          isDesktop: !!conditions.isDesktop,
          isMobile: !!conditions.isMobile,
        },
        context,
      );
    },
  );

  return mm;
}

export { gsap, ScrollTrigger };
