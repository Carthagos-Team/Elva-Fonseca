/** Últimas N palavras com nowrap — evita órfãs sem colar palavras via nbsp. */
export function noOrphan(text: string, count = 3): { head: string; tail: string } {
  const parts = text.trim().split(/\s+/);
  if (parts.length <= count) return { head: '', tail: text };
  return {
    head: `${parts.slice(0, -count).join(' ')} `,
    tail: parts.slice(-count).join(' '),
  };
}
