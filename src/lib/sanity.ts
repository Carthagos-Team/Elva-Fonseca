import { sanityClient } from 'sanity:client';

/** Cliente somente-leitura para queries GROQ no build (SSG).
 *  Wire de conteúdo real acontece na Fase 4. */
export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]`);
}
