/** Metadados das fotos de hero (LCP) — dimensões reais dos .webp em public/images. */
export const HERO_IMAGES = {
  home: { src: '/images/hero/home.webp', width: 1600, height: 1066 },
  about: { src: '/images/hero/about.webp', width: 2062, height: 1352 },
  programs: { src: '/images/hero/programs.webp', width: 1399, height: 1600 },
  volunteer: { src: '/images/hero/volunteer.webp', width: 2048, height: 1536 },
  donate: { src: '/images/hero/donate.webp', width: 2400, height: 1600 },
  contact: { src: '/images/contact/hero.webp', width: 1267, height: 1335 },
} as const;

export type HeroImageKey = keyof typeof HERO_IMAGES;

export function getHeroImageMeta(src: string) {
  return Object.values(HERO_IMAGES).find((item) => item.src === src);
}
