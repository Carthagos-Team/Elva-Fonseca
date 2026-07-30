/**
 * Tipografia — pipeline único (ES/EN):
 * - Prose: `protectCopy` (partículas + keepLast) + `text-pretty` no markup.
 * - Display: nunca whitespace-nowrap no título inteiro (overflow em mobile).
 * - nowrap só em átomos (botões, números, nav) ou no `tail` de splitNoOrphan
 *   quando words.length > count (par final, não o bloco todo).
 * - Copy/titleLines e animações (GSAP) ficam fora deste util.
 *
 * keepLast / protectCopy só quebram em espaço normal (U+0020), nunca em NBSP,
 * para a cola de partículas sobreviver.
 */

const PARTICLES = new Set([
  'y',
  'e',
  'o',
  'u',
  'de',
  'del',
  'a',
  'al',
  'la',
  'el',
  'los',
  'las',
  'un',
  'una',
  'and',
  'or',
  'of',
  'to',
  'the',
  'an',
]);

/** Só espaços normais — NBSP permanece dentro do token. */
function wordsBySpace(text: string): string[] {
  return text.trim().split(/ +/).filter(Boolean);
}

/** Cola as últimas `count` palavras com NBSP para evitar linha final com 1 palavra. */
export function keepLast(text: string, count = 2): string {
  const words = wordsBySpace(text);
  if (words.length <= count) return text.trim();
  const head = words.slice(0, -count);
  const tail = words.slice(-count).join('\u00A0');
  return `${head.join(' ')} ${tail}`;
}

/**
 * Prose: cola partículas curtas (y/de/a/…) à palavra seguinte + keepLast no fim.
 * Mesmas palavras — só comportamento de wrap.
 */
export function protectCopy(text: string, lastCount = 2): string {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return '';

  const parts: string[] = [];
  for (let i = 0; i < words.length; i++) {
    const raw = words[i];
    const key = raw.toLowerCase().replace(/^[¿¡«"']+|[.,;:!?»"']+$/g, '');
    if (PARTICLES.has(key) && i < words.length - 1) {
      parts.push(`${raw}\u00A0${words[i + 1]}`);
      i += 1;
    } else {
      parts.push(raw);
    }
  }
  return keepLast(parts.join(' '), lastCount);
}

/**
 * Separa head + tail p/ render com nowrap só no tail quando há mais de `count` palavras.
 * Se words.length <= count: `nowrap: false` — texto simples (evita overflow do título inteiro).
 */
export function splitNoOrphan(
  text: string,
  count = 2,
): { head: string; tail: string; nowrap: boolean } {
  const trimmed = text.trim();
  const words = trimmed.split(/\s+/).filter(Boolean);
  if (words.length <= count) {
    return { head: '', tail: trimmed, nowrap: false };
  }
  return {
    head: `${words.slice(0, -count).join(' ')} `,
    tail: words.slice(-count).join(' '),
    nowrap: true,
  };
}

/** @deprecated Prefer splitNoOrphan — use `nowrap` do retorno antes de aplicar whitespace-nowrap. */
export function noOrphan(text: string, count = 2): { head: string; tail: string } {
  const { head, tail } = splitNoOrphan(text, count);
  return { head, tail };
}
