import { defaultLang, type Lang } from '../i18n/utils';

/** Absolute thank-you URL for Web3Forms redirect (must be same-origin on free tier). */
export function getWeb3FormsThankYouUrl(lang: Lang, pageUrl: URL): string {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return new URL(`${prefix}/thank-you`, pageUrl.origin).toString();
}
