import { defaultLang, type Lang } from '../i18n/utils';

export type ThankYouSource = 'contact' | 'volunteer';

/** Absolute thank-you URL for Web3Forms redirect (must be same-origin on free tier). */
export function getWeb3FormsThankYouUrl(
  lang: Lang,
  pageUrl: URL,
  source: ThankYouSource = 'contact',
): string {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const path =
    source === 'volunteer' ? `${prefix}/thank-you/volunteer` : `${prefix}/thank-you`;
  return new URL(path, pageUrl.origin).toString();
}
