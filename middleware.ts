// Vercel Edge Middleware — só existe nesta plataforma (não é adapter/SSR do Astro; o build
// continua `output: 'static'`, ver astro.config.mjs). Roda antes dos arquivos estáticos e só
// decide o idioma da 1ª visita na home por IP; o switcher manual (LanguageSwitcher.astro) e o
// dicionário (src/i18n/) continuam funcionando normalmente em qualquer hospedagem sem isto.
//
// Nunca redireciona bots (evita risco de indexação — ver docs/DESIGN_TOKENS.md / plano de i18n) e
// nunca roda de novo depois que o visitante já escolheu um idioma manualmente (cookie `ef-lang`).

const SPANISH_SPEAKING_COUNTRIES = new Set([
  'ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO',
  'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR', 'GQ',
]);

const BOT_USER_AGENT = /bot|crawl|spider|slurp|googlebot|bingbot|yandex|baiduspider|duckduckbot|facebookexternalhit/i;

export const config = {
  matcher: '/',
};

export default function middleware(request: Request): Response | undefined {
  const userAgent = request.headers.get('user-agent') ?? '';
  if (BOT_USER_AGENT.test(userAgent)) return undefined;

  const cookieHeader = request.headers.get('cookie') ?? '';
  const hasManualChoice = cookieHeader
    .split(';')
    .some((c) => c.trim().startsWith('ef-lang='));
  if (hasManualChoice) return undefined;

  const country = request.headers.get('x-vercel-ip-country') ?? '';
  if (!SPANISH_SPEAKING_COUNTRIES.has(country)) return undefined;

  const url = new URL(request.url);
  return Response.redirect(new URL('/es/', url), 307);
}
