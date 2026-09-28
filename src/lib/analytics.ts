/**
 * OpenAnalytics — eventos de conversão.
 *
 * O tracker (`oa.js`, carregado em BaseLayout) já conta pageviews e os elementos
 * marcados com `data-oa-event`. Aqui ficam só os eventos que dependem de href ou de
 * resultado de fetch, onde marcar cada elemento espalharia a regra por dezenas de CTAs.
 */

type OA = { track: (name: string, props?: Record<string, string>) => void };

export function track(name: string, props?: Record<string, string>) {
  (window as unknown as { oa?: OA }).oa?.track(name, props);
}

/** header | footer | page — onde o CTA estava; a página já vem na pageview. */
function ctaLocation(el: Element) {
  if (el.closest('header')) return 'header';
  if (el.closest('footer')) return 'footer';
  return 'page';
}

/**
 * Um listener delegado para todo link de /donate e /volunteer (com ou sem /es),
 * porque a maioria desses hrefs chega por props de componentes reutilizados.
 */
export function initCtaTracking() {
  document.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest?.('a[href]');
    if (!(link instanceof HTMLAnchorElement) || link.origin !== location.origin) return;

    const path = link.pathname.replace(/^\/es(?=\/)/, '').replace(/\/$/, '');
    const name = path === '/donate' ? 'donate_click' : path === '/volunteer' ? 'volunteer_click' : null;
    if (!name) return;

    track(name, { location: ctaLocation(link), lang: document.documentElement.lang });
  });
}
