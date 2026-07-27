import { en } from './en';
import { es } from './es';

export const defaultLang = 'en' as const;
export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;
export type Dictionary = typeof en;

const dictionaries: Record<Lang, Dictionary> = { en, es };

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

/** Equivalent path in `targetLang` for the current url — used by the switcher and by hreflang tags. */
export function getRouteFromUrl(url: URL, targetLang: Lang): string {
  const lang = getLangFromUrl(url);
  const stripped = lang === defaultLang ? url.pathname : url.pathname.replace(`/${lang}`, '') || '/';
  if (targetLang === defaultLang) return stripped;
  return `/${targetLang}${stripped === '/' ? '' : stripped}`;
}
